window.LESSONS = window.LESSONS || {};

window.LESSONS["a1-u4-l4"] = {
  id: "a1-u4-l4",
  title: "Одежда, размер и примерка",
  level: "A1",
  xp: 35,
  theory: [
    {
      title: "Одежда: род и множественное число",
      summary: "Многие предметы одежды имеют устойчивый род и часто используются во множественном числе: i pantaloni, le scarpe, gli occhiali. Запоминай слово сразу с артиклем.",
      rule: [
        "la maglietta — футболка",
        "la camicia — рубашка",
        "i pantaloni — брюки",
        "la gonna — юбка",
        "il vestito — платье",
        "la giacca — пиджак, куртка",
        "il cappotto — пальто",
        "le scarpe — туфли, обувь",
        "la borsa — сумка",
        "gli occhiali — очки",
        "la cintura — ремень",
        "il cappello — шляпа, кепка",
        "la sciarpa — шарф",
        "i guanti — перчатки",
        "le calze — носки"
      ],
      table: {
        headers: ["Слово", "Род/число", "Пример"],
        rows: [
          ["i pantaloni", "maschile plurale", "I pantaloni sono neri."],
          ["le scarpe", "femminile plurale", "Le scarpe sono bianche."],
          ["gli occhiali", "maschile plurale", "Gli occhiali sono nuovi."],
          ["la giacca", "femminile singolare", "La giacca è calda."],
          ["il cappotto", "maschile singolare", "Il cappotto è lungo."]
        ]
      },
      tips: [
        "Секрет: pantaloni, scarpe, occhiali, guanti, calze часто живут во множественном числе, потому что состоят из двух частей.",
        "Артикль помогает не путаться: i pantaloni, le scarpe, gli occhiali."
      ],
      mistakes: [
        "Не говори la pantaloni. Правильно: i pantaloni.",
        "Не говори il scarpe. Правильно: le scarpe.",
        "Не говори lo occhiali. Правильно: gli occhiali."
      ],
      examples: [
        { it: "I pantaloni sono blu.", ru: "Брюки синие." },
        { it: "Le scarpe sono bianche.", ru: "Туфли белые." },
        { it: "Gli occhiali sono nuovi.", ru: "Очки новые." },
        { it: "La giacca è nera.", ru: "Пиджак чёрный." }
      ]
    },
    {
      title: "Размер, примерка и оценка",
      summary: "В магазине одежды нужны простые фразы: какой размер, можно примерить, велико/мало, нравится/не нравится.",
      rule: [
        "Che taglia hai? — Какой у тебя размер?",
        "Porto la 42. — Я ношу 42-й.",
        "Ho la taglia 42. — У меня 42-й размер.",
        "Posso provare questa giacca? — Можно примерить этот пиджак?",
        "Mi sta bene. — Мне подходит / сидит хорошо.",
        "È troppo grande. — Это слишком большое.",
        "È troppo piccolo. — Это слишком маленькое.",
        "È troppo stretto. — Это слишком узкое.",
        "È troppo largo. — Это слишком широкое.",
        "Prendo questo. / Prendo questa. — Я беру это / эту."
      ],
      table: {
        headers: ["Фраза", "Значение"],
        rows: [
          ["Che taglia hai?", "Какой у тебя размер?"],
          ["Porto la 42.", "Я ношу 42-й."],
          ["Posso provare questa giacca?", "Можно примерить этот пиджак?"],
          ["Mi sta bene.", "Мне подходит."],
          ["È troppo grande.", "Слишком большое."],
          ["È troppo piccolo.", "Слишком маленькое."]
        ]
      },
      tips: [
        "Секрет: taglia может быть числом (38, 40, 42) или буквой (S, M, L). В Италии часто спрашивают номер.",
        "Если предмет женского рода, говори questa: questa giacca. Если мужского — questo: questo cappotto."
      ],
      mistakes: [
        "Не говори Posso provare? без предмета, если непонятно, о чём речь. Лучше: Posso provare questa giacca?",
        "Не путай grande/piccolo с родом: la giacca è grande, il cappotto è grande; la gonna è piccola, il vestito è piccolo.",
        "Не говори Mi sta bene le scarpe. Для множественного числа лучше Mi stanno bene, но на A1 можно использовать общую фразу Sono belle / Mi piacciono."
      ],
      examples: [
        { it: "Che taglia hai?", ru: "Какой у тебя размер?" },
        { it: "Porto la 40.", ru: "Я ношу 40-й." },
        { it: "Posso provare questa scarpa?", ru: "Можно примерить этот туфель?" },
        { it: "È troppo piccola.", ru: "Она слишком маленькая." },
        { it: "Prendo questa giacca.", ru: "Я беру этот пиджак." }
      ],
      dialog: [
        { who: "Commesso", text: "Posso aiutarLa?" },
        { who: "Cliente", text: "Sì, cerco una giacca nera." },
        { who: "Commesso", text: "Che taglia ha?" },
        { who: "Cliente", text: "La 42. Posso provarla?" },
        { who: "Commesso", text: "Certo. Il camerino è lì." }
      ]
    }
  ],
  exercises: [
    {
      type: "gap",
      question: "Выбери артикль",
      sentence: "___ scarpe sono nere.",
      options: ["Le", "I", "Gli", "L'"],
      answer: "Le",
      hint: "Scarpe — женский род множественного числа.",
      explain: "Le scarpe sono nere — туфли чёрные."
    },
    {
      type: "table",
      question: "Заполни множественное число",
      headers: ["Единственное число", "Множественное число"],
      rows: [
        ["la scarpa", ""],
        ["il vestito", "i vestiti"]
      ],
      targetRow: 0,
      targetColumn: 1,
      options: ["le scarpe", "li scarpi", "la scarpi", "le scarpe"],
      answer: "le scarpe",
      hint: "Scarpa -> scarpe, женский род.",
      explain: "la scarpa -> le scarpe."
    },
    {
      type: "error-choice",
      question: "Найди ошибку",
      tokens: [
        { text: "La", id: "wrong" },
        { text: "pantaloni", id: "1" },
        { text: "sono", id: "2" },
        { text: "blu", id: "3" }
      ],
      answer: "wrong",
      hint: "Pantaloni — мужской род множественного числа: i.",
      explain: "Правильно: I pantaloni sono blu."
    },
    {
      type: "dialog-choice",
      question: "Выбери реплику покупателя",
      dialog: [
        { who: "Commesso", text: "Posso aiutarLa?" }
      ],
      options: [
        "Cerco una giacca.",
        "Il conto, per favore.",
        "Vorrei un caffè.",
        "Buonanotte."
      ],
      answer: "Cerco una giacca.",
      hint: "В магазине одежды говорят, что ищут.",
      explain: "Cerco una giacca — я ищу пиджак."
    },
    {
      type: "choice",
      question: "Как спросить «Какой у тебя размер?»",
      options: ["Che taglia hai?", "Che taglia sei?", "Quanto taglia?", "Dove taglia?"],
      answer: "Che taglia hai?",
      hint: "Taglia — размер; hai — ты имеешь.",
      explain: "Che taglia hai? — Какой у тебя размер?"
    },
    {
      type: "fill",
      question: "Напиши «Эти туфли слишком маленькие»",
      answer: "Queste scarpe sono troppo piccole",
      accept: [
        "Queste scarpe sono troppo piccole",
        "queste scarpe sono troppo piccole",
        "Le scarpe sono troppo piccole",
        "le scarpe sono troppo piccole"
      ],
      placeholder: "Напиши по-итальянски",
      hint: "Scarpe — женский род множественного числа: piccole.",
      explain: "Queste scarpe sono troppo piccole — эти туфли слишком маленькие."
    },
    {
      type: "build",
      question: "Собери фразу: «Можно примерить этот пиджак?»",
      words: ["Posso", "provare", "questa", "giacca"],
      answer: "Posso provare questa giacca",
      hint: "Giacca женского рода: questa giacca.",
      explain: "Posso provare questa giacca? — Можно примерить этот пиджак?"
    },
    {
      type: "match",
      question: "Соедини слово и перевод",
      pairs: [
        { left: "gli occhiali", right: "очки" },
        { left: "la borsa", right: "сумка" },
        { left: "la sciarpa", right: "шарф" },
        { left: "i guanti", right: "перчатки" },
        { left: "il cappello", right: "шляпа" }
      ],
      explain: "Эти слова нужны для разговора об одежде.",
      explainWrong: "Неверная пара. Occhiali = очки, borsa = сумка, sciarpa = шарф, guanti = перчатки, cappello = шляпа."
    },
    {
      type: "error-choice",
      question: "Найди ошибку",
      sentence: "Il scarpe sono bianche.",
      options: ["Il", "scarpe", "sono", "bianche"],
      answer: "Il",
      hint: "Scarpe — женский род множественного числа: le.",
      explain: "Правильно: Le scarpe sono bianche."
    },
    {
      type: "table",
      question: "Заполни форму",
      headers: ["Характеристика", "Фраза"],
      rows: [
        ["слишком большое (муж. род)", "è troppo grande"],
        ["слишком маленькая (жен. род)", ""]
      ],
      targetRow: 1,
      targetColumn: 1,
      options: ["è troppo piccola", "è troppo piccolo", "è troppo grande", "è troppo larghi"],
      answer: "è troppo piccola",
      hint: "Женский род единственного числа: piccola.",
      explain: "è troppo piccola — она слишком маленькая."
    }
  ]
};
