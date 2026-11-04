window.LESSONS = window.LESSONS || {};

window.LESSONS["a1-u9-l3"] = {
  id: "a1-u9-l3",
  title: "Persone, cibo, salute e shopping",
  level: "A1",
  xp: 40,
  theory: [
    {
      title: "Люди, чувства и здоровье",
      summary: "Нужно уметь описать человека, сказать, что нравится, и пожаловаться на самочувствие.",
      rule: [
        "La mia amica e simpatica. - Моя подруга славная.",
        "I miei genitori sono alti. - Мои родители высокие.",
        "Mi piace il caffe. - Мне нравится кофе.",
        "Mi piacciono i dolci. - Мне нравятся сладости.",
        "Ho fame / sete / sonno / paura. - Я голоден / хочу пить / хочу спать / боюсь.",
        "Mi fa male la testa. - У меня болит голова.",
        "Mi fanno male gli occhi. - У меня болят глаза."
      ],
      table: {
        headers: ["Тема", "Фраза"],
        rows: [
          ["описание людей", "E alto, e simpatica, sono intelligenti."],
          ["предпочтения", "Mi piace la pizza. Mi piacciono i film."],
          ["состояния", "Ho fame. Ho sonno. Ho paura."],
          ["боль", "Mi fa male la gola. Mi fanno male le gambe."]
        ]
      },
      tips: [
        "Секрет: piace для единственного числа, piacciono для множественного.",
        "Секрет: ho fame / ho sete / ho sonno / ho paura - это avere, не essere."
      ],
      mistakes: [
        "Не говори: Mi piace i dolci. Правильно: Mi piacciono i dolci.",
        "Не говори: Sono fame. Правильно: Ho fame.",
        "Не говори: Maria e contento. Правильно: Maria e contenta."
      ],
      examples: [
        { it: "Marco e mio fratello.", ru: "Марко - мой брат." },
        { it: "La mia casa e grande.", ru: "Мой дом большой." },
        { it: "Non mi piace la birra.", ru: "Мне не нравится пиво." },
        { it: "Ho mal di pancia.", ru: "У меня болит живот." }
      ]
    },
    {
      title: "Покупки, еда и вежливые просьбы",
      summary: "В магазине и ресторане нужны простые фразы: Quanto costa?, Posso provare?, Vorrei..., Il conto, per favore.",
      rule: [
        "Quanto costa? - Сколько стоит один предмет?",
        "Quanto costano? - Сколько стоят несколько предметов?",
        "Posso provare questa giacca? - Можно примерить этот пиджак?",
        "Che taglia hai? - Какой у тебя размер?",
        "Vorrei un caffe, per favore. - Я хотел бы кофе, пожалуйста.",
        "Il conto, per favore. - Счёт, пожалуйста.",
        "Mi fa lo scontrino, per favore. - Дайте мне чек, пожалуйста."
      ],
      table: {
        headers: ["Ситуация", "Фраза"],
        rows: [
          ["цена одного предмета", "Quanto costa?"],
          ["цена нескольких предметов", "Quanto costano?"],
          ["примерка", "Posso provare...?"],
          ["заказ в баре", "Vorrei un caffe."],
          ["счёт", "Il conto, per favore."]
        ]
      },
      tips: [
        "Секрет: costa для singular, costano для plural.",
        "Секрет: Vorrei + артикль + существительное: Vorrei una camera, Vorrei un biglietto."
      ],
      mistakes: [
        "Не говори: Quanto costa le scarpe? Правильно: Quanto costano le scarpe?",
        "Не говори: Vorrei camera. Правильно: Vorrei una camera.",
        "Не говори: Voglio caffe, если хочешь быть вежливым. Лучше: Vorrei un caffe."
      ],
      examples: [
        { it: "Queste scarpe costano cinquanta euro.", ru: "Эти туфли стоят пятьдесят евро." },
        { it: "Vorrei una pizza margherita.", ru: "Я хотел бы пиццу маргарита." },
        { it: "Posso pagare con la carta?", ru: "Можно заплатить картой?" },
        { it: "E troppo caro.", ru: "Это слишком дорого." }
      ],
      dialog: [
        { who: "Commesso", text: "Posso aiutarLa?", ru: "Могу я вам помочь?" },
        { who: "Cliente", text: "Si, cerco una giacca nera.", ru: "Да, я ищу чёрный пиджак." },
        { who: "Commesso", text: "Che taglia ha?", ru: "Какой у вас размер?" },
        { who: "Cliente", text: "La 42. Posso provarla?", ru: "Сорок второй. Можно примерить?" }
      ]
    }
  ],
  exercises: [
    {
      type: "dialog-choice",
      question: "Выбери ответ покупателя",
      dialog: [
        { who: "Commesso", text: "Posso aiutarLa?" }
      ],
      options: [
        "Cerco una giacca nera.",
        "Vorrei un caffe.",
        "Ho mal di testa.",
        "Il treno parte alle otto."
      ],
      answer: "Cerco una giacca nera.",
      hint: "В магазине одежды говорят, что ищут.",
      explain: "Cerco una giacca nera - я ищу чёрный пиджак."
    },
    {
      type: "error-choice",
      question: "Найди ошибку",
      tokens: [
        { text: "Mi", id: "0" },
        { text: "piacciono", id: "wrong" },
        { text: "la", id: "2" },
        { text: "pizza", id: "3" }
      ],
      answer: "wrong",
      hint: "Pizza - единственное число.",
      explain: "Правильно: Mi piace la pizza."
    },
    {
      type: "gap",
      question: "Вставь правильную форму",
      sentence: "Quanto ___ queste scarpe?",
      options: ["costano", "costa", "costo", "costiamo"],
      answer: "costano",
      hint: "Scarpe - множественное число.",
      explain: "Quanto costano queste scarpe? - Сколько стоят эти туфли?"
    },
    {
      type: "match",
      question: "Соедини фразу и перевод",
      pairs: [
        { left: "ho fame", right: "я голоден" },
        { left: "ho sete", right: "я хочу пить" },
        { left: "ho sonno", right: "я хочу спать" },
        { left: "ho paura", right: "мне страшно" },
        { left: "mi fa male la testa", right: "у меня болит голова" }
      ],
      explain: "Эти состояния выражаются через avere.",
      explainWrong: "Неверная пара. Fame = голод, sete = жажда, sonno = сон, paura = страх, testa = голова."
    },
    {
      type: "table",
      question: "Заполни перевод",
      headers: ["Italiano", "Русский"],
      rows: [
        ["La mia amica e simpatica.", "Моя подруга славная."],
        ["I miei genitori sono alti.", ""]
      ],
      targetRow: 1,
      targetColumn: 1,
      options: [
        "Мои родители высокие.",
        "Мой родитель высокий.",
        "Мои родители высоко.",
        "Мои родители высота."
      ],
      answer: "Мои родители высокие.",
      hint: "Genitori - множественное число.",
      explain: "I miei genitori sono alti - мои родители высокие."
    },
    {
      type: "fill",
      question: "Напиши «У меня болит горло»",
      answer: "Ho mal di gola",
      accept: [
        "Ho mal di gola",
        "ho mal di gola",
        "Mi fa male la gola",
        "mi fa male la gola"
      ],
      placeholder: "Напиши по-итальянски",
      hint: "Ho mal di + часть тела.",
      explain: "Ho mal di gola - у меня болит горло."
    },
    {
      type: "build",
      question: "Собери фразу: «Я хотел бы двухместный номер»",
      words: ["Vorrei", "una", "camera", "doppia"],
      answer: "Vorrei una camera doppia",
      hint: "Camera женского рода: doppia.",
      explain: "Vorrei una camera doppia - я хотел бы двухместный номер."
    },
    {
      type: "choice",
      question: "Как спросить «Какой у тебя размер?»",
      options: [
        "Che taglia hai?",
        "Che peso hai?",
        "Quanto costi?",
        "Dove abiti?"
      ],
      answer: "Che taglia hai?",
      hint: "Taglia = размер одежды.",
      explain: "Che taglia hai? - Какой у тебя размер?"
    },
    {
      type: "error-choice",
      question: "Найди ошибку",
      sentence: "Maria e contento.",
      options: ["Maria", "e", "contento"],
      answer: "contento",
      hint: "Maria - женский род.",
      explain: "Правильно: Maria e contenta."
    },
    {
      type: "dialog-choice",
      question: "Выбери ответ пациента",
      dialog: [
        { who: "Dottore", text: "Dove ha male?" }
      ],
      options: [
        "Mi fa male la schiena.",
        "Ho vent'anni.",
        "Vado al lavoro.",
        "Costa poco."
      ],
      answer: "Mi fa male la schiena.",
      hint: "Вопрос про боль.",
      explain: "Mi fa male la schiena - у меня болит спина."
    }
  ]
};
