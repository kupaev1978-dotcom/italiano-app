window.LESSONS = window.LESSONS || {};

window.LESSONS["a1-u1-l2"] = {
  id: "a1-u1-l2",
  title: "Глаголы на -isc-: capire, finire, preferire",
  level: "A1",
  xp: 35,
  theory: [
    {
      title: "Секрет глаголов на -isc-",
      summary: "Многие глаголы на -IRE получают в настоящем времени вставку -isc-. Но только в четырёх лицах: io, tu, lui/lei, loro. В noi и voi её нет.",
      rule: [
        "capire — понимать: capisco, capisci, capisce, capiamo, capite, capiscono.",
        "finire — заканчивать: finisco, finisci, finisce, finiamo, finite, finiscono.",
        "preferire — предпочитать: preferisco, preferisci, preferisce, preferiamo, preferite, preferiscono.",
        "Схема: -isco, -isci, -isce, -iamo, -ite, -iscono."
      ],
      table: {
        headers: ["Лицо", "capire", "finire", "preferire"],
        rows: [
          ["io", "capisco", "finisco", "preferisco"],
          ["tu", "capisci", "finisci", "preferisci"],
          ["lui / lei", "capisce", "finisce", "preferisce"],
          ["noi", "capiamo", "finiamo", "preferiamo"],
          ["voi", "capite", "finite", "preferite"],
          ["loro", "capiscono", "finiscono", "preferiscono"]
        ]
      },
      tips: [
        "Главный секрет: -isc- появляется только там, где ударение падает на окончание: io, tu, lui/lei, loro. В noi и voi ударение на -ia-/-i-, поэтому -isc- исчезает.",
        "Запомни якорь: capisco, capisci, capisce, capiscono — с -isc-; capiamo, capite — без -isc-."
      ],
      mistakes: [
        "Не говори *capisciamo. Правильно: capiamo.",
        "Не говори *capiscite. Правильно: capite.",
        "Не забывай -isc- в loro: не *capiono, а capiscono."
      ],
      examples: [
        { it: "Non capisco.", ru: "Я не понимаю." },
        { it: "Capisci italiano?", ru: "Ты понимаешь по-итальянски?" },
        { it: "Lei capisce tutto.", ru: "Она всё понимает." },
        { it: "Noi capiamo bene.", ru: "Мы хорошо понимаем." },
        { it: "Loro finiscono presto.", ru: "Они заканчивают рано." }
      ]
    },
    {
      title: "Какие глаголы часто бывают на -isc-",
      summary: "Не все глаголы на -IRE имеют -isc-, но очень многие частотные — да. На A1 важно знать несколько ключевых.",
      rule: [
        "capire — понимать",
        "finire — заканчивать",
        "preferire — предпочитать",
        "costruire — строить",
        "pulire — убирать, чистить",
        "spedire — отправлять, посылать"
      ],
      table: {
        headers: ["Глагол", "Значение", "Пример"],
        rows: [
          ["capire", "понимать", "Capisco la domanda."],
          ["finire", "заканчивать", "Finisco alle cinque."],
          ["preferire", "предпочитать", "Preferisco il caffè."],
          ["costruire", "строить", "Costruiscono una casa."],
          ["pulire", "убирать, чистить", "Pulisco la camera."],
          ["spedire", "отправлять", "Spedisco una lettera."]
        ]
      },
      tips: [
        "Секрет для памяти: глаголы чувства, понимания и предпочтения часто бывают на -isc-: capire, preferire. Это не правило на 100%, но хорошая подсказка.",
        "Если сомневаешься, проверь форму noi: у глаголов на -isc- в noi всё равно будет обычный хвост -iamo, без -isc-."
      ],
      mistakes: [
        "Не путай regolare -IRE и -isc- -IRE: dormire —Regular: dormo, dormi, dorme, dormiamo, dormite, dormono. capire — -isc-: capisco, capisci, capisce, capiamo, capite, capiscono.",
        "Не добавляй -isc- туда, где его нет: *preferisciamo — ошибка."
      ],
      examples: [
        { it: "Preferisco la pizza.", ru: "Я предпочитаю пиццу." },
        { it: "Preferiamo il vino.", ru: "Мы предпочитаем вино." },
        { it: "Costruiscono un palazzo.", ru: "Они строят здание." },
        { it: "Pulisco la cucina.", ru: "Я убираю кухню." }
      ],
      dialog: [
        { who: "Marco", text: "Capisci l'italiano?", ru: "Ты понимаешь итальянский?" },
        { who: "Anna", text: "Sì, capisco molto.", ru: "Да, я многое понимаю." },
        { who: "Marco", text: "Preferisci il caffè o il tè?", ru: "Ты предпочитаешь кофе или чай?" },
        { who: "Anna", text: "Preferisco il caffè.", ru: "Я предпочитаю кофе." },
        { who: "Marco", text: "Allora finiamo e andiamo al bar.", ru: "Тогда заканчиваем и идём в бар." }
      ]
    }
  ],
  exercises: [
    {
      type: "gap",
      question: "Вставь правильную форму",
      sentence: "Io ___ italiano.",
      options: ["capisco", "capisci", "capisce", "capiamo"],
      answer: "capisco",
      hint: "Для io у capire форма capisco.",
      explain: "Io capisco italiano — я понимаю по-итальянски."
    },
    {
      type: "table",
      question: "Заполни форму для noi",
      headers: ["Лицо", "Форма"],
      rows: [
        ["io", "finisco"],
        ["tu", "finisci"],
        ["lui / lei", "finisce"],
        ["noi", ""],
        ["voi", "finite"],
        ["loro", "finiscono"]
      ],
      targetRow: 3,
      targetColumn: 1,
      options: ["finiamo", "finisciamo", "finite", "finiscono"],
      answer: "finiamo",
      hint: "В noi глаголы на -isc- теряют -isc-.",
      explain: "Noi finiamo — мы заканчиваем."
    },
    {
      type: "choice",
      question: "Какая форма неверная?",
      options: ["capisco", "capisci", "capisciamo", "capiscono"],
      answer: "capisciamo",
      hint: "В noi не добавляется -isc-.",
      explain: "Правильно: capiamo."
    },
    {
      type: "match",
      question: "Соедини лицо и форму глагола preferire",
      pairs: [
        { left: "io", right: "preferisco" },
        { left: "tu", right: "preferisci" },
        { left: "lui / lei", right: "preferisce" },
        { left: "noi", right: "preferiamo" },
        { left: "loro", right: "preferiscono" }
      ],
      explain: "Помни: -isc- есть в io, tu, lui/lei, loro, но нет в noi и voi.",
      explainWrong: "Неверная пара. В noi и voi -isc- исчезает."
    },
    {
      type: "fill",
      question: "Напиши «Они понимают»",
      answer: "Capiscono",
      accept: ["Capiscono", "capiscono", "Loro capiscono", "loro capiscono"],
      placeholder: "Форма для loro",
      hint: "Для loro у capire: capiscono.",
      explain: "Loro capiscono — они понимают."
    },
    {
      type: "gap",
      question: "Вставь правильную форму",
      sentence: "Voi ___ il caffè.",
      options: ["preferite", "preferite", "preferiscono", "preferisco"],
      answer: "preferite",
      hint: "Для voi у глаголов на -ISC- окончание -ite, без -isc-.",
      explain: "Voi preferite il caffè — вы предпочитаете кофе."
    },
    {
      type: "build",
      question: "Собери фразу: «Мы предпочитаем пиццу»",
      words: ["Preferiamo", "la", "pizza"],
      answer: "Preferiamo la pizza",
      hint: "Noi + preferire = preferiamo.",
      explain: "Preferiamo la pizza — мы предпочитаем пиццу."
    },
    {
      type: "table",
      question: "Заполни форму для lui/lei",
      headers: ["Лицо", "Форма"],
      rows: [
        ["io", "costruisco"],
        ["tu", "costruisci"],
        ["lui / lei", ""],
        ["noi", "costruiamo"]
      ],
      targetRow: 2,
      targetColumn: 1,
      options: ["costruisce", "costruisco", "costruite", "costruiscono"],
      answer: "costruisce",
      hint: "Для lui/lei у глаголов на -isc- окончание -isce.",
      explain: "Lui/lei costruisce — он/она строит."
    },
    {
      type: "choice",
      question: "Какой глагол NOT относится к -isc- в presente?",
      options: ["capire", "finire", "dormire", "preferire"],
      answer: "dormire",
      hint: "Dormire — обычный -IRE: dormo, dormi, dorme, dormiamo, dormite, dormono.",
      explain: "Dormire не имеет -isc-."
    },
    {
      type: "fill",
      question: "Напиши «Я не понимаю»",
      answer: "Non capisco",
      accept: ["Non capisco", "non capisco", "Io non capisco", "io non capisco"],
      placeholder: "Напиши по-итальянски",
      hint: "Non ставится перед глаголом: non capisco.",
      explain: "Non capisco — я не понимаю."
    }
  ]
};
