window.LESSONS = window.LESSONS || {};

window.LESSONS["a1-u6-l1"] = {
  id: "a1-u6-l1",
  title: "Части тела и первые жалобы",
  level: "A1",
  xp: 35,
  theory: [
    {
      title: "Части тела: запоминай с артиклем",
      summary: "Чтобы говорить о здоровье, нужны части тела. Запоминай каждое слово сразу с артиклем: la testa, il collo, la mano.",
      rule: [
        "la testa — голова",
        "il collo — шея",
        "la spalla — плечо",
        "il braccio — рука от плеча до кисти",
        "la mano — кисть, рука",
        "la gamba — нога",
        "il piede — стопа",
        "il ginocchio — колено",
        "il dito — палец",
        "i denti — зубы",
        "l'occhio — глаз",
        "l'orecchio — ухо",
        "il naso — нос",
        "la gola — горло",
        "lo stomaco — желудок",
        "la schiena — спина"
      ],
      table: {
        headers: ["Слово", "Род", "Пример"],
        rows: [
          ["la testa", "femminile", "Mi fa male la testa."],
          ["il collo", "maschile", "Ho male al collo."],
          ["la mano", "femminile", "Mi fa male la mano."],
          ["il ginocchio", "maschile", "Mi fa male il ginocchio."],
          ["i denti", "maschile plurale", "Mi fanno male i denti."],
          ["la schiena", "femminile", "Mi fa male la schiena."]
        ]
      },
      tips: [
        "Секрет: mano — женский род, хотя заканчивается на -o. La mano.",
        "Denti обычно используется во множественном числе: i denti — зубы."
      ],
      mistakes: [
        "Не говори il testa. Правильно: la testa.",
        "Не говори la ginocchio. Правильно: il ginocchio.",
        "Не переводи «рука» всегда как mano. Braccio — рука целиком, mano — кисть."
      ],
      examples: [
        { it: "Mi fa male la testa.", ru: "У меня болит голова." },
        { it: "Ho male al collo.", ru: "Мне болит шея." },
        { it: "Mi fanno male i denti.", ru: "У меня болят зубы." }
      ]
    },
    {
      title: "Первые жалобы: ho, mi fa male, non mi sento bene",
      summary: "О симптомах говорят через avere: ho la febbre. О боли в части тела — через mi fa male.",
      rule: [
        "Ho la febbre. — У меня температура.",
        "Ho il raffreddore. — У меня простуда / насморк.",
        "Ho la tosse. — У меня кашель.",
        "Ho mal di testa. — У меня болит голова.",
        "Ho mal di gola. — У меня болит горло.",
        "Ho mal di pancia. — У меня болит живот.",
        "Mi fa male la schiena. — У меня болит спина.",
        "Non mi sento bene. — Я плохо себя чувствую.",
        "Devo andare dal medico. — Мне нужно к врачу."
      ],
      table: {
        headers: ["Симптом", "Фраза"],
        rows: [
          ["температура", "Ho la febbre."],
          ["кашель", "Ho la tosse."],
          ["боль в голове", "Mi fa male la testa."],
          ["боль в спине", "Mi fa male la schiena."],
          ["плохое самочувствие", "Non mi sento bene."]
        ]
      },
      tips: [
        "Секрет: ho la febbre, ho la tosse — это «имею» симптом. Не sono la febbre.",
        "Dal medico — к врачу. Da + il medico = dal medico."
      ],
      mistakes: [
        "Не говори Sono la febbre. Правильно: Ho la febbre.",
        "Не говори Vado a medico. Правильно: Vado dal medico.",
        "Не путай ho mal di testa и mi fa male la testa: оба возможны, но ho mal di testa — очень частая готовая фраза."
      ],
      examples: [
        { it: "Ho la febbre e la tosse.", ru: "У меня температура и кашель." },
        { it: "Mi fa male la gola.", ru: "У меня болит горло." },
        { it: "Devo andare dal medico.", ru: "Мне нужно к врачу." }
      ],
      dialog: [
        { who: "Dottore", text: "Che problema ha?", ru: "Что вас беспокоит?" },
        { who: "Paziente", text: "Ho la febbre e mal di gola.", ru: "У меня температура и болит горло." },
        { who: "Dottore", text: "Apre la bocca, per favore.", ru: "Откройте рот, пожалуйста." }
      ]
    }
  ],
  exercises: [
    {
      type: "choice",
      question: "Как сказать «голова»?",
      options: ["la testa", "il testa", "la mano", "il collo"],
      answer: "la testa",
      hint: "Testa женского рода.",
      explain: "la testa — голова."
    },
    {
      type: "gap",
      question: "Вставь слово",
      sentence: "Ho mal ___ gola.",
      options: ["di", "a", "da", "in"],
      answer: "di",
      hint: "Устойчивая конструкция: mal di gola.",
      explain: "Ho mal di gola — у меня болит горло."
    },
    {
      type: "table",
      question: "Заполни артикль",
      headers: ["Часть тела", "Артикль"],
      rows: [
        ["testa", "la"],
        ["ginocchio", ""]
      ],
      targetRow: 1,
      targetColumn: 1,
      options: ["il", "la", "l'", "lo"],
      answer: "il",
      hint: "Ginocchio мужского рода.",
      explain: "il ginocchio — колено."
    },
    {
      type: "match",
      question: "Соедини часть тела и перевод",
      pairs: [
        { left: "la mano", right: "кисть, рука" },
        { left: "il piede", right: "стопа" },
        { left: "la schiena", right: "спина" },
        { left: "i denti", right: "зубы" },
        { left: "l'orecchio", right: "ухо" }
      ],
      explain: "Эти слова нужны, чтобы сказать, где болит.",
      explainWrong: "Неверная пара. Mano = кисть, piede = стопа, schiena = спина, denti = зубы, orecchio = ухо."
    },
    {
      type: "error-choice",
      question: "Найди ошибку",
      tokens: [
        { text: "Sono", id: "wrong" },
        { text: "la", id: "1" },
        { text: "febbre", id: "2" }
      ],
      answer: "wrong",
      hint: "Температуру «имеют»: ho.",
      explain: "Правильно: Ho la febbre."
    },
    {
      type: "dialog-choice",
      question: "Выбери ответ пациента",
      dialog: [
        { who: "Dottore", text: "Dove ha male?" }
      ],
      options: [
        "Mi fa male la schiena.",
        "Ho vent'anni.",
        "Vado al cinema.",
        "Costa dieci euro."
      ],
      answer: "Mi fa male la schiena.",
      hint: "Вопрос Dove ha male? спрашивает, где болит.",
      explain: "Mi fa male la schiena — у меня болит спина."
    },
    {
      type: "fill",
      question: "Напиши «У меня болит голова»",
      answer: "Mi fa male la testa",
      accept: [
        "Mi fa male la testa",
        "mi fa male la testa",
        "Ho mal di testa",
        "ho mal di testa"
      ],
      placeholder: "Напиши по-итальянски",
      hint: "Mi fa male + la testa.",
      explain: "Mi fa male la testa — у меня болит голова."
    },
    {
      type: "build",
      question: "Собери фразу: «Мне нужно к врачу»",
      words: ["Devo", "andare", "dal", "medico"],
      answer: "Devo andare dal medico",
      hint: "Da + il medico = dal medico.",
      explain: "Devo andare dal medico — мне нужно к врачу."
    }
  ]
};
