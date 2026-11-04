window.LESSONS = window.LESSONS || {};

window.LESSONS["a1-u8-l4"] = {
  id: "a1-u8-l4",
  title: "Маркеры прошлого: ieri, fa, già, non...ancora, mai",
  level: "A1",
  xp: 35,
  theory: [
    {
      title: "Слова-маркеры прошлого",
      summary: "Чтобы понятно рассказать о прошлом, нужны слова времени: ieri, la settimana scorsa, due giorni fa, l'anno scorso.",
      rule: [
        "ieri — вчера",
        "ieri sera — вчера вечером",
        "l'altro ieri — позавчера",
        "due giorni fa — два дня назад",
        "una settimana fa — неделю назад",
        "la settimana scorsa — на прошлой неделе",
        "il mese scorso — в прошлом месяце",
        "l'anno scorso — в прошлом году"
      ],
      table: {
        headers: ["Русский", "Italiano", "Пример"],
        rows: [
          ["вчера", "ieri", "Ieri ho studiato."],
          ["два дня назад", "due giorni fa", "Sono arrivato due giorni fa."],
          ["на прошлой неделе", "la settimana scorsa", "La settimana scorsa ho lavorato molto."],
          ["в прошлом году", "l'anno scorso", "L'anno scorso sono andato a Roma."]
        ]
      },
      tips: [
        "Секрет: fa идёт после периода времени: due giorni fa, un mese fa, un anno fa.",
        "scorsa / scorso согласуются с существительным: la settimana scorsa, il mese scorso, l'anno scorso."
      ],
      mistakes: [
        "Не говори *due giorni ago. Правильно: due giorni fa.",
        "Не говори *la settimana passato. Правильно: la settimana scorsa.",
        "Не путай ieri и domani: ieri = вчера, domani = завтра."
      ],
      examples: [
        { it: "Ieri ho mangiato bene.", ru: "Вчера я хорошо поел." },
        { it: "Due giorni fa ho preso il treno.", ru: "Два дня назад я сел на поезд." },
        { it: "L'anno scorso abbiamo viaggiato.", ru: "В прошлом году мы путешествовали." }
      ]
    },
    {
      title: "già, non...ancora, non...mai",
      summary: "Эти слова делают речь очень полезной: уже, ещё не, никогда.",
      rule: [
        "già — уже: Ho già mangiato.",
        "non ... ancora — ещё не: Non ho ancora finito.",
        "non ... mai — никогда не: Non sono mai stato a Roma.",
        "Hai mai ...? — Ты когда-нибудь...? Hai mai viaggiato in aereo?",
        "sempre — всегда: Ho sempre amato la pasta."
      ],
      table: {
        headers: ["Конструкция", "Значение", "Пример"],
        rows: [
          ["già", "уже", "Ho già visto quel film."],
          ["non ... ancora", "ещё не", "Non ho ancora comprato il biglietto."],
          ["non ... mai", "никогда не", "Non ho mai mangiato sushi."],
          ["Hai mai...?", "когда-нибудь...?", "Hai mai viaggiato da solo?"]
        ]
      },
      tips: [
        "Секрет: mai без non в утверждении не означает «никогда». Для «никогда» нужно non ... mai.",
        "ancora после non означает «ещё не»: Non ho ancora finito."
      ],
      mistakes: [
        "Не говори *Ho mai visto, если хочешь сказать «я никогда не видел». Правильно: Non ho mai visto.",
        "Не говори *Non ho già finito, если имеешь в виду «ещё не». Правильно: Non ho ancora finito.",
        "Не переводи «уже» как mai. Уже = già."
      ],
      examples: [
        { it: "Ho già mangiato.", ru: "Я уже поел." },
        { it: "Non ho ancora dormito.", ru: "Я ещё не спал." },
        { it: "Non sono mai andato in discoteca.", ru: "Я никогда не ходил в дискотеку." },
        { it: "Hai mai visitato Firenze?", ru: "Ты когда-нибудь посещал Флоренцию?" }
      ],
      dialog: [
        { who: "Anna", text: "Hai già comprato i biglietti?", ru: "Ты уже купил билеты?" },
        { who: "Marco", text: "No, non ho ancora comprato niente.", ru: "Нет, я ещё ничего не купил." },
        { who: "Anna", text: "Allora andiamo adesso.", ru: "Тогда пойдём сейчас." }
      ]
    }
  ],
  exercises: [
    {
      type: "choice",
      question: "Как сказать «два дня назад»?",
      options: ["due giorni fa", "due giorni ago", "a due giorni", "in due giorni"],
      answer: "due giorni fa",
      hint: "В итальянском fa идёт после времени.",
      explain: "due giorni fa — два дня назад."
    },
    {
      type: "gap",
      question: "Вставь слово",
      sentence: "Non ho ___ finito.",
      options: ["ancora", "già", "mai", "sempre"],
      answer: "ancora",
      hint: "non ... ancora = ещё не.",
      explain: "Non ho ancora finito — я ещё не закончил."
    },
    {
      type: "table",
      question: "Заполни конструкцию",
      headers: ["Русский", "Italiano"],
      rows: [
        ["уже", "già"],
        ["ещё не", ""]
      ],
      targetRow: 1,
      targetColumn: 1,
      options: ["non ... ancora", "non ... mai", "sempre", "già"],
      answer: "non ... ancora",
      hint: "ancora после non означает «ещё не».",
      explain: "non ... ancora — ещё не."
    },
    {
      type: "error-choice",
      question: "Найди ошибку",
      tokens: [
        { text: "Non", id: "0" },
        { text: "ho", id: "1" },
        { text: "ancora", id: "wrong" },
        { text: "mai", id: "3" },
        { text: "visto", id: "4" },
        { text: "Marco", id: "5" }
      ],
      answer: "wrong",
      hint: "Нельзя одновременно ancora и mai в этой фразе.",
      explain: "Правильно: Non ho mai visto Marco. Или: Non ho ancora visto Marco."
    },
    {
      type: "dialog-choice",
      question: "Выбери ответ",
      dialog: [
        { who: "Anna", text: "Hai già mangiato?" },
        { who: "Marco", text: "No, ..." }
      ],
      options: [
        "non ho ancora mangiato.",
        "ho già mangiato.",
        "mai ho mangiato.",
        "sempre mangiato."
      ],
      answer: "non ho ancora mangiato.",
      hint: "No требует отрицания и «ещё не».",
      explain: "No, non ho ancora mangiato — Нет, я ещё не ел."
    },
    {
      type: "match",
      question: "Соедини маркер времени и перевод",
      pairs: [
        { left: "ieri", right: "вчера" },
        { left: "l'anno scorso", right: "в прошлом году" },
        { left: "due giorni fa", right: "два дня назад" },
        { left: "già", right: "уже" },
        { left: "non ... mai", right: "никогда не" }
      ],
      explain: "Эти слова помогают точно говорить о прошлом.",
      explainWrong: "Неверная пара. Ieri = вчера, l'anno scorso = в прошлом году, due giorni fa = два дня назад, già = уже, non mai = никогда не."
    },
    {
      type: "fill",
      question: "Напиши «Я ещё не видел этот фильм»",
      answer: "Non ho ancora visto questo film",
      accept: [
        "Non ho ancora visto questo film",
        "non ho ancora visto questo film",
        "Io non ho ancora visto questo film",
        "io non ho ancora visto questo film"
      ],
      placeholder: "Напиши по-итальянски",
      hint: "Non ... ancora + participio.",
      explain: "Non ho ancora visto questo film — я ещё не видел этот фильм."
    },
    {
      type: "build",
      question: "Собери фразу: «Мы никогда не были в Риме»",
      words: ["Non", "siamo", "mai", "stati", "a", "Roma"],
      answer: "Non siamo mai stati a Roma",
      hint: "Non ... mai + essere + stati.",
      explain: "Non siamo mai stati a Roma — мы никогда не были в Риме."
    },
    {
      type: "choice",
      question: "Как спросить «Ты когда-нибудь путешествовал?»",
      options: [
        "Hai mai viaggiato?",
        "Hai già viaggiato?",
        "Non hai mai viaggiato?",
        "Hai sempre viaggiato?"
      ],
      answer: "Hai mai viaggiato?",
      hint: "Вопрос «когда-нибудь» = Hai mai...?",
      explain: "Hai mai viaggiato? — Ты когда-нибудь путешествовал?"
    },
    {
      type: "error-choice",
      question: "Найди ошибку",
      tokens: [
        { text: "Vado", id: "wrong" },
        { text: "al", id: "1" },
        { text: "cinema", id: "2" },
        { text: "ieri", id: "3" }
      ],
      answer: "wrong",
      hint: "С ieri нужно passato prossimo: sono andato.",
      explain: "Правильно: Ieri sono andato al cinema."
    }
  ]
};
