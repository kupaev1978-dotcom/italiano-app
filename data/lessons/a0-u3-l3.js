window.LESSONS = window.LESSONS || {};

window.LESSONS["a0-u3-l3"] = {
  id: "a0-u3-l3",
  title: "Определённые артикли: il, lo, l', la, i, gli, le",
  level: "A0",
  xp: 35,
  theory: [
    {
      title: "Определённый артикль: «этот самый»",
      summary: "Определённый артикль используется, когда предмет конкретный, известный или единственный в контексте. По-русски этому часто соответствуют слова «этот», «тот самый», либо просто контекст.",
      rule: [
        "il — мужской род в обычном случае: il libro, il tavolo.",
        "lo — мужской род перед s + согласная, z, ps, gn, y: lo studente, lo zaino.",
        "l' — перед гласной, для любого рода в единственном числе: l'amico, l'amica.",
        "la — женский род перед согласной: la casa, la macchina."
      ],
      table: {
        headers: ["Артикль", "Когда", "Пример"],
        rows: [
          ["il", "мужской род, обычный случай", "il libro"],
          ["lo", "мужской род: s + согласная, z, ps, gn, y", "lo studente"],
          ["l'", "перед гласной, единственное число", "l'amico, l'amica"],
          ["la", "женский род перед согласной", "la casa"]
        ]
      },
      tips: [
        "Секрет: l' — это сокращение и для il, и для la перед гласной. Поэтому l'amico — друг, l'amica — подруга. Род понятен по самому слову.",
        "Определённый артикль очень часто нужен там, где русскоговорящий хочет его опустить. Например: Mi piace il caffè. Буквально «мне нравится кофе», но по-итальянски нужен il."
      ],
      mistakes: [
        "Не говори il studente. Правильно: lo studente.",
        "Не говори la amico. Правильно: l'amico.",
        "Не путай lo как артикль и lo как местоимение. На A0 пока просто запоминай: lo studente — студент."
      ],
      examples: [
        { it: "il libro", ru: "книга / эта книга" },
        { it: "lo studente", ru: "студент / этот студент" },
        { it: "l'amico", ru: "друг / этот друг" },
        { it: "l'amica", ru: "подруга / эта подруга" },
        { it: "la casa", ru: "дом / этот дом" }
      ]
    },
    {
      title: "Множественное число: i, gli, le",
      summary: "Во множественном числе артикли тоже меняются. Главное правило: gli приходит на помощь там, где в единственном числе был lo или l'.",
      rule: [
        "il -> i: il libro -> i libri.",
        "lo -> gli: lo studente -> gli studenti.",
        "l' -> gli: l'amico -> gli amici, l'amica -> le amiche? Внимание: для женского рода перед гласной во множественном числе используется le, а не gli. Проверим ниже.",
        "la -> le: la casa -> le case.",
        "Перед гласной во множественном числе: gli amici, le amiche. Апострофа у i/le нет."
      ],
      table: {
        headers: ["Единственное число", "Множественное число", "Пример"],
        rows: [
          ["il", "i", "il libro -> i libri"],
          ["lo", "gli", "lo studente -> gli studenti"],
          ["l' мужской", "gli", "l'amico -> gli amici"],
          ["l' женский", "le", "l'amica -> le amiche"],
          ["la", "le", "la casa -> le case"]
        ]
      },
      tips: [
        "Главный секрет: apostoф у определённого артикля бывает только в единственном числе. Поэтому правильно: l'amico, но gli amici. И l'amica, но le amiche.",
        "Gli — это «спасательный» артикль для сложных случаев: после lo и после мужского l'. Он удобно звучит перед гласной: gli amici, gli zaini."
      ],
      mistakes: [
        "Не пиши l'amici. Так нельзя. Правильно: gli amici.",
        "Не пиши i studenti. Правильно: gli studenti, потому что в единственном числе было lo studente.",
        "Не путай: l'amica -> le amiche, а не gli amiche. Женский род во множественном числе — le."
      ],
      examples: [
        { it: "i libri", ru: "книги" },
        { it: "gli studenti", ru: "студенты" },
        { it: "gli amici", ru: "друзья" },
        { it: "le amiche", ru: "подруги" },
        { it: "le case", ru: "дома" }
      ]
    }
  ],
  exercises: [
    {
      type: "gap",
      question: "Выбери определённый артикль",
      sentence: "___ libro",
      options: ["il", "lo", "la", "l'"],
      answer: "il",
      hint: "Libro — мужской род, обычный случай.",
      explain: "il libro — книга."
    },
    {
      type: "gap",
      question: "Выбери определённый артикль",
      sentence: "___ studente",
      options: ["il", "lo", "la", "l'"],
      answer: "lo",
      hint: "Studente начинается на s + t, поэтому lo.",
      explain: "lo studente — студент."
    },
    {
      type: "gap",
      question: "Выбери определённый артикль",
      sentence: "___ amica",
      options: ["la", "l'", "il", "lo"],
      answer: "l'",
      hint: "Перед гласной в единственном числе используется l'.",
      explain: "l'amica — подруга."
    },
    {
      type: "gap",
      question: "Выбери артикль множественного числа",
      sentence: "___ libri",
      options: ["i", "gli", "le", "il"],
      answer: "i",
      hint: " Единственное число было il libro, значит множественное i libri.",
      explain: "i libri — книги."
    },
    {
      type: "gap",
      question: "Выбери артикль множественного числа",
      sentence: "___ studenti",
      options: ["i", "gli", "le", "lo"],
      answer: "gli",
      hint: "Единственное число было lo studente, значит множественное gli studenti.",
      explain: "gli studenti — студенты."
    },
    {
      type: "table",
      question: "Заполни множественное число",
      headers: ["Единственное число", "Множественное число"],
      rows: [
        ["il libro", "i libri"],
        ["lo studente", ""],
        ["la casa", "le case"]
      ],
      targetRow: 1,
      targetColumn: 1,
      options: ["gli studenti", "i studenti", "le studenti", "lo studenti"],
      answer: "gli studenti",
      hint: "После lo во множественном числе обычно идёт gli.",
      explain: "lo studente -> gli studenti."
    },
    {
      type: "match",
      question: "Соедини единственное и множественное число",
      pairs: [
        { left: "il libro", right: "i libri" },
        { left: "lo studente", right: "gli studenti" },
        { left: "l'amico", right: "gli amici" },
        { left: "l'amica", right: "le amiche" },
        { left: "la casa", right: "le case" }
      ],
      explain: "Обрати внимание: l'amica -> le amiche, а не gli amiche."
    },
    {
      type: "choice",
      question: "Как сказать «друзья» с определённым артиклем?",
      options: ["i amici", "gli amici", "le amici", "l'amici"],
      answer: "gli amici",
      hint: "Amico начинается с гласной, мужской род. Единственное число: l'amico. Множественное: gli amici.",
      explain: "gli amici — друзья."
    },
    {
      type: "fill",
      question: "Вставь артикль: ___ zaino",
      answer: "lo",
      accept: ["lo", "Lo"],
      placeholder: "il / lo / la / l'",
      hint: "Zaino начинается на z, мужской род.",
      explain: "lo zaino — рюкзак."
    },
    {
      type: "gap",
      question: "Вставь артикль множественного числа",
      sentence: "la casa -> ___ case",
      answer: "le",
      accept: ["le", "Le"],
      placeholder: "i / gli / le",
      hint: "Женский род во множественном числе — le.",
      explain: "la casa -> le case."
    },
    {
      type: "build",
      question: "Собери фразу: «студенты»",
      words: ["gli", "studenti"],
      answer: "gli studenti",
      hint: "Lo studente -> gli studenti.",
      explain: "gli studenti — студенты."
    },
    {
      type: "choice",
      question: "Почему правильно gli amici, а не l'amici?",
      options: [
        "Потому что amici женского рода",
        "Потому что апостроф у определённого артикля только в единственном числе",
        "Потому что во множественном числе всегда i",
        "Потому что amici начинается на согласную"
      ],
      answer: "Потому что апостроф у определённого артикля только в единственном числе",
      hint: "Единственное число: l'amico. Множественное: gli amici.",
      explain: "Апостроф не используется во множественном числе. Правильно: gli amici."
    }
  ]
};
