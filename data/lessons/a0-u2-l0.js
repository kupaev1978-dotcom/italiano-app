window.LESSONS = window.LESSONS || {};

window.LESSONS["a0-u2-l0"] = {
  id: "a0-u2-l0",
  title: "Личные местоимения и формальное Lei",
  level: "A0",
  xp: 30,
  theory: [
    {
      title: "Местоимения можно почти всегда опускать",
      summary: "Главный секрет, который ломает мозг русскоговорящим: окончание глагола уже говорит, КТО действует, поэтому io/tu обычно не ставят.",
      rule: [
        "Parlo italiano = я говорю по-итальянски. Io не нужно: окончание -o уже значит «я».",
        "Ударные местоимения (io, tu, lui, lei...) ставят только для контраста, эмоции или уточнения.",
        "Личные местоимения: io (я), tu (ты), lui (он), lei (она), noi (мы), voi (вы), loro (они)."
      ],
      table: {
        headers: ["Местоимение", "Значение", "Когда ставить"],
        rows: [
          ["io", "я", "только чтобы подчеркнуть: IO parlo, tu no"],
          ["tu", "ты", "контраст или обращение"],
          ["lui / lei", "он / она", "когда непонятно, о ком речь"],
          ["noi", "мы", "редко, окончание -iamo уже ясно"],
          ["voi", "вы (мн.)", "несколько человек"],
          ["loro", "они", "уточнение"]
        ]
      },
      tips: [
        "Секрет натуральности: если переводишь каждое «я/ты/он» на io/tu/lui, звучишь как иностранец или как будто споришь. Носитель скажет просто Parlo, а не Io parlo.",
        "Ударное местоимение = русское выделение интонацией: «Я говорю по-итальянски, а ТЫ по-русски» → IO parlo italiano, TU parli russo."
      ],
      mistakes: [
        "Не ставь io перед каждым глаголом по привычке из русского — это перегружает речь.",
        "Не путай voi (вы, несколько человек) с вежливым Lei (Вы, один человек) — это разные вещи."
      ],
      examples: [
        { it: "Parlo italiano.", ru: "Я говорю по-итальянски.", note: "без io — обычная речь" },
        { it: "Io parlo italiano, tu parli russo.", ru: "Я говорю по-итальянски, а ты по-русски.", note: "io/tu для контраста" },
        { it: "Lui è romano, io sono russo.", ru: "Он римлянин, я русский." }
      ]
    },
    {
      title: "Формальное Lei: вежливость = 3-е лицо",
      summary: "Чтобы сказать «Вы» вежливо одному человеку, используют Lei с глаголом в 3-м лице единственного числа — и это открывает всю грамматику вежливости.",
      rule: [
        "Lei parla = Вы говорите (вежл.) — глагол как для «он/она».",
        "Вместо ti используется si: Come si chiama? (Как вас зовут?).",
        "Прилагательное и причастие согласуются с ПОЛОМ собеседника: Lei è stanco (мужчине) / Lei è stanca (женщине).",
        "Molte grazie / La ringrazio — вежливые формы благодарности."
      ],
      tips: [
        "Редкий нюанс, который почти нигде не объясняют: при Lei ГЛАГОЛ стоит в 3-м лице (как «он/она»), а ПРИЛАГАТЕЛЬНОЕ согласуется с реальным полом человека. Поэтому мужчине говорят Lei è stanco, женщине Lei è stanca — несмотря на «3-е лицо». Запомни: Lei маскируется под «она/он» в глаголе, но пол берём настоящий.",
        "Мостик из приветствий: Come ti chiami? = неформально, Come si chiama? = вежливо. Разница ровно в этом правиле."
      ],
      mistakes: [
        "Не говори Lei sei — с вежливым Lei глагол всегда 3-е лицо: Lei è.",
        "Не путай регистры в одном диалоге: начал с ti — держи ti, начал с si/Lei — держи Lei."
      ],
      examples: [
        { it: "Come si chiama?", ru: "Как вас зовут? (вежл.)" },
        { it: "Lei è italiano?", ru: "Вы итальянец? (мужчине)" },
        { it: "Lei è italiana?", ru: "Вы итальянка? (женщине)" },
        { it: "Molto piacere, La ringrazio.", ru: "Очень приятно, благодарю Вас." }
      ],
      dialog: [
        { who: "Commesso", text: "Buongiorno. Come posso aiutarLa?", ru: "Добрый день. Чем могу Вам помочь?" },
        { who: "Cliente", text: "Cercavo un regalo. Lei è gentile.", ru: "Я искала подарок. Вы любезны." }
      ]
    }
  ],
  exercises: [
    {
      type: "choice",
      question: "В обычной речи «я говорю по-итальянски» лучше сказать:",
      options: ["Io parlo italiano", "Parlo italiano", "Io parlo l'italiano", "Parlo io italiano"],
      answer: "Parlo italiano",
      explain: "Окончание -o уже значит «я». Io нужно только для контраста."
    },
    {
      type: "match",
      question: "Соедини ситуацию с правильной формой",
      pairs: [
        { left: "обычно сказать «я говорю»", right: "Parlo (без io)" },
        { left: "подчеркнуть: я, а не ты", right: "IO parlo, TU parli" },
        { left: "вежливо одному человеку", right: "Lei parla / si chiama" },
        { left: "вы — несколько человек", right: "Voi parlate" }
      ],
      explain: "Местоимения опускают без контраста; вежливость = Lei + 3-е лицо; voi = множественное.",
      explainWrong: "Неверная пара. Помни: без контраста io не нужен; Lei — это 3-е лицо; voi — для группы."
    },
    {
      type: "fill",
      question: "Как вежливо спросить «как вас зовут?»",
      answer: "Come si chiama?",
      accept: ["Come si chiama?", "come si chiama", "Come si chiama", "come si chiama?"],
      explain: "Вежливость = si (3-е лицо), а не ti."
    },
    {
      type: "choice",
      question: "Мужчине вежливо «Вы устали?» — как скажешь?",
      options: ["Lei è stanca?", "Lei è stanco?", "Tu sei stanco?", "Voi siete stanco?"],
      answer: "Lei è stanco?",
      explain: "Lei + 3-е лицо è, прилагательное по полу собеседника: stanco (мужской)."
    },
    {
      type: "build",
      question: "Собери: «Вы говорите по-итальянски» (вежливо)",
      words: ["Lei", "parla", "italiano"],
      answer: "Lei parla italiano",
      explain: "Вежливое Lei требует глагол в 3-м лице: parla."
    },
    {
      type: "choice",
      question: "Что избыточно в обычной фразе «Io parlo italiano»?",
      options: ["parlo", "italiano", "io", "ничего не избыточно"],
      answer: "io",
      explain: "Без контраста io опускают: достаточно Parlo italiano."
    },
    {
      type: "match",
      question: "Соедини неформальную и вежливую форму",
      pairs: [
        { left: "Come ti chiami?", right: "Come si chiama?" },
        { left: "Di dove sei?", right: "Di dov'è?" },
        { left: "tu sei italiano", right: "Lei è italiano" }
      ],
      explain: "Вежливость меняет ti→si и 2-е лицо→3-е лицо (Lei).",
      explainWrong: "Неверная пара. Вежливая форма = si / Lei / 3-е лицо."
    },
    {
      type: "fill",
      question: "Женщине вежливо «Вы устала?» (прилагательное по полу)",
      answer: "Lei è stanca",
      accept: ["Lei è stanca", "lei è stanca", "Lei è stanca?", "lei è stanca?"],
      explain: "Stanca — женский род, потому что говорим женщине, несмотря на «3-е лицо» глагола."
    }
  ]
};
