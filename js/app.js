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
    completedLessons: []
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

function isLessonUnlocked(id) {
  const lessons = getAllLessons();
  const index = lessons.findIndex(item => item.id === id);

  // Первый урок всегда открыт
  if (index === 0) {
    return true;
  }

  // Если урок не найден в списке, открываем его (на всякий случай)
  if (index === -1) {
    return true;
  }

  // Проверяем, пройден ли предыдущий урок
  return state.completedLessons.includes(lessons[index - 1].id);
}

function isLessonAvailable(id) {
  return Boolean(window.LESSONS && window.LESSONS[id]) && isLessonUnlocked(id);
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
          Строгий режим урока: 5 сердец. Ошибки уменьшают XP.
          Серия дней считается за прохождение урока.
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

      <button class="btn btn-disabled" data-reset type="button">
        Сбросить прогресс
      </button>
    </div>
  `;
}

function lessonButton(lesson) {
  const exists = Boolean(window.LESSONS && window.LESSONS[lesson.id]);
  const unlocked = isLessonUnlocked(lesson.id);
  const done = state.completedLessons.includes(lesson.id);

  if (!exists) {
    return `<button class="btn btn-disabled" disabled>⏳ ${escapeHtml(lesson.title)}</button>`;
  }

  if (!unlocked) {
    return `<button class="btn btn-disabled" disabled>🔒 ${escapeHtml(lesson.title)}</button>`;
  }

  return `
    <button class="btn ${done ? 'btn-blue' : 'btn-green'}" data-open="${lesson.id}" type="button">
      ${done ? '✅' : '▶️'} ${escapeHtml(lesson.title)}
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
        <div class="stat">❤️ ${lessonState.hearts}</div>
        <div class="stat">Теория ${lessonState.theoryIndex + 1}/${currentLesson.theory.length}</div>
        <button id="exitBtn" class="stat exit" type="button">✖️</button>
      </div>

      <div class="card theory">
        ${item.html}
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
        placeholder="Напиши по-итальянски"
        value="${escapeHtml(lessonState.answer)}"
      >
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
    const label = (!lessonState.feedback.ok && lessonState.hearts <= 0)
      ? 'Сердца закончились'
      : 'Продолжить';

    actionHtml = `
      <button
        id="continueBtn"
        class="btn ${lessonState.feedback.ok ? 'btn-green' : 'btn-red'}"
        type="button"
      >
        ${label}
      </button>
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
        <div class="stat">❤️ ${lessonState.hearts}</div>
        <div class="stat">Задание ${lessonState.exerciseIndex + 1}/${currentLesson.exercises.length}</div>
        <button id="exitBtn" class="stat exit" type="button">✖️</button>
      </div>

      <div class="card">
        <h2>${escapeHtml(ex.question)}</h2>
        ${exerciseBody}
      </div>

      ${feedbackHtml}
      ${actionHtml}
    </div>
  `;
}

function bindLesson() {
  const exitButton = document.getElementById('exitBtn');
  if (exitButton) {
    exitButton.addEventListener('click', confirmExit);
  }

  const nextTheoryButton = document.getElementById('nextTheoryBtn');
  if (nextTheoryButton) {
    nextTheoryButton.addEventListener('click', nextTheory);
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

  const checkButton = document.getElementById('checkBtn');
  if (checkButton) {
    checkButton.addEventListener('click', checkAnswer);
  }

  const continueButton = document.getElementById('continueBtn');
  if (continueButton) {
    continueButton.addEventListener('click', continueAfterFeedback);
  }
}

function openLesson(id) {
  if (!isLessonAvailable(id)) {
    return;
  }

  currentLesson = window.LESSONS[id];

  lessonState = {
    phase: 'theory',
    theoryIndex: 0,
    exerciseIndex: 0,
    hearts: 5,
    mistakes: 0,
    feedback: null,
    answer: '',
    buildIndexes: [],
    currentOptions: []
  };

  view = { name: 'lesson' };
  render();
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

  if (ex.type === 'choice') {
    lessonState.currentOptions = shuffle(ex.options);
  } else {
    lessonState.currentOptions = [];
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
    homeButton.addEventListener('click', goHome);
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
          В строгом режиме 5 ошибок завершают урок.
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

function confirmExit() {
  if (confirm('Выйти из урока? Прогресс этого урока не сохранится.')) {
    goHome();
  }
}

function resetProgress() {
  if (confirm('Точно сбросить весь прогресс?')) {
    state = defaultState();
    saveState();
    render();
  }
}

render();
