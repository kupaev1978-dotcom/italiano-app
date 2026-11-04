window.LESSONS = window.LESSONS || {};

window.LESSONS["a1-u8-l6"] = {
  id: "a1-u8-l6",
  title: "Checkpoint: passato prossimo",
  level: "A1",
  xp: 70,
  theory: [
    {
      title: "Большой тест A1-U8 🎯",
      summary: "Здесь смешаны avere, essere, неправильные participi, маркеры времени и рассказ о прошлом.",
      rule: [
        "Avere + participio: ho mangiato, hai bevuto, abbiamo parlato.",
        "Essere + participio согласуется: sono andato/andata, siamo partiti/partite.",
        "Irregolari: fatto, detto, scritto, letto, preso, visto, aperto, chiuso.",
        "Маркеры: ieri, due giorni fa, la settimana scorsa, l'anno scorso.",
        "già, non ... ancora, non ... mai."
      ],
      tips: [
        "Если глагол движения или возвратный — почти всегда essere.",
        "Если действие с объектом: есть, пить, читать, писать, смотреть — обычно avere."
      ],
      note: "После этого checkpoint остаётся A1-U9: итоговое повторение A1."
    }
  ],
  exercises: [
    {
      type: "gap",
      question: "Вставь правильную форму",
      sentence: "Ieri io ___ una pizza.",
      options: ["ho mangiato", "sono mangiato", "mangiato", "ho mangiare"],
      answer: "ho mangiato",
      hint: "mangiare требует avere.",
      explain: "Ieri ho mangiato una pizza — вчера я ел пиццу."
    },
    {
      type: "table",
      question: "Заполни форму",
      headers: ["Лицо", "Форма"],
      rows: [
        ["io", "sono andato"],
        ["Maria", ""],
        ["noi", "siamo andati"]
      ],
      targetRow: 1,
      targetColumn: 1,
      options: ["è andata", "è andato", "ha andato", "sono andata"],
      answer: "è andata",
      hint: "Maria — женский род, essere: è andata.",
      explain: "Maria è andata — Мария пошла / поехала."
    },
    {
      type: "error-choice",
      question: "Найди ошибку",
      tokens: [
        { text: "Ho", id: "wrong" },
        { text: "partito", id: "1" },
        { text: "ieri", id: "2" }
      ],
      answer: "wrong",
      hint: "С partire используется essere.",
      explain: "Правильно: Sono partito ieri."
    },
    {
      type: "dialog-choice",
      question: "Выбери ответ",
      dialog: [
        { who: "Anna", text: "Hai già visto il film?" }
      ],
      options: [
        "Sì, l'ho già visto.",
        "Sì, sono già visto.",
        "Sì, ho già vedere.",
        "Sì, già vedo."
      ],
      answer: "Sì, l'ho già visto.",
      hint: "vedere -> visto, avere + già.",
      explain: "Sì, l'ho già visto — Да, я уже его видел."
    },
    {
      type: "match",
      question: "Соедини глагол и participio passato",
      pairs: [
        { left: "fare", right: "fatto" },
        { left: "dire", right: "detto" },
        { left: "scrivere", right: "scritto" },
        { left: "leggere", right: "letto" },
        { left: "vedere", right: "visto" }
      ],
      explain: "Это важные неправильные формы.",
      explainWrong: "Неверная пара. fare -> fatto, dire -> detto, scrivere -> scritto, leggere -> letto, vedere -> visto."
    },
    {
      type: "fill",
      question: "Напиши «Я ещё не купил билет»",
      answer: "Non ho ancora comprato il biglietto",
      accept: [
        "Non ho ancora comprato il biglietto",
        "non ho ancora comprato il biglietto",
        "Io non ho ancora comprato il biglietto",
        "io non ho ancora comprato il biglietto"
      ],
      placeholder: "Напиши по-итальянски",
      hint: "Non ... ancora + participio.",
      explain: "Non ho ancora comprato il biglietto — я ещё не купил билет."
    },
    {
      type: "choice",
      question: "Как сказать «Мы никогда не были в Сицилии»?",
      options: [
        "Non siamo mai stati in Sicilia.",
        "Non abbiamo mai stati in Sicilia.",
        "Siamo mai stati in Sicilia.",
        "Non siamo ancora stati in Sicilia."
      ],
      answer: "Non siamo mai stati in Sicilia.",
      hint: "Non ... mai + essere + stati.",
      explain: "Non siamo mai stati in Sicilia — мы никогда не были в Сицилии."
    },
    {
      type: "error-choice",
      question: "Найди ошибку",
      sentence: "Maria ha andato al mercato.",
      options: ["Maria", "ha", "andato", "al", "mercato"],
      answer: "ha",
      hint: "С andare используется essere.",
      explain: "Правильно: Maria è andata al mercato."
    },
    {
      type: "build",
      question: "Собери фразу: «В прошлом году я ездил в Италию»",
      words: ["L'anno", "scorso", "sono", "andato", "in", "Italia"],
      answer: "L'anno scorso sono andato in Italia",
      hint: "L'anno scorso + sono andato.",
      explain: "L'anno scorso sono andato in Italia — в прошлом году я ездил в Италию."
    },
    {
      type: "table",
      question: "Заполни связку рассказа",
      headers: ["Значение", "Фраза"],
      rows: [
        ["сначала", "Prima ho studiato."],
        ["в конце", ""]
      ],
      targetRow: 1,
      targetColumn: 1,
      options: ["Alla fine sono tornato.", "Poi ho studiato.", "Prima sono tornato.", "Non sono tornato."],
      answer: "Alla fine sono tornato.",
      hint: "Alla fine = в конце.",
      explain: "Alla fine sono tornato — в конце я вернулся."
    },
    {
      type: "dialog-choice",
      question: "Выбери ответ",
      dialog: [
        { who: "Anna", text: "Cosa hai fatto nel fine settimana?" }
      ],
      options: [
        "Sono andato a Roma e ho visitato un museo.",
        "Vado a Roma e visito un museo.",
        "Sono andare a Roma e ho visitare.",
        "Ho andato a Roma e visitato un museo."
      ],
      answer: "Sono andato a Roma e ho visitato un museo.",
      hint: "Passato prossimo: sono andato + ho visitato.",
      explain: "Sono andato a Roma e ho visitato un museo — я ездил в Рим и посетил музей."
    },
    {
      type: "error-choice",
      question: "Найди ошибку",
      tokens: [
        { text: "Ho", id: "0" },
        { text: "fatto", id: "1" },
        { text: "la", id: "wrong" },
        { text: "colazione", id: "3" }
      ],
      answer: "wrong",
      hint: "Устойчивое выражение: fare colazione, без артикля.",
      explain: "Правильно: Ho fatto colazione."
    },
    {
      type: "match",
      question: "Соедини фразу и перевод",
      pairs: [
        { left: "Ho preso il treno.", right: "Я сел на поезд." },
        { left: "Sono arrivato in ritardo.", right: "Я прибыл с опозданием." },
        { left: "Ho detto la verità.", right: "Я сказал правду." },
        { left: "Non ho ancora mangiato.", right: "Я ещё не ел." },
        { left: "Siamo partiti alle otto.", right: "Мы выехали в восемь." }
      ],
      explain: "Это практичные фразы passato prossimo.",
      explainWrong: "Неверная пара. prendere il treno = сесть на поезд, arrivare = прибыть, dire = сказать, non ancora = ещё не, partire = выехать."
    },
    {
      type: "gap",
      question: "Вставь правильную форму",
      sentence: "Loro ___ a casa ieri sera.",
      options: ["sono rimasti", "hanno rimasti", "sono rimasto", "rimasti"],
      answer: "sono rimasti",
      hint: "restare требует essere; loro maschile plurale: rimasti.",
      explain: "Loro sono rimasti a casa ieri sera — они остались дома вчера вечером."
    },
    {
      type: "choice",
      question: "Как сказать «Я уже сделал домашнее задание»?",
      options: [
        "Ho già fatto i compiti.",
        "Sono già fatto i compiti.",
        "Ho già fare i compiti.",
        "Già ho i compiti."
      ],
      answer: "Ho già fatto i compiti.",
      hint: "fare -> fatto, avere + già.",
      explain: "Ho già fatto i compiti — я уже сделал домашнее задание."
    }
  ]
};
