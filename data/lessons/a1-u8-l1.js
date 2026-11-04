window.LESSONS = window.LESSONS || {};

window.LESSONS["a1-u8-l1"] = {
  id: "a1-u8-l1",
  title: "Passato prossimo con avere",
  level: "A1",
  xp: 40,
  theory: [
    {
      title: "Passato prossimo: avere + participio passato",
      summary: "Passato prossimo используется для завершённых действий в прошлом. С большинством глаголов помогает глагол avere. Participio passato зависит от спряжения глагола.",
      rule: [
        "Passato prossimo = avere al presente + participio passato.",
        "Глаголы на -ARE дают participio su -ato: parlare -> parlato.",
        "Глаголы на -ERE дают participio su -uto: credere -> creduto.",
        "Глаголы на -IRE дают participio su -ito: dormire -> dormito.",
        "С avere participio passato обычно не меняется по роду и числу."
      ],
      table: {
        headers: ["Infinitivo", "Participio passato", "io", "loro"],
        rows: [
          ["parlare", "parlato", "ho parlato", "hanno parlato"],
          ["mangiare", "mangiato", "ho mangiato", "hanno mangiato"],
          ["credere", "creduto", "ho creduto", "hanno creduto"],
          ["dormire", "dormito", "ho dormito", "hanno dormito"],
          ["bere", "bevuto", "ho bevuto", "hanno bevuto"]
        ]
      },
      tips: [
        "Секрет: меняется только avoir/avere: ho, hai, ha, abbiamo, avete, hanno. Сам participio остаётся тем же.",
        "Не переводи дословно русское «я говорил». В итальянском для завершённого прошлого часто usado passato prossimo: ho parlato."
      ],
      mistakes: [
        "Не говори *ho parlare. Правильно: ho parlato.",
        "Не говори *ho parlatto. Правильно: ho parlato.",
        "Не путай presente и passato: parlo = я говорю, ho parlato = я говорил / я поговорил."
      ],
      examples: [
        { it: "Ieri ho mangiato una pizza.", ru: "Вчера я ел пиццу." },
        { it: "Hai bevuto acqua?", ru: "Ты пил воду?" },
        { it: "Abbiamo studiato italiano.", ru: "Мы учили итальянский." },
        { it: "Hanno dormito otto ore.", ru: "Они спали восемь часов." }
      ]
    },
    {
      title: "Частые глаголы с avere",
      summary: "Эти глаголы нужны, чтобы рассказать о дне, еде, работе, покупках и учебе.",
      rule: [
        "mangiare — есть, кушать",
        "bere — пить",
        "dormire — спать",
        "studiare — учиться, изучать",
        "lavorare — работать",
        "comprare — покупать",
        "guardare — смотреть",
        "ascoltare — слушать",
        "cucinare — готовить",
        "parlare — говорить"
      ],
      table: {
        headers: ["Фраза", "Значение"],
        rows: [
          ["Ho mangiato bene.", "Я хорошо поел."],
          ["Hai bevuto caffè?", "Ты пил кофе?"],
          ["Abbiamo lavorato molto.", "Мы много работали."],
          ["Hanno comprato il pane.", "Они купили хлеб."],
          ["Ho guardato un film.", "Я смотрел фильм."]
        ]
      },
      tips: [
        "Секрет: с avere participio не согласуется с подлежащим. Maria ha mangiato, Marco ha mangiato, loro hanno mangiato.",
        "Очень полезная фраза: Cosa hai fatto? — Что ты делал?"
      ],
      mistakes: [
        "Не говори Maria ha mangiata. Правильно: Maria ha mangiato.",
        "Не говори *ho bevuto latte? можно, но лучше без артикля для продуктов: ho bevuto latte, ho mangiato pane.",
        "Не теряй вспомогательный глагол: не *io mangiato, а io ho mangiato."
      ],
      examples: [
        { it: "Cosa hai fatto ieri?", ru: "Что ты делал вчера?" },
        { it: "Ho cucinato la pasta.", ru: "Я приготовил пасту." },
        { it: "Abbiamo ascoltato musica.", ru: "Мы слушали музыку." },
        { it: "Hai parlato con Anna?", ru: "Ты говорил с Анной?" }
      ],
      dialog: [
        { who: "Anna", text: "Cosa hai fatto ieri sera?", ru: "Что ты делал вчера вечером?" },
        { who: "Marco", text: "Ho guardato un film e ho mangiato popcorn.", ru: "Я смотрел фильм и ел попкорн." },
        { who: "Anna", text: "Bello!", ru: "Классно!" }
      ]
    }
  ],
  exercises: [
    {
      type: "choice",
      question: "Как образуется passato prossimo с большинством глаголов?",
      options: [
        "avere al presente + participio passato",
        "essere al presente + infinito",
        "presente + ieri",
        "avere + gerundio"
      ],
      answer: "avere al presente + participio passato",
      hint: "Вспомогательный глагол avere плюс participio passato.",
      explain: "Passato prossimo = avere al presente + participio passato."
    },
    {
      type: "gap",
      question: "Вставь правильную форму",
      sentence: "Io ___ una pizza.",
      options: ["ho mangiato", "mangiato", "avere mangiato", "ho mangiare"],
      answer: "ho mangiato",
      hint: "Нужен avere в форме io: ho.",
      explain: "Io ho mangiato una pizza — я ел пиццу."
    },
    {
      type: "table",
      question: "Заполни форму",
      headers: ["Лицо", "Форма"],
      rows: [
        ["io", "ho parlato"],
        ["tu", ""],
        ["noi", "abbiamo parlato"]
      ],
      targetRow: 1,
      targetColumn: 1,
      options: ["hai parlato", "ho parlato", "ha parlato", "hanno parlato"],
      answer: "hai parlato",
      hint: "Tu + avere = hai.",
      explain: "Tu hai parlato — ты говорил."
    },
    {
      type: "match",
      question: "Соедини инфинитив и participio passato",
      pairs: [
        { left: "parlare", right: "parlato" },
        { left: "credere", right: "creduto" },
        { left: "dormire", right: "dormito" },
        { left: "comprare", right: "comprato" },
        { left: "guardare", right: "guardato" }
      ],
      explain: "Регулярные participio: -ato, -uto, -ito.",
      explainWrong: "Неверная пара. Помни: -ARE -> -ato, -ERE -> -uto, -IRE -> -ito."
    },
    {
      type: "error-choice",
      question: "Найди ошибку",
      tokens: [
        { text: "Ho", id: "0" },
        { text: "parla", id: "wrong" },
        { text: "con", id: "2" },
        { text: "Anna", id: "3" }
      ],
      answer: "wrong",
      hint: "Нужен participio passato: parlato.",
      explain: "Правильно: Ho parlato con Anna."
    },
    {
      type: "dialog-choice",
      question: "Выбери подходящий ответ",
      dialog: [
        { who: "Anna", text: "Cosa hai fatto ieri?" }
      ],
      options: [
        "Ho mangiato una pizza.",
        "Mangio una pizza.",
        "Ho mangiare una pizza.",
        "Mangiato una pizza."
      ],
      answer: "Ho mangiato una pizza.",
      hint: "Вопрос в passato prossimo, ответ тоже в passato prossimo.",
      explain: "Ho mangiato una pizza — я ел пиццу."
    },
    {
      type: "fill",
      question: "Напиши «Мы говорили по-итальянски»",
      answer: "Abbiamo parlato italiano",
      accept: [
        "Abbiamo parlato italiano",
        "abbiamo parlato italiano",
        "Noi abbiamo parlato italiano",
        "noi abbiamo parlato italiano"
      ],
      placeholder: "Напиши по-итальянски",
      hint: "Noi + avere = abbiamo; parlare -> parlato.",
      explain: "Abbiamo parlato italiano — мы говорили по-итальянски."
    },
    {
      type: "build",
      question: "Собери фразу: «Они купили хлеб»",
      words: ["Hanno", "comprato", "il", "pane"],
      answer: "Hanno comprato il pane",
      hint: "Loro + avere = hanno.",
      explain: "Hanno comprato il pane — они купили хлеб."
    },
    {
      type: "choice",
      question: "Какой participio passato у глагола dormire?",
      options: ["dormito", "dormato", "dormuto", "dormire"],
      answer: "dormito",
      hint: "Глаголы на -IRE дают -ito.",
      explain: "dormire -> dormito."
    },
    {
      type: "table",
      question: "Заполни participio passato",
      headers: ["Глагол", "Participio"],
      rows: [
        ["studiare", "studiato"],
        ["lavorare", ""]
      ],
      targetRow: 1,
      targetColumn: 1,
      options: ["lavorato", "lavoruto", "lavorito", "lavorare"],
      answer: "lavorato",
      hint: "-ARE -> -ato.",
      explain: "lavorare -> lavorato."
    }
  ]
};
