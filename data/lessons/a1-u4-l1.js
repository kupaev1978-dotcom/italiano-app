window.LESSONS = window.LESSONS || {};

window.LESSONS["a1-u4-l1"] = {
  id: "a1-u4-l1",
  title: "Еда и напитки",
  level: "A1",
  xp: 35,
  theory: [
    {
      title: "Еда: род и число",
      summary: "Большинство названий еды — существительные с артиклем. Запоминай слово сразу с артиклем: il pane, la pasta, l'acqua. Некоторые продукты обычно используются в единственном числе как масса: pane, pasta, carne, frutta.",
      rule: [
        "il pane — хлеб",
        "la pasta — паста",
        "il formaggio — сыр",
        "la carne — мясо",
        "il pesce — рыба",
        "la frutta — фрукты как категория",
        "la verdura — овощи как категория",
        "l'uovo — яйцо; множественное число: le uova",
        "il dolce — сладость; множественное число: i dolci",
        "il latte — молоко",
        "l'acqua — вода",
        "il caffè — кофе",
        "il tè — чай",
        "il vino — вино",
        "la birra — пиво"
      ],
      table: {
        headers: ["Итальянский", "Род", "Множественное число", "Пример"],
        rows: [
          ["il pane", "maschile", "—", "Mangio il pane."],
          ["la pasta", "femminile", "—", "Vorrei la pasta."],
          ["il formaggio", "maschile", "—", "Il formaggio è buono."],
          ["la carne", "femminile", "—", "Non mangio la carne."],
          ["il pesce", "maschile", "—", "Il pesce è fresco."],
          ["la frutta", "femminile", "—", "La frutta è sana."],
          ["l'uovo", "maschile", "le uova", "Ho un uovo."],
          ["il dolce", "maschile", "i dolci", "Prendo un dolce."]
        ]
      },
      tips: [
        "Секрет: frutta и verdura часто используются как собирательные понятия: «фрукты», «овощи». Не нужно обязательно искать фруктовое множественное число.",
        "Секрет про uovo: это одно из важных исключений. Единственное число: l'uovo. Множественное: le uova. Не *uovi."
      ],
      mistakes: [
        "Не говори la pane. Pane мужского рода: il pane.",
        "Не говори il frutta. Frutta женского рода: la frutta.",
        "Не говори un'uovo. Uovo мужского рода: un uovo."
      ],
      examples: [
        { it: "Il pane è fresco.", ru: "Хлеб свежий." },
        { it: "La pasta è buona.", ru: "Паста вкусная." },
        { it: "Non mangio la carne.", ru: "Я не ем мясо." },
        { it: "Ho un uovo.", ru: "У меня есть яйцо." },
        { it: "Le uova sono fresche.", ru: "Яйца свежие." }
      ]
    },
    {
      title: "Напитки и просьба: vorrei",
      summary: "В баре или кафе un caffè, un'acqua, una birra означают «одну порцию/стакан/бутылку». Слово vorrei — вежливая форма «я хотел бы».",
      rule: [
        "Vorrei un caffè, per favore. — Я хотел бы кофе, пожалуйста.",
        "Vorrei un'acqua, per favore. — Я хотел бы воду, пожалуйста.",
        "Vorrei una birra, per favore. — Я хотел бы пиво, пожалуйста.",
        "Vorrei due panini. — Я хотел бы два сэндвича/булочки.",
        "Vorrei un'insalata. — Я хотел бы салат."
      ],
      table: {
        headers: ["Напиток/еда", "Фраза", "Почему такой артикль"],
        rows: [
          ["кофе", "Vorrei un caffè.", "caffè maschile"],
          ["вода", "Vorrei un'acqua.", "acqua femminile, davanti a vocale"],
          ["пиво", "Vorrei una birra.", "birra femminile"],
          ["чай", "Vorrei un tè.", "tè maschile"],
          ["вино", "Vorrei un vino.", "vino maschile"]
        ]
      },
      tips: [
        "Секрет про un'acqua: acqua женского рода и начинается с гласной, поэтому un'acqua. Это очень частая фраза в баре.",
        "Vorrei звучит вежливее, чем voglio. На A1 лучше привыкать к vorrei."
      ],
      mistakes: [
        "Не говори un acqua. Правильно: un'acqua.",
        "Не говори una caffè. Caffè мужского рода: un caffè.",
        "Не говори Voglio un caffè, если хочешь звучать вежливо. Лучше: Vorrei un caffè."
      ],
      examples: [
        { it: "Vorrei un caffè, per favore.", ru: "Я хотел бы кофе, пожалуйста." },
        { it: "Vorrei un'acqua naturale.", ru: "Я хотел бы негазированную воду." },
        { it: "Vorrei una birra piccola.", ru: "Я хотел бы маленькое пиво." },
        { it: "Vorrei due panini.", ru: "Я хотел бы два сэндвича." }
      ],
      dialog: [
        { who: "Cliente", text: "Buongiorno. Vorrei un caffè e un'acqua, per favore.", ru: "Добрый день. Я хотел бы кофе и воду, пожалуйста." },
        { who: "Barista", text: "Prego.", ru: "Вот, пожалуйста." },
        { who: "Cliente", text: "Grazie.", ru: "Спасибо." }
      ]
    }
  ],
  exercises: [
    {
      type: "choice",
      question: "Как сказать «Я ем хлеб»?",
      options: ["Mangio il pane.", "Mangio la pane.", "Mangio lo pane.", "Mangio l'pane."],
      answer: "Mangio il pane.",
      hint: "Pane мужского рода: il pane.",
      explain: "Mangio il pane — я ем хлеб."
    },
    {
      type: "gap",
      question: "Выбери артикль",
      sentence: "___ frutta è buona.",
      options: ["La", "Il", "Lo", "L'"],
      answer: "La",
      hint: "Frutta женского рода.",
      explain: "La frutta è buona — фрукты вкусные."
    },
    {
      type: "table",
      question: "Заполни множественное число",
      headers: ["Единственное число", "Множественное число"],
      rows: [
        ["uovo", ""],
        ["dolce", "dolci"]
      ],
      targetRow: 0,
      targetColumn: 1,
      options: ["uova", "uovi", "uove", "uovo"],
      answer: "uova",
      hint: "Uovo — исключение: le uova.",
      explain: "uovo -> uova."
    },
    {
      type: "match",
      question: "Соедини слово и перевод",
      pairs: [
        { left: "il pane", right: "хлеб" },
        { left: "la carne", right: "мясо" },
        { left: "l'acqua", right: "вода" },
        { left: "il formaggio", right: "сыр" },
        { left: "la frutta", right: "фрукты" }
      ],
      explain: "Эти слова нужны для базового разговора о еде.",
      explainWrong: "Неверная пара. Pane = хлеб, carne = мясо, acqua = вода, formaggio = сыр, frutta = фрукты."
    },
    {
      type: "error-choice",
      question: "Найди ошибку",
      tokens: [
        { text: "La", id: "wrong" },
        { text: "pane", id: "1" },
        { text: "è", id: "2" },
        { text: "fresco", id: "3" }
      ],
      answer: "wrong",
      hint: "Pane мужского рода, поэтому il.",
      explain: "Правильно: Il pane è fresco."
    },
    {
      type: "dialog-choice",
      question: "Выбери подходящую реплику",
      dialog: [
        { who: "Marco", text: "Cosa mangi?" }
      ],
      options: [
        "Mangio la pasta.",
        "Bevo il pane.",
        "Mangio l'acqua.",
        "Prendo la frutta?"
      ],
      answer: "Mangio la pasta.",
      hint: "Pasta — еда, её едят.",
      explain: "Mangio la pasta — я ем пасту."
    },
    {
      type: "fill",
      question: "Напиши «У меня есть яйцо»",
      answer: "Ho un uovo",
      accept: ["Ho un uovo", "ho un uovo", "Io ho un uovo", "io ho un uovo"],
      placeholder: "Напиши по-итальянски",
      hint: "Uovo мужского рода: un uovo.",
      explain: "Ho un uovo — у меня есть яйцо."
    },
    {
      type: "build",
      question: "Собери фразу: «Я хотел бы кофе»",
      words: ["Vorrei", "un", "caffè"],
      answer: "Vorrei un caffè",
      hint: "Caffè мужского рода: un caffè.",
      explain: "Vorrei un caffè — я хотел бы кофе."
    },
    {
      type: "choice",
      question: "Как сказать «Я не ем мясо»?",
      options: ["Non mangio la carne.", "Non mangio il carne.", "Non mangio la carni.", "Non mangio le carne."],
      answer: "Non mangio la carne.",
      hint: "Carne женского рода: la carne.",
      explain: "Non mangio la carne — я не ем мясо."
    },
    {
      type: "table",
      question: "Заполни артикль",
      headers: ["Напиток", "Артикль"],
      rows: [
        ["caffè", "il"],
        ["acqua", ""]
      ],
      targetRow: 1,
      targetColumn: 1,
      options: ["l'", "il", "lo", "la"],
      answer: "l'",
      hint: "Acqua женского рода и начинается с гласной.",
      explain: "l'acqua — вода."
    }
  ]
};
