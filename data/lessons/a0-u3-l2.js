window.LESSONS = window.LESSONS || {};

window.LESSONS["a0-u3-l2"] = {
  id: "a0-u3-l2",
  title: "Неопределённые артикли: un, uno, una, un'",
  level: "A0",
  xp: 30,
  theory: [
    {
      title: "Un, uno, una, un': «какой-то один»",
      summary: "Неопределённый артикль используется, когда мы говорим о предмете как о «каком-то одном», а не о конкретном известном объекте. Он бывает только в единственном числе.",
      rule: [
        "un — мужской род в обычном случае: un libro, un tavolo.",
        "un — мужской род и перед гласной: un amico, un uomo. Апострофа нет!",
        "uno — мужской род перед s + согласная, z, ps, gn, y: uno studente, uno zaino.",
        "una — женский род в обычном случае: una casa, una macchina.",
        "un' — женский род перед гласной: un'amica, un'auto."
      ],
      table: {
        headers: ["Форма", "Когда использовать", "Пример"],
        rows: [
          ["un", "мужской род, обычный случай и перед гласной", "un libro, un amico"],
          ["uno", "мужской род: s + согласная, z, ps, gn, y", "uno studente, uno zaino"],
          ["una", "женский род, обычный случай", "una casa"],
          ["un'", "женский род перед гласной", "un'amica, un'auto"]
        ]
      },
      tips: [
        "Главный секрет-ловушка: мужской род перед гласной — un amico, без апострофа. Апостроф у неопределённого артикля появляется только у женского рода: un'amica.",
        "Uno выбирается по началу слова, а не по смыслу. Если видишь s + согласная, z, ps, gn, y — скорее всего uno: uno studente, uno zaino."
      ],
      mistakes: [
        "Не пиши un'amico. Правильно: un amico.",
        "Не говори uno libro. Libro начинается с обычной согласной, поэтому un libro.",
        "Не ставь неопределённый артикль во множественном числе. Нельзя un libri. Правильно просто libri или i libri."
      ],
      examples: [
        { it: "un libro", ru: "какая-то книга" },
        { it: "uno studente", ru: "какой-то студент" },
        { it: "una casa", ru: "какой-то дом" },
        { it: "un'amica", ru: "какая-то подруга" },
        { it: "un amico", ru: "какой-то друг" }
      ]
    },
    {
      title: "Как не путать un и uno",
      summary: "Это одна из самых частых ошибок новичков. Правило простое: смотри на первые буквы слова.",
      rule: [
        "Если мужское слово начинается на s + согласная: uno studente, uno sport.",
        "Если мужское слово начинается на z: uno zaino.",
        "Если мужское слово начинается на ps: uno psicologo.",
        "Если мужское слово начинается на gn: uno gnomo.",
        "Во всех обычных случаях: un libro, un tavolo, un amico."
      ],
      table: {
        headers: ["Начало слова", "Артикль", "Пример"],
        rows: [
          ["s + согласная", "uno", "uno studente"],
          ["z", "uno", "uno zaino"],
          ["ps", "uno", "uno psicologo"],
          ["gn", "uno", "uno gnomo"],
          ["обычная согласная", "un", "un libro"],
          ["гласная, мужской род", "un", "un amico"]
        ]
      },
      tips: [
        "Мнемоника: uno выглядит «тяжелее», поэтому оно идёт перед «тяжёлыми» началами: s + согласная, z, ps, gn.",
        "Если сомневаешься и слово мужское, начинающееся с гласной, помни: un amico, un uomo, un albero. Никакого un' для мужского рода."
      ],
      mistakes: [
        "Не говори un studente. Правильно: uno studente.",
        "Не говори uno amico. Правильно: un amico."
      ],
      examples: [
        { it: "Ho un cane.", ru: "У меня есть собака." },
        { it: "Ho uno zaino.", ru: "У меня есть рюкзак." },
        { it: "Ho un'amica russa.", ru: "У меня есть русская подруга." },
        { it: "Ho un amico russo.", ru: "У меня есть русский друг." }
      ]
    }
  ],
  exercises: [
    {
      type: "gap",
      question: "Выбери неопределённый артикль",
      sentence: "___ libro",
      options: ["un", "uno", "una", "un'"],
      answer: "un",
      hint: "Libro — мужской род, обычное начало.",
      explain: "un libro — какая-то книга."
    },
    {
      type: "gap",
      question: "Выбери неопределённый артикль",
      sentence: "___ studente",
      options: ["un", "uno", "una", "un'"],
      answer: "uno",
      hint: "Studente начинается на s + t, поэтому uno.",
      explain: "uno studente — какой-то студент."
    },
    {
      type: "gap",
      question: "Выбери неопределённый артикль",
      sentence: "___ amica",
      options: ["una", "un'", "un", "uno"],
      answer: "un'",
      hint: "Amica — женский род и начинается с гласной.",
      explain: "un'amica — какая-то подруга."
    },
    {
      type: "gap",
      question: "Выбери неопределённый артикль",
      sentence: "___ amico",
      options: ["un", "uno", "una", "un'"],
      answer: "un",
      hint: "Друг — мужской род. Перед гласной мужской род не получает апостроф.",
      explain: "un amico — какой-то друг."
    },
    {
      type: "table",
      question: "Вставь правильный артикль",
      headers: ["Слово", "Артикль"],
      rows: [
        ["studente", "uno"],
        ["amica", "un'"],
        ["amico", ""]
      ],
      targetRow: 2,
      targetColumn: 1,
      options: ["un", "uno", "una", "un'"],
      answer: "un",
      hint: "Amico — мужской род перед гласной: un, без апострофа.",
      explain: "un amico — какой-то друг."
    },
    {
      type: "match",
      question: "Соедини артикль и причину",
      pairs: [
        { left: "un libro", right: "мужской род, обычный случай" },
        { left: "uno studente", right: "мужской род, s + согласная" },
        { left: "una casa", right: "женский род, обычный случай" },
        { left: "un'amica", right: "женский род перед гласной" },
        { left: "un amico", right: "мужской род перед гласной, без апострофа" }
      ],
      explain: "Неопределённый артикль зависит от рода и начала слова."
    },
    {
      type: "choice",
      question: "Как сказать «какая-то машина»?",
      options: ["una macchina", "un macchina", "una' macchina", "uno macchina"],
      answer: "una macchina",
      hint: "Macchina — женский род, обычное согласное начало.",
      explain: "una macchina — какая-то машина."
    },
    {
      type: "fill",
      question: "Вставь артикль: ___ zaino",
      answer: "uno",
      accept: ["uno", "Uno"],
      placeholder: "un / uno / una / un'",
      hint: "Zaino начинается на z, мужской род.",
      explain: "uno zaino — какой-то рюкзак."
    },
    {
      type: "build",
      question: "Собери фразу: «У меня есть книга»",
      words: ["Ho", "un", "libro"],
      answer: "Ho un libro",
      hint: "Используем avere: ho. Книга мужского рода: un libro.",
      explain: "Ho un libro — у меня есть книга."
    },
    {
      type: "choice",
      question: "Какая фраза неверная?",
      options: ["un amico", "un'amica", "uno studente", "un'amico"],
      answer: "un'amico",
      hint: "Мужской род перед гласной не получает апостроф.",
      explain: "Правильно: un amico."
    }
  ]
};
