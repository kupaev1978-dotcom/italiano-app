window.LESSONS = window.LESSONS || {};

window.LESSONS['a0-u2-l1'] = {
  id: 'a0-u2-l1',
  title: 'Глагол essere: я есть, ты есть',
  level: 'A0',
  xp: 30,
  theory: [
    {
      html: `
        <h2>Глагол Essere: Фундамент всего</h2>
        <p><b>Essere</b> означает «быть», «являться», «находиться». Это неправильный глагол, его формы нужно просто запомнить.</p>
        <ul>
          <li><b>Io sono</b> — Я есть (Я являюсь)</li>
          <li><b>Tu sei</b> — Ты есть</li>
          <li><b>Lui / Lei è</b> — Он / Она есть</li>
          <li><b>Noi siamo</b> — Мы есть</li>
          <li><b>Voi siete</b> — Вы есть</li>
          <li><b>Loro sono</b> — Они есть</li>
        </ul>
        <div class="tip">
          💡 Фишка: Слово <b>sono</b> хитрое. Оно значит и «Я есть», и «Они есть». Итальянцы понимают смысл по контексту. Если ты скажешь "Sono stanco" (Я устал), все поймут, что речь о тебе.
        </div>
      `
    },
    {
      html: `
        <h2>Секрет ударения: È или E?</h2>
        <p>В итальянском есть маленькая буква <b>e</b> и большая проблема для новичка.</p>
        <p><b>e</b> (без ударения) — это союз «И». <br>
           <b>è</b> (с ударением) — это глагол «ЕСТЬ».</p>
        <p>Если ты напишешь <i>Luca e Maria</i>, это «Лука и Мария». <br>
           Если напишешь <i>Luca è Maria</i>, это «Лука есть Мария» (звучит странно!).</p>
        <div class="tip">
          💡 Лайфхак: Всегда ставь графическое ударение на <b>è</b>, когда хочешь сказать «есть». На клавиатуре телефона это можно сделать долгим нажатием на букву «е».
        </div>
      `
    },
    {
      html: `
        <h2>Когда используем Essere?</h2>
        <p>1. Называем себя: <b>Sono Anna</b> (Я Анна).<br>
           2. Говорим о национальности: <b>Sei russo?</b> (Ты русский?).<br>
           3. Описываем состояние: <b>Siamo felici</b> (Мы счастливы).<br>
           4. Говорим, где мы: <b>Sono a casa</b> (Я дома).</p>
      `
    }
  ],
  exercises: [
    {
      type: 'choice',
      question: 'Как сказать "Я есть"?',
      options: ['sono', 'sei', 'siamo', 'sono'],
      answer: 'sono',
      explain: 'Io sono — Я есть.'
    },
    {
      type: 'choice',
      question: 'Выбери правильную форму для "Ты есть"',
      options: ['sono', 'sei', 'è', 'siete'],
      answer: 'sei',
      explain: 'Tu sei — Ты есть.'
    },
    {
      type: 'fill',
      question: 'Вставь глагол: "Lui ___ stanco" (Он устал)',
      answer: 'è',
      accept: ['è', 'e'], // для теста разрешим и простую е, но в теории объяснили разницу
      explain: 'Lui è — Он есть. Помни про ударение!'
    },
    {
      type: 'choice',
      question: 'Как сказать "Мы дома"?',
      options: ['Siamo a casa', 'Siete a casa', 'Sono a casa', 'Sei a casa'],
      answer: 'Siamo a casa',
      explain: 'Noi siamo — Мы есть.'
    },
    {
      type: 'build',
      question: 'Собери фразу: "Они русские"',
      words: ['Loro', 'sono', 'russi'],
      answer: 'Loro sono russi',
      explain: 'Loro sono — Они есть.'
    },
    {
      type: 'choice',
      question: 'Что означает слово "sono" без контекста?',
      options: ['Только "Я есть"', 'Только "Они есть"', 'И "Я есть", и "Они есть"'],
      answer: 'И "Я есть", и "Они есть"',
      explain: 'Форма sono используется и для первого лица единственного числа, и для третьего лица множественного.'
    }
  ]
};
