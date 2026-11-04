window.LESSONS = window.LESSONS || {};

window.LESSONS["a1-u9-l2"] = {
  id: "a1-u9-l2",
  title: "Città, trasporti e viaggi: диалоги и ошибки",
  level: "A1",
  xp: 40,
  theory: [
    {
      title: "Предлоги места и направления",
      summary: "Per città e trasporti servono blocchi pronti: a Roma, in Italia, in centro, alla stazione, dal medico, a piedi, in autobus.",
      rule: [
        "a + città: vado a Roma, abito a Milano.",
        "in + paese: vivo in Italia, vado in Francia.",
        "in + centro/mezzi: in centro, in autobus, in treno, in aereo.",
        "a + piedi: a piedi.",
        "da + persona/professionista: dal medico, dal parrucchiere.",
        "alle + ore: alle otto, alle tredici."
      ],
      table: {
        headers: ["Фраза", "Значение"],
        rows: [
          ["Vado a Roma.", "Я еду в Рим."],
          ["Abito in Italia.", "Я живу в Италии."],
          ["Sono in centro.", "Я в центре."],
          ["Vado alla stazione.", "Я иду на вокзал."],
          ["Vado dal medico.", "Я иду к врачу."],
          ["Vado a piedi.", "Я иду пешком."]
        ]
      },
      tips: [
        "Секрет: città usa a, paese usa in. Questa è una delle differenze più importanti.",
        "Секрет: alla stazione = a + la stazione. All'aeroporto = a + l'aeroporto."
      ],
      mistakes: [
        "Не говори: vado in Roma. Правильно: vado a Roma.",
        "Не говори: abito a Italia. Правильно: abito in Italia.",
        "Не говори: vado a medico. Правильно: vado dal medico."
      ],
      examples: [
        { it: "Domani vado a Firenze.", ru: "Завтра я еду во Флоренцию." },
        { it: "Abito in via Roma.", ru: "Я живу на улице Рома." },
        { it: "Il treno parte alle nove.", ru: "Поезд отправляется в девять." },
        { it: "Prendo l'autobus numero 10.", ru: "Я сажусь на автобус номер 10." }
      ]
    },
    {
      title: "Фразы per viaggiare",
      summary: "In viaggio servono modelli gentili: Vorrei..., Posso..., Mi può...? Quanto costa? A che ora parte?",
      rule: [
        "Vorrei un biglietto per Roma. - Я хотел бы билет до Рима.",
        "Posso pagare con la carta? - Можно заплатить картой?",
        "Mi può indicare la stazione? - Вы можете указать мне вокзал?",
        "A che ora parte il treno? - Во сколько отправляется поезд?",
        "Dov'è l'uscita? - Где выход?",
        "Ho perso la valigia. - Я потерял чемодан."
      ],
      table: {
        headers: ["Ситуация", "Фраза"],
        rows: [
          ["comprare un biglietto", "Vorrei un biglietto per..."],
          ["chiedere l'orario", "A che ora parte...?"],
          ["chiedere la strada", "Scusi, come arrivo a...?"],
          ["chiedere aiuto", "Mi può aiutare, per favore?"],
          ["bagaglio perduto", "Ho perso la valigia."]
        ]
      },
      tips: [
        "Секрет: Come arrivo a...? è una frase universale: Как мне добраться до...?",
        "Секрет: Vorrei è più gentile di voglio."
      ],
      mistakes: [
        "Не говори: Voglio biglietto. Правильно: Vorrei un biglietto.",
        "Не говори: Mi può aiuta. Правильно: Mi può aiutare.",
        "Не говори: A che ora va il treno? Meglio: A che ora parte il treno?"
      ],
      examples: [
        { it: "Scusi, come arrivo all'aeroporto?", ru: "Извините, как мне добраться до аэропорта?" },
        { it: "Vorrei una camera doppia.", ru: "Я хотел бы двухместный номер." },
        { it: "Il volo parte alle dieci.", ru: "Рейс отправляется в десять." },
        { it: "Dov'è il ritiro bagagli?", ru: "Где получение багажа?" }
      ],
      dialog: [
        { who: "Turista", text: "Scusi, mi può indicare la stazione?", ru: "Извините, вы можете указать мне вокзал?" },
        { who: "Passante", text: "Certo. Vada dritto e giri a destra.", ru: "Конечно. Идите прямо и поверните направо." },
        { who: "Turista", text: "Grazie mille!", ru: "Огромное спасибо!" }
      ]
    }
  ],
  exercises: [
    {
      type: "gap",
      question: "Вставь предлог",
      sentence: "Vado ___ stazione.",
      options: ["alla", "a", "in", "da"],
      answer: "alla",
      hint: "a + la stazione = alla stazione.",
      explain: "Vado alla stazione - я иду на вокзал."
    },
    {
      type: "error-choice",
      question: "Найди ошибку",
      tokens: [
        { text: "Vado", id: "0" },
        { text: "in", id: "wrong" },
        { text: "Roma", id: "2" }
      ],
      answer: "wrong",
      hint: "Con le città si usa a.",
      explain: "Правильно: Vado a Roma."
    },
    {
      type: "dialog-choice",
      question: "Выбери ответ прохожего",
      dialog: [
        { who: "Turista", text: "Scusi, come arrivo alla stazione?" }
      ],
      options: [
        "Vada dritto e giri a destra.",
        "Vorrei un caffè.",
        "Ho perso la valigia.",
        "Il conto, per favore."
      ],
      answer: "Vada dritto e giri a destra.",
      hint: "Serve un'indicazione stradale.",
      explain: "Vada dritto e giri a destra - идите прямо и поверните направо."
    },
    {
      type: "match",
      question: "Соедини фразу и перевод",
      pairs: [
        { left: "alla stazione", right: "на вокзале" },
        { left: "in centro", right: "в центре" },
        { left: "dal medico", right: "к врачу" },
        { left: "a piedi", right: "пешком" },
        { left: "in autobus", right: "на автобусе" }
      ],
      explain: "Queste sono espressioni di base per la città.",
      explainWrong: "Неверная пара. Stazione = вокзал, centro = центр, medico = врач, piedi = пешком, autobus = автобус."
    },
    {
      type: "table",
      question: "Заполни фразу",
      headers: ["Ситуация", "Фраза"],
      rows: [
        ["chiedere la strada", "Scusi, come arrivo...?"],
        ["chiedere un biglietto", ""]
      ],
      targetRow: 1,
      targetColumn: 1,
      options: [
        "Vorrei un biglietto per...",
        "Il conto, per favore.",
        "Ho mal di testa.",
        "Che ore sono?"
      ],
      answer: "Vorrei un biglietto per...",
      hint: "Vorrei + un biglietto.",
      explain: "Vorrei un biglietto per... - я хотел бы билет до..."
    },
    {
      type: "fill",
      question: "Напиши «Я живу в центре»",
      answer: "Abito in centro",
      accept: [
        "Abito in centro",
        "abito in centro",
        "Io abito in centro",
        "io abito in centro"
      ],
      placeholder: "Напиши по-итальянски",
      hint: "Abito + in centro.",
      explain: "Abito in centro - я живу в центре."
    },
    {
      type: "build",
      question: "Собери фразу: «Поезд отправляется в восемь»",
      words: ["Il", "treno", "parte", "alle", "otto"],
      answer: "Il treno parte alle otto",
      hint: "Parte + alle + ore.",
      explain: "Il treno parte alle otto - поезд отправляется в восемь."
    },
    {
      type: "choice",
      question: "Как сказать «Я иду пешком»?",
      options: [
        "Vado a piedi.",
        "Vado in piedi.",
        "Sono a piede.",
        "Cammino piede."
      ],
      answer: "Vado a piedi.",
      hint: "Espressione fissa: a piedi.",
      explain: "Vado a piedi - я иду пешком."
    },
    {
      type: "error-choice",
      question: "Найди ошибку",
      sentence: "Abito a Italia.",
      options: ["Abito", "a", "Italia"],
      answer: "a",
      hint: "Con i paesi si usa in.",
      explain: "Правильно: Abito in Italia."
    },
    {
      type: "dialog-choice",
      question: "Выбери ответ кассира",
      dialog: [
        { who: "Cliente", text: "Vorrei un biglietto per Firenze." }
      ],
      options: [
        "Ecco il biglietto.",
        "Il conto, per favore.",
        "Ho mal di testa.",
        "Buonanotte."
      ],
      answer: "Ecco il biglietto.",
      hint: "Ecco = вот.",
      explain: "Ecco il biglietto - вот билет."
    }
  ]
};
