window.LESSONS = window.LESSONS || {};

window.LESSONS['a0-u2-l4'] = {
  id: 'a0-u2-l4',
  title: 'Мини-тест: быть, иметь, действия',
  level: 'A0',
  xp: 40,
  theory: [
    {
      html: `
        <h2>Большой тест по глаголам! 🏆</h2>
        <p>Проверь, как ты усвоил три кита итальянского языка:</p>
        <ul>
          <li><b>Essere</b> (быть)</li>
          <li><b>Avere</b> (иметь)</li>
          <li><b>Глаголы на -ARE</b></li>
        </ul>
        <p>Удачи! 💪</p>
      `
    }
  ],
  exercises: [
    {
      type: 'choice',
      question: 'Как сказать "Я студент"?',
      options: ['Sono studente', 'Ho studente', 'Studio studente', 'Sei studente'],
      answer: 'Sono studente',
      explain: 'Sono (я есть) + studente.'
    },
    {
      type: 'choice',
      question: 'Как сказать "У меня есть кот"?',
      options: ['Sono un gatto', 'Ho un gatto', 'Ha un gatto', 'Abbiamo un gatto'],
      answer: 'Ho un gatto',
      explain: 'Ho (я имею) + un gatto.'
    },
    {
      type: 'choice',
      question: 'Как сказать "Мне холодно"?',
      options: ['Sono freddo', 'Ho freddo', 'Ho caldo', 'Sei freddo'],
      answer: 'Ho freddo',
      explain: 'Ho freddo — Я имею холод.'
    },
    {
      type: 'choice',
      question: 'Выбери форму "Мы говорим" (parlare)',
      options: ['parlo', 'parli', 'parliamo', 'parlano'],
      answer: 'parliamo',
      explain: 'Для "Мы" (Noi) используем -iamo.'
    },
    {
      type: 'fill',
      question: 'Напиши "Ты работаешь" (lavorare)',
      answer: 'lavori',
      accept: ['lavori', 'Lavori', 'tu lavori', 'Tu lavori'],
      explain: 'Tu + lavorare = lavori.'
    },
    {
      type: 'build',
      question: 'Собери фразу: "Они живут в Риме"',
      words: ['Loro', 'abitano', 'a', 'Roma'],
      answer: 'Loro abitano a Roma',
      explain: 'Loro + abitare = abitano.'
    },
    {
      type: 'choice',
      question: 'Выбери форму "Он/Она имеет" (avere)',
      options: ['ho', 'hai', 'ha', 'hanno'],
      answer: 'ha',
      explain: 'Lui/Lei ha.'
    },
    {
      type: 'choice',
      question: 'Что означает "Voi mangiate"?',
      options: ['Я ем', 'Мы едим', 'Вы едите', 'Они едят'],
      answer: 'Вы едите',
      explain: 'Voi (вы) требует хвостик -ate.'
    },
    {
      type: 'fill',
      question: 'Напиши "Я изучаю итальянский"',
      answer: 'Studio l\'italiano',
      accept: ['Studio l\'italiano', 'studio l\'italiano', 'Io studio l\'italiano', 'io studio l\'italiano'],
      explain: 'Io + studiare = studio.'
    },
    {
      type: 'choice',
      question: 'Как сказать "Они дома"?',
      options: ['Sono a casa', 'Siete a casa', 'Ho a casa', 'Ha a casa'],
      answer: 'Sono a casa',
      explain: 'Loro sono a casa.'
    },
    {
      type: 'choice',
      question: 'Как сказать "Я хочу спать"?',
      options: ['Ho sonno', 'Ho fame', 'Ho sete', 'Sono stanco'],
      answer: 'Ho sonno',
      explain: 'Ho sonno — Я имею сонливость.'
    }
  ]
};
