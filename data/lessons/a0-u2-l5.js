window.LESSONS = window.LESSONS || {};

window.LESSONS["a0-u2-l5"] = {
  id: "a0-u2-l5",
  title: "Вопросительные слова: chi, che, dove, quando, come, perché, quanto",
  level: "A0",
  xp: 30,
  theory: [
    {
      title: "Семь слов-ключей к любому вопросу",
      summary: "Выучи эти семь слов — и сможешь спрашивать почти о чём угодно на A0–A1. Порядок слов при этом НЕ меняется, как в английском.",
      rule: [
        "chi — кто: Chi sei? (Кто ты?)",
        "che / che cosa / cosa — что: Che fai? (Что делаешь?)",
        "dove — где: Dove abiti? (Где живёшь?)",
        "quando — когда: Quando parti? (Когда уезжаешь?)",
        "come — как: Come stai? (Как дела?)",
        "perché — почему: Perché piangi? (Почему плачешь?)",
        "quanto — сколько / насколько: Quanto costa? (Сколько стоит?)"
      ],
      table: {
        headers: ["Слово", "Значение", "Пример"],
        rows: [
          ["chi", "кто", "Chi è Marco?"],
          ["che (cosa)", "что", "Che ora è?"],
          ["dove", "где", "Dove vai?"],
          ["quando", "когда", "Quando torni?"],
          ["come", "как", "Come ti chiami?"],
          ["perché", "почему", "Perché no?"],
          ["quanto", "сколько/насколько", "Quanto è alto?"]
        ]
      },
      tips: [
        "Секрет про che: в живой речи итальянцы часто говорят короткое che вместо che cosa: Che fai? = Che cosa fai? Оба правильны, che короче и естественнее в разговоре.",
        "quanto — слово-хамелеон: с существительным = «сколько» (Quanto pane? сколько хлеба?), с прилагательным/глаголом = «насколько» (Quanto è bello? насколько он красив?)."
      ],
      mistakes: [
        "Не путай come (как) и che (что): Come stai? (как дела) vs Che fai? (что делаешь).",
        "Не переставляй слова как в английском: в итальянском вопрос = интонация + вопросительное слово, порядок слов как в утверждении."
      ],
      examples: [
        { it: "Chi sei?", ru: "Кто ты?" },
        { it: "Che cosa vuoi?", ru: "Что ты хочешь?" },
        { it: "Dove abiti?", ru: "Где ты живёшь?" },
        { it: "Quando parti?", ru: "Когда ты уезжаешь?" },
        { it: "Come stai?", ru: "Как дела?" },
        { it: "Quanto costa?", ru: "Сколько стоит?" }
      ]
    },
    {
      title: "Perché: два лица одного слова",
      summary: "Связка с фонетикой: perché (ударение на последний слог) значит и «почему?» (вопрос), и «потому что» (ответ). Различают интонация и контекст.",
      rule: [
        "Вопрос: Perché non vieni? — Почему ты не идёшь?",
        "Ответ: Non vengo perché lavoro. — Я не иду, потому что работаю.",
        "Письменно слово одинаковое; на слух вопрос имеет подъём интонации."
      ],
      tips: [
        "Секрет-якорь: увидел perché с вопросительным знаком и подъёмом = «почему»; perché в середине утверждения = «потому что». Это ровно тот принцип акцента из урока про ударение: ударное слово держит смысл.",
        "Не путай perché (почему/потому что) e perche? — такого слова нет; всегда с акцентом è на конце."
      ],
      mistakes: [
        "Не пиши «perche» без акцента — правильно perché с è.",
        "Не переводи perché всегда как «почему» — в ответе это «потому что»."
      ],
      examples: [
        { it: "Perché studi italiano?", ru: "Почему ты учишь итальянский?" },
        { it: "Studio perché amo l'Italia.", ru: "Учу, потому что люблю Италию." }
      ],
      dialog: [
        { who: "Anna", text: "Perché sei triste?", ru: "Почему ты грустный?" },
        { who: "Marco", text: "Perché ho freddo e ho sonno.", ru: "Потому что мне холодно и я хочу спать." },
        { who: "Anna", text: "Allora andiamo al bar!", ru: "Тогда пойдём в бар!" }
      ]
    }
  ],
  exercises: [
    {
      type: "match",
      question: "Соедини вопросительное слово со значением",
      pairs: [
        { left: "chi", right: "кто" },
        { left: "dove", right: "где" },
        { left: "quando", right: "когда" },
        { left: "come", right: "как" },
        { left: "quanto", right: "сколько" }
      ],
      explain: "Пять базовых слов-ключей; che (что) и perché (почему) добавим в следующих упражнениях.",
      explainWrong: "Неверная пара. chi=кто, dove=где, quando=когда, come=как, quanto=сколько."
    },
    {
      type: "choice",
      question: "Как спросить «что ты делаешь?»",
      options: ["Chi fai?", "Che fai?", "Come fai?", "Dove fai?"],
      answer: "Che fai?",
      explain: "Che (= che cosa) — «что». Che fai? — что делаешь?"
    },
    {
      type: "fill",
      question: "Как спросить «почему ты не идёшь?»",
      answer: "Perché non vieni?",
      accept: ["Perché non vieni?", "perché non vieni", "Perché non vieni", "perché non vieni?"],
      explain: "Perché с акцентом = почему (вопрос)."
    },
    {
      type: "choice",
      question: "В «Quanto è alto?» слово quanto означает:",
      options: ["сколько", "насколько", "когда", "почему"],
      answer: "насколько",
      explain: "С прилагательным quanto = «насколько»: Quanto è alto? = насколько он высокий?"
    },
    {
      type: "match",
      question: "Соедини вопрос с естественным ответом",
      pairs: [
        { left: "Dove abiti?", right: "A Roma" },
        { left: "Come stai?", right: "Bene, grazie" },
        { left: "Chi è?", right: "È Marco" },
        { left: "Quando parti?", right: "Domani" }
      ],
      explain: "Вопросительное слово подсказывает тип ответа: dove→место, come→состояние, chi→личность, quando→время.",
      explainWrong: "Неверная пара. dove=место, come=как дела, chi=кто, quando=когда."
    },
    {
      type: "choice",
      question: "В фразе «Non esco perché piove» perché означает:",
      options: ["почему", "потому что", "сколько", "когда"],
      answer: "потому что",
      explain: "В утверждении без вопроса perché = «потому что». Связка с фонетикой: одно слово, два лица."
    },
    {
      type: "build",
      question: "Собери: «сколько стоит кофе?»",
      words: ["Quanto", "costa", "il", "caffè?"],
      answer: "Quanto costa il caffè?",
      explain: "Quanto + costa (стоит) + il caffè. Помни акцент в caffè."
    },
    {
      type: "fill",
      question: "Как неформально спросить «как дела?»",
      answer: "Come stai?",
      accept: ["Come stai?", "come stai", "Come stai", "come stai?"],
      explain: "Come = как; stai = ты есть (2-е лицо essere)."
    },
    {
      type: "choice",
      question: "Какое слово для «Где вокзал?»",
      options: ["Chi", "Dove", "Quando", "Come"],
      answer: "Dove",
      explain: "Dove = где: Dov'è la stazione?"
    }
  ]
};
