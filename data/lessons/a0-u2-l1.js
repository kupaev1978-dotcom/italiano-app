window.LESSONS = window.LESSONS || {};

window.LESSONS["a0-u2-l1"] = {
  id: "a0-u2-l1",
  title: "Глагол essere: я есть, ты есть",
  level: "A0",
  xp: 30,
  theory: [
    {
      title: "Essere = быть, являться, находиться",
      summary: "Один глагол закрывает три роли: кто я, какой я и где я. Это фундамент всей итальянской речи.",
      rule: [
        "io sono, tu sei, lui/lei è, noi siamo, voi siete, loro sono.",
        "Кто/что я: Sono italiano. (Я итальянец.)",
        "Какой я: Sono stanco. (Я усталый.)",
        "Где я: Sono a casa. (Я дома.)"
      ],
      table: {
        headers: ["Лицо", "Форма", "Пример"],
        rows: [
          ["io", "sono", "sono russo"],
          ["tu", "sei", "sei romano?"],
          ["lui / lei", "è", "è a casa"],
          ["noi", "siamo", "siamo amici"],
          ["voi", "siete", "siete pronti?"],
          ["loro", "sono", "sono stanchi"]
        ]
      },
      tips: [
        "Секрет-двойник: sono означает и «я есть», и «они есть». Итальянцы понимают по контексту: Sono stanco = «я устал», Loro sono stanchi = «они устали». Не пугайся этой двойственности.",
        "Связка с фонетикой: è (с акцентом) = глагол «есть», e (без акцента) = союз «и». Luca e Maria = Лука и Мария; Luca è Maria = Лука есть Мария (бессмыслица). Акцент решает."
      ],
      mistakes: [
        "Не удваивай: «Io sono sono» — ошибка. Одна форма sono.",
        "Не путай sei (ты есть) и sei (число 6) — решает контекст, как мы видели в числах."
      ],
      examples: [
        { it: "Sono italiano.", ru: "Я итальянец." },
        { it: "Sei romano?", ru: "Ты римлянин?" },
        { it: "Lui è a casa.", ru: "Он дома." },
        { it: "Siamo amici.", ru: "Мы друзья." },
        { it: "Loro sono stanchi.", ru: "Они устали." }
      ]
    },
    {
      title: "Registri: tu, voi и вежливое Lei с essere",
      summary: "Essere показывает вежливость лучше всех: с Lei глагол стоит в 3-м лице (è), а прилагательное согласуется с полом собеседника.",
      rule: [
        "Неформально: Tu sei italiano? (ты)",
        "Вежливо одному: Lei è italiano? (мужчине) / Lei è italiana? (женщине)",
        "Множественное: Voi siete italiani? (вы, группа)"
      ],
      tips: [
        "Запомни якорь вежливости: Lei è (не Lei sei!). Это то же правило, что и в местоимениях: вежливость = 3-е лицо.",
        "Прилагательные на -e (gentile, interessante) не меняются по полу: Lei è gentile — и мужчине, и женщине."
      ],
      mistakes: [
        "Не говори «Lei sei italiano» — с Lei только è.",
        "Не забывай согласование: женщине — italiana, stanca, gentile (на -e), но мужчине — italiano, stanco."
      ],
      examples: [
        { it: "Lei è gentile.", ru: "Вы любезны (универсально)." },
        { it: "Lei è stanco?", ru: "Вы устали? (мужчине)" },
        { it: "Lei è stanca?", ru: "Вы устали? (женщине)" }
      ],
      dialog: [
        { who: "Anna", text: "Ciao! Sei Marco?", ru: "Привет! Ты Марко?" },
        { who: "Marco", text: "Sì, sono io. E tu sei Anna?", ru: "Да, это я. А ты Анна?" },
        { who: "Anna", text: "Sì! Piacere. Sono di Roma.", ru: "Да! Приятно. Я из Рима." },
        { who: "Marco", text: "Il piacere è mio. Sono russo.", ru: "Взаимно. Я русский." }
      ]
    }
  ],
  exercises: [
    {
      type: "choice",
      question: "Как сказать «я есть» (глагол essere)?",
      options: ["sono", "sei", "è", "siamo"],
      answer: "sono",
      explain: "Io sono — я есть."
    },
    {
      type: "match",
      question: "Соедини фразу с переводом",
      pairs: [
        { left: "Sono italiano", right: "Я итальянец" },
        { left: "Sei romano?", right: "Ты римлянин?" },
        { left: "È a casa", right: "Он/она дома" },
        { left: "Siamo amici", right: "Мы друзья" },
        { left: "Siete pronti?", right: "Вы готовы?" }
      ],
      explain: "Essere закрывает «кто я / какой я / где я».",
      explainWrong: "Неверная пара. Вспомни формы: sono, sei, è, siamo, siete."
    },
    {
      type: "fill",
      question: "Вставь форму: «Tu ___ italiano» (Ты итальянец)",
      answer: "sei",
      accept: ["sei", "Sei"],
      explain: "Tu sei — 2-е лицо единственного числа."
    },
    {
      type: "choice",
      question: "Как сказать «Он есть итальянец» (с акцентом на глагол)?",
      options: ["Lui e italiano", "Lui è italiano", "Lui sei italiano", "Lui sono italiano"],
      answer: "Lui è italiano",
      explain: "Глагол «есть» = è с акцентом. Без акцента e — это союз «и»."
    },
    {
      type: "build",
      question: "Собери: «Мы дома»",
      words: ["Siamo", "a", "casa"],
      answer: "Siamo a casa",
      explain: "Noi siamo — мы есть; a casa — дома."
    },
    {
      type: "choice",
      question: "Форма sono может означать:",
      options: ["только «я есть»", "только «они есть»", "и «я есть», и «они есть»", "только «мы есть»"],
      answer: "и «я есть», и «они есть»",
      explain: "Секрет-двойник: sono для io и для loro. Решает контекст."
    },
    {
      type: "fill",
      question: "Вежливо мужчине «Вы итальянец?»",
      answer: "Lei è italiano",
      accept: ["Lei è italiano", "lei è italiano", "Lei è italiano?", "lei è italiano?"],
      explain: "С вежливым Lei глагол è (3-е лицо), прилагательное maschile italiano."
    },
    {
      type: "choice",
      question: "«Loro ___ stanchi» (Они устали):",
      options: ["sono", "sei", "è", "siamo"],
      answer: "sono",
      explain: "Loro sono — та же форма, что и io sono. Контекст подсказывает «они»."
    }
  ]
};
