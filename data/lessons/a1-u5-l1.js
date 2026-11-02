window.LESSONS = window.LESSONS || {};

window.LESSONS["a1-u5-l1"] = {
  id: "a1-u5-l1",
  title: "Che ore sono? Время и минуты",
  level: "A1",
  xp: 35,
  theory: [
    {
      title: "Который час?",
      summary: "Чтобы спросить время, итальянцы говорят Che ore sono? Или вежливо: Scusi, che ore sono? Ответ зависит от часа: l'una — è, остальные часы — sono le.",
      rule: [
        "Che ore sono? — Который час?",
        "È l'una. — Сейчас час.",
        "Sono le due. — Сейчас два часа.",
        "Sono le tre. — Сейчас три часа.",
        "È mezzogiorno. — Полдень.",
        "È mezzanotte. — Полночь."
      ],
      table: {
        headers: ["Фраза", "Значение"],
        rows: [
          ["Che ore sono?", "Который час?"],
          ["È l'una.", "Сейчас час."],
          ["Sono le due.", "Сейчас два часа."],
          ["Sono le tre e mezza.", "Сейчас половина третьего."],
          ["Sono le quattro meno un quarto.", "Сейчас без четверти четыре."]
        ]
      },
      tips: [
        "Секрет: только l'una требует è, потому что una начинается с гласной и женского рода: è l'una. Все остальные часы: sono le due, sono le tre, sono le quattro.",
        "Mezzogiorno и mezzanotte — это особые точки суток: è mezzogiorno, è mezzanotte."
      ],
      mistakes: [
        "Не говори *Sono l'una. Правильно: È l'una.",
        "Не говори *È le due. Правильно: Sono le due.",
        "Не переводи русское «в половине восьмого» как *sono le otto e mezza, если имеешь в виду 7:30. По-итальянски: sono le sette e mezza."
      ],
      examples: [
        { it: "Scusi, che ore sono?", ru: "Извините, который час?" },
        { it: "Sono le sette.", ru: "Сейчас семь часов." },
        { it: "È mezzogiorno.", ru: "Полдень." },
        { it: "È mezzanotte.", ru: "Полночь." }
      ]
    },
    {
      title: "Минуты: e, meno, quarto, mezzo",
      summary: "Для минут используют конструкцию: час + e + минуты. Если минут больше половины — час + meno + оставшиеся минуты. Quarto = 15 минут, mezzo/mezza = 30 минут.",
      rule: [
        "Sono le due e dieci. — 2:10.",
        "Sono le due e quindici. — 2:15.",
        "Sono le due e un quarto. — 2:15.",
        "Sono le due e trenta. — 2:30.",
        "Sono le due e mezza. — 2:30.",
        "Sono le tre meno venti. — 2:40.",
        "Sono le tre meno un quarto. — 2:45."
      ],
      table: {
        headers: ["Время", "Фраза", "Значение"],
        rows: [
          ["13:00", "alle tredici", "в 13:00"],
          ["20:30", "alle venti e trenta", "в 20:30"],
          ["08:15", "alle otto e un quarto", "в 8:15"],
          ["09:45", "alle nove meno un quarto", "в 9:45"]
        ]
      },
      tips: [
        "Секрет про 24-часовой формат: в расписаниях, на вокзале, в театре часто говорят alle tredici, alle venti, alle ventidue.",
        "В разговорной речи чаще используют 12-часовой формат: alle otto di mattina, alle otto di sera."
      ],
      mistakes: [
        "Не говори *alle otto di notte, если имеешь в виду 8 вечера. Лучше: alle otto di sera.",
        "Не путай e и meno: e — после часа, meno — до следующего часа.",
        "Не забывай артикль в un quarto: e un quarto, meno un quarto."
      ],
      examples: [
        { it: "Sono le otto e dieci.", ru: "Сейчас 8:10." },
        { it: "Sono le nove meno un quarto.", ru: "Сейчас 8:45." },
        { it: "Ci vediamo alle sette e mezza.", ru: "Встречаемся в 7:30." },
        { it: "Il treno parte alle tredici.", ru: "Поезд отправляется в 13:00." }
      ],
      dialog: [
        { who: "Turista", text: "Scusi, che ore sono?", ru: "Извините, который час?" },
        { who: "Passante", text: "Sono le due e un quarto.", ru: "Сейчас 2:15." },
        { who: "Turista", text: "Grazie mille!", ru: "Огромное спасибо!" }
      ]
    }
  ],
  exercises: [
    {
      type: "choice",
      question: "Как сказать «Сейчас час»?",
      options: ["È l'una.", "Sono l'una.", "È una.", "Sono le una."],
      answer: "È l'una.",
      hint: "L'una — женский род перед гласной, поэтому è.",
      explain: "È l'una — сейчас час."
    },
    {
      type: "gap",
      question: "Вставь правильную форму",
      sentence: "___ le due e mezza.",
      options: ["Sono", "È", "A", "Alle"],
      answer: "Sono",
      hint: "Due — множественное число, поэтому sono le.",
      explain: "Sono le due e mezza — сейчас половина третьего."
    },
    {
      type: "table",
      question: "Заполни фразу",
      headers: ["Ситуация", "Фраза"],
      rows: [
        ["полтретьего", "Sono le tre e mezza"],
        ["без четверти четыре", ""]
      ],
      targetRow: 1,
      targetColumn: 1,
      options: ["Sono le quattro meno un quarto", "Sono le quattro e un quarto", "È le quattro meno un quarto", "Sono le tre meno un quarto"],
      answer: "Sono le quattro meno un quarto",
      hint: "Meno un quarto = без четверти.",
      explain: "Sono le quattro meno un quarto — без четверти четыре."
    },
    {
      type: "match",
      question: "Соедини фразу и перевод",
      pairs: [
        { left: "Che ore sono?", right: "Который час?" },
        { left: "È mezzogiorno.", right: "Полдень." },
        { left: "Sono le otto e dieci.", right: "Восемь десять." },
        { left: "Sono le nove meno un quarto.", right: "Без четверти девять." },
        { left: "Alle tredici", right: "В 13:00" }
      ],
      explain: "Это базовые временные фразы.",
      explainWrong: "Неверная пара. Помни: mezzogiorno = полдень, meno un quarto = без четверти, tredici = 13."
    },
    {
      type: "error-choice",
      question: "Найди ошибку",
      tokens: [
        { text: "Sono", id: "wrong" },
        { text: "l'una", id: "1" }
      ],
      answer: "wrong",
      hint: "С l'una используется è.",
      explain: "Правильно: È l'una."
    },
    {
      type: "dialog-choice",
      question: "Выбери подходящую реплику",
      dialog: [
        { who: "Marco", text: "Scusi, che ore sono?" }
      ],
      options: [
        "Sono le due e un quarto.",
        "Vado al lavoro.",
        "Il treno è in ritardo.",
        "Grazie mille."
      ],
      answer: "Sono le due e un quarto.",
      hint: "На вопрос о времени отвечают часами.",
      explain: "Sono le due e un quarto — сейчас 2:15."
    },
    {
      type: "fill",
      question: "Напиши «Сейчас три часа»",
      answer: "Sono le tre",
      accept: ["Sono le tre", "sono le tre", "Adesso sono le tre", "adesso sono le tre"],
      placeholder: "Напиши по-итальянски",
      hint: "Tre — множественное число: sono le.",
      explain: "Sono le tre — сейчас три часа."
    },
    {
      type: "build",
      question: "Собери фразу: «Сейчас 4:20»",
      words: ["Sono", "le", "quattro", "e", "venti"],
      answer: "Sono le quattro e venti",
      hint: "После часа используется e.",
      explain: "Sono le quattro e venti — сейчас 4:20."
    },
    {
      type: "choice",
      question: "Как сказать «в половине восьмого» по-русски, то есть 7:30?",
      options: ["Alle sette e mezza.", "Alle otto e mezza.", "Sono le otto e mezza.", "A sette e mezza."],
      answer: "Alle sette e mezza.",
      hint: "Русское «половина восьмого» = 7:30.",
      explain: "Alle sette e mezza — в 7:30."
    },
    {
      type: "table",
      question: "Заполни 24-часовой формат",
      headers: ["Время", "Фраза"],
      rows: [
        ["13:00", "alle tredici"],
        ["20:30", ""]
      ],
      targetRow: 1,
      targetColumn: 1,
      options: ["alle venti e trenta", "alle otto e mezza", "alle venti e mezza", "alle due e trenta"],
      answer: "alle venti e trenta",
      hint: "20:30 = venti e trenta.",
      explain: "Alle venti e trenta — в 20:30."
    }
  ]
};
