window.LESSONS = window.LESSONS || {};

window.LESSONS["a1-u3-l4"] = {
  id: "a1-u3-l4",
  title: "Профессии и работа",
  level: "A1",
  xp: 35,
  theory: [
    {
      title: "Professione: sono + профессия, faccio + l/il/la",
      summary: "Чтобы сказать, кем ты работаешь, итальянцы используют две конструкции: Sono insegnante и Faccio l'insegnante. Первая проще, вторая очень частая.",
      rule: [
        "Sono studente. — Я студент.",
        "Sono studentessa. — Я студентка.",
        "Sono insegnante. — Я учитель/учительница.",
        "Sono medico. — Я врач.",
        "Faccio lo studente. — Я студент.",
        "Faccio l'insegnante. — Я учитель/учительница.",
        "Faccio il cameriere. — Я официант.",
        "Faccio la commessa. — Я продавщица."
      ],
      table: {
        headers: ["Профессия", "мужской род", "женский род", "Пример"],
        rows: [
          ["студент", "studente", "studentessa", "Sono studente."],
          ["учитель", "insegnante", "insegnante", "Faccio l'insegnante."],
          ["официант", "cameriere", "cameriera", "Faccio il cameriere."],
          ["продавец", "commesso", "commessa", "Faccio il commesso."],
          ["повар", "cuoco", "cuoca", "Faccio il cuoco."],
          ["рабочий", "operaio", "operaia", "Faccio l'operaio."]
        ]
      },
      tips: [
        "Секрет: после essere профессия обычно идёт без артикля: Sono medico, Sono insegnante. После fare нужен артикль: Faccio il medico, Faccio l'insegnante.",
        "Слова на -e часто не меняются по роду: insegnante, studente? нет, studente меняется на studentessa. Но insegnante может быть и мужчиной, и женщиной."
      ],
      mistakes: [
        "Не говори Faccio studente. Правильно: Faccio lo studente.",
        "Не говори Sono un insegnante, если хочешь звучать естественно на A1. Лучше: Sono insegnante.",
        "Не путай артикли: l'insegnante, il cameriere, la commessa."
      ],
      examples: [
        { it: "Sono insegnante.", ru: "Я учитель / учительница." },
        { it: "Faccio l'insegnante.", ru: "Я работаю учителем." },
        { it: "Mia sorella è infermiera.", ru: "Моя сестра медсестра." },
        { it: "Mio fratello fa il cuoco.", ru: "Мой брат работает поваром." }
      ]
    },
    {
      title: "Где работаешь и чем занимаешься",
      summary: "Для работы нужны простые вопросы и места: ufficio, scuola, ospedale, ristorante, negozio.",
      rule: [
        "Che fai? — Чем занимаешься? / Что делаешь?",
        "Che fai nella vita? — Кем ты работаешь? / Чем занимаешься по жизни?",
        "Dove lavori? — Где ты работаешь?",
        "Lavoro in ufficio. — Я работаю в офисе.",
        "Lavoro a scuola. — Я работаю в школе.",
        "Lavoro in ospedale. — Я работаю в больнице.",
        "Lavoro al ristorante. — Я работаю в ресторане.",
        "Lavoro in un negozio. — Я работаю в магазине."
      ],
      table: {
        headers: ["Фраза", "Значение"],
        rows: [
          ["Che fai nella vita?", "Кем ты работаешь?"],
          ["Dove lavori?", "Где ты работаешь?"],
          ["Lavoro in ufficio.", "Я работаю в офисе."],
          ["Lavoro a scuola.", "Я работаю в школе."],
          ["Lavoro in ospedale.", "Я работаю в больнице."],
          ["Lavoro al ristorante.", "Я работаю в ресторане."]
        ]
      },
      tips: [
        "Секрет: a scuola, in ufficio, in ospedale, al ristorante. Это готовые блоки. Не переводи дословно с русского.",
        "Вопрос Che fai? в разговоре о человеке часто значит не «что ты делаешь сейчас», а «кем ты работаешь / чем занимаешься»."
      ],
      mistakes: [
        "Не говори Lavoro a ospedale. Правильно: Lavoro in ospedale.",
        "Не говори Lavoro in ristorante, если имеешь в виду постоянное место работы. Естественнее: Lavoro al ristorante.",
        "Не путай в ufficio и a scuola: офис — in ufficio, школа — a scuola."
      ],
      examples: [
        { it: "Lavoro in un banco.", ru: "Я работаю в банке.", note: "лучше: in banca" },
        { it: "Lavoro in banca.", ru: "Я работаю в банке." },
        { it: "Il mio lavoro è interessante.", ru: "Моя работа интересная." },
        { it: "Non mi piace il mio lavoro.", ru: "Мне не нравится моя работа." }
      ],
      dialog: [
        { who: "Anna", text: "Che fai nella vita?", ru: "Кем ты работаешь?" },
        { who: "Marco", text: "Faccio l'impiegato.", ru: "Я служащий." },
        { who: "Anna", text: "Dove lavori?", ru: "Где ты работаешь?" },
        { who: "Marco", text: "Lavoro in ufficio.", ru: "Я работаю в офисе." }
      ]
    }
  ],
  exercises: [
    {
      type: "choice",
      question: "Как сказать «Я студентка»?",
      options: ["Sono studentessa.", "Sono studente.", "Faccio studentessa.", "Sono una studentessa."],
      answer: "Sono studentessa.",
      hint: "Женский род: studentessa. После essere артикль обычно не нужен.",
      explain: "Sono studentessa — я студентка."
    },
    {
      type: "gap",
      question: "Вставь артикль",
      sentence: "Faccio ___ insegnante.",
      options: ["l'", "il", "la", "lo"],
      answer: "l'",
      hint: "Insegnante начинается с гласной.",
      explain: "Faccio l'insegnante — я учитель/учительница."
    },
    {
      type: "table",
      question: "Заполни женскую форму",
      headers: ["Мужской род", "Женский род"],
      rows: [
        ["studente", "studentessa"],
        ["cameriere", ""]
      ],
      targetRow: 1,
      targetColumn: 1,
      options: ["cameriera", "cameriere", "camerieri", "camerere"],
      answer: "cameriera",
      hint: "Cameriere -> cameriera.",
      explain: "cameriera — официантка."
    },
    {
      type: "match",
      question: "Соедини профессию и перевод",
      pairs: [
        { left: "insegnante", right: "учитель" },
        { left: "cameriere", right: "официант" },
        { left: "operaio", right: "рабочий" },
        { left: "impiegato", right: "служащий" },
        { left: "cuoco", right: "повар" }
      ],
      explain: "Эти профессии часто встречаются на A1.",
      explainWrong: "Неверная пара. Insegnante = учитель, cameriere = официант, operaio = рабочий, impiegato = служащий, cuoco = повар."
    },
    {
      type: "error-choice",
      question: "Найди ошибку",
      tokens: [
        { text: "Lavoro", id: "0" },
        { text: "a", id: "wrong" },
        { text: "ospedale", id: "2" }
      ],
      answer: "wrong",
      hint: "С больницей обычно используется in.",
      explain: "Правильно: Lavoro in ospedale."
    },
    {
      type: "dialog-choice",
      question: "Выбери ответ",
      dialog: [
        { who: "Anna", text: "Che fai nella vita?" }
      ],
      options: [
        "Sono ingegnere.",
        "Vado al lavoro.",
        "Il lavoro è vicino.",
        "Sì, certo."
      ],
      answer: "Sono ingegnere.",
      hint: "Вопрос спрашивает о профессии.",
      explain: "Sono ingegnere — я инженер."
    },
    {
      type: "fill",
      question: "Как спросить «Где ты работаешь?»",
      answer: "Dove lavori?",
      accept: ["Dove lavori?", "dove lavori", "Dove lavori", "dove lavori?"],
      placeholder: "Напиши по-итальянски",
      hint: "Dove = где; lavori = ты работаешь.",
      explain: "Dove lavori? — Где ты работаешь?"
    },
    {
      type: "build",
      question: "Собери фразу: «Я работаю в офисе»",
      words: ["Lavoro", "in", "ufficio"],
      answer: "Lavoro in ufficio",
      hint: "Офис — in ufficio.",
      explain: "Lavoro in ufficio — я работаю в офисе."
    },
    {
      type: "choice",
      question: "Как спросить «Чем ты занимаешься?» в смысле профессии?",
      options: ["Che fai nella vita?", "Dove vai?", "Quando lavori?", "Quanto costa?"],
      answer: "Che fai nella vita?",
      hint: "Nella vita = по жизни.",
      explain: "Che fai nella vita? — Кем ты работаешь?"
    },
    {
      type: "error-choice",
      question: "Найди ошибку",
      sentence: "Faccio il studente.",
      options: ["Faccio", "il", "studente"],
      answer: "il",
      hint: "Studente начинается на s + согласная, нужен lo.",
      explain: "Правильно: Faccio lo studente."
    }
  ]
};
