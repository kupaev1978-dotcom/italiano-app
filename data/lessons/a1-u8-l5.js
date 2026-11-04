window.LESSONS = window.LESSONS || {};

window.LESSONS["a1-u8-l5"] = {
  id: "a1-u8-l5",
  title: "Raccontare il weekend, un viaggio e la giornata",
  level: "A1",
  xp: 40,
  theory: [
    {
      title: "Последовательность событий",
      summary: "Чтобы рассказать историю, нужны слова-связки: prima, poi, dopo, alla fine. Они помогают выстроить порядок действий.",
      rule: [
        "prima — сначала",
        "poi — потом",
        "dopo — после",
        "alla fine — в конце",
        "intanto — тем временем",
        "infine — наконец"
      ],
      table: {
        headers: ["Связка", "Пример"],
        rows: [
          ["prima", "Prima ho fatto colazione."],
          ["poi", "Poi sono uscito."],
          ["dopo", "Dopo ho preso il treno."],
          ["alla fine", "Alla fine sono tornato a casa."]
        ]
      },
      tips: [
        "Секрет: не нужно сразу говорить сложными фразами. Prima..., Poi..., Alla fine... — уже звучит естественно.",
        "С глаголами движения часто usato essere: sono uscito, sono andato, sono tornato."
      ],
      mistakes: [
        "Не переводи всё через e: лучше разбить на prima, poi, dopo.",
        "Не путай顺序: prima = сначала, poi = потом.",
        "Не забывай вспомогательный глагол: не *prima fatto colazione, а prima ho fatto colazione."
      ],
      examples: [
        { it: "Prima ho studiato, poi ho mangiato.", ru: "Сначала я учился, потом ел." },
        { it: "Poi sono uscito con gli amici.", ru: "Потом я вышел с друзьями." },
        { it: "Alla fine sono andato a dormire.", ru: "В конце я пошёл спать." }
      ]
    },
    {
      title: "Рассказ о выходных и поездке",
      summary: "Типовая история: проснулся, позавтракал, поехал, посетил, поел, вернулся. Здесь смешиваются avere и essere.",
      rule: [
        "Sabato mi sono svegliato presto.",
        "Poi ho fatto colazione.",
        "Sono andato al centro.",
        "Ho visitato un museo.",
        "Ho preso un gelato.",
        "Ho fatto delle foto.",
        "Sono tornato a casa la sera."
      ],
      table: {
        headers: ["Событие", "Фраза"],
        rows: [
          ["проснулся", "Mi sono svegliato."],
          ["позавтракал", "Ho fatto colazione."],
          ["поехал", "Sono andato."],
          ["посетил", "Ho visitato."],
          ["сфотографировал", "Ho fatto delle foto."],
          ["вернулся", "Sono tornato."]
        ]
      },
      tips: [
        "Секрет: ho fatto много универсальных выражений: ho fatto colazione, ho fatto una foto, ho fatto una passeggiata.",
        "visitare — посещать место: ho visitato Roma, ho visitato un museo."
      ],
      mistakes: [
        "Не говори *ho andato. Правильно: sono andato.",
        "Не говори *sono fatto colazione. Правильно: ho fatto colazione.",
        "Не переводи «я сделал фото» как *ho fotografato на A1; проще: ho fatto una foto / ho fatto delle foto."
      ],
      examples: [
        { it: "Nel fine settimana sono andato a Firenze.", ru: "На выходных я ездил во Флоренцию." },
        { it: "Ho visitato il Duomo.", ru: "Я посетил собор." },
        { it: "Ho mangiato una bistecca.", ru: "Я ел стейк." },
        { it: "Sono tornato molto contento.", ru: "Я вернулся очень довольный." }
      ],
      dialog: [
        { who: "Anna", text: "Com'è stato il weekend?", ru: "Как прошли выходные?" },
        { who: "Marco", text: "Bellissimo. Sono andato a Roma e ho visto il Colosseo.", ru: "Отлично. Я ездил в Рим и видел Колизей." },
        { who: "Anna", text: "Che fortuna!", ru: "Как повезло!" }
      ]
    }
  ],
  exercises: [
    {
      type: "dialog-choice",
      question: "Выбери подходящий ответ",
      dialog: [
        { who: "Anna", text: "Cosa hai fatto sabato?" }
      ],
      options: [
        "Sono andato al cinema e ho visto un film.",
        "Vado al cinema perché mi piace.",
        "Sono andare al cinema.",
        "Ho cinema e film."
      ],
      answer: "Sono andato al cinema e ho visto un film.",
      hint: "Нужен рассказ о прошлом с passato prossimo.",
      explain: "Sono andato al cinema e ho visto un film — я пошёл в кино и посмотрел фильм."
    },
    {
      type: "gap",
      question: "Вставь правильную форму",
      sentence: "Prima ___ colazione, poi sono uscito.",
      options: ["ho fatto", "faccio", "fare", "fatto"],
      answer: "ho fatto",
      hint: "Passato prossimo con avere: ho fatto.",
      explain: "Prima ho fatto colazione, poi sono uscito — сначала я позавтракал, потом вышел."
    },
    {
      type: "table",
      question: "Заполни связку",
      headers: ["Порядок", "Фраза"],
      rows: [
        ["сначала", "Prima ho studiato."],
        ["потом", ""]
      ],
      targetRow: 1,
      targetColumn: 1,
      options: ["Poi sono uscito.", "Prima sono uscito.", "Alla fine ho studiato.", "Non ho studiato."],
      answer: "Poi sono uscito.",
      hint: "Poi = потом.",
      explain: "Poi sono uscito — потом я вышел."
    },
    {
      type: "error-choice",
      question: "Найди ошибку",
      tokens: [
        { text: "Sabato", id: "0" },
        { text: "vado", id: "wrong" },
        { text: "al", id: "2" },
        { text: "mare", id: "3" }
      ],
      answer: "wrong",
      hint: "С sabato нужен passato prossimo: sono andato.",
      explain: "Правильно: Sabato sono andato al mare."
    },
    {
      type: "match",
      question: "Соедини фразу и перевод",
      pairs: [
        { left: "Ho preso il treno.", right: "Я сел на поезд." },
        { left: "Sono arrivato.", right: "Я прибыл." },
        { left: "Ho visitato un museo.", right: "Я посетил музей." },
        { left: "Sono tornato a casa.", right: "Я вернулся домой." },
        { left: "Ho fatto delle foto.", right: "Я сделал несколько фото." }
      ],
      explain: "Это базовые фразы для рассказа о поездке.",
      explainWrong: "Неверная пара. Prendere il treno = сесть на поезд, arrivare = прибыть, visitare = посетить, tornare = вернуться, fare foto = сделать фото."
    },
    {
      type: "fill",
      question: "Напиши «Сначала я позавтракал, потом вышел»",
      answer: "Prima ho fatto colazione, poi sono uscito",
      accept: [
        "Prima ho fatto colazione, poi sono uscito",
        "prima ho fatto colazione poi sono uscito",
        "Prima ho fatto colazione poi sono uscito",
        "prima ho fatto colazione, poi sono uscito"
      ],
      placeholder: "Напиши по-итальянски",
      hint: "Prima + ho fatto, poi + sono uscito.",
      explain: "Prima ho fatto colazione, poi sono uscito — сначала я позавтракал, потом вышел."
    },
    {
      type: "build",
      question: "Собери фразу: «На прошлых выходных мы путешествовали»",
      words: ["Il", "fine", "settimana", "scorso", "abbiamo", "viaggiato"],
      answer: "Il fine settimana scorso abbiamo viaggiato",
      hint: "Il fine settimana scorso + abbiamo viaggiato.",
      explain: "Il fine settimana scorso abbiamo viaggiato — на прошлых выходных мы путешествовали."
    },
    {
      type: "choice",
      question: "Какой вспомогательный глагол нужен с partire?",
      options: ["essere", "avere", "fare", "andare"],
      answer: "essere",
      hint: "Глаголы движения обычно требуют essere.",
      explain: "sono partito, sei partita, siamo partiti."
    },
    {
      type: "error-choice",
      question: "Найди ошибку",
      sentence: "Ho andato a Roma la settimana scorsa.",
      options: ["Ho", "andato", "a", "Roma", "la", "settimana", "scorsa"],
      answer: "Ho",
      hint: "С andare используется essere.",
      explain: "Правильно: Sono andato a Roma la settimana scorsa."
    },
    {
      type: "dialog-choice",
      question: "Выбери ответ",
      dialog: [
        { who: "Anna", text: "Com'è stato il viaggio?" }
      ],
      options: [
        "È stato bellissimo.",
        "Sono andato bellissimo.",
        "Ho stato bellissimo.",
        "È stata bellissimo."
      ],
      answer: "È stato bellissimo.",
      hint: "viaggio мужского рода: è stato bellissimo.",
      explain: "È stato bellissimo — это было прекрасно."
    }
  ]
};
