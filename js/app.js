const STORAGE_KEY = 'italiano-progress-v1';
const app = document.getElementById('app');

let state = loadState();
let view = { name: 'home' };
let currentLesson = null;
let lessonState = null;

function defaultState() {
  return {
    xp: 0,
    streak: 0,
    lastActiveDate: null,
    completedLessons: [],
    devMode: false
  };
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultState();
    return { ...defaultState(), ...JSON.parse(raw) };
  } catch (error) {
    return defaultState();
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function pad(n) {
  return String(n).padStart(2, '0');
}

function todayISO() {
  const d = new Date();
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

function yesterdayISO() {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

function markActivity() {
  const today = todayISO();

  if (state.lastActiveDate !== today) {
    state.streak = state.lastActiveDate === yesterdayISO() ? state.streak + 1 : 1;
    state.lastActiveDate = today;
  }
}

function getAllLessons() {
  const result = [];

  if (!window.COURSE) {
    return result;
  }

  for (const level of COURSE.levels) {
    for (const unit of level.units) {
      for (const lesson of unit.lessons) {
        result.push(lesson);
      }
    }
  }

  return result;
}

function lessonExists(id) {
  return Boolean(window.LESSONS && window.LESSONS[id]);
}

function findLessonMeta(id) {
  if (!window.COURSE) return null;

  for (const level of COURSE.levels) {
    for (const unit of level.units) {
      for (const lesson of unit.lessons) {
        if (lesson.id === id) {
          return lesson;
        }
      }
    }
  }

  return null;
}

function getPreviousExistingLessonId(id) {
  const lessons = getAllLessons();
  const index = lessons.findIndex(item => item.id === id);

  if (index === -1) {
    return null;
  }

  for (let i = index - 1; i >= 0; i--) {
    if (lessonExists(lessons[i].id)) {
      return lessons[i].id;
    }
  }

  return null;
}

function isLessonUnlocked(id) {
  if (state.devMode) {
    return true;
  }

  const previousId = getPreviousExistingLessonId(id);

  if (!previousId) {
    return true;
  }

  return state.completedLessons.includes(previousId);
}

function isLessonAvailable(id) {
  return lessonExists(id) && isLessonUnlocked(id);
}

function shuffle(array) {
  const result = [...array];

  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }

  return result;
}

function escapeHtml(text) {
  return String(text).replace(/[&<>"']/g, char => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  }[char]));
}

function normalize(text) {
  return String(text || '')
    .toLowerCase()
    .trim()
    .replace(/[.,!?;:«»"']/g, '')
    .replace(/\s+/g, ' ');
}

function gapPlainText(sentence, answer) {
  return String(sentence || '').replace('___', String(answer || ''));
}

function renderGapSentence(sentence, answer) {
  const safeSentence = escapeHtml(sentence || '');
  const replacement = answer
    ? `<span class="gap-filled">${escapeHtml(answer)}</span>`
    : '<span class="gap-blank">___</span>';

  return safeSentence.replace('___', replacement);
}

function renderTableExercise(ex) {
  const headers = ex.headers || [];
  const rows = ex.rows || [];
  const targetRow = Number(ex.targetRow);
  const targetColumn = Number(ex.targetColumn);
  const selected = lessonState.answer || '';

  let html = '<table class="theory-table exercise-table">';

  if (headers.length) {
    html += '<thead><tr>';
    headers.forEach(header => {
      html += `<th>${escapeHtml(header)}</th>`;
    });
    html += '</tr></thead>';
  }

  html += '<tbody>';

  rows.forEach((row, rowIndex) => {
    const cells = Array.isArray(row) ? row : [row];
    html += '<tr>';

    cells.forEach((cell, columnIndex) => {
      const isTarget = rowIndex === targetRow && columnIndex === targetColumn;

      if (isTarget) {
        const value = selected ? escapeHtml(selected) : '___';
        const filledClass = selected ? 'filled' : '';
        html += `<td class="table-target ${filledClass}">${value}</td>`;
      } else {
        html += `<td>${escapeHtml(cell)}</td>`;
      }
    });

    html += '</tr>';
  });

  html += '</tbody></table>';

  return html;
}

// ---- История браузера ----

function pushHistoryLesson(id) {
  try {
    history.pushState({ page: 'lesson', lessonId: id }, '');
  } catch (e) {
    // ignore
  }
}

function goBackToHome() {
  try {
    if (history.state && history.state.page === 'lesson') {
      history.back();
      return;
    }
  } catch (e) {
    // ignore
  }

  goHome();
}

window.addEventListener('popstate', function (event) {
  const st = event.state;

  if (st && st.page === 'lesson' && lessonExists(st.lessonId)) {
    startLesson(st.lessonId, false);
  } else {
    currentLesson = null;
    lessonState = null;
    view = { name: 'home' };
    render();
  }
});

// ---- Экспорт / импорт ----

function exportProgress() {
  const payload = {
    app: 'italiano-app',
    version: 1,
    exportedAt: new Date().toISOString(),
    state: state
  };

  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'italiano-progress-' + todayISO() + '.json';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);

  setTimeout(function () {
    URL.revokeObjectURL(url);
  }, 1000);
}

function importProgress(file) {
  const reader = new FileReader();

  reader.onload = function () {
    try {
      const parsed = JSON.parse(reader.result);
      const incoming = parsed && parsed.state ? parsed.state : parsed;

      if (!incoming || typeof incoming !== 'object') {
        alert('Файл не похож на сохранённый прогресс.');
        return;
      }

      if (!confirm('Загрузить прогресс из файла? Текущий прогресс на этом устройстве будет заменён.')) {
        return;
      }

      state = { ...defaultState(), ...incoming };

      if (!Array.isArray(state.completedLessons)) {
        state.completedLessons = [];
      }
      if (typeof state.xp !== 'number') {
        state.xp = 0;
      }
      if (typeof state.streak !== 'number') {
        state.streak = 0;
      }
      if (typeof state.devMode !== 'boolean') {
        state.devMode = false;
      }

      saveState();
      render();
      alert('Прогресс загружен! 🎉');
    } catch (e) {
      alert('Не удалось прочитать файл. Проверь, что это правильный файл экспорта.');
    }
  };

  reader.readAsText(file);
}

// ---- Теория ----

function contentToHtml(content) {
  if (!content) return '';

  if (typeof content === 'string') {
    return `<p>${escapeHtml(content)}</p>`;
  }

  if (Array.isArray(content)) {
    return `<ul>` + content.map(item => {
      if (typeof item === 'string') {
        return `<li>${escapeHtml(item)}</li>`;
      }

      if (item && item.text) {
        let li = `<li>${escapeHtml(item.text)}`;

        if (item.sub) {
          const subArray = Array.isArray(item.sub) ? item.sub : [item.sub];
          li += `<ul>` + subArray.map(subItem => `<li>${escapeHtml(subItem)}</li>`).join('') + `</ul>`;
        }

        li += `</li>`;
        return li;
      }

      return '';
    }).join('') + `</ul>`;
  }

  return '';
}

function renderTable(table) {
  if (!table) return '';

  const headers = table.headers || [];
  const rows = table.rows || [];

  let html = `<table class="theory-table">`;

  if (headers.length) {
    html += `<thead><tr>`;
    headers.forEach(header => {
      html += `<th>${escapeHtml(header)}</th>`;
    });
    html += `</tr></thead>`;
  }

  html += `<tbody>`;

  rows.forEach(row => {
    const cells = Array.isArray(row) ? row : [row];
    html += `<tr>`;
    cells.forEach(cell => {
      html += `<td>${escapeHtml(cell)}</td>`;
    });
    html += `</tr>`;
  });

  html += `</tbody></table>`;

  return html;
}

function tipToHtml(tip) {
  if (typeof tip === 'string') {
    return `<div class="tip">💡 ${escapeHtml(tip)}</div>`;
  }

  if (tip && tip.html) {
    return `<div class="tip">💡 ${tip.html}</div>`;
  }

  if (tip && tip.text) {
    return `<div class="tip">💡 ${escapeHtml(tip.text)}</div>`;
  }

  return '';
}

function mistakeToHtml(mistake) {
  if (typeof mistake === 'string') {
    return `<div class="warn">⚠️ ${escapeHtml(mistake)}</div>`;
  }

  if (mistake && mistake.html) {
    return `<div class="warn">⚠️ ${mistake.html}</div>`;
  }

  if (mistake && mistake.text) {
    return `<div class="warn">⚠️ ${escapeHtml(mistake.text)}</div>`;
  }

  return '';
}

function exampleToHtml(example) {
  if (typeof example === 'string') {
    return `<li>${escapeHtml(example)}</li>`;
  }

  if (!example) return '';

  const it = example.it || example.italian || example.text || '';
  const ru = example.ru || example.translation || '';
  const note = example.note || '';

  let html = `<li><b>${escapeHtml(it)}</b>`;

  if (ru) {
    html += ` — ${escapeHtml(ru)}`;
  }

  if (note) {
    html += `<br><span class="muted">${escapeHtml(note)}</span>`;
  }

  html += `</li>`;

  return html;
}

function dialogLineToHtml(line) {
  if (typeof line === 'string') {
    return `<p>${escapeHtml(line)}</p>`;
  }

  if (!line) return '';

  const speaker = line.who || line.speaker || '';
  const text = line.text || line.it || line.italian || '';
  const ru = line.ru || line.translation || '';

  let html = `<p>`;

  if (speaker) {
    html += `<b>${escapeHtml(speaker)}:</b> `;
  }

  html += escapeHtml(text);

  if (ru) {
    html += `<br><span class="muted">${escapeHtml(ru)}</span>`;
  }

  html += `</p>`;

  return html;
}

function theoryItemToHtml(item) {
  if (!item) return '';

  if (item.html) {
    return item.html;
  }

  let html = '';

  if (item.title) {
    html += `<h2>${escapeHtml(item.title)}</h2>`;
  }

  if (item.summary) {
    html += `<p><b>${escapeHtml(item.summary)}</b></p>`;
  }

  if (item.rule) {
    html += `<h3>Правило</h3>`;
    html += contentToHtml(item.rule);
  }

  if (item.table) {
    html += renderTable(item.table);
  }

  if (item.tips && item.tips.length) {
    html += item.tips.map(tipToHtml).join('');
  }

  if (item.mistakes && item.mistakes.length) {
    html += item.mistakes.map(mistakeToHtml).join('');
  }

  if (item.examples && item.examples.length) {
    html += `<h3>Примеры</h3>`;
    html += `<ul class="examples">` + item.examples.map(exampleToHtml).join('') + `</ul>`;
  }

  if (item.dialog && item.dialog.length) {
    html += `<h3>Диалог</h3>`;
    html += `<div class="dialog">` + item.dialog.map(dialogLineToHtml).join('') + `</div>`;
  }

  if (item.note) {
    html += `<p class="muted">${escapeHtml(item.note)}</p>`;
  }

  return html;
}

// ---- Рендер ----

function render() {
  if (!app) return;

  if (view.name === 'home') {
    renderHome();
    bindHome();
  } else if (view.name === 'lesson') {
    renderLesson();
    bindLesson();
  } else if (view.name === 'result') {
    renderResult();
    bindResult();
  } else if (view.name === 'failed') {
    renderFailed();
    bindFailed();
  }
}

function renderHome() {
  const lessons = getAllLessons();

  app.innerHTML = `
    <div class="container">
      <div class="topbar">
        <div class="stat">⚡ ${state.xp} XP</div>
        <div class="stat">🔥 ${state.streak} дн.</div>
        <div class="stat">✅ ${state.completedLessons.length}/${lessons.length}</div>
      </div>

      <div class="card">
        <h1>Italiano A0–A2</h1>
        <p>
          Полный каркас курса. Строгий режим урока: 5 сердец.
          Ошибки уменьшают XP. Подсказка стоит 1 сердечко.
        </p>
      </div>

      ${COURSE.levels.map(level => `
        <section class="card">
          <h2>${escapeHtml(level.title)}</h2>

          ${level.units.map(unit => `
            <h3>${escapeHtml(unit.title)}</h3>
            <div class="lesson-list">
              ${unit.lessons.map(lessonButton).join('')}
            </div>
          `).join('')}
        </section>
      `).join('')}

      <div class="card">
        <h3>⚙️ Режим разработчика</h3>
        <p class="muted">${state.devMode ? "Включён: все уроки открыты — удобно тестировать новый контент." : "Выключен: уроки открываются по порядку, как в Duolingo."}</p>
        <button class="btn ${state.devMode ? "btn-red" : "btn-blue"}" data-devmode type="button">
          ${state.devMode ? "Выключить: уроки по порядку" : "Включить: открыть все уроки"}
        </button>
      </div>

      <div class="card">
        <h3>Резервные копии</h3>
        <p class="muted">Сохрани прогресс в файл или загрузи его на другом устройстве.</p>
        <button class="btn btn-blue" data-export type="button">💾 Экспорт прогресса</button>
        <button class="btn btn-green" data-import type="button">📂 Импорт прогресса</button>
        <input id="importFile" type="file" accept="application/json,.json" hidden>
      </div>

      <button class="btn btn-disabled" data-reset type="button">
        Сбросить прогресс
      </button>
    </div>
  `;
}

function lessonButton(lesson) {
  const exists = lessonExists(lesson.id);
  const unlocked = isLessonUnlocked(lesson.id);
  const done = state.completedLessons.includes(lesson.id);
  const isCheckpoint = lesson.type === 'checkpoint';

  const icon = isCheckpoint ? '🎯' : exists ? (done ? '✅' : '▶️') : '⏳';

  if (!exists) {
    return `<button class="btn btn-disabled" disabled>${icon} ${escapeHtml(lesson.title)}</button>`;
  }

  if (!unlocked) {
    return `<button class="btn btn-disabled" disabled>🔒 ${escapeHtml(lesson.title)}</button>`;
  }

  return `
    <button class="btn ${done ? 'btn-blue' : 'btn-green'}" data-open="${lesson.id}" type="button">
      ${icon} ${escapeHtml(lesson.title)}
    </button>
  `;
}

function bindHome() {
  document.querySelectorAll('[data-open]').forEach(button => {
    button.addEventListener('click', () => {
      openLesson(button.dataset.open);
    });
  });

  const resetButton = document.querySelector('[data-reset]');
  if (resetButton) {
    resetButton.addEventListener('click', resetProgress);
  }

  const exportButton = document.querySelector('[data-export]');
  if (exportButton) {
    exportButton.addEventListener('click', exportProgress);
  }

  const importButton = document.querySelector('[data-import]');
  const importFile = document.getElementById('importFile');

  if (importButton && importFile) {
    importButton.addEventListener('click', () => importFile.click());

    importFile.addEventListener('change', event => {
      const file = event.target.files && event.target.files[0];
      if (file) {
        importProgress(file);
      }
      event.target.value = '';
    });
  }

  const devButton = document.querySelector('[data-devmode]');
  if (devButton) {
    devButton.addEventListener('click', toggleDevMode);
  }
}

function toggleDevMode() {
  state.devMode = !state.devMode;
  saveState();
  render();
}

function renderLesson() {
  if (!currentLesson || !lessonState) {
    goHome();
    return;
  }

  if (lessonState.phase === 'theory') {
    renderTheory();
  } else {
    renderExercise();
  }
}

function renderTheory() {
  const item = currentLesson.theory[lessonState.theoryIndex];
  const isLast = lessonState.theoryIndex === currentLesson.theory.length - 1;

  app.innerHTML = `
    <div class="container">
      <div class="topbar">
        <button id="backBtn" class="back-btn" type="button">← Назад</button>
        <div class="stat">❤️ ${lessonState.hearts}</div>
        <div class="stat">Теория ${lessonState.theoryIndex + 1}/${currentLesson.theory.length}</div>
      </div>

      <div class="card theory">
        ${theoryItemToHtml(item)}
      </div>

      <button id="nextTheoryBtn" class="btn btn-green" type="button">
        ${isLast ? 'Перейти к заданиям' : 'Дальше'}
      </button>
    </div>
  `;
}

function renderExercise() {
  const ex = currentLesson.exercises[lessonState.exerciseIndex];
  let exerciseBody = '';

  if (ex.type === 'choice') {
    exerciseBody = `
      <div class="options">
        ${lessonState.currentOptions.map((option, index) => `
          <button
            type="button"
            class="option ${lessonState.answer === option ? 'selected' : ''}"
            data-choice="${index}"
          >
            ${escapeHtml(option)}
          </button>
        `).join('')}
      </div>
    `;
  }

  if (ex.type === 'fill') {
    exerciseBody = `
      <input
        id="fillInput"
        class="input"
        type="text"
        autocomplete="off"
        autocapitalize="off"
        spellcheck="false"
        placeholder="${escapeHtml(ex.placeholder || 'Напиши по-итальянски')}"
        value="${escapeHtml(lessonState.answer)}"
      >
      ${ex.hint ? '' : ''}
    `;
  }

  if (ex.type === 'build') {
    const chips = lessonState.buildIndexes.length
      ? lessonState.buildIndexes.map((wordIndex, position) => `
          <button type="button" class="chip" data-build-remove="${position}">
            ${escapeHtml(ex.words[wordIndex])}
          </button>
        `).join('')
      : '<span class="muted">Нажимай на слова ниже</span>';

    const bank = ex.words.map((word, index) => {
      const used = lessonState.buildIndexes.includes(index);

      return `
        <button
          type="button"
          class="word ${used ? 'used' : ''}"
          data-word="${index}"
          ${used ? 'disabled' : ''}
        >
          ${escapeHtml(word)}
        </button>
      `;
    }).join('');

    exerciseBody = `
      <div class="build-answer">
        ${chips}
      </div>
      <div class="word-bank">
        ${bank}
      </div>
    `;
  }

  if (ex.type === 'gap') {
    exerciseBody = `
      <div class="gap-sentence">
        ${renderGapSentence(ex.sentence, lessonState.answer)}
      </div>
    `;

    if (Array.isArray(ex.options)) {
      exerciseBody += `
        <div class="options">
          ${lessonState.currentOptions.map((option, index) => `
            <button
              type="button"
              class="option ${lessonState.answer === option ? 'selected' : ''}"
              data-choice="${index}"
            >
              ${escapeHtml(option)}
            </button>
          `).join('')}
        </div>
      `;
    } else {
      exerciseBody += `
        <input
          id="fillInput"
          class="input"
          type="text"
          autocomplete="off"
          autocapitalize="off"
          spellcheck="false"
          placeholder="${escapeHtml(ex.placeholder || 'Вставь пропущенное слово')}"
          value="${escapeHtml(lessonState.answer)}"
        >
      `;
    }
  }

  if (ex.type === 'table') {
    exerciseBody = renderTableExercise(ex);

    if (Array.isArray(ex.options)) {
      exerciseBody += `
        <div class="options">
          ${lessonState.currentOptions.map((option, index) => `
            <button
              type="button"
              class="option ${lessonState.answer === option ? 'selected' : ''}"
              data-choice="${index}"
            >
              ${escapeHtml(option)}
            </button>
          `).join('')}
        </div>
      `;
    } else {
      exerciseBody += `
        <input
          id="fillInput"
          class="input"
          type="text"
          autocomplete="off"
          autocapitalize="off"
          spellcheck="false"
          placeholder="${escapeHtml(ex.placeholder || 'Впиши ответ')}"
          value="${escapeHtml(lessonState.answer)}"
        >
      `;
    }
  }

  if (ex.type === 'match') {
    exerciseBody = renderMatchExercise(ex);
  }

  const hintHtml = ex.hint && !lessonState.feedback
    ? `
      <div class="hint-area">
        ${lessonState.hintShown ? `<div class="hint-box">💡 ${escapeHtml(ex.hint)}</div>` : ''}
        <button
          id="hintBtn"
          class="btn-hint"
          type="button"
          ${lessonState.hintShown || lessonState.hearts <= 0 || ex.type === 'match' ? 'disabled' : ''}
        >
          ${lessonState.hintShown ? 'Подсказка использована' : 'Подсказка (-1 ❤️)'}
        </button>
      </div>
    `
    : '';

  const feedbackHtml = lessonState.feedback
    ? `
      <div class="feedback ${lessonState.feedback.ok ? 'good' : 'bad'}">
        ${escapeHtml(lessonState.feedback.text)}
      </div>
    `
    : '';

  const canCheck = canCheckCurrent();

  let actionHtml;

  if (lessonState.feedback) {
    const matchIncomplete = ex.type === 'match' &&
      lessonState.match &&
      Object.keys(lessonState.match.matched).length < ex.pairs.length;

    let label = 'Продолжить';

    if (!lessonState.feedback.ok && lessonState.hearts <= 0) {
      label = 'Сердца закончились';
    } else if (matchIncomplete) {
      label = 'Попробовать снова';
    }

    actionHtml = `
      <button
        id="continueBtn"
        class="btn ${lessonState.feedback.ok ? 'btn-green' : 'btn-red'}"
        type="button"
      >
        ${label}
      </button>
    `;
  } else if (ex.type === 'match') {
    actionHtml = `
      <div class="muted match-help">
        Нажимай сначала элемент слева, затем подходящий вариант справа.
        Ошибка стоит одного сердечка.
      </div>
    `;
  } else {
    actionHtml = `
      <button
        id="checkBtn"
        class="btn btn-green ${canCheck ? '' : 'btn-disabled'}"
        type="button"
        ${canCheck ? '' : 'disabled'}
      >
        Проверить
      </button>
    `;
  }

  app.innerHTML = `
    <div class="container">
      <div class="topbar">
        <button id="backBtn" class="back-btn" type="button">← Назад</button>
        <div class="stat">❤️ ${lessonState.hearts}</div>
        <div class="stat">Задание ${lessonState.exerciseIndex + 1}/${currentLesson.exercises.length}</div>
      </div>

      <div class="card">
        <h2>${escapeHtml(ex.question)}</h2>
        ${hintHtml}
        ${exerciseBody}
      </div>

      ${feedbackHtml}
      ${actionHtml}
    </div>
  `;
}

function renderMatchExercise(ex) {
  const m = lessonState.match;

  const leftHtml = ex.pairs.map(pair => {
    const matched = m.matched[pair.left];
    const selected = m.selectedLeft === pair.left;

    return `
      <button
        type="button"
        class="option match-left ${matched ? 'matched' : ''} ${selected ? 'selected' : ''}"
        data-match-left="${escapeHtml(pair.left)}"
        ${matched ? 'disabled' : ''}
      >
        ${escapeHtml(pair.left)}
      </button>
    `;
  }).join('');

  const rightHtml = m.right.map(right => {
    const used = Object.values(m.matched).includes(right);

    return `
      <button
        type="button"
        class="option match-right ${used ? 'matched' : ''}"
        data-match-right="${escapeHtml(right)}"
        ${used ? 'disabled' : ''}
      >
        ${escapeHtml(right)}
      </button>
    `;
  }).join('');

  return `
    <div class="match-columns">
      <div class="match-col">
        <h3>Слева</h3>
        ${leftHtml}
      </div>
      <div class="match-col">
        <h3>Справа</h3>
        ${rightHtml}
      </div>
    </div>
  `;
}

function bindLesson() {
  const backButton = document.getElementById('backBtn');
  if (backButton) {
    backButton.addEventListener('click', confirmExit);
  }

  const nextTheoryButton = document.getElementById('nextTheoryBtn');
  if (nextTheoryButton) {
    nextTheoryButton.addEventListener('click', nextTheory);
  }

  const hintButton = document.getElementById('hintBtn');
  if (hintButton) {
    hintButton.addEventListener('click', useHint);
  }

  document.querySelectorAll('[data-choice]').forEach(button => {
    button.addEventListener('click', () => {
      chooseOption(lessonState.currentOptions[Number(button.dataset.choice)]);
    });
  });

  const fillInput = document.getElementById('fillInput');
  if (fillInput) {
    fillInput.addEventListener('input', () => {
      lessonState.answer = fillInput.value;

      const checkButton = document.getElementById('checkBtn');
      if (checkButton) {
        const enabled = canCheckCurrent();
        checkButton.disabled = !enabled;
        checkButton.classList.toggle('btn-disabled', !enabled);
      }
    });

    fillInput.addEventListener('keydown', event => {
      if (event.key === 'Enter' && canCheckCurrent()) {
        checkAnswer();
      }
    });
  }

  document.querySelectorAll('[data-word]').forEach(button => {
    button.addEventListener('click', () => {
      addBuildWord(Number(button.dataset.word));
    });
  });

  document.querySelectorAll('[data-build-remove]').forEach(button => {
    button.addEventListener('click', () => {
      removeBuildWord(Number(button.dataset.buildRemove));
    });
  });

  document.querySelectorAll('[data-match-left]').forEach(button => {
    button.addEventListener('click', () => {
      lessonState.match.selectedLeft = button.dataset.matchLeft;
      render();
    });
  });

  document.querySelectorAll('[data-match-right]').forEach(button => {
    button.addEventListener('click', () => {
      handleMatchRight(button.dataset.matchRight);
    });
  });

  const checkButton = document.getElementById('checkBtn');
  if (checkButton) {
    checkButton.addEventListener('click', checkAnswer);
  }

  const continueButton = document.getElementById('continueBtn');
  if (continueButton) {
    continueButton.addEventListener('click', continueAfterFeedback);
  }
}

function handleMatchRight(right) {
  if (!lessonState.match || !lessonState.match.selectedLeft) {
    return;
  }

  const ex = currentLesson.exercises[lessonState.exerciseIndex];
  const selectedLeft = lessonState.match.selectedLeft;
  const pair = ex.pairs.find(item => item.left === selectedLeft);

  if (!pair) {
    lessonState.match.selectedLeft = null;
    render();
    return;
  }

  if (pair.right === right) {
    lessonState.match.matched[selectedLeft] = right;
    lessonState.match.selectedLeft = null;

    if (Object.keys(lessonState.match.matched).length === ex.pairs.length) {
      lessonState.feedback = {
        ok: true,
        text: ex.explain || 'Все пары соединены верно!'
      };
    }
  } else {
    lessonState.hearts = Math.max(0, lessonState.hearts - 1);
    lessonState.mistakes += 1;
    lessonState.match.selectedLeft = null;

    const wrongText = ex.explainWrong || 'Неверная пара. Попробуй ещё раз.';
    const extra = ex.explain ? ` ${ex.explain}` : '';

    lessonState.feedback = {
      ok: false,
      text: (wrongText + extra).trim()
    };
  }

  render();
}

function useHint() {
  if (!currentLesson || !lessonState) return;

  const ex = currentLesson.exercises[lessonState.exerciseIndex];

  if (!ex || !ex.hint || lessonState.hintShown || lessonState.feedback) return;
  if (ex.type === 'match') return;
  if (lessonState.hearts <= 0) return;

  lessonState.hearts = Math.max(0, lessonState.hearts - 1);
  lessonState.mistakes += 1;
  lessonState.hintShown = true;

  if (lessonState.hearts <= 0) {
    view = { name: 'failed' };
  }

  render();
}

function startLesson(id, push) {
  if (!lessonExists(id)) {
    return;
  }

  const data = window.LESSONS[id];
  const meta = findLessonMeta(id);

  currentLesson = {
    ...data,
    title: data.title || (meta && meta.title) || 'Урок',
    xp: data.xp || (meta && meta.xp) || (meta && meta.type === 'checkpoint' ? 50 : 20)
  };

  lessonState = {
    phase: 'theory',
    theoryIndex: 0,
    exerciseIndex: 0,
    hearts: 5,
    mistakes: 0,
    feedback: null,
    answer: '',
    buildIndexes: [],
    currentOptions: [],
    match: null,
    hintShown: false
  };

  view = { name: 'lesson' };

  if (push) {
    pushHistoryLesson(id);
  }

  render();
}

function openLesson(id) {
  if (!isLessonAvailable(id)) {
    return;
  }

  startLesson(id, true);
}

function nextTheory() {
  if (!currentLesson || !lessonState) return;

  if (lessonState.theoryIndex < currentLesson.theory.length - 1) {
    lessonState.theoryIndex += 1;
  } else {
    lessonState.phase = 'exercise';
    loadExercise();
  }

  render();
}

function loadExercise() {
  const ex = currentLesson.exercises[lessonState.exerciseIndex];

  lessonState.feedback = null;
  lessonState.answer = '';
  lessonState.buildIndexes = [];
  lessonState.match = null;
  lessonState.hintShown = false;

  const hasOptions =
    ex.type === 'choice' ||
    (ex.type === 'gap' && Array.isArray(ex.options)) ||
    (ex.type === 'table' && Array.isArray(ex.options));

  if (hasOptions) {
    lessonState.currentOptions = shuffle(ex.options);
  } else {
    lessonState.currentOptions = [];
  }

  if (ex.type === 'match') {
    lessonState.match = {
      right: shuffle(ex.pairs.map(pair => pair.right)),
      matched: {},
      selectedLeft: null
    };
  }
}

function chooseOption(option) {
  lessonState.answer = option;
  render();
}

function addBuildWord(index) {
  lessonState.buildIndexes.push(index);
  render();
}

function removeBuildWord(position) {
  lessonState.buildIndexes.splice(position, 1);
  render();
}

function canCheckCurrent() {
  const ex = currentLesson.exercises[lessonState.exerciseIndex];

  if (!ex) return false;

  if (ex.type === 'choice') {
    return Boolean(lessonState.answer);
  }

  if (ex.type === 'fill') {
    return Boolean(lessonState.answer.trim());
  }

  if (ex.type === 'build') {
    return lessonState.buildIndexes.length > 0;
  }

  if (ex.type === 'gap' || ex.type === 'table') {
    if (Array.isArray(ex.options)) {
      return Boolean(lessonState.answer);
    }

    return Boolean(lessonState.answer.trim());
  }

  return false;
}

function getCurrentUserAnswer() {
  const ex = currentLesson.exercises[lessonState.exerciseIndex];

  if (ex.type === 'build') {
    return lessonState.buildIndexes
      .map(index => ex.words[index])
      .join(' ');
  }

  return lessonState.answer;
}

function checkAnswer() {
  const ex = currentLesson.exercises[lessonState.exerciseIndex];
  const userAnswer = getCurrentUserAnswer();

  let ok = false;

  if (ex.type === 'choice') {
    ok = userAnswer === ex.answer;
  }

  if (ex.type === 'fill') {
    const accepted = ex.accept || [ex.answer];
    ok = accepted.some(item => normalize(item) === normalize(userAnswer));
  }

  if (ex.type === 'build') {
    ok = normalize(userAnswer) === normalize(ex.answer);
  }

  if (ex.type === 'gap') {
    if (Array.isArray(ex.options)) {
      ok = userAnswer === ex.answer;
    } else {
      const accepted = ex.accept || [ex.answer];
      ok = accepted.some(item => normalize(item) === normalize(userAnswer));
    }

    if (ok) {
      lessonState.feedback = {
        ok: true,
        text: ex.explain || `Правильно: ${gapPlainText(ex.sentence, ex.answer)}`
      };
    } else {
      lessonState.hearts = Math.max(0, lessonState.hearts - 1);
      lessonState.mistakes += 1;

      lessonState.feedback = {
        ok: false,
        text: `Правильно: ${gapPlainText(ex.sentence, ex.answer)}. ${ex.explain || ''}`.trim()
      };
    }

    render();
    return;
  }

  if (ex.type === 'table') {
    if (Array.isArray(ex.options)) {
      ok = userAnswer === ex.answer;
    } else {
      const accepted = ex.accept || [ex.answer];
      ok = accepted.some(item => normalize(item) === normalize(userAnswer));
    }

    if (ok) {
      lessonState.feedback = {
        ok: true,
        text: ex.explain || 'Правильно!'
      };
    } else {
      lessonState.hearts = Math.max(0, lessonState.hearts - 1);
      lessonState.mistakes += 1;

      lessonState.feedback = {
        ok: false,
        text: `Правильный ответ: ${ex.answer}. ${ex.explain || ''}`.trim()
      };
    }

    render();
    return;
  }

  if (ok) {
    lessonState.feedback = {
      ok: true,
      text: ex.explain || 'Правильно!'
    };
  } else {
    lessonState.hearts = Math.max(0, lessonState.hearts - 1);
    lessonState.mistakes += 1;

    lessonState.feedback = {
      ok: false,
      text: `Правильный ответ: ${ex.answer}. ${ex.explain || ''}`.trim()
    };
  }

  render();
}

function continueAfterFeedback() {
  if (!lessonState.feedback) return;

  if (!lessonState.feedback.ok && lessonState.hearts <= 0) {
    view = { name: 'failed' };
    render();
    return;
  }

  const ex = currentLesson.exercises[lessonState.exerciseIndex];

  if (ex.type === 'match' && lessonState.match) {
    const completed = Object.keys(lessonState.match.matched).length === ex.pairs.length;

    if (!lessonState.feedback.ok && !completed) {
      lessonState.feedback = null;
      render();
      return;
    }
  }

  if (lessonState.exerciseIndex + 1 < currentLesson.exercises.length) {
    lessonState.exerciseIndex += 1;
    loadExercise();
  } else {
    completeLesson();
  }

  render();
}

function completeLesson() {
  const alreadyCompleted = state.completedLessons.includes(currentLesson.id);

  const baseXp = currentLesson.xp || 20;
  const penalty = lessonState.mistakes * 2;

  let earned = Math.max(5, baseXp - penalty);

  if (lessonState.mistakes === 0) {
    earned += 5;
  }

  if (alreadyCompleted) {
    earned = Math.max(1, Math.floor(earned / 2));
  }

  if (!alreadyCompleted) {
    state.completedLessons.push(currentLesson.id);
  }

  state.xp += earned;
  markActivity();
  saveState();

  view = {
    name: 'result',
    earned,
    perfect: lessonState.mistakes === 0,
    repeated: alreadyCompleted
  };
}

function renderResult() {
  app.innerHTML = `
    <div class="container">
      <div class="card">
        <h1>
          ${view.perfect ? 'Идеально! 🎉' : view.repeated ? 'Повторение завершено' : 'Урок пройден!'}
        </h1>
        <p><b>+${view.earned} XP</b></p>
        <p>Всего XP: ${state.xp}</p>
        <p>Серия: ${state.streak} дн.</p>
        <p>Ошибок за урок: ${lessonState ? lessonState.mistakes : 0}</p>
      </div>

      <button class="btn btn-green" data-home type="button">
        На главную
      </button>

      <button class="btn btn-blue" data-retry type="button">
        Повторить урок
      </button>
    </div>
  `;
}

function bindResult() {
  const homeButton = document.querySelector('[data-home]');
  if (homeButton) {
    homeButton.addEventListener('click', goBackToHome);
  }

  const retryButton = document.querySelector('[data-retry]');
  if (retryButton) {
    retryButton.addEventListener('click', () => {
      openLesson(currentLesson.id);
    });
  }
}

function renderFailed() {
  app.innerHTML = `
    <div class="container">
      <div class="card">
        <h1>Сердца закончились 💔</h1>
        <p>
          В строгом режиме 5 ошибок или использованных подсказок завершают урок.
          Попробуй снова: сначала точность, потом скорость.
        </p>
      </div>

      <button class="btn btn-red" data-retry type="button">
        Попробовать снова
      </button>

      <button class="btn btn-green" data-home type="button">
        На главную
      </button>
    </div>
  `;
}

function bindFailed() {
  const homeButton = document.querySelector('[data-home]');
  if (homeButton) {
    homeButton.addEventListener('click', goHome);
  }

  const retryButton = document.querySelector('[data-retry]');
  if (retryButton) {
    retryButton.addEventListener('click', () => {
      openLesson(currentLesson.id);
    });
  }
}

function goHome() {
  view = { name: 'home' };
  render();
}

function hasLessonProgress() {
  if (!lessonState) return false;

  if (lessonState.phase !== 'exercise') return false;

  if (lessonState.exerciseIndex > 0) return true;
  if (lessonState.feedback) return true;

  return false;
}

function confirmExit() {
  if (!hasLessonProgress()) {
    goBackToHome();
    return;
  }

  if (confirm('Ты уже начал выполнять задания. Если выйдешь, урок начнётся заново: сердца и XP не сохранятся.')) {
    goBackToHome();
  }
}

function resetProgress() {
  if (confirm('Точно сбросить весь прогресс?')) {
    state = defaultState();
    saveState();
    render();
  }
}

try {
  history.replaceState(null, '');
} catch (e) {
  // ignore
}

render();
