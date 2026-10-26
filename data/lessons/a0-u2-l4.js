window.LESSONS = window.LESSONS || {};

window.LESSONS["a0-u2-l4"] = {
  id: "a0-u2-l4",
  title: "Checkpoint: прилагательные, цвета, глаголы, семья и дом",
  level: "A0",
  xp: 60,
  theory: [
    {
      title: "Большой тест блока A0-U4 🎯",
      summary: "Здесь смешаны прилагательные, цвета, глаголы на -ARE, неправильные глаголы andare/venire/fare/stare, семья, дом и конструкция c’è / ci sono.",
      rule: [
        "Прилагательные согласуются: la casa alta, i libri interessanti.",
        "Цвета тоже согласуются, но blu не меняется, а verde в ед. ч. не меняется по роду.",
        "Глаголы на -ARE: -o, -i, -a, -iamo, -ate, -ano.",
        "Andare, venire, fare, stare — неправильные, формы нужно узнавать.",
        "C’è — один предмет, ci sono — несколько."
      ],
      tips: [
        "Если сомневаешься, сначала определи род и число, потом выбирай окончание.",
        "Подсказка стоит сердечко, но иногда лучше использовать её, чем угадывать."
      ],
      note: "После этого checkpoint уровень A0 будет полностью закрыт по содержанию. Дальше начнётся A1."
    }
  ],
  exercises: [
    {
      type: "choice",
      question: "Как сказать «дом большой»?",
      options: ["la casa grande", "la casa grandi", "il casa grande", "la casa granda"],
      answer: "la casa grande",
      hint: "Grande в единственном числе не меняется по роду.",
      explain: "la casa grande — большой дом."
    },
    {
      type: "gap",
      question: "Вставь цвет",
      sentence: "Ho i capelli ___.",
      options: ["nero", "nera", "neri", "nere"],
      answer: "neri",
      hint: "Capelli — мужской род множественного числа.",
      explain: "Ho i capelli neri — у меня чёрные волосы."
    },
    {
      type: "table",
      question: "Заполни окончание глагола",
      headers: ["Лицо", "Форма"],
      rows: [
        ["io", "parlo"],
        ["tu", "parli"],
        ["noi", ""]
      ],
      targetRow: 2,
      targetColumn: 1,
      options: ["parliamo", "parlano", "parlate", "parla"],
      answer: "parliamo",
      hint: "Для noi у глаголов на -ARE окончание -iamo.",
      explain: "Noi parliamo — мы говорим."
    },
    {
      type: "gap",
      question: "Вставь форму andare",
      sentence: "Io ___ a scuola.",
      options: ["vado", "vai", "va", "vanno"],
      answer: "vado",
      hint: "Я иду — io vado.",
      explain: "Vado a scuola — я иду в школу."
    },
    {
      type: "match",
      question: "Соедини фразу и значение",
      pairs: [
        { left: "vado a casa", right: "я иду домой" },
        { left: "faccio colazione", right: "я завтракаю" },
        { left: "sto bene", right: "мне хорошо" },
        { left: "ci sono due libri", right: "есть две книги" },
        { left: "ho una sorella", right: "у меня есть сестра" }
      ],
      explain: "Это базовые бытовые фразы A0-U4."
    },
    {
      type: "fill",
      question: "Как сказать «Есть кухня»?",
      answer: "C’è una cucina",
      accept: [
        "C’è una cucina",
        "c’è una cucina",
        "Ce una cucina",
        "ce una cucina"
      ],
      placeholder: "Напиши по-итальянски",
      hint: "Один предмет — c’è.",
      explain: "C’è una cucina — есть кухня."
    },
    {
      type: "table",
      question: "Выбери c’è или ci sono",
      headers: ["Предмет", "Конструкция"],
      rows: [
        ["un tavolo", "c’è"],
        ["due sedie", ""]
      ],
      targetRow: 1,
      targetColumn: 1,
      options: ["c’è", "ci sono", "è", "ha"],
      answer: "ci sono",
      hint: "Due sedie — множественное число.",
      explain: "Ci sono due sedie — есть два стула."
    },
    {
      type: "choice",
      question: "Как сказать «Она высокая»?",
      options: ["È alto.", "È alta.", "Ho alta.", "Sono alta."],
      answer: "È alta.",
      hint: "Про рост используем essere: è alta.",
      explain: "È alta — она высокая."
    },
    {
      type: "build",
      question: "Собери фразу: «У меня есть брат»",
      words: ["Ho", "un", "fratello"],
      answer: "Ho un fratello",
      hint: "Avere: ho. Fratello — мужской род: un fratello.",
      explain: "Ho un fratello — у меня есть брат."
    },
    {
      type: "gap",
      question: "Вставь прилагательное во множественном числе",
      sentence: "Le macchine sono ___.",
      options: ["bianco", "bianca", "bianchi", "bianche"],
      answer: "bianche",
      hint: "Macchine — женский род множественного числа.",
      explain: "Le macchine sono bianche — машины белые."
    },
    {
      type: "table",
      question: "Заполни форму fare",
      headers: ["Лицо", "Форма"],
      rows: [
        ["io", "faccio"],
        ["tu", ""],
        ["lui/lei", "fa"]
      ],
      targetRow: 1,
      targetColumn: 1,
      options: ["fai", "fo", "fate", "fanno"],
      answer: "fai",
      hint: "Ты делаешь — tu fai.",
      explain: "Tu fai i compiti — ты делаешь домашнее задание."
    },
    {
      type: "match",
      question: "Соедини цвет и перевод",
      pairs: [
        { left: "rosso", right: "красный" },
        { left: "verde", right: "зелёный" },
        { left: "blu", right: "синий/голубой" },
        { left: "nero", right: "чёрный" },
        { left: "bianco", right: "белый" }
      ],
      explain: "Цвета нужны для описания предметов и внешности."
    },
    {
      type: "choice",
      question: "Как сказать «Мне хорошо»?",
      options: ["Sono bene.", "Sto bene.", "Ho bene.", "Stai bene."],
      answer: "Sto bene.",
      hint: "Про самочувствие используем stare.",
      explain: "Sto bene — мне хорошо, я в порядке."
    },
    {
      type: "build",
      question: "Собери фразу: «Есть две комнаты»",
      words: ["Ci", "sono", "due", "camere"],
      answer: "Ci sono due camere",
      hint: "Множественное число — ci sono.",
      explain: "Ci sono due camere — есть две комнаты."
    },
    {
      type: "fill",
      question: "Напиши множественное число от sorella",
      answer: "sorelle",
      accept: ["sorelle", "Sorelle"],
      placeholder: "Множественное число",
      hint: "Женский род на -a даёт -e.",
      explain: "sorella -> sorelle."
    }
  ]
};
