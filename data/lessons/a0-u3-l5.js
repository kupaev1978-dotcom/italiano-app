window.LESSONS = window.LESSONS || {};

window.LESSONS["a0-u3-l5"] = {
  id: "a0-u3-l5",
  title: "Checkpoint: род, число и артикли",
  level: "A0",
  xp: 60,
  theory: [
    {
      title: "Проверка блока A0-U3 🎯",
      summary: "Этот checkpoint смешивает род, множественное число, неопределённые и определённые артикли. Цель — проверить, что ты понял систему, а не просто запомнил несколько слов.",
      rule: [
        "Род: -o обычно maschile, -a обычно femminile, -e нужно знать с артиклем.",
        "Множественное число: -o -> -i, -a -> -e, -e -> -i.",
        "Неопределённые артикли: un, uno, una, un'.",
        "Определённые артикли: il, lo, l', la; множественное: i, gli, le.",
        "Апостроф у артикля — только в единственном числе: l'amico, но gli amici."
      ],
      tips: [
        "Если сомневаешься, сначала определи род, потом число, потом выбирай артикль.",
        "Ошибка в checkpoint стоит сердечко, но показывает, какую тему стоит повторить. Не гонись за скоростью."
      ],
      note: "После checkpoint откроется блок A0-U4: прилагательные, цвета, простые глаголы и тема дома/семьи."
    }
  ],
  exercises: [
    {
      type: "choice",
      question: "Какого рода слово mano?",
      options: ["maschile", "femminile", "neutro", "зависит от числа"],
      answer: "femminile",
      hint: "Это известное исключение: заканчивается на -o, но женского рода.",
      explain: "la mano — рука, женский род."
    },
    {
      type: "gap",
      question: "Выбери артикль",
      sentence: "___ studente",
      options: ["il", "lo", "la", "l'"],
      answer: "lo",
      hint: "Studente начинается на s + согласная.",
      explain: "lo studente — студент."
    },
    {
      type: "table",
      question: "Заполни множественное число",
      headers: ["Единственное число", "Множественное число"],
      rows: [
        ["casa", "case"],
        ["libro", ""],
        ["studente", "studenti"]
      ],
      targetRow: 1,
      targetColumn: 1,
      options: ["libri", "libros", "libre", "libii"],
      answer: "libri",
      hint: "Мужской род на -o меняется на -i.",
      explain: "il libro -> i libri."
    },
    {
      type: "match",
      question: "Соедини неопределённый артикль и слово",
      pairs: [
        { left: "un", right: "libro" },
        { left: "uno", right: "studente" },
        { left: "una", right: "casa" },
        { left: "un'", right: "amica" },
        { left: "un", right: "amico" }
      ],
      explain: "Помни: un amico без апострофа, un'amica с апострофом."
    },
    {
      type: "gap",
      question: "Вставь окончание",
      sentence: "ragazza -> ragaz___",
      answer: "ze",
      accept: ["ze"],
      placeholder: "Окончание",
      hint: "Женский род на -a даёт -e во множественном числе.",
      explain: "ragazza -> ragazze."
    },
    {
      type: "table",
      question: "Заполни артикль множественного числа",
      headers: ["Единственное число", "Множественное число"],
      rows: [
        ["il libro", "i libri"],
        ["l'amico", ""],
        ["la casa", "le case"]
      ],
      targetRow: 1,
      targetColumn: 1,
      options: ["gli amici", "i amici", "le amici", "l'amici"],
      answer: "gli amici",
      hint: "Единственное число l'amico, множественное мужского рода перед гласной — gli amici.",
      explain: "l'amico -> gli amici."
    },
    {
      type: "choice",
      question: "Как сказать «какая-то подруга»?",
      options: ["un'amica", "una amica", "un amica", "uno'amica"],
      answer: "un'amica",
      hint: "Amica — женский род перед гласной.",
      explain: "un'amica — какая-то подруга."
    },
    {
      type: "fill",
      question: "Напиши множественное число от città",
      answer: "città",
      accept: ["città", "Città", "citta", "Citta"],
      placeholder: "Множественное число",
      hint: "Слово с ударением на последний слог обычно не меняется.",
      explain: "la città -> le città."
    },
    {
      type: "build",
      question: "Собери фразу: «У меня есть книга»",
      words: ["Ho", "un", "libro"],
      answer: "Ho un libro",
      hint: "Avere: ho. Libro мужского рода: un libro.",
      explain: "Ho un libro — у меня есть книга."
    },
    {
      type: "gap",
      question: "Выбери артикль",
      sentence: "___ acqua",
      options: ["L'", "Il", "Lo", "Un"],
      answer: "L'",
      hint: "Acqua — женский род перед гласной.",
      explain: "l'acqua — вода."
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
      explain: "Апостроф не используется во множественном числе."
    },
    {
      type: "match",
      question: "Соедини артикли единственного и множественного числа",
      pairs: [
        { left: "il libro", right: "i libri" },
        { left: "lo studente", right: "gli studenti" },
        { left: "l'amica", right: "le amiche" },
        { left: "la casa", right: "le case" },
        { left: "l'amico", right: "gli amici" }
      ],
      explain: "Обрати внимание: l'amica -> le amiche, а l'amico -> gli amici."
    },
    {
      type: "table",
      question: "Определи род",
      headers: ["Слово", "Род"],
      rows: [
        ["la mano", "femminile"],
        ["il problema", ""],
        ["la chiave", "femminile"]
      ],
      targetRow: 1,
      targetColumn: 1,
      options: ["maschile", "femminile"],
      answer: "maschile",
      hint: "Problema — исключение: мужской род.",
      explain: "il problema — проблема, мужской род."
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
    }
  ]
};
