window.LESSONS = window.LESSONS || {};

window.LESSONS["a0-u4-l0"] = {
  id: "a0-u4-l0",
  title: "Прилагательные и согласование в роде и числе",
  level: "A0",
  xp: 30,
  theory: [
    {
      title: "Прилагательное подстраивается под существительное",
      summary: "В итальянском прилагательное меняет окончание так же, как существительное: по роду и числу. Это не сложно, если помнить четыре хвоста.",
      rule: [
        "Мужской род единственного числа обычно -o: alto, piccolo, buono.",
        "Женский род единственного числа обычно -a: alta, piccola, buona.",
        "Множественное число мужского рода обычно -i: alti, piccoli, buoni.",
        "Множественное число женского рода обычно -e: alte, piccole, buone.",
        "Прилагательные на -e в единственном числе не меняются по роду: interessante, facile, difficile. Во множественном числе они получают -i: interessanti, facili, difficili."
      ],
      table: {
        headers: ["Единственное число", "Мужской род", "Женский род", "Множественное число"],
        rows: [
          ["обычный случай", "alto", "alta", "alti / alte"],
          ["на -e", "interessante", "interessante", "interessanti"]
        ]
      },
      tips: [
        "Секрет: сначала определи род и число существительного, потом добавь такой же хвост прилагательному. La casa è alta. Il libro è alto.",
        "Не переводи дословно русский порядок «высокий дом». Итальянец чаще скажет la casa alta, а не alta casa."
      ],
      mistakes: [
        "Не говори la casa alto. Правильно: la casa alta.",
        "Не говори i libri interessante, если libri во множественном числе. Правильно: i libri interessanti."
      ],
      examples: [
        { it: "un ragazzo alto", ru: "высокий парень" },
        { it: "una ragazza alta", ru: "высокая девушка" },
        { it: "dei ragazzi alti", ru: "высокие ребята" },
        { it: "delle ragazze alte", ru: "высокие девушки" },
        { it: "un film interessante", ru: "интересный фильм" },
        { it: "dei film interessanti", ru: "интересные фильмы" }
      ]
    },
    {
      title: "Частые прилагательные и позиция",
      summary: "На A0 достаточно знать несколько прилагательных и понимать, что большинство ставится после существительного.",
      rule: [
        "alto / alta — высокий / высокая",
        "basso / bassa — низкий / низкая",
        "piccolo / piccola — маленький / маленькая",
        "grande — большой, в единственном числе не меняется по роду: il grande libro, la grande casa",
        "grandi — большие во множественном числе",
        "buono / buona — хороший / хорошая",
        "cattivo / cattiva — плохой / плохая",
        "nuovo / nuova — новый / новая",
        "vecchio / vecchia — старый / старая"
      ],
      table: {
        headers: ["Прилагательное", "муж. ед.", "жен. ед.", "муж. мн.", "жен. мн."],
        rows: [
          ["высокий", "alto", "alta", "alti", "alte"],
          ["маленький", "piccolo", "piccola", "piccoli", "piccole"],
          ["большой", "grande", "grande", "grandi", "grandi"],
          ["хороший", "buono", "buona", "buoni", "buone"]
        ]
      },
      tips: [
        "Секрет про grande: в единственном числе оно удобно тем, что не меняется: il grande libro, la grande casa. Но во множественном числе уже grandi: i grandi libri, le grandi case.",
        "Некоторые прилагательные могут стоять перед существительным для красоты или устойчивости: bel libro, buon caffè, grande amico, piccolo giardino. Но на A0 безопаснее ставить после: un libro bello, un caffè buono."
      ],
      mistakes: [
        "Не путай grande и grosso. Grande — большой по размеру или важности, grosso — крупный, толстый. На A0 чаще нужен grande.",
        "Не забывай согласование с множественным числом: le case grandi, а не le case grande."
      ],
      examples: [
        { it: "La casa è grande.", ru: "Дом большой." },
        { it: "Le case sono grandi.", ru: "Дома большие." },
        { it: "È una piccola città.", ru: "Это маленький город." },
        { it: "Ho un buon caffè.", ru: "У меня хороший кофе.", note: "можно также un caffè buono" }
      ],
      dialog: [
        { who: "Anna", text: "Com'è la tua casa?", ru: "Какой твой дом?" },
        { who: "Marco", text: "È grande e bella. La cucina è piccola.", ru: "Он большой и красивый. Кухня маленькая." }
      ]
    }
  ],
  exercises: [
    {
      type: "choice",
      question: "Как сказать «высокая девушка»?",
      options: ["la ragazza alto", "la ragazza alta", "il ragazzo alta", "la ragazze alta"],
      answer: "la ragazza alta",
      hint: "Ragazza женского рода, поэтому прилагательное на -a.",
      explain: "la ragazza alta — высокая девушка."
    },
    {
      type: "gap",
      question: "Выбери правильную форму",
      sentence: "La casa è ___.",
      options: ["alto", "alta", "alti", "alte"],
      answer: "alta",
      hint: "Casa женского рода в единственном числе.",
      explain: "La casa è alta — дом высокий."
    },
    {
      type: "table",
      question: "Заполни согласование",
      headers: ["Существительное", "Прилагательное"],
      rows: [
        ["il libro", "interessante"],
        ["la casa", ""]
      ],
      targetRow: 1,
      targetColumn: 1,
      options: ["interessante", "interessanti", "interessanta", "interessa"],
      answer: "interessante",
      hint: "Прилагательные на -e в единственном числе не меняются по роду.",
      explain: "la casa interessante — интересный дом."
    },
    {
      type: "match",
      question: "Соедини фразу и перевод",
      pairs: [
        { left: "un ragazzo alto", right: "высокий парень" },
        { left: "una ragazza alta", right: "высокая девушка" },
        { left: "dei ragazzi alti", right: "высокие парни" },
        { left: "delle ragazze alte", right: "высокие девушки" },
        { left: "un film interessante", right: "интересный фильм" }
      ],
      explain: "Прилагательное согласуется с родом и числом."
    },
    {
      type: "fill",
      question: "Напиши женскую форму от piccolo",
      answer: "piccola",
      accept: ["piccola", "Piccola"],
      placeholder: "женская форма",
      hint: "Мужской род -o -> женский -a.",
      explain: "piccolo -> piccola."
    },
    {
      type: "gap",
      question: "Вставь множественное число",
      sentence: "Le case sono ___.",
      options: ["grande", "grandi", "granda", "grandezze"],
      answer: "grandi",
      hint: "Во множественном числе grande становится grandi.",
      explain: "Le case sono grandi — дома большие."
    },
    {
      type: "build",
      question: "Собери фразу: «книга интересная»",
      words: ["Il", "libro", "è", "interessante"],
      answer: "Il libro è interessante",
      hint: "Libro мужского рода, interessante не меняется в единственном числе.",
      explain: "Il libro è interessante."
    },
    {
      type: "choice",
      question: "Какая фраза неверная?",
      options: ["la casa alta", "il libro interessante", "le ragazze alte", "la casa alto"],
      answer: "la casa alto",
      hint: "Casa женского рода, нужно alta.",
      explain: "Правильно: la casa alta."
    },
    {
      type: "table",
      question: "Заполни прилагательное во множественном числе",
      headers: ["Существительное", "Прилагательное"],
      rows: [
        ["le ragazze", ""]
      ],
      targetRow: 0,
      targetColumn: 1,
      options: ["alta", "alte", "alti", "alto"],
      answer: "alte",
      hint: "Женский род множественного числа: -e.",
      explain: "le ragazze alte — высокие девушки."
    }
  ]
};
