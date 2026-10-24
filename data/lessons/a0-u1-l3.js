window.LESSONS = window.LESSONS || {};

window.LESSONS['a0-u1-l3'] = {
  id: 'a0-u1-l3',
  title: 'Страны, языки и «откуда ты?»',
  level: 'A0',
  xp: 25,
  theory: [
    {
      html: `
        <h2>Откуда ты?</h2>
        <p>Чтобы спросить, откуда человек, итальянцы говорят:</p>
        <p><b>Di dove sei?</b> — Откуда ты?</p>
        <p>Ответить можно, назвав национальность:</p>
        <ul>
          <li><b>Sono russo.</b> — Я русский (мужчина).</li>
          <li><b>Sono russa.</b> — Я русская (женщина).</li>
        </ul>
        <div class="tip">
          💡 Фишка: В итальянском языке национальность меняется по родам! 
          Мужчина: <b>russo</b>, <b>italiano</b>. 
          Женщина: <b>russa</b>, <b>italiana</b>.
        </div>
      `
    },
    {
      html: `
        <h2>Языки</h2>
        <p>Чтобы сказать, на каком языке ты говоришь, используй глагол <b>parlare</b>:</p>
        <p><b>Parlo italiano.</b> — Я говорю по-итальянски.</p>
        <p><b>Parli inglese?</b> — Ты говоришь по-английски?</p>
        <p>Названия языков:</p>
        <ul>
          <li><b>italiano</b> — итальянский</li>
          <li><b>russo</b> — русский</li>
          <li><b>inglese</b> — английский</li>
          <li><b>francese</b> — французский</li>
          <li><b>spagnolo</b> — испанский</li>
          <li><b>tedesco</b> — немецкий</li>
        </ul>
      `
    }
  ],
  exercises: [
    {
      type: 'choice',
      question: 'Как спросить "Откуда ты?"',
      options: ['Come stai?', 'Di dove sei?', 'Chi sei?', 'Dove vai?'],
      answer: 'Di dove sei?',
      explain: 'Di dove sei? — дословно "Из где ты есть?"'
    },
    {
      type: 'choice',
      question: 'Как сказать "Я из России" (мужчина)?',
      options: ['Sono russa', 'Sono russo', 'Sono Russia', 'Sono italiano'],
      answer: 'Sono russo',
      explain: 'Для мужчины используем окончание -o: russo.'
    },
    {
      type: 'choice',
      question: 'Как сказать "Я из России" (женщина)?',
      options: ['Sono russo', 'Sono russa', 'Sono Russia', 'Sono italiana'],
      answer: 'Sono russa',
      explain: 'Для женщины используем окончание -a: russa.'
    },
    {
      type: 'fill',
      question: 'Напиши "Я говорю по-итальянски"',
      answer: 'Parlo italiano',
      accept: ['Parlo italiano', 'parlo italiano', 'Io parlo italiano', 'io parlo italiano'],
      explain: 'Parlo (я говорю) + italiano.'
    },
    {
      type: 'choice',
      question: 'Выбери перевод: "английский язык"',
      options: ['francese', 'inglese', 'spagnolo', 'tedesco'],
      answer: 'inglese',
      explain: 'inglese — английский.'
    },
    {
      type: 'build',
      question: 'Собери фразу: "Ты говоришь по-испански?"',
      words: ['Parli', 'spagnolo', '?'],
      answer: 'Parli spagnolo ?',
      explain: 'Parli (ты говоришь) + spagnolo.'
    },
    {
      type: 'choice',
      question: 'Как будет "немецкий язык"?',
      options: ['tedesco', 'francese', 'italiano', 'russo'],
      answer: 'tedesco',
      explain: 'tedesco — немецкий.'
    },
    {
      type: 'fill',
      question: 'Вставь слово: "Di dove ___?" (Откуда ты?)',
      answer: 'sei',
      accept: ['sei', 'Sei'],
      explain: 'Di dove sei? (Ты есть из где?)'
    },
    {
      type: 'choice',
      question: 'Как сказать "Она из Италии"?',
      options: ['È italiano', 'È italiana', 'Sono italiana', 'Siamo italiane'],
      answer: 'È italiana',
      explain: 'Lei è italiana. Окончание -a для женского рода.'
    }
  ]
};
