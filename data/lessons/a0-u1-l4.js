window.LESSONS = window.LESSONS || {};

window.LESSONS['a0-u1-l4'] = {
  id: 'a0-u1-l4',
  title: 'Мини-тест: первые фразы',
  level: 'A0',
  xp: 40,
  theory: [
    {
      html: `
        <h2>Проверь себя! 🎯</h2>
        <p>Это мини-тест по всему, что мы прошли в первом блоке:</p>
        <ul>
          <li>Приветствия и знакомство</li>
          <li>Числа от 0 до 20</li>
          <li>Страны и языки</li>
        </ul>
        <p>Постарайся не ошибаться. У тебя 5 сердечек! ❤️</p>
        <div class="tip">
          💡 Помни: лучше медленно, но правильно.
        </div>
      `
    }
  ],
  exercises: [
    {
      type: 'choice',
      question: 'Как сказать "Добрый день"?',
      options: ['Buonanotte', 'Buongiorno', 'Ciao', 'Arrivederci'],
      answer: 'Buongiorno',
      explain: 'Buongiorno — добрый день.'
    },
    {
      type: 'choice',
      question: 'Какое число означает "quindici"?',
      options: ['5', '12', '15', '20'],
      answer: '15',
      explain: 'quindici — это 15.'
    },
    {
      type: 'choice',
      question: 'Выбери число "8"',
      options: ['otto', 'zero', 'sette', 'nove'],
      answer: 'otto',
      explain: '8 — это otto.'
    },
    {
      type: 'fill',
      question: 'Как спросить "Откуда ты?"',
      answer: 'Di dove sei?',
      accept: ['Di dove sei?', 'di dove sei', 'Di dove sei', 'di dove sei?'],
      explain: 'Di dove sei? — Откуда ты?'
    },
    {
      type: 'choice',
      question: 'Как сказать "Я русская" (женщина)?',
      options: ['Sono russo', 'Sono russa', 'Sono Russia', 'Sono italiana'],
      answer: 'Sono russa',
      explain: 'Для женщины: russa.'
    },
    {
      type: 'choice',
      question: 'Что означает "Parli inglese?"',
      options: ['Ты говоришь по-английски?', 'Ты из Англии?', 'Ты понимаешь?', 'Ты говоришь по-итальянски?'],
      answer: 'Ты говоришь по-английски?',
      explain: 'Parli (ты говоришь) + inglese.'
    },
    {
      type: 'choice',
      question: 'Как попрощаться с другом?',
      options: ['ArrivederLa', 'Ciao', 'Buongiorno', 'Salve'],
      answer: 'Ciao',
      explain: 'Ciao — неформальное приветствие и прощание.'
    },
    {
      type: 'build',
      question: 'Собери фразу: "Пять евро"',
      words: ['Cinque', 'euro'],
      answer: 'Cinque euro',
      explain: 'Cinque (5) + euro.'
    },
    {
      type: 'choice',
      question: 'Как читается "C" в слове "Ciao"?',
      options: ['Как К', 'Как Ч', 'Как С', 'Как Ц'],
      answer: 'Как Ч',
      explain: 'C перед I читается как Ч.'
    },
    {
      type: 'choice',
      question: 'Как сказать "Он из Италии"?',
      options: ['È italiano', 'È italiana', 'Sono italiano', 'Siamo italiani'],
      answer: 'È italiano',
      explain: 'Lui è italiano.'
    }
  ]
};
