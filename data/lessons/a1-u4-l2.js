window.LESSONS = window.LESSONS || {};

window.LESSONS["a1-u4-l2"] = {
  id: "a1-u4-l2",
  title: "Вкус и предпочтения: mi piace, vorrei",
  level: "A1",
  xp: 35,
  theory: [
    {
      title: "Mi piace / Mi piacciono: согласование с тем, что нравится",
      summary: "Главный секрет: в итальянском нравится не «я», а предмет. Поэтому глагол piace/piacciono согласуется с тем, что нравится. Одна вещь или неисчисляемое — piace. Много вещей — piacciono.",
      rule: [
        "Mi piace la pizza. — Мне нравится пицца.",
        "Mi piace il caffè. — Мне нравится кофе.",
        "Mi piacciono gli spaghetti. — Мне нравятся спагетти.",
        "Mi piacciono i dolci. — Мне нравятся сладости.",
        "Non mi piace il pesce. — Мне не нравится рыба.",
        "Mi piace molto la pasta. — Мне очень нравится паста.",
        "Mi piace poco il vino. — Мне мало нравится вино.",
        "Non mi piace per niente la birra. — Мне совсем не нравится пиво."
      ],
      table: {
        headers: ["Что нравится", "Фраза", "Почему"],
        rows: [
          ["la pizza", "Mi piace la pizza.", "единственное число"],
          ["il caffè", "Mi piace il caffè.", "единственное число / неисчисляемое"],
          ["gli spaghetti", "Mi piacciono gli spaghetti.", "множественное число"],
          ["i dolci", "Mi piacciono i dolci.", "множественное число"],
          ["la frutta", "Mi piace la frutta.", "собирательное единственное число"]
        ]
      },
      tips: [
        "Секрет: не переводи дословно русское «мне нравится». Спроси себя: что именно нравится — одна вещь или много? Если одна — piace. Если много — piacciono.",
        "Форма mi piace очень частая. Выучи её как готовый блок: Mi piace il caffè, Mi piace la musica, Mi piace Roma."
      ],
      mistakes: [
        "Не говори Mi piace gli spaghetti. Правильно: Mi piacciono gli spaghetti.",
        "Не говори Mi piacciono la pizza. Правильно: Mi piace la pizza.",
        "Не забывай non перед mi piace: Non mi piace."
      ],
      examples: [
        { it: "Mi piace la pizza.", ru: "Мне нравится пицца." },
        { it: "Mi piacciono i dolci.", ru: "Мне нравятся сладости." },
        { it: "Non mi piace il pesce.", ru: "Мне не нравится рыба." },
        { it: "Mi piace molto il caffè.", ru: "Мне очень нравится кофе." }
      ]
    },
    {
      title: "Vorrei и preferisco: вежливая просьба и выбор",
      summary: "Vorrei — «я хотел бы», очень вежливо. Preferisco — «я предпочитаю». Эти две фразы спасают в баре, ресторане и магазине.",
      rule: [
        "Vorrei un caffè, per favore. — Я хотел бы кофе, пожалуйста.",
        "Vorrei un'acqua. — Я хотел бы воду.",
        "Vorrei due birre. — Я хотел бы два пива.",
        "Preferisco il tè. — Я предпочитаю чай.",
        "Preferisco la pizza. — Я предпочитаю пиццу.",
        "Preferisco il caffè al tè? — тема с al появится позже, пока просто запомни контраст."
      ],
      table: {
        headers: ["Фраза", "Значение", "Когда использовать"],
        rows: [
          ["Vorrei un caffè.", "Я хотел бы кофе.", "заказ"],
          ["Vorrei un'acqua.", "Я хотел бы воду.", "заказ"],
          ["Preferisco il tè.", "Я предпочитаю чай.", "выбор"],
          ["Mi piace molto.", "Мне очень нравится.", "мнение"],
          ["Non mi piace.", "Мне не нравится.", "мнение"]
        ]
      },
      tips: [
        "Секрет: vorrei — это не «хочу» в грубом смысле, а вежливая форма. В Италии часто говорят Vorrei, per favore.",
        "Если тебе предлагают выбор: Caffè o tè? — можно ответить Preferisco il tè."
      ],
      mistakes: [
        "Не говори Voglio un caffè, если хочешь быть вежливым. Лучше Vorrei un caffè.",
        "Не говори Vorrei un acqua. Правильно: Vorrei un'acqua.",
        "Не говори Vorrei due birra. Правильно: Vorrei due birre."
      ],
      examples: [
        { it: "Vorrei un'acqua naturale, per favore.", ru: "Я хотел бы негазированную воду, пожалуйста." },
        { it: "Vorrei due birre.", ru: "Я хотел бы два пива." },
        { it: "Preferisco il caffè.", ru: "Я предпочитаю кофе." },
        { it: "Mi piace molto la pasta.", ru: "Мне очень нравится паста." }
      ],
      dialog: [
        { who: "Cameriere", text: "Cosa desidera?" },
        { who: "Cliente", text: "Vorrei una pizza e un'acqua, per favore." },
        { who: "Cameriere", text: "Da bere?" },
        { who: "Cliente", text: "Solo l'acqua, grazie." }
      ]
    }
  ],
  exercises: [
    {
      type: "gap",
      question: "Вставь правильную форму",
      sentence: "Mi ___ la pasta.",
      options: ["piace", "piacciono", "ami", "amiamo"],
      answer: "piace",
      hint: "Pasta — единственное число.",
      explain: "Mi piace la pasta — мне нравится паста."
    },
    {
      type: "table",
      question: "Заполни фразу",
      headers: ["Что нравится", "Фраза"],
      rows: [
        ["la pizza", "Mi piace la pizza."],
        ["i dolci", ""]
      ],
      targetRow: 1,
      targetColumn: 1,
      options: ["Mi piacciono i dolci.", "Mi piace i dolci.", "Mi piace il dolci.", "Mi piacciono il dolci."],
      answer: "Mi piacciono i dolci.",
      hint: "Dolci — множественное число, поэтому piacciono.",
      explain: "Mi piacciono i dolci — мне нравятся сладости."
    },
    {
      type: "error-choice",
      question: "Найди ошибку",
      tokens: [
        { text: "Mi", id: "0" },
        { text: "piacciono", id: "wrong" },
        { text: "la", id: "2" },
        { text: "pizza", id: "3" }
      ],
      answer: "wrong",
      hint: "Pizza — единственное число, поэтому piace.",
      explain: "Правильно: Mi piace la pizza."
    },
    {
      type: "dialog-choice",
      question: "Выбери ответ",
      dialog: [
        { who: "Anna", text: "Ti piace il caffè?" }
      ],
      options: [
        "Sì, mi piace molto.",
        "Sì, mi piacciono molto.",
        "Sì, vorrei caffè.",
        "Sì, è caffè."
      ],
      answer: "Sì, mi piace molto.",
      hint: "Caffè — единственное число.",
      explain: "Sì, mi piace molto — Да, мне очень нравится."
    },
    {
      type: "choice",
      question: "Как сказать «Я хотел бы воду»?",
      options: ["Vorrei un'acqua.", "Vorrei un acqua.", "Vorrei una acqua.", "Vorrei il acqua."],
      answer: "Vorrei un'acqua.",
      hint: "Acqua женского рода и начинается с гласной.",
      explain: "Vorrei un'acqua — я хотел бы воду."
    },
    {
      type: "fill",
      question: "Напиши «Мне не нравится рыба»",
      answer: "Non mi piace il pesce",
      accept: [
        "Non mi piace il pesce",
        "non mi piace il pesce",
        "Io non mi piace il pesce",
        "io non mi piace il pesce"
      ],
      placeholder: "Напиши по-итальянски",
      hint: "Pesce мужского рода: il pesce. Non перед mi piace.",
      explain: "Non mi piace il pesce — мне не нравится рыба."
    },
    {
      type: "build",
      question: "Собери фразу: «Я предпочитаю чай»",
      words: ["Preferisco", "il", "tè"],
      answer: "Preferisco il tè",
      hint: "Tè мужского рода: il tè.",
      explain: "Preferisco il tè — я предпочитаю чай."
    },
    {
      type: "match",
      question: "Соедини фразу и значение",
      pairs: [
        { left: "Mi piace la pizza.", right: "Мне нравится пицца." },
        { left: "Mi piacciono i dolci.", right: "Мне нравятся сладости." },
        { left: "Non mi piace il pesce.", right: "Мне не нравится рыба." },
        { left: "Mi piace molto.", right: "Мне очень нравится." },
        { left: "Preferisco il caffè.", right: "Я предпочитаю кофе." }
      ],
      explain: "Piace для одного, piacciono для многих.",
      explainWrong: "Неверная пара. Помни: singular = piace, plural = piacciono."
    },
    {
      type: "error-choice",
      question: "Найди ошибку",
      sentence: "Mi piace molto i dolci.",
      options: ["Mi", "piace", "molto", "i dolci"],
      answer: "piace",
      hint: "Dolci — множественное число, поэтому piacciono.",
      explain: "Правильно: Mi piacciono molto i dolci."
    },
    {
      type: "table",
      question: "Заполни вежливую просьбу",
      headers: ["Ситуация", "Фраза"],
      rows: [
        ["одна вода", "Vorrei un'acqua."],
        ["два пива", ""]
      ],
      targetRow: 1,
      targetColumn: 1,
      options: ["Vorrei due birre.", "Vorrei due birra.", "Vorrei due birri.", "Vorrei un birre."],
      answer: "Vorrei due birre.",
      hint: "Birra -> birre во множественном числе.",
      explain: "Vorrei due birre — я хотел бы два пива."
    }
  ]
};
