window.LESSONS = window.LESSONS || {};

window.LESSONS["a1-u4-l5"] = {
  id: "a1-u4-l5",
  title: "Покупки, цены и оплата",
  level: "A1",
  xp: 35,
  theory: [
    {
      title: "Сколько стоит? costa / costano",
      summary: "Глагол costare — стоить. Один предмет: costa. Несколько предметов: costano. Это одна из самых частых тем в магазине.",
      rule: [
        "Quanto costa? — Сколько стоит?",
        "Quanto costano? — Сколько стоят?",
        "Il libro costa dieci euro. — Книга стоит десять евро.",
        "Le scarpe costano quaranta euro. — Туфли стоят сорок евро.",
        "È caro. — Это дорого / он дорогой.",
        "È cara. — Это дорого / она дорогая.",
        "È economico. — Это дёшево / он недорогой.",
        "È economica. — Это дёшево / она недорогая.",
        "È troppo caro. — Это слишком дорого.",
        "C'è lo sconto? — Есть скидка?"
      ],
      table: {
        headers: ["Фраза", "Когда использовать"],
        rows: [
          ["Quanto costa?", "один предмет"],
          ["Quanto costano?", "несколько предметов"],
          ["È troppo caro.", "дорого, мужской род или общее мнение"],
          ["È troppo cara.", "дорого, женский род"],
          ["C'è lo sconto?", "спросить про скидку"]
        ]
      },
      tips: [
        "Секрет: caro/cara/economico/economica согласуются с предметом. Il cappotto è caro. La borsa è cara.",
        "Если не помнишь род, можно использовать нейтральное по смыслу È troppo caro / È troppo economico, но лучше согласовывать."
      ],
      mistakes: [
        "Не говори Quanto costa le scarpe? Правильно: Quanto costano le scarpe?",
        "Не говори È caro la borsa. Правильно: È cara la borsa или La borsa è cara.",
        "Не путай costa и costano: singular vs plural."
      ],
      examples: [
        { it: "Quanto costa questa giacca?", ru: "Сколько стоит этот пиджак?" },
        { it: "Quanto costano queste scarpe?", ru: "Сколько стоят эти туфли?" },
        { it: "È troppo caro.", ru: "Это слишком дорого." },
        { it: "C'è lo sconto?", ru: "Есть скидка?" }
      ]
    },
    {
      title: "Оплата: carta, contanti, scontrino",
      summary: "В магазине и баре нужны фразы про оплату: картой, наличными, чек, приём карты.",
      rule: [
        "Posso pagare con la carta? — Можно заплатить картой?",
        "Posso pagare in contanti? — Можно заплатить наличными?",
        "Accettate la carta? — Вы принимаете карту?",
        "Mi fa lo scontrino, per favore. — Дайте мне чек, пожалуйста.",
        "Pago io. — Я плачу.",
        "Prendo questo. / Prendo questa. — Я беру это / эту.",
        "A che ora chiudete? — Во сколько вы закрываетесь?",
        "Siete aperti? — Вы открыты?"
      ],
      table: {
        headers: ["Фраза", "Значение"],
        rows: [
          ["con la carta", "картой"],
          ["in contanti", "наличными"],
          ["lo scontrino", "чек"],
          ["Accettate la carta?", "Вы принимаете карту?"],
          ["Pago io.", "Я плачу."],
          ["Prendo questa.", "Я беру эту."]
        ]
      },
      tips: [
        "Секрет: in contanti — всегда во множественном числе, «наличные». Не in contante.",
        "Con la carta — с картой. Не in carta."
      ],
      mistakes: [
        "Не говори Posso pagare in carta. Правильно: Posso pagare con la carta.",
        "Не говори Posso pagare in contante. Правильно: in contanti.",
        "Не забывай per favore, когда просишь сcontrino."
      ],
      examples: [
        { it: "Posso pagare con la carta?", ru: "Можно заплатить картой?" },
        { it: "Accettate la carta?", ru: "Вы принимаете карту?" },
        { it: "Mi fa lo scontrino, per favore.", ru: "Дайте мне чек, пожалуйста." },
        { it: "Prendo questa giacca.", ru: "Я беру этот пиджак." }
      ],
      dialog: [
        { who: "Cliente", text: "Quanto costano queste scarpe?" },
        { who: "Commesso", text: "Costano sessanta euro." },
        { who: "Cliente", text: "Sono un po' care. C'è lo sconto?" },
        { who: "Commesso", text: "Sì, oggi c'è il venti per cento." },
        { who: "Cliente", text: "Allora le prendo. Posso pagare con la carta?" },
        { who: "Commesso", text: "Certo." }
      ]
    }
  ],
  exercises: [
    {
      type: "gap",
      question: "Вставь правильную форму",
      sentence: "Quanto ___ le scarpe?",
      options: ["costa", "costano", "costo", "costiamo"],
      answer: "costano",
      hint: "Scarpe — множественное число.",
      explain: "Quanto costano le scarpe? — Сколько стоят туфли?"
    },
    {
      type: "table",
      question: "Заполни вопрос",
      headers: ["Предмет", "Вопрос"],
      rows: [
        ["il libro", "Quanto costa?"],
        ["gli occhiali", ""]
      ],
      targetRow: 1,
      targetColumn: 1,
      options: ["Quanto costano?", "Quanto costa?", "Quanto costi?", "Quanto costiamo?"],
      answer: "Quanto costano?",
      hint: "Occhiali — множественное число.",
      explain: "Quanto costano gli occhiali? — Сколько стоят очки?"
    },
    {
      type: "error-choice",
      question: "Найди ошибку",
      tokens: [
        { text: "Quanto", id: "0" },
        { text: "costa", id: "wrong" },
        { text: "le", id: "2" },
        { text: "scarpe", id: "3" }
      ],
      answer: "wrong",
      hint: "Scarpe — множественное число, поэтому costano.",
      explain: "Правильно: Quanto costano le scarpe?"
    },
    {
      type: "dialog-choice",
      question: "Выбери ответ продавца",
      dialog: [
        { who: "Cliente", text: "Posso pagare con la carta?" }
      ],
      options: [
        "Sì, certo.",
        "Sì, prego.",
        "Sì, è tutto.",
        "Sì, arrivederci."
      ],
      answer: "Sì, certo.",
      hint: "На вопрос о возможности отвечают Sì, certo.",
      explain: "Sì, certo — Да, конечно."
    },
    {
      type: "choice",
      question: "Как сказать «Слишком дорого» о сумке (la borsa)?",
      options: ["È troppo cara.", "È troppo caro.", "Sono troppo cara.", "È troppo caros."],
      answer: "È troppo cara.",
      hint: "Borsa — женский род: cara.",
      explain: "È troppo cara — она слишком дорогая."
    },
    {
      type: "fill",
      question: "Напиши «Есть скидка?»",
      answer: "C'è lo sconto?",
      accept: [
        "C'è lo sconto?",
        "c'è lo sconto",
        "C'è lo sconto",
        "c'è lo sconto?"
      ],
      placeholder: "Напиши по-итальянски",
      hint: "C'è = есть/имеется.",
      explain: "C'è lo sconto? — Есть скидка?"
    },
    {
      type: "build",
      question: "Собери фразу: «Я беру этот пиджак»",
      words: ["Prendo", "questa", "giacca"],
      answer: "Prendo questa giacca",
      hint: "Giacca женского рода: questa.",
      explain: "Prendo questa giacca — я беру этот пиджак."
    },
    {
      type: "match",
      question: "Соедини слово и перевод",
      pairs: [
        { left: "in contanti", right: "наличными" },
        { left: "con la carta", right: "картой" },
        { left: "lo scontrino", right: "чек" },
        { left: "il prezzo", right: "цена" },
        { left: "l'euro", right: "евро" }
      ],
      explain: "Эти слова нужны при оплате.",
      explainWrong: "Неверная пара. Contanti = наличные, carta = карта, scontrino = чек, prezzo = цена, euro = евро."
    },
    {
      type: "error-choice",
      question: "Найди ошибку",
      sentence: "Posso pagare in la carta.",
      options: ["Posso", "pagare", "in", "la", "carta"],
      answer: "in",
      hint: "С картой говорят con la carta.",
      explain: "Правильно: Posso pagare con la carta."
    },
    {
      type: "table",
      question: "Заполни фразу",
      headers: ["Значение", "Фраза"],
      rows: [
        ["Вы принимаете карту?", "Accettate la carta?"],
        ["Можно заплатить наличными?", ""]
      ],
      targetRow: 1,
      targetColumn: 1,
      options: ["Posso pagare in contanti?", "Posso pagare con contanti?", "Posso pagare in carta?", "Posso pagare la contanti?"],
      answer: "Posso pagare in contanti?",
      hint: "Наличными — in contanti.",
      explain: "Posso pagare in contanti? — Можно заплатить наличными?"
    }
  ]
};
