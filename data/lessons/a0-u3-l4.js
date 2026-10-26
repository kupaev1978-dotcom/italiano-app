window.LESSONS = window.LESSONS || {};

window.LESSONS["a0-u3-l4"] = {
  id: "a0-u3-l4",
  title: "Артикли в жизни: бар, дом, город",
  level: "A0",
  xp: 30,
  theory: [
    {
      title: "Артикли нужны не для грамматики ради грамматики",
      summary: "Артикли помогают заказать, попросить, указать на предмет и звучать естественно. На A0 важно почувствовать разницу: «какой-то один» и «этот самый».",
      rule: [
        "В баре часто используют неопределённый артикль: Un caffè, per favore.",
        "Когда просят счёт, счёт конкретный: Il conto, per favore.",
        "Вода — женский род и начинается с гласной: l'acqua.",
        "Апельсин — женский род и начинается с гласной: un'arancia.",
        "Кофе — мужской род: il caffè, un caffè."
      ],
      table: {
        headers: ["Ситуация", "Фраза", "Почему такой артикль"],
        rows: [
          ["заказать кофе", "Un caffè, per favore.", "мужской род, «одна порция»"],
          ["попросить счёт", "Il conto, per favore.", "конкретный счёт"],
          ["попросить воду", "L'acqua, per favore.", "acqua женского рода, перед гласной"],
          ["указать на книгу", "Dov'è il libro?", "конкретная книга"],
          ["заказать апельсин", "Un'arancia, per favore.", "arancia женского рода, перед гласной"]
        ]
      },
      tips: [
        "Секрет про caffè: это мужское слово с ударением на последний слог. Единственное число: il caffè. Множественное: i caffè, слово не меняет окончание.",
        "В бытовых просьбах un/una часто звучит мягче и естественнее, чем il/la. Ты просишь «одну чашку кофе», а не «тот самый кофе со склада»."
      ],
      mistakes: [
        "Не говори uno caffè. Caffè начинается с обычной согласной c, поэтому un caffè.",
        "Не забывай per favore, иначе просьба звучит как приказ.",
        "Не путай: il conto — счёт, а la conta — подсчёт/проверка, другое слово."
      ],
      examples: [
        { it: "Un caffè, per favore.", ru: "Кофе, пожалуйста." },
        { it: "Il conto, per favore.", ru: "Счёт, пожалуйста." },
        { it: "L'acqua, per favore.", ru: "Воду, пожалуйста." },
        { it: "Dov'è la chiave?", ru: "Где ключ?" },
        { it: "Un'arancia, per favore.", ru: "Апельсин, пожалуйста." }
      ],
      dialog: [
        { who: "Cliente", text: "Buongiorno. Un caffè, per favore.", ru: "Добрый день. Кофе, пожалуйста." },
        { who: "Barista", text: "Prego. Altro?", ru: "Пожалуйста. Что-нибудь ещё?" },
        { who: "Cliente", text: "Sì, un'arancia.", ru: "Да, апельсин." },
        { who: "Barista", text: "Ecco. Il conto è tre euro.", ru: "Вот. Счёт — три евро." },
        { who: "Cliente", text: "Grazie mille.", ru: "Огромное спасибо." }
      ]
    },
    {
      title: "Дом и город: простые фразы с артиклями",
      summary: "Артикли помогают назвать предмет вокруг: книга, ключ, стул, дверь, окно, станция.",
      rule: [
        "Il libro è a casa. — Книга дома.",
        "Dov'è la chiave? — Где ключ?",
        "La stazione è vicina. — Станция близко.",
        "Il bar è in piazza. — Бар на площади.",
        "La porta è chiusa. — Дверь закрыта."
      ],
      tips: [
        "Секрет: если ты указываешь на конкретный предмет в комнате или городе, почти всегда нужен определённый артикль: il libro, la chiave, la stazione.",
        "Слова на -zione, например stazione, azione, informazione, обычно женского рода: la stazione."
      ],
      mistakes: [
        "Не говори Dov'è chiave? Нужен артикль: Dov'è la chiave?",
        "Не путай a casa и in casa. На A0 запомни устойчивое: a casa — дома, домой. In casa тоже возможно, но a casa чаще в базовых фразах."
      ],
      examples: [
        { it: "Il libro è sul tavolo.", ru: "Книга на столе.", note: "sul — предлог с артиклем, fuller тема в A1" },
        { it: "La chiave è nella borsa.", ru: "Ключ в сумке.", note: "nella — предлог с артиклем, fuller тема в A1" },
        { it: "Dov'è il bagno?", ru: "Где туалет?" }
      ]
    }
  ],
  exercises: [
    {
      type: "gap",
      question: "Выбери артикль для заказа",
      sentence: "___ caffè, per favore.",
      options: ["Un", "Una", "Un'", "Lo"],
      answer: "Un",
      hint: "Caffè — мужской род, обычное начало.",
      explain: "Un caffè, per favore. — Кофе, пожалуйста."
    },
    {
      type: "gap",
      question: "Выбери артикль",
      sentence: "___ acqua, per favore.",
      options: ["L'", "Il", "Lo", "Un"],
      answer: "L'",
      hint: "Acqua — женский род и начинается с гласной.",
      explain: "L'acqua, per favore. — Воду, пожалуйста."
    },
    {
      type: "gap",
      question: "Выбери артикль",
      sentence: "___ conto, per favore.",
      options: ["Il", "Lo", "La", "L'"],
      answer: "Il",
      hint: "Conto — мужской род, конкретный счёт.",
      explain: "Il conto, per favore. — Счёт, пожалуйста."
    },
    {
      type: "choice",
      question: "Как попросить апельсин?",
      options: ["Un'arancia, per favore.", "Una arancia, per favore.", "Un arancia, per favore.", "Lo arancia, per favore."],
      answer: "Un'arancia, per favore.",
      hint: "Arancia — женский род перед гласной: un'.",
      explain: "Un'arancia, per favore. — Апельсин, пожалуйста."
    },
    {
      type: "match",
      question: "Соедини фразу и смысл",
      pairs: [
        { left: "Un caffè", right: "одна чашка кофе, заказ" },
        { left: "Il caffè", right: "кофе как конкретный напиток" },
        { left: "L'acqua", right: "вода, женский род перед гласной" },
        { left: "Il conto", right: "счёт" },
        { left: "La chiave", right: "ключ" }
      ],
      explain: "Артикль помогает понять, просишь ты «что-то одно» или указываешь на конкретную вещь."
    },
    {
      type: "table",
      question: "Вставь правильную фразу",
      headers: ["Ситуация", "Фраза"],
      rows: [
        ["заказать одну пиццу", "una pizza"],
        ["попросить воду", ""],
        ["назвать счёт", "il conto"]
      ],
      targetRow: 1,
      targetColumn: 1,
      options: ["l'acqua", "il acqua", "lo acqua", "una acqua"],
      answer: "l'acqua",
      hint: "Acqua — женский род перед гласной, нужен определённый артикль l'.",
      explain: "L'acqua, per favore. — Воду, пожалуйста."
    },
    {
      type: "build",
      question: "Собери фразу: «Кофе, пожалуйста»",
      words: ["Un", "caffè", "per", "favore"],
      answer: "Un caffè per favore",
      hint: "Caffè мужского рода: un caffè.",
      explain: "Un caffè per favore. — Кофе, пожалуйста."
    },
    {
      type: "fill",
      question: "Как сказать «Счёт, пожалуйста»?",
      answer: "Il conto per favore",
      accept: [
        "Il conto per favore",
        "il conto per favore",
        "Il conto, per favore",
        "il conto, per favore"
      ],
      placeholder: "Напиши по-итальянски",
      hint: "Conto — мужской род, конкретный счёт: il conto.",
      explain: "Il conto, per favore. — Счёт, пожалуйста."
    },
    {
      type: "choice",
      question: "Где правильно?",
      options: ["Dov'è chiave?", "Dov'è la chiave?", "Dov'è il chiave?", "Dov'è l'chiave?"],
      answer: "Dov'è la chiave?",
      hint: "Chiave — женский род перед согласной: la.",
      explain: "Dov'è la chiave? — Где ключ?"
    }
  ]
};
