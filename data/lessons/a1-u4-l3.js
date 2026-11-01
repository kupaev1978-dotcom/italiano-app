window.LESSONS = window.LESSONS || {};

window.LESSONS["a1-u4-l3"] = {
  id: "a1-u4-l3",
  title: "В баре и ресторане",
  level: "A1",
  xp: 40,
  theory: [
    {
      title: "Люди и предметы в ресторане",
      summary: "Чтобы заказать еду, нужны не только названия блюд, но и слова: официант, клиент, стол, меню, счёт.",
      rule: [
        "il cameriere — официант",
        "la cameriera — официантка",
        "il cliente — клиент",
        "il tavolo — стол",
        "il menù — меню",
        "il conto — счёт",
        "da bere — питьё, напитки",
        "da mangiare — еда"
      ],
      table: {
        headers: ["Слово", "Перевод", "Пример"],
        rows: [
          ["il cameriere", "официант", "Il cameriere è gentile."],
          ["la cameriera", "официантка", "La cameriera porta il caffè."],
          ["il cliente", "клиент", "Il cliente vuole il conto."],
          ["il tavolo", "стол", "Il tavolo è vicino alla finestra."],
          ["il menù", "меню", "Posso vedere il menù?"],
          ["il conto", "счёт", "Il conto, per favore."]
        ]
      },
      tips: [
        "Секрет: в Италии bar — это не только бар с алкоголем, но и кафе, где берут кофе, воду, закуски.",
        "Cameriere обращается к тебе: Cosa desidera? / Cosa prende? — Что желаете? / Что будете?"
      ],
      mistakes: [
        "Не путай per favore и prego. Per favore — когда просишь. Prego — когда отвечаешь «пожалуйста» или подаёшь что-то.",
        "Не говори Il conto, prego, если ты просишь счёт. Правильно: Il conto, per favore."
      ],
      examples: [
        { it: "Posso vedere il menù?", ru: "Можно посмотреть меню?" },
        { it: "Il cameriere è gentile.", ru: "Официант любезен." },
        { it: "Vorrei un tavolo per due.", ru: "Я хотел бы стол на двоих." },
        { it: "Il conto, per favore.", ru: "Счёт, пожалуйста." }
      ]
    },
    {
      title: "Заказ: cosa prende? vorrei...",
      summary: "Типовой диалог в ресторане короткий. Важно уметь сказать, что хочешь, и ответить на вопрос о напитке.",
      rule: [
        "Buonasera. Un tavolo per due, per favore. — Добрый вечер. Столик на двоих, пожалуйста.",
        "Ecco il menù. — Вот меню.",
        "Cosa desidera? / Cosa prende? — Что желаете? / Что будете?",
        "Vorrei una pizza margherita. — Я хотел бы пиццу маргарита.",
        "Da bere? — Питьё?",
        "Un'acqua naturale, per favore. — Негазированную воду, пожалуйста.",
        "Un vino rosso. — Красное вино.",
        "Una birra piccola. — Маленькое пиво.",
        "Grazie, è tutto. — Спасибо, это всё.",
        "Il conto, per favore. — Счёт, пожалуйста."
      ],
      table: {
        headers: ["Ситуация", "Фраза"],
        rows: [
          ["попросить меню", "Posso vedere il menù?"],
          ["заказать еду", "Vorrei una pizza."],
          ["заказать питьё", "Vorrei un'acqua."],
          ["сказать, что всё", "È tutto, grazie."],
          ["попросить счёт", "Il conto, per favore."]
        ]
      },
      tips: [
        "Секрет про acqua: в баре часто спрашивают naturale или frizzante. Naturale — без газа, frizzante — с газом.",
        "È tutto — очень полезная фраза: «больше ничего не нужно»."
      ],
      mistakes: [
        "Не говори Vorrei un acqua. Правильно: Vorrei un'acqua.",
        "Не говори Vorrei una caffè. Caffè мужского рода: un caffè.",
        "Не отвечай Prego, когда хочешь сказать «это всё». Prego — это «пожалуйста» в ответ или «вот»."
      ],
      examples: [
        { it: "Vorrei un caffè e un'acqua, per favore.", ru: "Я хотел бы кофе и воду, пожалуйста." },
        { it: "Da bere? Un vino rosso.", ru: "Питьё? Красное вино." },
        { it: "È tutto, grazie.", ru: "Это всё, спасибо." },
        { it: "Il conto, per favore.", ru: "Счёт, пожалуйста." }
      ],
      dialog: [
        { who: "Cameriere", text: "Buonasera. Cosa prende?" },
        { who: "Cliente", text: "Vorrei una pizza margherita e un'acqua naturale." },
        { who: "Cameriere", text: "Altro?" },
        { who: "Cliente", text: "No, grazie. È tutto." },
        { who: "Cameriere", text: "Prego." }
      ]
    }
  ],
  exercises: [
    {
      type: "dialog-choice",
      question: "Выбери подходящую реплику",
      dialog: [
        { who: "Cameriere", text: "Cosa prende?" }
      ],
      options: [
        "Vorrei un caffè, per favore.",
        "Il conto, per favore.",
        "Prego.",
        "Arrivederci."
      ],
      answer: "Vorrei un caffè, per favore.",
      hint: "На вопрос Cosa prende? отвечают заказом.",
      explain: "Vorrei un caffè, per favore — Я хотел бы кофе, пожалуйста."
    },
    {
      type: "gap",
      question: "Выбери артикль",
      sentence: "___ conto, per favore.",
      options: ["Il", "Lo", "L'", "La"],
      answer: "Il",
      hint: "Conto мужского рода: il conto.",
      explain: "Il conto, per favore — счёт, пожалуйста."
    },
    {
      type: "error-choice",
      question: "Найди ошибку",
      tokens: [
        { text: "Vorrei", id: "0" },
        { text: "un", id: "wrong" },
        { text: "acqua", id: "2" }
      ],
      answer: "wrong",
      hint: "Acqua женского рода и начинается с гласной: un'acqua.",
      explain: "Правильно: Vorrei un'acqua."
    },
    {
      type: "match",
      question: "Соедини слово и перевод",
      pairs: [
        { left: "il cameriere", right: "официант" },
        { left: "il cliente", right: "клиент" },
        { left: "il menù", right: "меню" },
        { left: "il conto", right: "счёт" },
        { left: "da bere", right: "питьё" }
      ],
      explain: "Эти слова нужны в ресторане и баре.",
      explainWrong: "Неверная пара. Cameriere = официант, cliente = клиент, menù = меню, conto = счёт, da bere = питьё."
    },
    {
      type: "table",
      question: "Заполни фразу",
      headers: ["Вода", "Фраза"],
      rows: [
        ["обычная", "un'acqua naturale"],
        ["с газом", ""]
      ],
      targetRow: 1,
      targetColumn: 1,
      options: ["un'acqua frizzante", "un'acqua naturale", "una acqua frizzante", "un acqua frizzante"],
      answer: "un'acqua frizzante",
      hint: "Frizzante — с газом.",
      explain: "un'acqua frizzante — газированная вода."
    },
    {
      type: "choice",
      question: "Как сказать «Это всё»?",
      options: ["È tutto.", "È tutti.", "Tutto è.", "È tutto per favore."],
      answer: "È tutto.",
      hint: "Устойчивая фраза в ресторане.",
      explain: "È tutto — это всё."
    },
    {
      type: "fill",
      question: "Напиши «Где меню?»",
      answer: "Dov'è il menù?",
      accept: [
        "Dov'è il menù?",
        "dov'è il menù",
        "Dov'è il menù",
        "dov'è il menù?"
      ],
      placeholder: "Напиши по-итальянски",
      hint: "Dov'è = где находится.",
      explain: "Dov'è il menù? — Где меню?"
    },
    {
      type: "build",
      question: "Собери фразу: «Я хотел бы пиццу маргарита»",
      words: ["Vorrei", "una", "pizza", "margherita"],
      answer: "Vorrei una pizza margherita",
      hint: "Pizza женского рода: una pizza.",
      explain: "Vorrei una pizza margherita — я хотел бы пиццу маргарита."
    },
    {
      type: "dialog-choice",
      question: "Выбери ответ официанта",
      dialog: [
        { who: "Cliente", text: "Il conto, per favore." }
      ],
      options: [
        "Prego.",
        "Per favore.",
        "Cosa prende?",
        "È tutto."
      ],
      answer: "Prego.",
      hint: "Когда подают счёт или отвечают на просьбу, говорят Prego.",
      explain: "Prego — пожалуйста / вот."
    },
    {
      type: "error-choice",
      question: "Найди ошибку",
      sentence: "Vorrei un caffè, prego.",
      options: ["Vorrei", "un", "caffè", "prego"],
      answer: "prego",
      hint: "Когда просишь, лучше per favore. Prego — ответ или «вот».",
      explain: "Правильно: Vorrei un caffè, per favore."
    }
  ]
};
