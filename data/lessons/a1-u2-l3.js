window.LESSONS = window.LESSONS || {};

window.LESSONS["a1-u2-l3"] = {
  id: "a1-u2-l3",
  title: "Места в городе",
  level: "A1",
  xp: 35,
  theory: [
    {
      title: "Где что находится: базовые места",
      summary: "Эти слова нужны, чтобы спросить дорогу, построить маршрут и понять объявления в городе. Запоминай каждое слово сразу с артиклем.",
      rule: [
        "la stazione — вокзал",
        "la fermata — остановка",
        "la piazza — площадь",
        "la via — улица",
        "la banca — банк",
        "la farmacia — аптека",
        "la libreria — книжный магазин",
        "la biblioteca — библиотека",
        "il bar — бар, кафе",
        "il ristorante — ресторан",
        "il supermercato — супермаркет",
        "il negozio — магазин",
        "l'ospedale — больница",
        "l'ufficio — офис, учреждение",
        "il municipio — мэрия",
        "il teatro — театр",
        "il cinema — кино",
        "il parco — парк",
        "il mercato — рынок"
      ],
      table: {
        headers: ["Мужской род", "Женский род", "Особый случай"],
        rows: [
          ["il bar", "la stazione", "l'ospedale"],
          ["il ristorante", "la fermata", "l'ufficio"],
          ["il supermercato", "la piazza", "l'aeroporto"],
          ["il negozio", "la banca", "l'università"]
        ]
      },
      tips: [
        "Секрет: слова на -zione обычно женского рода: la stazione, la nazione, la situazione. Это помогает угадывать род.",
        "Слово ospedale мужского рода, хотя начинается с гласной: l'ospedale. Не la ospedale."
      ],
      mistakes: [
        "Не говори il stazione. Правильно: la stazione.",
        "Не говори la ospedale. Правильно: l'ospedale, мужской род.",
        "Не переводи «магазин» всегда как negozio. Supermercato — продуктовый супермаркет, negozio — вообще магазин, bottega — маленький магазинчик/мастерская."
      ],
      examples: [
        { it: "La stazione è vicina.", ru: "Вокзал рядом." },
        { it: "Vado al supermercato.", ru: "Я иду в супермаркет." },
        { it: "La farmacia è aperta.", ru: "Аптека открыта." },
        { it: "L'ospedale è lontano.", ru: "Больница далеко." }
      ]
    },
    {
      title: "Предлоги места: vicino, lontano, accanto, di fronte, dietro, davanti",
      summary: "Чтобы сказать, где находится место, нужны не только существительные, но и маленькие слова-координаты.",
      rule: [
        "vicino — рядом, близко: È vicino alla stazione.",
        "lontano — далеко: È lontano dal centro.",
        "accanto a — рядом с: Il bar è accanto alla farmacia.",
        "di fronte a — напротив: La banca è di fronte al municipio.",
        "dietro — позади, за: Il parco è dietro la stazione.",
        "davanti — перед: La fermata è davanti alla scuola.",
        "tra — между: Il negozio è tra la banca e il bar."
      ],
      table: {
        headers: ["Слово", "Значение", "Пример"],
        rows: [
          ["vicino", "рядом", "È vicino alla piazza."],
          ["lontano", "далеко", "È lontano dal centro."],
          ["accanto", "рядом с", "Accanto alla farmacia."],
          ["di fronte", "напротив", "Di fronte al bar."],
          ["dietro", "за, позади", "Dietro l'angolo."],
          ["davanti", "перед", "Davanti alla scuola."]
        ]
      },
      tips: [
        "Секрет: vicino и lontano часто требуют a + артикль: vicino alla stazione, lontano dal centro. На A1 запоминай готовые блоки.",
        "Dietro l'angolo — очень полезная фраза: «за углом». All'angolo — «на углу»."
      ],
      mistakes: [
        "Не говори vicino la stazione. Лучше: vicino alla stazione.",
        "Не путай dietro l'angolo и all'angolo: dietro l'angolo = за углом, all'angolo = на углу."
      ],
      examples: [
        { it: "Il bar è all'angolo.", ru: "Бар на углу." },
        { it: "La farmacia è dietro l'angolo.", ru: "Аптека за углом." },
        { it: "La scuola è davanti alla chiesa.", ru: "Школа перед церковью." },
        { it: "Il supermercato è tra la banca e il bar.", ru: "Супермаркет между банком и баром." }
      ],
      dialog: [
        { who: "Turista", text: "Scusi, dov'è la farmacia?", ru: "Извините, где аптека?" },
        { who: "Passante", text: "È vicino alla piazza, dietro l'angolo.", ru: "Она рядом с площадью, за углом." },
        { who: "Turista", text: "Grazie mille!", ru: "Огромное спасибо!" }
      ]
    }
  ],
  exercises: [
    {
      type: "gap",
      question: "Выбери артикль",
      sentence: "___ stazione è vicina.",
      options: ["La", "Il", "L'", "Le"],
      answer: "La",
      hint: "Stazione женского рода.",
      explain: "La stazione è vicina — вокзал рядом."
    },
    {
      type: "match",
      question: "Соедини место и перевод",
      pairs: [
        { left: "la fermata", right: "остановка" },
        { left: "il supermercato", right: "супермаркет" },
        { left: "la farmacia", right: "аптека" },
        { left: "l'ospedale", right: "больница" },
        { left: "il municipio", right: "мэрия" }
      ],
      explain: "Эти слова нужны для ориентации в городе.",
      explainWrong: "Неверная пара. Fermata = остановка, supermercato = супермаркет, farmacia = аптека, ospedale = больница, municipio = мэрия."
    },
    {
      type: "table",
      question: "Определи артикль",
      headers: ["Слово", "Артикль"],
      rows: [
        ["stazione", "la"],
        ["ospedale", ""]
      ],
      targetRow: 1,
      targetColumn: 1,
      options: ["l'", "la", "il", "le"],
      answer: "l'",
      hint: "Ospedale мужского рода и начинается с гласной.",
      explain: "l'ospedale — больница."
    },
    {
      type: "choice",
      question: "Как спросить «Где аптека?»",
      options: ["Dov'è la farmacia?", "Dove è farmacia?", "Chi è la farmacia?", "Quando è la farmacia?"],
      answer: "Dov'è la farmacia?",
      hint: "Dov'è = где находится.",
      explain: "Dov'è la farmacia? — Где аптека?"
    },
    {
      type: "fill",
      question: "Напиши «Банк рядом с площадью»",
      answer: "La banca è vicina alla piazza",
      accept: [
        "La banca è vicina alla piazza",
        "la banca è vicina alla piazza",
        "La banca è vicino alla piazza",
        "banca è vicina alla piazza"
      ],
      placeholder: "Напиши по-итальянски",
      hint: "vicino alla piazza — рядом с площадью.",
      explain: "La banca è vicina alla piazza — банк рядом с площадью."
    },
    {
      type: "build",
      question: "Собери фразу: «Музей напротив бара»",
      words: ["Il", "museo", "è", "di", "fronte", "al", "bar"],
      answer: "Il museo è di fronte al bar",
      hint: "di fronte a + il = di fronte al.",
      explain: "Il museo è di fronte al bar — музей напротив бара."
    },
    {
      type: "gap",
      question: "Выбери правильную фразу",
      sentence: "Il bar è ___ angolo.",
      options: ["all'", "a", "di", "su"],
      answer: "all'",
      hint: "На углу — all'angolo.",
      explain: "Il bar è all'angolo — бар на углу."
    },
    {
      type: "match",
      question: "Соедини предлог места и значение",
      pairs: [
        { left: "vicino a", right: "рядом с" },
        { left: "lontano da", right: "далеко от" },
        { left: "accanto a", right: "рядом с, возле" },
        { left: "di fronte a", right: "напротив" },
        { left: "dietro", right: "за, позади" }
      ],
      explain: "Эти слова помогают объяснить маршрут.",
      explainWrong: "Неверная пара. vicino = рядом, lontano = далеко, accanto = возле, di fronte = напротив, dietro = за."
    },
    {
      type: "choice",
      question: "Какая фраза неверная?",
      options: ["La stazione è vicina.", "L'ospedale è lontano.", "Il supermercato è tra la banca e il bar.", "La farmacia è dietro la angolo."],
      answer: "La farmacia è dietro la angolo.",
      hint: "angolo мужского рода и начинается с гласной: l'angolo.",
      explain: "Правильно: dietro l'angolo."
    },
    {
      type: "table",
      question: "Заполни место",
      headers: ["Русский", "Italiano"],
      rows: [
        ["вокзал", "la stazione"],
        ["остановка", ""]
      ],
      targetRow: 1,
      targetColumn: 1,
      options: ["la fermata", "il fermata", "la stazione", "il mercato"],
      answer: "la fermata",
      hint: "Fermata женского рода.",
      explain: "la fermata — остановка."
    }
  ]
};
