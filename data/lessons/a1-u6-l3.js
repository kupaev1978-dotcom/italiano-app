window.LESSONS = window.LESSONS || {};

window.LESSONS["a1-u6-l3"] = {
  id: "a1-u6-l3",
  title: "Il tempo: погода",
  level: "A1",
  xp: 35,
  theory: [
    {
      title: "Погода: fa, c'è, piove, nevica",
      summary: "О погоде говорят по-особому. Для температуры воздуха используют fa: fa caldo, fa freddo. Для солнца — c'è il sole. Для осадков — piove, nevica.",
      rule: [
        "Che tempo fa? — Какая погода?",
        "Fa caldo. — Тепло / жарко.",
        "Fa freddo. — Холодно.",
        "Fa fresco. — Прохладно.",
        "C'è il sole. — Солнечно.",
        "È nuvoloso. — Облачно.",
        "Piove. — Идёт дождь.",
        "Nevica. — Идёт снег.",
        "Tira vento. — Дует ветер.",
        "Fa bel tempo. — Хорошая погода."
      ],
      table: {
        headers: ["Погода", "Фраза"],
        rows: [
          ["жарко", "Fa caldo."],
          ["холодно", "Fa freddo."],
          ["солнечно", "C'è il sole."],
          ["облачно", "È nuvoloso."],
          ["дождь", "Piove."],
          ["снег", "Nevica."]
        ]
      },
      tips: [
        "Секрет: про погоду — fa caldo / fa freddo. Про человека, которому жарко/холодно, — ho caldo / ho freddo.",
        "C'è il sole — есть солнце. Не fa sole."
      ],
      mistakes: [
        "Не говори Sono caldo, если хочешь сказать «мне жарко». Правильно: Ho caldo.",
        "Не говори Fa sole. Правильно: C'è il sole.",
        "Не путай piove и nevica: piove — дождь, nevica — снег."
      ],
      examples: [
        { it: "Oggi fa caldo.", ru: "Сегодня жарко." },
        { it: "Domani piove.", ru: "Завтра идёт дождь." },
        { it: "C'è il sole e fa bel tempo.", ru: "Солнечно и хорошая погода." }
      ]
    },
    {
      title: "Спрашиваем про погоду",
      summary: "Для разговора о погоде нужны простые вопросы: Che tempo fa oggi? Com'è il tempo domani?",
      rule: [
        "Che tempo fa oggi? — Какая погода сегодня?",
        "Com'è il tempo domani? — Какая погода завтра?",
        "Oggi fa freddo. — Сегодня холодно.",
        "Oggi non piove. — Сегодня не идёт дождь.",
        "In estate fa caldo. — Летом жарко.",
        "In inverno nevica. — Зимой идёт снег."
      ],
      table: {
        headers: ["Вопрос", "Пример ответа"],
        rows: [
          ["Che tempo fa?", "Fa caldo."],
          ["Com'è il tempo oggi?", "C'è il sole."],
          ["Piove?", "No, non piove."],
          ["Nevica?", "Sì, nevica."]
        ]
      },
      tips: [
        "Секрет: oggi — сегодня, domani — завтра, ieri — вчера. Эти слова очень часто нужны в разговоре о погоде.",
        "In estate, in inverno — с сезонами используется in."
      ],
      mistakes: [
        "Не говори Che tempo è? если хочешь спросить про погоду. Лучше: Che tempo fa?",
        "Не путай oggi и domani: oggi — сегодня, domani — завтра.",
        "Не забывай non в отрицании: Non piove."
      ],
      examples: [
        { it: "Che tempo fa oggi?", ru: "Какая погода сегодня?" },
        { it: "Fa freddo e piove.", ru: "Холодно и идёт дождь." },
        { it: "In estate fa caldo.", ru: "Летом жарко." }
      ],
      dialog: [
        { who: "Anna", text: "Che tempo fa oggi?", ru: "Какая погода сегодня?" },
        { who: "Marco", text: "Fa caldo e c'è il sole.", ru: "Жарко и солнечно." },
        { who: "Anna", text: "Bene! Andiamo al mare.", ru: "Отлично! Пойдём на море." }
      ]
    }
  ],
  exercises: [
    {
      type: "choice",
      question: "Как сказать «Сегодня жарко»?",
      options: [
        "Oggi fa caldo.",
        "Oggi sono caldo.",
        "Oggi ho caldo.",
        "Oggi è caldo."
      ],
      answer: "Oggi fa caldo.",
      hint: "О погоде: fa caldo.",
      explain: "Oggi fa caldo — сегодня жарко."
    },
    {
      type: "gap",
      question: "Вставь глагол",
      sentence: "___ freddo oggi.",
      options: ["Fa", "È", "Ho", "C'è"],
      answer: "Fa",
      hint: "С температурой погоды используется fa.",
      explain: "Fa freddo oggi — сегодня холодно."
    },
    {
      type: "table",
      question: "Заполни фразу",
      headers: ["Погода", "Фраза"],
      rows: [
        ["дождь", "Piove."],
        ["снег", ""]
      ],
      targetRow: 1,
      targetColumn: 1,
      options: ["Nevica.", "Piove.", "Fa neve.", "C'è neve."],
      answer: "Nevica.",
      hint: "Идёт снег — nevica.",
      explain: "Nevica — идёт снег."
    },
    {
      type: "error-choice",
      question: "Найди ошибку",
      tokens: [
        { text: "Sono", id: "wrong" },
        { text: "caldo", id: "1" }
      ],
      answer: "wrong",
      hint: "Если человеку жарко, он «имеет жару»: ho caldo.",
      explain: "Правильно: Ho caldo."
    },
    {
      type: "dialog-choice",
      question: "Выбери ответ",
      dialog: [
        { who: "Anna", text: "Che tempo fa domani?" }
      ],
      options: [
        "Piove.",
        "Ho vent'anni.",
        "Vado al lavoro.",
        "Costa poco."
      ],
      answer: "Piove.",
      hint: "Вопрос про погоду.",
      explain: "Piove — идёт дождь."
    },
    {
      type: "match",
      question: "Соедини слово и перевод",
      pairs: [
        { left: "il sole", right: "солнце" },
        { left: "la pioggia", right: "дождь" },
        { left: "la neve", right: "снег" },
        { left: "il vento", right: "ветер" },
        { left: "il tempo", right: "погода" }
      ],
      explain: "Эти слова нужны для разговора о погоде.",
      explainWrong: "Неверная пара. Sole = солнце, pioggia = дождь, neve = снег, vento = ветер, tempo = погода."
    },
    {
      type: "fill",
      question: "Напиши «Сегодня солнечно»",
      answer: "Oggi c'è il sole",
      accept: [
        "Oggi c'è il sole",
        "oggi c'è il sole",
        "Oggi c'e il sole",
        "oggi c'e il sole"
      ],
      placeholder: "Напиши по-итальянски",
      hint: "C'è il sole.",
      explain: "Oggi c'è il sole — сегодня солнечно."
    },
    {
      type: "build",
      question: "Собери фразу: «Сегодня холодно и идёт дождь»",
      words: ["Oggi", "fa", "freddo", "e", "piove"],
      answer: "Oggi fa freddo e piove",
      hint: "Fa freddo + piove.",
      explain: "Oggi fa freddo e piove — сегодня холодно и идёт дождь."
    },
    {
      type: "error-choice",
      question: "Найди ошибку",
      tokens: [
        { text: "Fa", id: "wrong" },
        { text: "sole", id: "1" }
      ],
      answer: "wrong",
      hint: "Про солнце говорят c'è il sole.",
      explain: "Правильно: C'è il sole."
    },
    {
      type: "table",
      question: "Заполни сезон",
      headers: ["Сезон", "Фраза"],
      rows: [
        ["летом", "in estate"],
        ["зимой", ""]
      ],
      targetRow: 1,
      targetColumn: 1,
      options: ["in inverno", "a inverno", "di inverno", "in estate"],
      answer: "in inverno",
      hint: "С сезонами используется in.",
      explain: "in inverno — зимой."
    }
  ]
};
