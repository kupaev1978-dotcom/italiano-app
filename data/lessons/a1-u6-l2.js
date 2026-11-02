window.LESSONS = window.LESSONS || {};

window.LESSONS["a1-u6-l2"] = {
  id: "a1-u6-l2",
  title: "Боль, врач и простые рекомендации",
  level: "A1",
  xp: 35,
  theory: [
    {
      title: "Mi fa male / Mi fanno male",
      summary: "Если болит одна часть тела — mi fa male. Если болят несколько частей или слово во множественном числе — mi fanno male.",
      rule: [
        "Mi fa male la testa. — Болит голова.",
        "Mi fa male la gola. — Болит горло.",
        "Mi fa male il piede. — Болит стопа.",
        "Mi fanno male le gambe. — Болят ноги.",
        "Mi fanno male i denti. — Болят зубы.",
        "Mi fanno male gli occhi. — Болят глаза."
      ],
      table: {
        headers: ["Часть тела", "Фраза"],
        rows: [
          ["la testa", "Mi fa male la testa."],
          ["la schiena", "Mi fa male la schiena."],
          ["le gambe", "Mi fanno male le gambe."],
          ["i denti", "Mi fanno male i denti."]
        ]
      },
      tips: [
        "Секрет: смотри на существительное. Singolare -> fa male. Plurale -> fanno male.",
        "Очень частые готовые фразы: ho mal di testa, ho mal di gola, ho mal di pancia."
      ],
      mistakes: [
        "Не говори Mi fanno male la testa. Правильно: Mi fa male la testa.",
        "Не говори Mi fa male i denti. Правильно: Mi fanno male i denti.",
        "Не путай mal di pancia и mal di stomaco: pancia — живот, stomaco — желудок."
      ],
      examples: [
        { it: "Mi fa male il braccio.", ru: "У меня болит рука." },
        { it: "Mi fanno male le mani.", ru: "У меня болят руки." },
        { it: "Ho mal di pancia.", ru: "У меня болит живот." }
      ]
    },
    {
      title: "У врача: что говорить и что делать",
      summary: "На A1 достаточно нескольких фраз: объяснить симптом, сказать, что плохо себя чувствуешь, и понять простые рекомендации.",
      rule: [
        "Non mi sento bene. — Я плохо себя чувствую.",
        "Ho la febbre. — У меня температура.",
        "Ho la tosse. — У меня кашель.",
        "Devo prendere una medicina? — Мне нужно принять лекарство?",
        "Prendo una pastiglia. — Я принимаю таблетку.",
        "Devo riposare. — Мне нужно отдыхать.",
        "Ho bisogno di riposare. — Мне нужно отдохнуть.",
        "Bevo acqua. — Я пью воду."
      ],
      table: {
        headers: ["Ситуация", "Фраза"],
        rows: [
          ["плохое самочувствие", "Non mi sento bene."],
          ["температура", "Ho la febbre."],
          ["кашель", "Ho la tosse."],
          ["нужен отдых", "Devo riposare."],
          ["таблетка", "Prendo una pastiglia."]
        ]
      },
      tips: [
        "Секрет: ho bisogno di + инфинитив = мне нужно что-то сделать. Ho bisogno di riposare.",
        "Medicina — лекарство, pastiglia — таблетка."
      ],
      mistakes: [
        "Не говори Ho bisogno a riposare. Правильно: Ho bisogno di riposare.",
        "Не говори Devo riposa. После devo нужен инфинитив: Devo riposare.",
        "Не забывай dal medico: к врачу."
      ],
      examples: [
        { it: "Ho la febbre e devo riposare.", ru: "У меня температура, и мне нужно отдыхать." },
        { it: "Prendo una pastiglia e bevo acqua.", ru: "Я принимаю таблетку и пью воду." },
        { it: "Non mi sento bene.", ru: "Я плохо себя чувствую." }
      ],
      dialog: [
        { who: "Dottore", text: "Da quanto tempo ha la febbre?", ru: "Как давно у вас температура?" },
        { who: "Paziente", text: "Da due giorni.", ru: "Два дня." },
        { who: "Dottore", text: "Prenda questa medicina e riposi.", ru: "Примите это лекарство и отдохните." }
      ]
    }
  ],
  exercises: [
    {
      type: "gap",
      question: "Вставь правильную форму",
      sentence: "Mi ___ male la schiena.",
      options: ["fa", "fanno", "ho", "sono"],
      answer: "fa",
      hint: "Schiena — единственное число.",
      explain: "Mi fa male la schiena — у меня болит спина."
    },
    {
      type: "table",
      question: "Заполни форму",
      headers: ["Фраза", "Глагол"],
      rows: [
        ["Mi fa male la testa.", "fa"],
        ["Mi ___ male le gambe.", ""]
      ],
      targetRow: 1,
      targetColumn: 1,
      options: ["fanno", "fa", "ho", "sono"],
      answer: "fanno",
      hint: "Gambe — множественное число.",
      explain: "Mi fanno male le gambe — у меня болят ноги."
    },
    {
      type: "error-choice",
      question: "Найди ошибку",
      tokens: [
        { text: "Mi", id: "0" },
        { text: "fanno", id: "wrong" },
        { text: "male", id: "2" },
        { text: "la", id: "3" },
        { text: "testa", id: "4" }
      ],
      answer: "wrong",
      hint: "Testa — единственное число, поэтому fa.",
      explain: "Правильно: Mi fa male la testa."
    },
    {
      type: "dialog-choice",
      question: "Выбери ответ",
      dialog: [
        { who: "Dottore", text: "Ha febbre?" }
      ],
      options: [
        "Sì, ho la febbre.",
        "Sì, ho sonno.",
        "Sì, vado a casa.",
        "Sì, è lontano."
      ],
      answer: "Sì, ho la febbre.",
      hint: "Вопрос про температуру.",
      explain: "Sì, ho la febbre — Да, у меня температура."
    },
    {
      type: "match",
      question: "Соедини фразу и перевод",
      pairs: [
        { left: "Ho mal di testa.", right: "У меня болит голова." },
        { left: "Ho mal di gola.", right: "У меня болит горло." },
        { left: "Ho mal di pancia.", right: "У меня болит живот." },
        { left: "Non mi sento bene.", right: "Я плохо себя чувствую." },
        { left: "Devo riposare.", right: "Мне нужно отдыхать." }
      ],
      explain: "Это базовые фразы для врача.",
      explainWrong: "Неверная пара. Testa = голова, gola = горло, pancia = живот, sento bene = чувствую себя хорошо, riposare = отдыхать."
    },
    {
      type: "fill",
      question: "Напиши «Я плохо себя чувствую»",
      answer: "Non mi sento bene",
      accept: [
        "Non mi sento bene",
        "non mi sento bene",
        "Io non mi sento bene",
        "io non mi sento bene"
      ],
      placeholder: "Напиши по-итальянски",
      hint: "Non mi sento bene.",
      explain: "Non mi sento bene — я плохо себя чувствую."
    },
    {
      type: "build",
      question: "Собери фразу: «Мне нужно отдохнуть»",
      words: ["Ho", "bisogno", "di", "riposare"],
      answer: "Ho bisogno di riposare",
      hint: "Ho bisogno di + инфинитив.",
      explain: "Ho bisogno di riposare — мне нужно отдохнуть."
    },
    {
      type: "error-choice",
      question: "Найди ошибку",
      sentence: "Ho bisogno a riposare.",
      options: ["Ho", "bisogno", "a", "riposare"],
      answer: "a",
      hint: "После bisogno нужен предлог di.",
      explain: "Правильно: Ho bisogno di riposare."
    }
  ]
};
