window.LESSONS = window.LESSONS || {};

window.LESSONS["a1-u7-l4"] = {
  id: "a1-u7-l4",
  title: "Perché, quando, se: причины, время и условие",
  level: "A1",
  xp: 35,
  theory: [
    {
      title: "Perché: потому что",
      summary: "Perché соединяет причину и следствие. Порядок может быть разным, но чаще причина идёт после perché.",
      rule: [
        "Vado a Roma perché mi piace l'Italia. — Я еду в Рим, потому что мне нравится Италия.",
        "Studio italiano perché voglio viaggiare. — Я учу итальянский, потому что хочу путешествовать.",
        "Non esco perché piove. — Я не выхожу, потому что идёт дождь.",
        "Sono stanco perché ho lavorato molto. — Я устал, потому что много работал."
      ],
      table: {
        headers: ["Фраза", "Значение"],
        rows: [
          ["perché mi piace", "потому что мне нравится"],
          ["perché voglio", "потому что я хочу"],
          ["perché piove", "потому что идёт дождь"],
          ["perché sono stanco", "потому что я устал"]
        ]
      },
      tips: [
        "Секрет: perché пишется без акцента, когда значит «потому что». С акцентом perché? значит «почему?».",
        "Не добавляй che после perché: не *perché che piove. Правильно: perché piove."
      ],
      mistakes: [
        "Не говори *Vado a Roma perché che mi piace. Правильно: Vado a Roma perché mi piace.",
        "Не путай perché и perche: perché с акцентом — потому что/почему.",
        "Не ставь perché в конец без причины: лучше Vado perché ho tempo."
      ],
      examples: [
        { it: "Resto a casa perché sono malato.", ru: "Я остаюсь дома, потому что болен." },
        { it: "Mangio perché ho fame.", ru: "Я ем, потому что голоден." },
        { it: "Non vengo perché lavoro.", ru: "Я не приду, потому что работаю." }
      ]
    },
    {
      title: "Quando e se: когда и если",
      summary: "Quando вводит время, se — условие. Для простых будущих ситуаций после quando и se часто используют настоящее время.",
      rule: [
        "Quando ho tempo, studio italiano. — Когда у меня есть время, я учу итальянский.",
        "Quando arrivo a Roma, ti chiamo. — Когда я приеду в Рим, я позвоню тебе.",
        "Se piove, resto a casa. — Если будет дождь, я останусь дома.",
        "Se vuoi, vieni con me. — Если хочешь, пойди со мной.",
        "Se hai fame, mangiamo una pizza. — Если ты голоден, давай съедим пиццу."
      ],
      table: {
        headers: ["Союз", "Значение", "Пример"],
        rows: [
          ["quando", "когда", "Quando ho tempo, studio."],
          ["se", "если", "Se piove, resto a casa."],
          ["perché", "потому что", "Studio perché voglio viaggiare."]
        ]
      },
      tips: [
        "Секрет: после se для реальных условий часто используй presente: Se piove, resto. Не нужно обязательно будущее: *Se pioverà, resterò — сложнее и не обязательно на A1.",
        "Когда придаточное стоит перед главным, после него часто ставят запятую: Se piove, resto a casa."
      ],
      mistakes: [
        "Не говори *Se io avrò tempo, studierò на A1. Проще: Se ho tempo, studio.",
        "Не говори *Quando io arriverò, chiamerò. Проще: Quando arrivo, chiamo.",
        "Не путай se и sé: se — если, sé — себя."
      ],
      examples: [
        { it: "Se hai tempo, chiamami.", ru: "Если у тебя есть время, позвони мне." },
        { it: "Quando sono libero, leggo.", ru: "Когда я свободен, я читаю." },
        { it: "Se fa bel tempo, andiamo al mare.", ru: "Если будет хорошая погода, пойдём на море." }
      ],
      dialog: [
        { who: "Anna", text: "Vieni alla festa?", ru: "Ты придёшь на вечеринку?" },
        { who: "Marco", text: "Sì, se finisco presto.", ru: "Да, если закончу рано." },
        { who: "Anna", text: "Perfetto, ti aspetto.", ru: "Отлично, я буду ждать тебя." }
      ]
    }
  ],
  exercises: [
    {
      type: "gap",
      question: "Выбери союз",
      sentence: "Resto a casa ___ piove.",
      options: ["perché", "quando", "se", "ma"],
      answer: "perché",
      hint: "Причина: потому что идёт дождь.",
      explain: "Resto a casa perché piove — я остаюсь дома, потому что идёт дождь."
    },
    {
      type: "table",
      question: "Заполни союз",
      headers: ["Значение", "Союз"],
      rows: [
        ["потому что", "perché"],
        ["если", ""]
      ],
      targetRow: 1,
      targetColumn: 1,
      options: ["se", "quando", "ma", "perché"],
      answer: "se",
      hint: "Условие: если.",
      explain: "se — если."
    },
    {
      type: "error-choice",
      question: "Найди ошибку",
      tokens: [
        { text: "Vado", id: "0" },
        { text: "a", id: "1" },
        { text: "Roma", id: "2" },
        { text: "perché", id: "3" },
        { text: "che", id: "wrong" },
        { text: "mi", id: "5" },
        { text: "piace", id: "6" }
      ],
      answer: "wrong",
      hint: "После perché не нужен che.",
      explain: "Правильно: Vado a Roma perché mi piace."
    },
    {
      type: "dialog-choice",
      question: "Выбери ответ",
      dialog: [
        { who: "Anna", text: "Perché non vieni?" }
      ],
      options: [
        "Perché sono stanco.",
        "Quando sono stanco.",
        "Se sono stanco.",
        "Ma sono stanco."
      ],
      answer: "Perché sono stanco.",
      hint: "На вопрос Perché? отвечают perché.",
      explain: "Perché sono stanco — потому что я устал."
    },
    {
      type: "choice",
      question: "Как сказать «Если будет дождь, я останусь дома»?",
      options: [
        "Se piove, resto a casa.",
        "Perché piove, resto a casa.",
        "Quando piove, se resto a casa.",
        "Se piove, perché resto a casa."
      ],
      answer: "Se piove, resto a casa.",
      hint: "Условие: se + presente.",
      explain: "Se piove, resto a casa — если будет дождь, я останусь дома."
    },
    {
      type: "match",
      question: "Соедини фразу и перевод",
      pairs: [
        { left: "Quando ho tempo, studio.", right: "Когда у меня есть время, я учусь." },
        { left: "Se vuoi, vieni con me.", right: "Если хочешь, пойди со мной." },
        { left: "Non esco perché piove.", right: "Я не выхожу, потому что идёт дождь." },
        { left: "Se hai fame, mangiamo.", right: "Если ты голоден, давай поедим." },
        { left: "Quando arrivo, ti chiamo.", right: "Когда я приеду, я позвоню тебе." }
      ],
      explain: "Perché, quando, se делают речь связной.",
      explainWrong: "Неверная пара. Perché = потому что, quando = когда, se = если."
    },
    {
      type: "fill",
      question: "Напиши «Я учу итальянский, потому что хочу путешествовать»",
      answer: "Studio italiano perché voglio viaggiare",
      accept: [
        "Studio italiano perché voglio viaggiare",
        "studio italiano perché voglio viaggiare",
        "Io studio italiano perché voglio viaggiare",
        "io studio italiano perché voglio viaggiare"
      ],
      placeholder: "Напиши по-итальянски",
      hint: "Studio + perché + voglio viaggiare.",
      explain: "Studio italiano perché voglio viaggiare — я учу итальянский, потому что хочу путешествовать."
    },
    {
      type: "build",
      question: "Собери фразу: «Если у тебя есть время, позвони мне»",
      words: ["Se", "hai", "tempo", ",", "chiamami"],
      answer: "Se hai tempo chiamami",
      hint: "Se + hai tempo, chiamami.",
      explain: "Se hai tempo, chiamami — если у тебя есть время, позвони мне."
    },
    {
      type: "error-choice",
      question: "Найди ошибку",
      sentence: "Se io avrò tempo, studierò.",
      options: ["Se", "io", "avrò", "tempo", "studierò"],
      answer: "avrò",
      hint: "На A1 после se для условия обычно используют presente: ho.",
      explain: "Проще и естественнее: Se ho tempo, studio."
    },
    {
      type: "table",
      question: "Заполни перевод",
      headers: ["Italiano", "Русский"],
      rows: [
        ["perché", "потому что"],
        ["quando", ""]
      ],
      targetRow: 1,
      targetColumn: 1,
      options: ["когда", "если", "потому что", "но"],
      answer: "когда",
      hint: "Quando указывает на время.",
      explain: "quando — когда."
    }
  ]
};
