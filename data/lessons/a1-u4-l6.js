window.LESSONS = window.LESSONS || {};

window.LESSONS["a1-u4-l6"] = {
  id: "a1-u4-l6",
  title: "Checkpoint: еда, ресторан и покупки",
  level: "A1",
  xp: 60,
  theory: [
    {
      title: "Большой тест A1-U4 🎯",
      summary: "Здесь смешаны еда, напитки, предпочтения, ресторан, одежда, цены и оплата. Цель — проверить, что ты можешь реально заказать, купить и описать свои вкусы.",
      rule: [
        "Еда: il pane, la pasta, la carne, il pesce, la frutta, l'acqua, il caffè.",
        "Предпочтения: Mi piace + singular/uncountable; Mi piacciono + plural.",
        "Ресторан: Vorrei..., Da bere?, È tutto, Il conto, per favore.",
        "Одежда: i pantaloni, le scarpe, gli occhiali, Che taglia hai?, Posso provare...?",
        "Покупки: Quanto costa? / Quanto costano?, in contanti, con la carta, lo scontrino."
      ],
      tips: [
        "Если сомневаешься в piace/piacciono, посчитай: одна вещь — piace, много — piacciono.",
        "Если сомневаешься в costa/costano, посчитай предмет: один — costa, несколько — costano."
      ],
      note: "После checkpoint можно переходить к A1-U5: время, даты, распорядок дня."
    }
  ],
  exercises: [
    {
      type: "gap",
      question: "Выбери артикль",
      sentence: "___ acqua è fresca.",
      options: ["L'", "Il", "Lo", "La"],
      answer: "L'",
      hint: "Acqua женского рода и начинается с гласной.",
      explain: "L'acqua è fresca — вода свежая."
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
      options: ["Mi piacciono i dolci.", "Mi piace i dolci.", "Mi piace il dolci.", "Mi piacciono il dolce."],
      answer: "Mi piacciono i dolci.",
      hint: "Dolci — множественное число.",
      explain: "Mi piacciono i dolci — мне нравятся сладости."
    },
    {
      type: "error-choice",
      question: "Найди ошибку",
      tokens: [
        { text: "Vorrei", id: "0" },
        { text: "un", id: "wrong" },
        { text: "birra", id: "2" }
      ],
      answer: "wrong",
      hint: "Birra женского рода: una birra.",
      explain: "Правильно: Vorrei una birra."
    },
    {
      type: "dialog-choice",
      question: "Выбери ответ",
      dialog: [
        { who: "Commesso", text: "Che taglia cerca?" }
      ],
      options: [
        "La 42.",
        "Il conto.",
        "Un caffè.",
        "È tutto."
      ],
      answer: "La 42.",
      hint: "Вопрос про размер одежды.",
      explain: "La 42 — 42-й размер."
    },
    {
      type: "choice",
      question: "Как спросить «Сколько стоят туфли?»",
      options: ["Quanto costano le scarpe?", "Quanto costa le scarpe?", "Quanto costo le scarpe?", "Quanto costiamo le scarpe?"],
      answer: "Quanto costano le scarpe?",
      hint: "Scarpe — множественное число.",
      explain: "Quanto costano le scarpe? — Сколько стоят туфли?"
    },
    {
      type: "fill",
      question: "Напиши «Мне очень нравится паста»",
      answer: "Mi piace molto la pasta",
      accept: [
        "Mi piace molto la pasta",
        "mi piace molto la pasta",
        "A me piace molto la pasta",
        "a me piace molto la pasta"
      ],
      placeholder: "Напиши по-итальянски",
      hint: "Pasta — единственное число: piace.",
      explain: "Mi piace molto la pasta — мне очень нравится паста."
    },
    {
      type: "table",
      question: "Заполни множественное число",
      headers: ["Единственное число", "Множественное число"],
      rows: [
        ["uovo", "uova"],
        ["mela", ""]
      ],
      targetRow: 1,
      targetColumn: 1,
      options: ["mele", "meli", "malas", "melae"],
      answer: "mele",
      hint: "Mela -> mele.",
      explain: "mela -> mele."
    },
    {
      type: "error-choice",
      question: "Найди ошибку",
      tokens: [
        { text: "Il", id: "0" },
        { text: "pane", id: "1" },
        { text: "sono", id: "wrong" },
        { text: "fresco", id: "3" }
      ],
      answer: "wrong",
      hint: "Pane — единственное число, поэтому è.",
      explain: "Правильно: Il pane è fresco."
    },
    {
      type: "dialog-choice",
      question: "Выбери ответ",
      dialog: [
        { who: "Cliente", text: "Posso pagare in contanti?" }
      ],
      options: [
        "Sì, certo.",
        "Sì, per favore.",
        "Sì, prego.",
        "Sì, arrivederci."
      ],
      answer: "Sì, certo.",
      hint: "На вопрос о возможности отвечают Sì, certo.",
      explain: "Sì, certo — Да, конечно."
    },
    {
      type: "match",
      question: "Соедини одежду и артикль",
      pairs: [
        { left: "pantaloni", right: "i" },
        { left: "scarpe", right: "le" },
        { left: "occhiali", right: "gli" },
        { left: "giacca", right: "la" },
        { left: "cappotto", right: "il" }
      ],
      explain: "Род и число важны для одежды.",
      explainWrong: "Неверная пара. Pantaloni = i, scarpe = le, occhiali = gli, giacca = la, cappotto = il."
    },
    {
      type: "gap",
      question: "Вставь правильную форму",
      sentence: "Mi ___ gli spaghetti.",
      options: ["piace", "piacciono", "ami", "amano"],
      answer: "piacciono",
      hint: "Spaghetti — множественное число.",
      explain: "Mi piacciono gli spaghetti — мне нравятся спагетти."
    },
    {
      type: "table",
      question: "Заполни артикль",
      headers: ["Еда", "Артикль"],
      rows: [
        ["pane", "il"],
        ["carne", ""]
      ],
      targetRow: 1,
      targetColumn: 1,
      options: ["la", "il", "lo", "l'"],
      answer: "la",
      hint: "Carne женского рода.",
      explain: "la carne — мясо."
    },
    {
      type: "error-choice",
      question: "Найди ошибку",
      tokens: [
        { text: "Quanto", id: "0" },
        { text: "costa", id: "wrong" },
        { text: "le", id: "2" },
        { text: "scarpe", id: "3" }
      ],
      answer: "wrong",
      hint: "Scarpe — множественное число: costano.",
      explain: "Правильно: Quanto costano le scarpe?"
    },
    {
      type: "dialog-choice",
      question: "Выбери ответ",
      dialog: [
        { who: "Cameriere", text: "Da bere?" }
      ],
      options: [
        "Un'acqua naturale, per favore.",
        "Il conto, per favore.",
        "Prego.",
        "È tutto."
      ],
      answer: "Un'acqua naturale, per favore.",
      hint: "Da bere? спрашивает про напиток.",
      explain: "Un'acqua naturale, per favore — негазированную воду, пожалуйста."
    },
    {
      type: "build",
      question: "Собери фразу: «Я хотел бы кофе и воду»",
      words: ["Vorrei", "un", "caffè", "e", "un'acqua"],
      answer: "Vorrei un caffè e un'acqua",
      hint: "Caffè = un caffè, acqua = un'acqua.",
      explain: "Vorrei un caffè e un'acqua — я хотел бы кофе и воду."
    },
    {
      type: "choice",
      question: "Как попросить чек?",
      options: ["Mi fa lo scontrino, per favore.", "Il conto, per favore.", "Prego.", "È tutto."],
      answer: "Mi fa lo scontrino, per favore.",
      hint: "Scontrino — чек.",
      explain: "Mi fa lo scontrino, per favore — дайте мне чек, пожалуйста."
    }
  ]
};
