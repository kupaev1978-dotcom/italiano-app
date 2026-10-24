window.LESSONS = window.LESSONS || {};

window.LESSONS['a0-u2-l3'] = {
  id: 'a0-u2-l3',
  title: 'Правильные глаголы на -ARE',
  level: 'A0',
  xp: 30,
  theory: [
    {
      html: `
        <h2>Магия глаголов на -ARE</h2>
        <p>Около 80% глаголов в итальянском языке заканчиваются на <b>-ARE</b>. Если ты научишься их спрягать, ты сможешь сказать почти всё!</p>
        <p>Возьмём глагол <b>parlare</b> (говорить). Отбрасываем <b>-are</b> и добавляем хвостики:</p>
        <ul>
          <li><b>Io parl-o</b> — Я говорю</li>
          <li><b>Tu parl-i</b> — Ты говоришь</li>
          <li><b>Lui/Lei parl-a</b> — Он/Она говорит</li>
          <li><b>Noi parl-iamo</b> — Мы говорим</li>
          <li><b>Voi parl-ate</b> — Вы говорите</li>
          <li><b>Loro parl-ano</b> — Они говорят</li>
        </ul>
        <div class="tip">
          💡 Фишка: Хвостики почти всегда одни и те же: <b>-o, -i, -a, -iamo, -ate, -ano</b>. 
          Запомни только их, и ты спряжёшь тысячи глаголов!
        </div>
      `
    },
    {
      html: `
        <h2>Полезные глаголы на каждый день</h2>
        <ul>
          <li><b>lavorare</b> — работать (lavoro, lavori, lavora...)</li>
          <li><b>mangiare</b> — есть, кушать (mangio, mangi, mangia...)</li>
          <li><b>abitare</b> — жить, проживать (abito, abiti, abita...)</li>
          <li><b>studiare</b> — учиться, изучать (studio, studi, studia...)</li>
        </ul>
        <p>Примеры:</p>
        <p><i>Io lavoro a Roma.</i> (Я работаю в Риме).</p>
        <p><i>Noi mangiamo la pizza.</i> (Мы едим пиццу).</p>
        <div class="tip">
          💡 Нюанс: Обрати внимание на форму для "Мы" (-iamo). 
          <b>Noi parliamo</b> (мы говорим), <b>noi mangiamo</b> (мы едим). 
          Хвостик <b>-iamo</b> очень легко запомнить!
        </div>
      `
    }
  ],
  exercises: [
    {
      type: 'choice',
      question: 'Выбери правильную форму: "Io parl___" (Я говорю)',
      options: ['o', 'i', 'a', 'iamo'],
      answer: 'o',
      explain: 'Для "Я" (Io) всегда используется хвостик -o. Parlo.'
    },
    {
      type: 'fill',
      question: 'Напиши "Ты работаешь" (глагол lavorare)',
      answer: 'lavori',
      accept: ['lavori', 'Lavori', 'tu lavori', 'Tu lavori'],
      explain: 'Для "Ты" (Tu) добавляем -i. Tu lavori.'
    },
    {
      type: 'choice',
      question: 'Как сказать "Мы едим"? (mangiare)',
      options: ['mangio', 'mangia', 'mangiamo', 'mangiano'],
      answer: 'mangiamo',
      explain: 'Для "Мы" (Noi) всегда используем -iamo. Mangiamo.'
    },
    {
      type: 'build',
      question: 'Собери фразу: "Они живут в Милане"',
      words: ['Loro', 'abitano', 'a', 'Milano'],
      answer: 'Loro abitano a Milano',
      explain: 'Loro (они) + abitare (жить) = abitano (хвостик -ano).'
    },
    {
      type: 'choice',
      question: 'Выбери форму для "Он/Она" (Lui/Lei) для глагола studiare',
      options: ['studio', 'studi', 'studia', 'studiamo'],
      answer: 'studia',
      explain: 'Для третьего лица единственного числа (Lui/Lei) хвостик -a. Studia.'
    },
    {
      type: 'fill',
      question: 'Напиши "Я говорю" по-итальянски (глагол parlare)',
      answer: 'parlo',
      accept: ['parlo', 'Parlo', 'io parlo', 'Io parlo'],
      explain: 'Io + parlare = parlo.'
    },
    {
      type: 'choice',
      question: 'Что означает "Voi lavorate"?',
      options: ['Я работаю', 'Мы работаем', 'Вы работаете', 'Они работают'],
      answer: 'Вы работаете',
      explain: 'Voi (вы) требует хвостик -ate. Lavorate.'
    },
    {
      type: 'build',
      question: 'Собери фразу: "Я изучаю итальянский язык"',
      words: ['Io', 'studio', 'l\'italiano'],
      answer: 'Io studio l\'italiano',
      explain: 'Io studio (Я изучаю) + l\'italiano.'
    }
  ]
};
