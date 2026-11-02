window.LESSONS = window.LESSONS || {};

window.LESSONS["a1-u7-l2"] = {
  id: "a1-u7-l2",
  title: "Progetti e piani: presente e futuro",
  level: "A1",
  xp: 35,
  theory: [
    {
      title: "Presente per il futuro vicino",
      summary: "В итальянском для запланированного будущего часто используют настоящее время: Domani vado a Roma. Stasera esco con amici. Это очень естественно, если есть слово-маркер времени: domani, stasera, lunedì.",
      rule: [
        "Domani vado a Roma. — Завтра я еду в Рим.",
        "Stasera esco con gli amici. — Сегодня вечером я выхожу с друзьями.",
        "Lunedì inizio il corso. — В понедельник я начинаю курс.",
        "Sabato partiamo per Milano. — В субботу мы едем в Милан.",
        "Domenica resto a casa. — В воскресенье я остаюсь дома."
      ],
      table: {
        headers: ["Маркер времени", "Пример"],
        rows: [
          ["domani", "Domani vado a Roma."],
          ["stasera", "Stasera ceno alle otto."],
          ["lunedì", "Lunedì inizio il corso."],
          ["sabato", "Sabato partiamo."],
          ["la settimana prossima", "La settimana prossima vedrò Anna."]
        ]
      },
      tips: [
        "Секрет: если план уже решён, presente звучит естественно: Domani lavoro. Если решение спонтанное или более отдалённое, часто используют futuro: Domani lavorerò.",
        "Не переводи английское I am going to как vado a + инфинитив. В итальянском vado a mangiare значит «я иду поесть», а не «я собираюсь есть» в будущем смысле."
      ],
      mistakes: [
        "Не говори *Domani io andai. Правильно: Domani vado или Domani andrò.",
        "Не ставь будущее там, где нужен настоящий план: лучше Stasera esco, чем Stasera uscirò, если это уже решено.",
        "Не забывай маркер времени: domani, stasera, lunedì."
      ],
      examples: [
        { it: "Domani lavoro da casa.", ru: "Завтра я работаю из дома." },
        { it: "Stasera mangiamo pizza.", ru: "Сегодня вечером мы едим пиццу." },
        { it: "Dopodomani torno a casa.", ru: "Послезавтра я возвращаюсь домой." }
      ]
    },
    {
      title: "Futuro per decisioni e promesse",
      summary: "Futuro semplice часто используется для решений, обещаний, предположений и более отдалённых планов.",
      rule: [
        "Ti chiamerò domani. — Я позвоню тебе завтра.",
        "Aiuterò te. — Я помогу тебе.",
        "Studierò di più. — Я буду учиться больше.",
        "Non preoccuparti, andrà tutto bene. — Не волнуйся, всё будет хорошо.",
        "Forse pioverà. — Возможно, будет дождь."
      ],
      table: {
        headers: ["Ситуация", "Фраза"],
        rows: [
          ["обещание", "Ti chiamerò."],
          ["решение", "Studierò di più."],
          ["предположение", "Forse pioverà."],
          ["успокоение", "Andrà tutto bene."]
        ]
      },
      tips: [
        "Секрет:将来计划可以用 presente, но обещания и решения часто звучат лучше с futuro: Ti chiamerò, Farò io.",
        "Forse + futuro очень полезно: Forse domani pioverà. — Возможно, завтра будет дождь."
      ],
      mistakes: [
        "Не говори *Ti chiamare. Правильно: Ti chiamerò.",
        "Не говори *Farò io domani? если хочешь сказать «я сделаю это». Правильно: Farò io.",
        "Не путай vado и andrò: vado — план/настоящее, andrò — будущее/решение."
      ],
      examples: [
        { it: "Chiamerò Marco stasera.", ru: "Я позвоню Марко сегодня вечером." },
        { it: "Farò del mio meglio.", ru: "Я сделаю всё возможное." },
        { it: "Forse resterò a casa.", ru: "Возможно, я останусь дома." }
      ],
      dialog: [
        { who: "Anna", text: "Vieni alla festa sabato?", ru: "Ты придёшь на вечеринку в субботу?" },
        { who: "Marco", text: "Sì, verrò volentieri.", ru: "Да, я приду с удовольствием." },
        { who: "Anna", text: "Perfetto! Ti aspetterò alle otto.", ru: "Отлично! Я буду ждать тебя в восемь." }
      ]
    }
  ],
  exercises: [
    {
      type: "choice",
      question: "Как естественно сказать «Завтра я еду в Рим» как уже решённый план?",
      options: ["Domani vado a Roma.", "Domani io andai a Roma.", "Domani andare a Roma.", "Domani vado a Roma domani."],
      answer: "Domani vado a Roma.",
      hint: "Для плана с domani часто используют presente.",
      explain: "Domani vado a Roma — завтра я еду в Рим."
    },
    {
      type: "gap",
      question: "Вставь правильное слово",
      sentence: "Stasera ___ con gli amici.",
      options: ["esco", "uscirò", "andai", "esci"],
      answer: "esco",
      hint: "Для сегодняшнего вечера как плана часто usato presente.",
      explain: "Stasera esco con gli amici — сегодня вечером я выхожу с друзьями."
    },
    {
      type: "table",
      question: "Заполни маркер времени",
      headers: ["Русский", "Italiano"],
      rows: [
        ["завтра", "domani"],
        ["послезавтра", ""]
      ],
      targetRow: 1,
      targetColumn: 1,
      options: ["dopodomani", "domani", "stasera", "ieri"],
      answer: "dopodomani",
      hint: "Dopo + domani = послезавтра.",
      explain: "dopodomani — послезавтра."
    },
    {
      type: "error-choice",
      question: "Найди ошибку",
      tokens: [
        { text: "Domani", id: "0" },
        { text: "io", id: "1" },
        { text: "andai", id: "wrong" },
        { text: "a", id: "3" },
        { text: "Roma", id: "4" }
      ],
      answer: "wrong",
      hint: "Andai — прошедшее время. Для завтра нужно vado или andrò.",
      explain: "Правильно: Domani vado a Roma. Или: Domani andrò a Roma."
    },
    {
      type: "dialog-choice",
      question: "Выбери подходящий ответ",
      dialog: [
        { who: "Anna", text: "Che programmi hai per stasera?" }
      ],
      options: [
        "Esco con gli amici.",
        "Esco perché sono amico.",
        "Ho uscito ieri.",
        "Esci tu domani."
      ],
      answer: "Esco con gli amici.",
      hint: "Вопрос про планы на сегодня вечером.",
      explain: "Esco con gli amici — я выхожу с друзьями."
    },
    {
      type: "match",
      question: "Соедини фразу и перевод",
      pairs: [
        { left: "Ti chiamerò domani.", right: "Я позвоню тебе завтра." },
        { left: "Forse pioverà.", right: "Возможно, будет дождь." },
        { left: "Andrà tutto bene.", right: "Всё будет хорошо." },
        { left: "Studierò di più.", right: "Я буду учиться больше." },
        { left: "La settimana prossima vedrò Anna.", right: "На следующей неделе я увижу Анну." }
      ],
      explain: "Futuro часто используется для обещаний и предположений.",
      explainWrong: "Неверная пара. Помни: chiamerò = позвоню, pioverà = будет дождь, andrà = будет, studierò = буду учиться."
    },
    {
      type: "fill",
      question: "Напиши «Возможно, завтра будет дождь»",
      answer: "Forse domani pioverà",
      accept: [
        "Forse domani pioverà",
        "forse domani pioverà",
        "Domani forse pioverà",
        "domani forse pioverà"
      ],
      placeholder: "Напиши по-итальянски",
      hint: "Forse + будущее время.",
      explain: "Forse domani pioverà — возможно, завтра будет дождь."
    },
    {
      type: "build",
      question: "Собери фразу: «Я позвоню тебе сегодня вечером»",
      words: ["Ti", "chiamerò", "stasera"],
      answer: "Ti chiamerò stasera",
      hint: "Ti + chiamerò + stasera.",
      explain: "Ti chiamerò stasera — я позвоню тебе сегодня вечером."
    },
    {
      type: "choice",
      question: "Какая фраза лучше для уже решённого плана?",
      options: ["Domani lavoro da casa.", "Domani io lavorai da casa.", "Domani lavorare da casa.", "Domani lavoro da casa domani."],
      answer: "Domani lavoro da casa.",
      hint: "Presente с маркером domani для плана.",
      explain: "Domani lavoro da casa — завтра я работаю из дома."
    },
    {
      type: "table",
      question: "Заполни форму будущего",
      headers: ["Фраза", "Глагол"],
      rows: [
        ["Ti chiamerò.", "chiamerò"],
        ["Forse pioverà.", ""]
      ],
      targetRow: 1,
      targetColumn: 1,
      options: ["pioverà", "piove", "piovere", "piovuto"],
      answer: "pioverà",
      hint: "Будущее от piovere для lui/lei — pioverà.",
      explain: "Forse pioverà — возможно, будет дождь."
    }
  ]
};
