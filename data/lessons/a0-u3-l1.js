window.LESSONS = window.LESSONS || {};

window.LESSONS["a0-u3-l1"] = {
  id: "a0-u3-l1",
  title: "Множественное число существительных",
  level: "A0",
  xp: 30,
  theory: [
    {
      title: "Три главных правила множественного числа",
      summary: "Большинство существительных меняют только окончание. Выучи три хвоста — и сможешь образовать множественное число для большинства слов.",
      rule: [
        "Мужской род на -o: -o меняется на -i. libro -> libri.",
        "Женский род на -a: -a меняется на -e. casa -> case.",
        "Слова на -e: -e меняется на -i. fiore -> fiori, studente -> studenti."
      ],
      table: {
        headers: ["Единственное число", "Множественное число", "Пример"],
        rows: [
          ["-o", "-i", "libro -> libri"],
          ["-a", "-e", "casa -> case"],
          ["-e", "-i", "fiore -> fiori"]
        ]
      },
      tips: [
        "Секрет: множественное число часто видно по артиклю. i libri — мужской род, le case — женский род, gli studenti — мужской род на -e.",
        "Не переводи русский «много книг» как un libri. Неопределённого артикля во множественном числе нет. Просто libri или i libri, если речь о конкретных книгах."
      ],
      mistakes: [
        "Не делай все множественные числа на -i. Casa -> case, а не casi.",
        "Не забывай, что слово может менять не только окончание, но и написание: ragazzo -> ragazzi, ragazza -> ragazze."
      ],
      examples: [
        { it: "il libro -> i libri", ru: "книга -> книги" },
        { it: "la casa -> le case", ru: "дом -> дома" },
        { it: "il fiore -> i fiori", ru: "цветок -> цветы" },
        { it: "lo studente -> gli studenti", ru: "студент -> студенты" }
      ]
    },
    {
      title: "Частые ловушки: -co, -ca, città, mano",
      summary: "Есть несколько важных групп слов, которые встречаются часто. Их лучше увидеть сразу, чтобы не пугаться позже.",
      rule: [
        "amico -> amici, amica -> amiche.",
        "ragazzo -> ragazzi, ragazza -> ragazze.",
        "città -> città: слово с ударением на последний слог обычно не меняется.",
        "la mano -> le mani: исключение по роду, но множественное число обычное: -o -> -i.",
        "il problema -> i problemi."
      ],
      table: {
        headers: ["Единственное число", "Множественное число", "Комментарий"],
        rows: [
          ["amico", "amici", "мужской род, частая форма"],
          ["amica", "amiche", "женский род, -ca -> -che"],
          ["ragazzo", "ragazzi", "обычное -o -> -i"],
          ["ragazza", "ragazze", "обычное -a -> -e"],
          ["città", "città", "не изменяется"],
          ["mano", "mani", "женский род, но окончание -o -> -i"]
        ]
      },
      tips: [
        "Секрет про città: если слово ударное на последний слог и заканчивается на гласную с акцентом, оно часто остаётся одинаковым в единственном и множественном числе. Пример: la città -> le città.",
        "Слово mano женского рода, но во множественном числе ведёт себя как обычное слово на -o: le mani. Не пугайся: род и окончание могут не совпадать."
      ],
      mistakes: [
        "Не пиши_citys или cittàs. Итальянского множественного с -s нет.",
        "Не говори le mano. Правильно: le mani."
      ],
      examples: [
        { it: "Ho due amici.", ru: "У меня два друга." },
        { it: "Ho due amiche.", ru: "У меня две подруги." },
        { it: "Le città sono belle.", ru: "Города красивые." },
        { it: "Le mani sono fredde.", ru: "Руки холодные." }
      ]
    }
  ],
  exercises: [
    {
      type: "choice",
      question: "Какое множественное число от casa?",
      options: ["casi", "case", "casae", "casii"],
      answer: "case",
      hint: "Женский род на -a обычно меняется на -e.",
      explain: "la casa -> le case."
    },
    {
      type: "gap",
      question: "Вставь множественное число",
      sentence: "libro -> ___",
      options: ["libri", "libros", "libre", "libii"],
      answer: "libri",
      hint: "Мужской род на -o меняется на -i.",
      explain: "il libro -> i libri."
    },
    {
      type: "table",
      question: "Заполни множественное число",
      headers: ["Единственное число", "Множественное число"],
      rows: [
        ["casa", "case"],
        ["fiore", "fiori"],
        ["ragazzo", ""]
      ],
      targetRow: 2,
      targetColumn: 1,
      options: ["ragazzi", "ragazos", "ragazze", "ragazzii"],
      answer: "ragazzi",
      hint: " Ragazzo заканчивается на -o, значит множественное на -i.",
      explain: "il ragazzo -> i ragazzi."
    },
    {
      type: "match",
      question: "Соедини единственное и множественное число",
      pairs: [
        { left: "libro", right: "libri" },
        { left: "casa", right: "case" },
        { left: "studente", right: "studenti" },
        { left: "amica", right: "amiche" },
        { left: "città", right: "città" }
      ],
      explain: "Это базовые формы, которые нужно довести до автоматизма."
    },
    {
      type: "gap",
      question: "Вставь окончание множественного числа",
      sentence: "ragazza -> ragaz___",
      answer: "ze",
      accept: ["ze"],
      placeholder: "Окончание",
      hint: "Женский род на -a обычно даёт -e.",
      explain: "ragazza -> ragazze."
    },
    {
      type: "fill",
      question: "Напиши множественное число от mano",
      answer: "mani",
      accept: ["mani", "Mani"],
      hint: "Mano женского рода, но окончание -o меняется на -i.",
      explain: "la mano -> le mani."
    },
    {
      type: "table",
      question: "Выбери правильную форму",
      headers: ["Единственное число", "Множественное число"],
      rows: [
        ["amico", ""],
        ["amica", "amiche"]
      ],
      targetRow: 0,
      targetColumn: 1,
      options: ["amici", "amicos", "amiche", "amicii"],
      answer: "amici",
      hint: "Amico — мужской род, частая форма множественного: amici.",
      explain: "amico -> amici."
    },
    {
      type: "build",
      question: "Собери фразу: «книги» с определённым артиклем",
      words: ["i", "libri"],
      answer: "i libri",
      hint: "Множественный мужской артикль для il libro — i.",
      explain: "i libri — книги."
    },
    {
      type: "choice",
      question: "Какая форма неверная?",
      options: ["i libri", "le case", "gli studenti", "i casas"],
      answer: "i casas",
      hint: "В итальянском нет множественного на -s, как в английском.",
      explain: "Правильно: le case."
    }
  ]
};
