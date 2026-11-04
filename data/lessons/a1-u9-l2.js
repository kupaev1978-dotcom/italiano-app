window.LESSONS = window.LESSONS || {};

window.LESSONS["a1-u9-l2"] = {
  id: "a1-u9-l2",
  title: "Citta, trasporti e viaggi: диалоги и ошибки",
  level: "A1",
  xp: 40,
  theory: [
    {
      title: "Предлоги места и направления",
      summary: "Для города и транспорта важны готовые блоки: a Roma, in Italia, in centro, alla stazione, dal medico, a piedi, in autobus.",
      rule: [
        "a + город: vado a Roma, abito a Milano.",
        "in + страна: vivo in Italia, vado in Francia.",
        "in + центр/транспорт: in centro, in autobus, in treno, in aereo.",
        "a + пешком: a piedi.",
        "da + человек/профессионал: dal medico, dal parrucchiere.",
        "alle + часы: alle otto, alle tredici."
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
        "Секрет: город - a, страна - in. Это одно из самых важных различий.",
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
      title: "Фразы для путешествий",
      summary: "В поездке нужны вежливые шаблоны: Vorrei..., Posso..., Mi puo...? Quanto costa? A che ora parte?",
      rule: [
        "Vorrei un biglietto per Roma. - Я хотел бы билет до Рима.",
        "Posso pagare con la carta? - Можно заплатить картой?",
        "Mi puo indicare la stazione? - Вы можете указать мне вокзал?",
        "A che ora parte il treno? - Во сколько отправляется поезд?",
        "Dov'e l'uscita? - Где выход?",
        "Ho perso la valigia. - Я потерял чемодан."
      ],
      table: {
        headers: ["Ситуация", "Фраза"],
        rows: [
          ["купить билет", "Vorrei un biglietto per..."],
          ["спросить время отправления", "A che ora parte...?"],
          ["спросить дорогу", "Scusi, come arrivo a...?"],
          ["попросить помощь", "Mi puo aiutare, per favore?"],
          ["потерять багаж", "Ho perso la valigia."]
        ]
      },
      tips: [
        "Секрет: Come arrivo a...? - очень универсальная фраза: Как мне добраться до...?",
        "Секрет: Vorrei звучит вежливее, чем voglio."
      ],
      mistakes: [
        "Не говори: Voglio biglietto. Правильно: Vorrei un biglietto.",
        "Не говори: Mi puo aiuta. Правильно: Mi puo aiutare.",
        "Не говори: A che ora va il treno? Лучше: A che ora parte il treno?"
      ],
      examples: [
        { it: "Scusi, come arrivo all'aeroporto?", ru: "Извините, как мне добраться до аэропорта?" },
        { it: "Vorrei una camera doppia.", ru: "Я хотел бы двухместный номер." },
        { it: "Il volo parte alle dieci.", ru: "Рейс отправляется в десять." },
        { it: "Dov'e il ritiro bagagli?", ru: "Где получение багажа?" }
      ],
      dialog: [
        { who: "Turista", text: "Scusi, mi puo indicare la stazione?", ru: "Извините, вы можете указать мне вокзал?" },
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
      hint: "С городом используется a.",
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
        "Vorrei un caffe.",
        "Ho perso la valigia.",
        "Il conto, per favore."
      ],
      answer: "Vada dritto e giri a destra.",
      hint: "Нужен маршрут.",
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
      explain: "Это базовые городские выражения.",
      explainWrong: "Неверная пара. Stazione = вокзал, centro = центр, medico = врач, piedi = пешком, autobus = автобус."
    },
    {
      type: "table",
      question: "Заполни фразу",
      headers: ["Ситуация", "Фраза"],
      rows: [
        ["спросить дорогу", "Scusi, come arrivo...?"],
        ["попросить билет", ""]
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
      hint: "Parte + alle + часы.",
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
      hint: "Устойчивое выражение: a piedi.",
      explain: "Vado a piedi - я иду пешком."
    },
    {
      type: "error-choice",
      question: "Найди ошибку",
      sentence: "Abito a Italia.",
      options: ["Abito", "a", "Italia"],
      answer: "a",
      hint: "Со странами используется in.",
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
