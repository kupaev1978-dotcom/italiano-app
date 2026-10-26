window.LESSONS = window.LESSONS || {};

window.LESSONS["a0-u2-l3"] = {
  id: "a0-u2-l3",
  title: "Правильные глаголы на -ARE",
  level: "A0",
  xp: 30,
  theory: [
    {
      title: "Три спряжения, но начнём с -ARE",
      summary: "Большинство итальянских глаголов заканчивается на -ARE. Если выучить шесть окончаний, ты сможешь спрягать тысячи глаголов.",
      rule: [
        "Инфинитив глагола отвечает на вопрос «что делать?» e parlare, mangiare, lavorare.",
        "У глаголов на -ARE убираем -are и получаем основу: parl-, mangi-, lavor-.",
        "Добавляем окончания: -o, -i, -a, -iamo, -ate, -ano."
      ],
      table: {
        headers: ["Лицо", "Окончание", "parlare", "mangiare", "lavorare"],
        rows: [
          ["io", "-o", "parlo", "mangio", "lavoro"],
          ["tu", "-i", "parli", "mangi", "lavori"],
          ["lui / lei", "-a", "parla", "mangia", "lavora"],
          ["noi", "-iamo", "parliamo", "mangiamo", "lavoriamo"],
          ["voi", "-ate", "parlate", "mangiate", "lavorate"],
          ["loro", "-ano", "parlano", "mangiano", "lavorano"]
        ]
      },
      tips: [
        "Секрет автоматизма: не учи каждый глагол отдельно. Учи хвосты: -o, -i, -a, -iamo, -ate, -ano. Потом подставляй любую основу.",
        "Форма noi всегда узнаётся по -iamo: parliamo, mangiamo, lavoriamo, studiamo."
      ],
      mistakes: [
        "Не говори noi parlare. Инфинитив не спрягается. Правильно: noi parliamo.",
        "Не путай tu parli и lui parla: -i для ты, -a для он/она."
      ],
      examples: [
        { it: "Io parlo italiano.", ru: "Я говорю по-итальянски." },
        { it: "Tu mangi una pizza.", ru: "Ты ешь пиццу." },
        { it: "Lei lavora a Roma.", ru: "Она работает в Риме." },
        { it: "Noi studiamo italiano.", ru: "Мы учим итальянский." },
        { it: "Loro parlano russo.", ru: "Они говорят по-русски." }
      ]
    },
    {
      title: "Полезные глаголы на -ARE",
      summary: "Эти глаголы закрывают бытовые фразы: говорить, есть, работать, жить, учиться, смотреть, слушать.",
      rule: [
        "parlare — говорить",
        "mangiare — есть, кушать",
        "bere — пить, но это глагол на -ERE, не -ARE",
        "lavorare — работать",
        "abitare — жить, проживать",
        "studiare — учиться, изучать",
        "ascoltare — слушать",
        "guardare — смотреть",
        "giocare — играть"
      ],
      table: {
        headers: ["Глагол", "Значение", "Пример"],
        rows: [
          ["parlare", "говорить", "Parlo italiano."],
          ["mangiare", "есть", "Mangio una mela."],
          ["lavorare", "работать", "Lavoro in banca."],
          ["abitare", "жить", "Abito a Milano."],
          ["studiare", "учить", "Studio italiano."],
          ["guardare", "смотреть", "Guardo un film."]
        ]
      },
      tips: [
        "Секрет расширения речи: один глагол + разные существительные дают десятки фраз. Mangio pizza, mangio pane, mangio frutta, mangio alle otto.",
        "Глагол mangiare во множественном числе noi даёт mangiamo, но следи за мягким g: не «мангамо», а «ман-джа-мо»."
      ],
      mistakes: [
        "Не путай ascoltare и sentire. Ascoltare — активно слушать, sentire — слышать физически.",
        "Не забывай, что io часто опускают: Parlo italiano звучит естественнее, чем Io parlo italiano."
      ],
      examples: [
        { it: "Ascoltiamo musica.", ru: "Мы слушаем музыку." },
        { it: "Guardate la televisione?", ru: "Вы смотрите телевизор?" },
        { it: "Giocano a calcio.", ru: "Они играют в футбол." }
      ],
      dialog: [
        { who: "Marco", text: "Cosa mangi?", ru: "Что ты ешь?" },
        { who: "Anna", text: "Mangio una pizza e bevo acqua.", ru: "Я ем пиццу и пью воду." },
        { who: "Marco", text: "Brava! Io studio italiano.", ru: "Молодец! Я учу итальянский." }
      ]
    }
  ],
  exercises: [
    {
      type: "gap",
      question: "Вставь окончание для io",
      sentence: "Io parl___ italiano.",
      options: ["o", "i", "a", "iamo"],
      answer: "o",
      hint: "Для io у глаголов на -ARE окончание -o.",
      explain: "Io parlo — я говорю."
    },
    {
      type: "table",
      question: "Заполни форму для noi",
      headers: ["Лицо", "Форма"],
      rows: [
        ["io", "parlo"],
        ["tu", "parli"],
        ["lui/lei", "parla"],
        ["noi", ""],
        ["voi", "parlate"],
        ["loro", "parlano"]
      ],
      targetRow: 3,
      targetColumn: 1,
      options: ["parliamo", "parlano", "parlate", "parlo"],
      answer: "parliamo",
      hint: "Для noi всегда -iamo.",
      explain: "Noi parliamo — мы говорим."
    },
    {
      type: "choice",
      question: "Как сказать «Она работает»?",
      options: ["Lei lavoro", "Lei lavori", "Lei lavora", "Lei lavoriamo"],
      answer: "Lei lavora",
      hint: "Для lui/lei окончание -a.",
      explain: "Lei lavora — она работает."
    },
    {
      type: "match",
      question: "Соедини лицо и форму глагола parlare",
      pairs: [
        { left: "io", right: "parlo" },
        { left: "tu", right: "parli" },
        { left: "lui/lei", right: "parla" },
        { left: "noi", right: "parliamo" },
        { left: "voi", right: "parlate" },
        { left: "loro", right: "parlano" }
      ],
      explain: "Это базовая таблица спряжения -ARE."
    },
    {
      type: "fill",
      question: "Напиши «мы едим» глаголом mangiare",
      answer: "mangiamo",
      accept: ["mangiamo", "Mangiamo", "noi mangiamo", "Noi mangiamo"],
      placeholder: "Форма для noi",
      hint: "noi + -iamo: mangiamo.",
      explain: "Noi mangiamo — мы едим."
    },
    {
      type: "gap",
      question: "Вставь правильную форму",
      sentence: "Tu ___ italiano.",
      options: ["parlo", "parli", "parla", "parliamo"],
      answer: "parli",
      hint: "Для tu окончание -i.",
      explain: "Tu parli italiano — ты говоришь по-итальянски."
    },
    {
      type: "build",
      question: "Собери фразу: «Они живут в Милане»",
      words: ["Abitano", "a", "Milano"],
      answer: "Abitano a Milano",
      hint: "Loro + abitare = abitano.",
      explain: "Abitano a Milano — они живут в Милане."
    },
    {
      type: "choice",
      question: "Какая форма неверная?",
      options: ["io parlo", "tu parli", "noi parlare", "loro parlano"],
      answer: "noi parlare",
      hint: "Инфинитив parlare нельзя использовать как спряжённую форму.",
      explain: "Правильно: noi parliamo."
    },
    {
      type: "table",
      question: "Заполни форму для voi",
      headers: ["Лицо", "Форма"],
      rows: [
        ["noi", "lavoriamo"],
        ["voi", ""],
        ["loro", "lavorano"]
      ],
      targetRow: 1,
      targetColumn: 1,
      options: ["lavorate", "lavoriamo", "lavorano", "lavori"],
      answer: "lavorate",
      hint: "Для voi у глаголов на -ARE окончание -ate.",
      explain: "Voi lavorate — вы работаете."
    }
  ]
};
