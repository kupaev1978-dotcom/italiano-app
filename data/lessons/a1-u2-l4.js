window.LESSONS = window.LESSONS || {};

window.LESSONS["a1-u2-l4"] = {
  id: "a1-u2-l4",
  title: "Как спросить дорогу и объяснить маршрут",
  level: "A1",
  xp: 40,
  theory: [
    {
      title: "Спросить дорогу: готовые вежливые фразы",
      summary: "На A1 не нужно сразу глубоко учить императив. Достаточно запомнить готовые вежливые формы, которые носители используют постоянно.",
      rule: [
        "Scusi, dov'è la stazione? — Извините, где вокзал?",
        "Mi può indicare la strada? — Вы можете указать мне дорогу?",
        "Come arrivo al centro? — Как мне добраться до центра?",
        "È lontano? — Это далеко?",
        "È vicino? — Это рядом?",
        "Giri a destra. — Поверните направо.",
        "Giri a sinistra. — Поверните налево.",
        "Vada dritto. — Идите прямо.",
        "Prenda la prima a destra. — Возьмите первую направо.",
        "Attraversi la piazza. — Перейдите площадь."
      ],
      table: {
        headers: ["Фраза", "Значение"],
        rows: [
          ["Scusi, dov'è...?", "Извините, где...?"],
          ["Come arrivo a...?", "Как мне добраться до...?"],
          ["È lontano?", "Это далеко?"],
          ["Giri a destra.", "Поверните направо."],
          ["Giri a sinistra.", "Поверните налево."],
          ["Vada dritto.", "Идите прямо."]
        ]
      },
      tips: [
        "Секрет регистра: формы giri, vada, prenda — вежливые. С другом можно сказать gira, va, prendi. На A1 безопасно использовать вежливые формы с незнакомцами.",
        "Destra = право, sinistra = лево. Мнемоника: в sinistra больше букв, как в левой руке часто больше колец? Не идеально, но aiuta ricordare."
      ],
      mistakes: [
        "Не начинай разговор с Ciao к незнакомцу на улице. Лучше Scusi.",
        "Не путай destra и sinistra: destra — направо, sinistra — налево.",
        "Не говори dove è senza apostrofo в быстрой речи; правильно dov'è."
      ],
      examples: [
        { it: "Scusi, dov'è il bar?", ru: "Извините, где бар?" },
        { it: "Come arrivo alla stazione?", ru: "Как мне добраться до вокзала?" },
        { it: "È lontano da qui?", ru: "Это далеко отсюда?" },
        { it: "Giri a sinistra.", ru: "Поверните налево." }
      ]
    },
    {
      title: "Объяснить маршрут: prima, poi, dopo, alla fine",
      summary: "Маршрут — это последовательность. Слова-связки делают речь понятной даже с простым словарём.",
      rule: [
        "prima — сначала",
        "poi — потом",
        "dopo — после",
        "alla fine — в конце",
        "sempre dritto — всё время прямо",
        "all'incrocio — на перекрёстке",
        "dietro l'angolo — за углом",
        "sulla destra / sulla sinistra — справа / слева"
      ],
      table: {
        headers: ["Связка", "Пример"],
        rows: [
          ["prima", "Prima vada dritto."],
          ["poi", "Poi giri a sinistra."],
          ["dopo", "Dopo attraversi la piazza."],
          ["alla fine", "Alla fine è sulla destra."]
        ]
      },
      tips: [
        "Секрет натурального маршрута: не нужно говорить сложными грамматическими конструкциями. Достаточно: Prima... Poi... Alla fine...",
        "Fраза È dietro l'angolo спасает часто: «за углом» =很近, но не всегда понятно без жестов. Добавь: a destra / a sinistra."
      ],
      mistakes: [
        "Не переводи «потом» как dopo в начале фразы всегда. Poi = затем, после следующего шага. Dopo чаще «после» чего-то.",
        "Не забывай артикль в all'incrocio, non a incrocio."
      ],
      examples: [
        { it: "Prima vada dritto, poi giri a sinistra.", ru: "Сначала идите прямо, потом поверните налево." },
        { it: "Alla fine la banca è sulla destra.", ru: "В конце банк будет справа." },
        { it: "È dietro l'angolo, a destra.", ru: "Это за углом, справа." }
      ],
      dialog: [
        { who: "Turista", text: "Scusi, come arrivo alla stazione?", ru: "Извините, как мне добраться до вокзala?" },
        { who: "Passante", text: "Prima vada dritto.", ru: "Сначала идите прямо." },
        { who: "Turista", text: "Poi?", ru: "Потом?" },
        { who: "Passante", text: "Poi giri a sinistra. È dietro l'angolo.", ru: "Потом поверните налево. Он за углом." },
        { who: "Turista", text: "Grazie mille!", ru: "Огромное спасибо!" }
      ]
    }
  ],
  exercises: [
    {
      type: "gap",
      question: "Вставь направление",
      sentence: "Giri a ___.",
      options: ["destra", "sinistra", "dritto", "vicino"],
      answer: "destra",
      hint: "Если нужно «направо», используй destra.",
      explain: "Giri a destra — поверните направо."
    },
    {
      type: "match",
      question: "Соедини фразу и перевод",
      pairs: [
        { left: "Vada dritto.", right: "Идите прямо." },
        { left: "Giri a sinistra.", right: "Поверните налево." },
        { left: "È dietro l'angolo.", right: "Это за углом." },
        { left: "Sulla destra.", right: "Справа." },
        { left: "All'incrocio.", right: "На перекрёстке." }
      ],
      explain: "Это базовые фразы для маршрута.",
      explainWrong: "Неверная пара. dritto = прямо, sinistra = налево, dietro l'angolo = за углом, destra = право, incrocio = перекрёсток."
    },
    {
      type: "choice",
      question: "Как вежливо спросить «Где вокзал?»",
      options: ["Ciao, dov'è la stazione?", "Scusi, dov'è la stazione?", "Ehi, stazione?", "Quando è la stazione?"],
      answer: "Scusi, dov'è la stazione?",
      hint: "С незнакомцем начинай с Scusi.",
      explain: "Scusi, dov'è la stazione? — Извините, где вокзал?"
    },
    {
      type: "fill",
      question: "Напиши «Поверните налево»",
      answer: "Giri a sinistra",
      accept: ["Giri a sinistra", "giri a sinistra", "Gira a sinistra", "gira a sinistra"],
      placeholder: "Напиши по-итальянски",
      hint: "a sinistra = налево.",
      explain: "Giri a sinistra — поверните налево."
    },
    {
      type: "build",
      question: "Собери фразу: «Идите прямо»",
      words: ["Vada", "dritto"],
      answer: "Vada dritto",
      hint: "dritto = прямо.",
      explain: "Vada dritto — идите прямо."
    },
    {
      type: "table",
      question: "Заполни перевод",
      headers: ["Italiano", "Русский"],
      rows: [
        ["a destra", "направо"],
        ["a sinistra", ""]
      ],
      targetRow: 1,
      targetColumn: 1,
      options: ["налево", "направо", "прямо", "далеко"],
      answer: "налево",
      hint: "Sinistra — левая сторона.",
      explain: "a sinistra — налево."
    },
    {
      type: "match",
      question: "Соедини слова-связки маршрута",
      pairs: [
        { left: "prima", right: "сначала" },
        { left: "poi", right: "потом" },
        { left: "dopo", right: "после" },
        { left: "alla fine", right: "в конце" },
        { left: "sempre dritto", right: "всё время прямо" }
      ],
      explain: "Связки делают маршрут понятным.",
      explainWrong: "Неверная пара. prima = сначала, poi = потом, dopo = после, alla fine = в конце."
    },
    {
      type: "choice",
      question: "Как сказать «Станция справа»?",
      options: ["La stazione è sulla destra.", "La stazione è a sinistra.", "La stazione è dritto.", "La stazione è lontano."],
      answer: "La stazione è sulla destra.",
      hint: "sulla destra = справа.",
      explain: "La stazione è sulla destra — вокзал справа."
    },
    {
      type: "fill",
      question: "Напиши «Это далеко отсюда?»",
      answer: "È lontano da qui",
      accept: ["È lontano da qui", "è lontano da qui", "È lontano da qui?", "è lontano da qui?"],
      placeholder: "Напиши по-итальянски",
      hint: "lontano da = далеко от.",
      explain: "È lontano da qui? — Это далеко отсюда?"
    },
    {
      type: "build",
      question: "Собери маршрут: «Сначала идите прямо, потом поверните направо»",
      words: ["Prima", "vada", "dritto", ",", "poi", "giri", "a", "destra"],
      answer: "Prima vada dritto poi giri a destra",
      hint: "Prima... poi...",
      explain: "Prima vada dritto, poi giri a destra — сначала идите прямо, потом поверните направо."
    }
  ]
};
