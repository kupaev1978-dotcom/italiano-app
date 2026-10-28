window.LESSONS = window.LESSONS || {};

window.LESSONS["a1-u1-l5"] = {
  id: "a1-u1-l5",
  title: "Checkpoint: presente и важные глаголы",
  level: "A1",
  xp: 70,
  theory: [
    {
      title: "Большой тест A1-U1 🎯",
      summary: "Здесь смешаны глаголы на -ERE, -IRE, -isc-, неправильные dire, bere, uscire, sapere, conoscere, а также отрицание и вопросы.",
      rule: [
        "-ERE: -o, -i, -e, -iamo, -ete, -ono.",
        "-IRE: -o, -i, -e, -iamo, -ite, -ono.",
        "-isc-: -isco, -isci, -isce, -iamo, -ite, -iscono.",
        "Sapere = знать факт/уметь; conoscere = быть знакомым с человеком/местом.",
        "Non ставится перед глаголом; на отрицательный вопрос отвечаем Sì, если действие положительное, и No, non..., если отрицательное."
      ],
      tips: [
        "Если сомневаешься, сначала определи тип глагола: -ARE, -ERE, -IRE или -isc-.",
        "В вопросах про «знать» спроси себя: это факт/умение или человек/место?"
      ],
      note: "После этого checkpoint можно переходить к A1-U2: предлоги, город и направление."
    }
  ],
  exercises: [
    {
      type: "gap",
      question: "Вставь форму глагола scrivere для noi",
      sentence: "Noi ___ una lettera.",
      options: ["scriviamo", "scrivete", "scrivono", "scrivo"],
      answer: "scriviamo",
      hint: "Для noi у -ERE окончание -iamo.",
      explain: "Noi scriviamo una lettera — мы пишем письмо."
    },
    {
      type: "table",
      question: "Заполни форму для tu глагола dormire",
      headers: ["Лицо", "Форма"],
      rows: [
        ["io", "dormo"],
        ["tu", ""],
        ["lui / lei", "dorme"]
      ],
      targetRow: 1,
      targetColumn: 1,
      options: ["dormi", "dormo", "dorme", "dormite"],
      answer: "dormi",
      hint: "Для tu у -IRE окончание -i.",
      explain: "Tu dormi — ты спишь."
    },
    {
      type: "choice",
      question: "Какая форма глагола capire неверная?",
      options: ["capisco", "capisci", "capisciamo", "capiscono"],
      answer: "capisciamo",
      hint: "В noi нет -isc-.",
      explain: "Правильно: capiamo."
    },
    {
      type: "match",
      question: "Соедини инфинитив и форму io",
      pairs: [
        { left: "leggere", right: "leggo" },
        { left: "aprire", right: "apro" },
        { left: "finire", right: "finisco" },
        { left: "bere", right: "bevo" },
        { left: "sapere", right: "so" }
      ],
      explain: "Это частотные формы io, которые нужно узнавать сразу.",
      explainWrong: "Неверная пара. Помни: leggere -> leggo, bere -> bevo, sapere -> so."
    },
    {
      type: "fill",
      question: "Напиши «Они понимают»",
      answer: "Capiscono",
      accept: ["Capiscono", "capiscono", "Loro capiscono", "loro capiscono"],
      placeholder: "Форма для loro",
      hint: "Глагол на -isc- в loro получает -iscono.",
      explain: "Loro capiscono — они понимают."
    },
    {
      type: "gap",
      question: "Выбери правильный глагол",
      sentence: "___ nuotare. (Я умею плавать.)",
      options: ["So", "Conosco", "Sapere", "Conoscere"],
      answer: "So",
      hint: "Уметь + инфинитив = sapere.",
      explain: "So nuotare — я умею плавать."
    },
    {
      type: "choice",
      question: "Как сказать «Я знаю эту песню»?",
      options: ["So questa canzone.", "Conosco questa canzone.", "Sapere questa canzone.", "Conoscere questa canzone."],
      answer: "Conosco questa canzone.",
      hint: "Знакомство с вещью/произведением — conoscere.",
      explain: "Conosco questa canzone — я знаю эту песню."
    },
    {
      type: "table",
      question: "Заполни форму для noi глагола uscire",
      headers: ["Лицо", "Форма"],
      rows: [
        ["io", "esco"],
        ["tu", "esci"],
        ["lui / lei", "esce"],
        ["noi", ""],
        ["voi", "uscite"],
        ["loro", "escono"]
      ],
      targetRow: 3,
      targetColumn: 1,
      options: ["usciamo", "esciamo", "uscite", "escono"],
      answer: "usciamo",
      hint: "В noi у uscire stem usc-: usciamo.",
      explain: "Noi usciamo — мы выходим."
    },
    {
      type: "build",
      question: "Собери фразу: «Мы не пьём вино»",
      words: ["Non", "beviamo", "vino"],
      answer: "Non beviamo vino",
      hint: "Non перед глаголом beviamo.",
      explain: "Non beviamo vino — мы не пьём вино."
    },
    {
      type: "gap",
      question: "Вставь вопросительное слово",
      sentence: "___ parti? (Когда ты уезжаешь?)",
      options: ["Quando", "Dove", "Perché", "Quanto"],
      answer: "Quando",
      hint: "Когда — quando.",
      explain: "Quando parti? — Когда ты уезжаешь?"
    },
    {
      type: "choice",
      question: "Тебя спрашивают: Non capisci? Ты понимаешь. Как ответить?",
      options: ["No, capisco.", "Sì, capisco.", "Sì, non capisco.", "Non capisco."],
      answer: "Sì, capisco.",
      hint: "Sì подтверждает положительное действие.",
      explain: "Sì, capisco — Да, я понимаю."
    },
    {
      type: "match",
      question: "Соедини фразу и перевод",
      pairs: [
        { left: "Leggo un libro.", right: "Я читаю книгу." },
        { left: "Preferisco il caffè.", right: "Я предпочитаю кофе." },
        { left: "So cucinare.", right: "Я умею готовить." },
        { left: "Conosco Marco.", right: "Я знаю Марко." },
        { left: "Non vedo nessuno.", right: "Я не вижу никого." }
      ],
      explain: "Это базовые фразы A1-U1.",
      explainWrong: "Неверная пара. Помни разницу: sapere — факт/умение, conoscere — человек/место/вещь."
    },
    {
      type: "fill",
      question: "Напиши «Они не знают ответ»",
      answer: "Non sanno la risposta",
      accept: [
        "Non sanno la risposta",
        "non sanno la risposta",
        "Loro non sanno la risposta",
        "loro non sanno la risposta"
      ],
      placeholder: "Напиши по-итальянски",
      hint: "Loro + sapere = sanno; non перед глаголом.",
      explain: "Non sanno la risposta — они не знают ответ."
    },
    {
      type: "table",
      question: "Заполни форму для voi глагола finire",
      headers: ["Лицо", "Форма"],
      rows: [
        ["noi", "finiamo"],
        ["voi", ""],
        ["loro", "finiscono"]
      ],
      targetRow: 1,
      targetColumn: 1,
      options: ["finite", "finiscite", "finiamo", "finiscono"],
      answer: "finite",
      hint: "В voi у глаголов на -isc- нет -isc-: -ite.",
      explain: "Voi finite — вы заканчиваете."
    },
    {
      type: "build",
      question: "Собери вопрос: «Где ты живёшь?»",
      words: ["Dove", "abiti", "?"],
      answer: "Dove abiti ?",
      hint: "Dove + глагол.",
      explain: "Dove abiti? — Где ты живёшь?"
    }
  ]
};
