window.LESSONS = window.LESSONS || {};

window.LESSONS["a1-u2-l6"] = {
  id: "a1-u2-l6",
  title: "Checkpoint: город, предлоги и маршрут",
  level: "A1",
  xp: 70,
  theory: [
    {
      title: "Большой тест A1-U2 🎯",
      summary: "Здесь смешаны простые предлоги, артикулированные предлоги, места в городе, дорога и транспорт. Цель — проверить, что ты можешь ориентироваться в городе по-итальянски.",
      rule: [
        "a + город: vado a Roma.",
        "in + страна/улица/транспорт: vivo in Italia, abito in via Roma, vado in autobus.",
        "da + источник/человек: vengo da casa, sono dal medico.",
        "артикулированные предлоги: al, alla, dal, nel, sul, all', nell'.",
        "маршрут: prima, poi, alla fine, dritto, a destra, a sinistra.",
        "транспорт: biglietto, binario, fermata, partire, arrivare."
      ],
      tips: [
        "Если сомневаешься в предлоге, спроси себя: это город, страна, человек, поверхность или назначение?",
        "Ошибка в checkpoint стоит сердечко, но показывает, какую тему повторить: предлоги, артикулированные предлоги или транспорт."
      ],
      note: "После этого checkpoint можно переходить к A1-U3: люди, семья, описание и принадлежность."
    }
  ],
  exercises: [
    {
      type: "gap",
      question: "Выбери предлог",
      sentence: "Vivo ___ Italia.",
      options: ["in", "a", "da", "con"],
      answer: "in",
      hint: "Со странами обычно in.",
      explain: "Vivo in Italia — я живу в Италии."
    },
    {
      type: "table",
      question: "Заполни артикулированный предлог",
      headers: ["Фраза", "Форма"],
      rows: [
        ["a + il bar", "al bar"],
        ["in + la piazza", ""]
      ],
      targetRow: 1,
      targetColumn: 1,
      options: ["nella piazza", "in la piazza", "al piazza", "dal piazza"],
      answer: "nella piazza",
      hint: "in + la = nella.",
      explain: "nella piazza — на площади."
    },
    {
      type: "match",
      question: "Соедини место и артикль",
      pairs: [
        { left: "stazione", right: "la" },
        { left: "ospedale", right: "l'" },
        { left: "bar", right: "il" },
        { left: "farmacia", right: "la" },
        { left: "supermercato", right: "il" }
      ],
      explain: "Род и артикль нужно запоминать вместе со словом.",
      explainWrong: "Неверная пара. Stazione и farmacia женского рода, ospedale начинается с гласной, bar и supermercato мужского рода."
    },
    {
      type: "choice",
      question: "Как спросить «Где остановка автобуса?»",
      options: ["Dov'è la fermata dell'autobus?", "Dove è fermata autobus?", "Chi è la fermata?", "Quando è l'autobus?"],
      answer: "Dov'è la fermata dell'autobus?",
      hint: "dell' = di + l'.",
      explain: "Dov'è la fermata dell'autobus? — Где автобусная остановка?"
    },
    {
      type: "fill",
      question: "Напиши «Поверните направо»",
      answer: "Giri a destra",
      accept: ["Giri a destra", "giri a destra", "Gira a destra", "gira a destra"],
      placeholder: "Напиши по-итальянски",
      hint: "destra = право.",
      explain: "Giri a destra — поверните направо."
    },
    {
      type: "build",
      question: "Собери фразу: «Сначала идите прямо, потом поверните налево»",
      words: ["Prima", "vada", "dritto", ",", "poi", "giri", "a", "sinistra"],
      answer: "Prima vada dritto poi giri a sinistra",
      hint: "Prima... poi...",
      explain: "Prima vada dritto, poi giri a sinistra."
    },
    {
      type: "gap",
      question: "Выбериtransport word",
      sentence: "Prendo il ___ per Milano.",
      options: ["treno", "biglietto", "binario", "fermata"],
      answer: "treno",
      hint: "Ехать до города можно поездом.",
      explain: "Prendo il treno per Milano — я сажусь на поезд до Милана."
    },
    {
      type: "table",
      question: "Заполни вопрос",
      headers: ["Русский", "Italiano"],
      rows: [
        ["Сколько стоит билет?", "Quanto costa il biglietto?"],
        ["Во сколько отправляется поезд?", ""]
      ],
      targetRow: 1,
      targetColumn: 1,
      options: ["A che ora parte il treno?", "Dove è il treno?", "Quanto costa il treno?", "Quando arriva il biglietto?"],
      answer: "A che ora parte il treno?",
      hint: "A che ora = во сколько; parte = отправляется.",
      explain: "A che ora parte il treno? — Во сколько отправляется поезд?"
    },
    {
      type: "match",
      question: "Соедини фразу и значение",
      pairs: [
        { left: "Sono dal medico.", right: "Я у врача." },
        { left: "È dietro l'angolo.", right: "Это за углом." },
        { left: "Un biglietto per Roma.", right: "Билет до Рима." },
        { left: "Scendo alla prossima fermata.", right: "Я выхожу на следующей остановке." },
        { left: "Abito in via Dante.", right: "Я живу на улице Данте." }
      ],
      explain: "Это практические фразы A1-U2.",
      explainWrong: "Неверная пара. dal medico = у врача, dietro l'angolo = за углом, per Roma = до Рима, fermata = остановка, in via = на улице."
    },
    {
      type: "choice",
      question: "Какая фраза неверная?",
      options: ["Vado a Napoli.", "Sono nel parco.", "Abito in Francia.", "Vado in Roma."],
      answer: "Vado in Roma.",
      hint: "С городом нужно a.",
      explain: "Правильно: Vado a Roma."
    },
    {
      type: "fill",
      question: "Напиши «Бар на углу»",
      answer: "Il bar è all'angolo",
      accept: [
        "Il bar è all'angolo",
        "il bar è all'angolo",
        "Il bar è all'angolo.",
        "il bar è all'angolo."
      ],
      placeholder: "Напиши по-итальянски",
      hint: "all'angolo = на углу.",
      explain: "Il bar è all'angolo — бар на углу."
    },
    {
      type: "table",
      question: "Заполни предлог места",
      headers: ["Фраза", "Предлог/форма"],
      rows: [
        ["La banca è ___ la farmacia.", "accanto a"],
        ["Il museo è ___ il bar.", ""]
      ],
      targetRow: 1,
      targetColumn: 1,
      options: ["di fronte a", "accanto a", "in", "da"],
      answer: "di fronte a",
      hint: "Напротив — di fronte a.",
      explain: "Il museo è di fronte al bar — музей напротив бара."
    },
    {
      type: "build",
      question: "Собери фразу: «Я пересаживаюсь на вокзале»",
      words: ["Cambio", "alla", "stazione"],
      answer: "Cambio alla stazione",
      hint: "a + la stazione = alla stazione.",
      explain: "Cambio alla stazione — я пересаживаюсь на вокзале."
    },
    {
      type: "match",
      question: "Соедини глагол транспорта и значение",
      pairs: [
        { left: "partire", right: "отправляться" },
        { left: "arrivare", right: "прибывать" },
        { left: "salire", right: "садиться, подниматься" },
        { left: "scendere", right: "выходить, спускаться" },
        { left: "cambiare", right: "пересаживаться, менять" }
      ],
      explain: "Эти глаголы нужны в поездках.",
      explainWrong: "Неверная пара. partire = отправляться, arrivare = прибывать, salire = садиться, scendere = выходить, cambiare = пересаживаться."
    },
    {
      type: "choice",
      question: "Как сказать «Это далеко от центра»?",
      options: ["È lontano dal centro.", "È vicino dal centro.", "È a centro.", "È su centro."],
      answer: "È lontano dal centro.",
      hint: "lontano da + il = lontano dal.",
      explain: "È lontano dal centro — это далеко от центра."
    }
  ]
};
