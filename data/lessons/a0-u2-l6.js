window.LESSONS = window.LESSONS || {};

window.LESSONS["a0-u2-l6"] = {
  id: "a0-u2-l6",
  title: "Мини-диалоги: знакомство в жизни",
  level: "A0",
  xp: 30,
  theory: [
    {
      title: "Формула знакомства из 5 ходов",
      summary: "Любое знакомство — это повторяющийся сценарий: приветствие → имя → «приятно» → откуда → регистр. Выучи формулу — и диалог строится сам.",
      rule: [
        "Ход 1 — приветствие (задаёт тон): Ciao / Salve / Buongiorno.",
        "Ход 2 — имя: Come ti chiami? (неформ.) / Come si chiama? (вежл.) → Mi chiamo...",
        "Ход 3 — «приятно»: Piacere! / Molto piacere! / Piacere di conoscerti (неформ.) / di conoscerLa (вежл.).",
        "Ход 4 — откуда: Di dove sei? / Di dov'è? → Sono di... / Sono + национальность.",
        "Ход 5 — держи регистр до конца: начал с ti — оставайся на ti; начал с Lei/si — оставайся на вежливом."
      ],
      tips: [
        "Секрет натуральности: Anch'io (= я тоже) — универсальный клей диалога. «Sono russo.» — «Anch'io!» мгновенно делает разговор живым.",
        "Не обрывай на «Mi chiamo X» без Piacere — звучит сухо, как анкета. Формула из 5 ходов делает знакомство тёплым."
      ],
      mistakes: [
        "Не смешивай регистры в одном диалоге: «Come ti chiami? ... Piacere di conoscerLa» — это ошибка, ti и La из разных миров.",
        "Не забывай ответ на Piacere: естественно сказать Il piacere è mio (вежл.) или просто Piacere / Altrettanto."
      ],
      examples: [
        { it: "— Ciao! Come ti chiami? — Mi chiamo Giulia. — Piacere! — Il piacere è mio.", ru: "неформальный обмен" },
        { it: "— Buongiorno. Come si chiama? — Mi chiamo Rossi. — Piacere di conoscerLa.", ru: "вежливый обмен" }
      ]
    },
    {
      title: "Живые реплики: что спрашивать дальше",
      summary: "После имени и «откуда» разговор продолжают вопросами про жизнь. Здесь — базовый набор, который уже понятен из A0-U2.",
      rule: [
        "Che fai? / Che fai nella vita? — Чем занимаешься? (неформ./о профессии)",
        "Dove vivi? — Где живёшь?",
        "Quanti anni hai? — Сколько тебе лет?",
        "Parli italiano? — Говоришь по-итальянски?",
        "Anch'io! — Я тоже!"
      ],
      tips: [
        "Секрет: вопрос Che fai? в разговоре о знакомстве почти всегда значит «кем работаешь / чем занимаешься», а не буквально «что делаешь сейчас». Контекст решает — как и с sono.",
        "Anch'io заменяет целый ответ: вместо «Sono russo anch'io» достаточно «Anch'io!» после «Sono russo»."
      ],
      mistakes: [
        "Не переводи Che fai? всегда как «что ты делаешь (сейчас)» — в знакомстве это про занятие/профессию.",
        "Не ставь io в Anch'io по-разному: правильно слитно anch'io (тоже я)."
      ],
      examples: [
        { it: "Che fai? — Faccio lo studente.", ru: "Чем занимаешься? — Я студент." },
        { it: "Sono italiano. — Anch'io!", ru: "Я итальянец. — Я тоже!" },
        { it: "Parli russo? — Poco, ma studio.", ru: "Говоришь по-русски? — Немного, но учу." }
      ],
      dialog: [
        { who: "Marco", text: "Ciao! Come ti chiami?", ru: "Привет! Как тебя зовут?" },
        { who: "Sofia", text: "Mi chiamo Sofia. Piacere!", ru: "Меня зовут София. Приятно!" },
        { who: "Marco", text: "Il piacere è mio. Di dove sei?", ru: "Взаимно. Откуда ты?" },
        { who: "Sofia", text: "Sono di Firenze. E tu?", ru: "Я из Флоренции. А ты?" },
        { who: "Marco", text: "Sono di Torino. Che fai?", ru: "Я из Турина. Чем занимаешься?" },
        { who: "Sofia", text: "Faccio l'insegnante. Anch'io studio le lingue!", ru: "Я учительница. Я тоже изучаю языки!" }
      ]
    }
  ],
  exercises: [
    {
      type: "choice",
      question: "Встречаешь друга на улице. С чего начнёшь диалог?",
      options: ["Buongiorno, come si chiama?", "Ciao!", "Arrivederci!", "Buonanotte!"],
      answer: "Ciao!",
      explain: "Друг = неформальный регистр: Ciao. Вежливое si chiama тут неуместно."
    },
    {
      type: "match",
      question: "Соедини реплику с естественным ответом",
      pairs: [
        { left: "Come ti chiami?", right: "Mi chiamo Anna" },
        { left: "Di dove sei?", right: "Sono di Roma" },
        { left: "Piacere!", right: "Il piacere è mio" },
        { left: "Che fai?", right: "Faccio lo studente" }
      ],
      explain: "Это формула знакомства: имя → откуда → приятно → занятие.",
      explainWrong: "Неверная пара. На «come ti chiami» отвечают именем, на «di dove sei» — городом, на «piacere» — взаимностью."
    },
    {
      type: "build",
      question: "Собери вежливый вопрос: «Как вас зовут?»",
      words: ["Come", "si", "chiama?"],
      answer: "Come si chiama?",
      explain: "Вежливость = si (3-е лицо), не ti."
    },
    {
      type: "choice",
      question: "Как сказать «я тоже» одним словом?",
      options: ["Anche io", "Anch'io", "Io anche", "Pure me"],
      answer: "Anch'io",
      explain: "Секрет натуральности: anch'io слитно — универсальный клей диалога."
    },
    {
      type: "build",
      question: "Собери: «Приятно, меня зовут Анна»",
      words: ["Piacere", "mi", "chiamo", "Anna"],
      answer: "Piacere mi chiamo Anna",
      explain: "Формула: piacere + mi chiamo + имя."
    },
    {
      type: "match",
      question: "Соедини неформальную и вежливую реплику диалога",
      pairs: [
        { left: "Come ti chiami?", right: "Come si chiama?" },
        { left: "Di dove sei?", right: "Di dov'è?" },
        { left: "Piacere di conoscerti", right: "Piacere di conoscerLa" }
      ],
      explain: "Регистр меняется целиком: ti→si, sei→è, conoscerti→conoscerLa.",
      explainWrong: "Неверная пара. Вежливая форма держит 3-е лицо и Lei/si/La."
    },
    {
      type: "fill",
      question: "Вежливый ответ на «Piacere di conoscerLa» (подчеркнуть взаимность)",
      answer: "Il piacere è mio",
      accept: ["Il piacere è mio", "il piacere è mio", "Il piacere e mio", "il piacere e mio"],
      explain: "Классический вежливый ответ: «приятно мне»."
    },
    {
      type: "choice",
      question: "В знакомстве вопрос «Che fai?» обычно значит:",
      options: ["что ты делаешь прямо сейчас", "кем работаешь / чем занимаешься", "куда ты идёшь", "когда ты придёшь"],
      answer: "кем работаешь / чем занимаешься",
      explain: "Секрет контекста: в разговоре о знакомстве Che fai? = про занятие/профессию."
    },
    {
      type: "build",
      question: "Собери: «Я русский, а ты?»",
      words: ["Sono", "russo", ",", "e", "tu?"],
      answer: "Sono russo , e tu?",
      explain: "Sono russo + союз e (без акцента = «и») + tu? для возврата вопроса."
    }
  ]
};
