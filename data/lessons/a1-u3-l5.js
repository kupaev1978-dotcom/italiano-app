window.LESSONS = window.LESSONS || {};

window.LESSONS["a1-u3-l5"] = {
  id: "a1-u3-l5",
  title: "Характер, внешность и оценка людей",
  level: "A1",
  xp: 35,
  theory: [
    {
      title: "Описывать людей: essere и avere",
      summary: "Рост и характер — через essere. Глаза, волосы, борода — через avere. Это та же логика, что с ho fame и ho gli occhi verdi.",
      rule: [
        "È alto. — Он высокий.",
        "È bassa. — Она низкая.",
        "È simpatico. — Он славный / приятный.",
        "È simpatica. — Она славная / приятная.",
        "È gentile. — Он/она добрый / добрая.",
        "È intelligente. — Он/она умный / умная.",
        "Ha gli occhi azzurri. — У него/неё голубые глаза.",
        "Ha i capelli neri. — У него/неё чёрные волосы.",
        "Ha i capelli corti. — У него/неё короткие волосы.",
        "Ha la barba. — У него есть борода."
      ],
      table: {
        headers: ["Признак", "муж. ед.", "жен. ед.", "муж. мн.", "жен. мн."],
        rows: [
          ["высокий", "alto", "alta", "alti", "alte"],
          ["низкий", "basso", "bassa", "bassi", "basse"],
          ["славный", "simpatico", "simpatica", "simpatici", "simpatiche"],
          ["добрый", "gentile", "gentile", "gentili", "gentili"],
          ["умный", "intelligente", "intelligente", "intelligenti", "intelligenti"]
        ]
      },
      tips: [
        "Секрет: глаза и волосы — это то, что у человека есть: ho gli occhi..., ha i capelli... Не sono gli occhi.",
        "Прилагательные на -e, как gentile и intelligente, в единственном числе не меняются по роду: è gentile — и он, и она."
      ],
      mistakes: [
        "Не говори Sono gli occhi verdi. Правильно: Ho gli occhi verdi.",
        "Не говори È simpatico, если говоришь о женщине. Правильно: È simpatica.",
        "Не переводи «у него хорошие глаза» как ha occhi buoni без артикля. Лучше: ha degli occhi belli / ha bei occhi, но на A1 достаточно: ha gli occhi belli."
      ],
      examples: [
        { it: "Marco è alto e simpatico.", ru: "Марко высокий и славный." },
        { it: "Anna è bassa e gentile.", ru: "Анна невысокая и добрая." },
        { it: "Ha gli occhi verdi.", ru: "У него/неё зелёные глаза." },
        { it: "Ha i capelli lunghi.", ru: "У него/неё длинные волосы." }
      ]
    },
    {
      title: "Оценка людей: mi piace, secondo me, ma",
      summary: "Чтобы говорить не только фактами, но и мнением, нужны простые конструкции: mi piace, non mi piace, secondo me, ma.",
      rule: [
        "Mi piace Marco. — Мне нравится Марко.",
        "Non mi piace Marco. — Мне не нравится Марко.",
        "Secondo me è simpatico. — По-моему, он славный.",
        "È gentile, ma a volte è antipatico. — Он добрый, но иногда неприятный.",
        "È intelligente e divertente. — Он умный и весёлый.",
        "Non è noioso. — Он не скучный."
      ],
      table: {
        headers: ["Фраза", "Значение"],
        rows: [
          ["Mi piace.", "Мне нравится."],
          ["Non mi piace.", "Мне не нравится."],
          ["Secondo me è simpatico.", "По-моему, он славный."],
          ["È gentile, ma è severo.", "Он добрый, но строгий."],
          ["È divertente.", "Он весёлый."],
          ["È noioso.", "Он скучный."]
        ]
      },
      tips: [
        "Секрет про ma: оно соединяет контраст. È simpatico, ma è antipatico con gli estranei — он славный, но неприятный с незнакомцами.",
        "Не будь слишком грубым. Antipatico — сильное слово. Лучше сказать: Non mi piace molto — мне не очень нравится."
      ],
      mistakes: [
        "Не говори Mi piace è simpatico. Правильно: Mi piace perché è simpatico или Secondo me è simpatico.",
        "Не путай simpatico и antipatico: simpatico = приятный, славный; antipatico = неприятный.",
        "Не забывай non перед mi piace: Non mi piace."
      ],
      examples: [
        { it: "Il mio capo è severo, ma giusto.", ru: "Мой начальник строгий, но справедливый." },
        { it: "La mia amica è divertente.", ru: "Моя подруга весёлая." },
        { it: "Non mi piace quel film.", ru: "Мне не нравится тот фильм." },
        { it: "Secondo me è intelligente.", ru: "По-моему, он умный." }
      ],
      dialog: [
        { who: "Anna", text: "Com'è il tuo nuovo professore?", ru: "Какой твой новый профессор?" },
        { who: "Marco", text: "È severo, ma è molto intelligente.", ru: "Он строгий, но очень умный." },
        { who: "Anna", text: "Ti piace?", ru: "Он тебе нравится?" },
        { who: "Marco", text: "Sì, mi piace perché è giusto.", ru: "Да, мне нравится, потому что он справедливый." }
      ]
    }
  ],
  exercises: [
    {
      type: "gap",
      question: "Вставь прилагательное",
      sentence: "Maria è molto ___.",
      options: ["simpatica", "simpatico", "simpatici", "simpatiche"],
      answer: "simpatica",
      hint: "Maria — женский род единственного числа.",
      explain: "Maria è molto simpatica — Мария очень славная."
    },
    {
      type: "table",
      question: "Заполни женскую форму",
      headers: ["Мужской род", "Женский род"],
      rows: [
        ["simpatico", "simpatica"],
        ["antipatico", ""]
      ],
      targetRow: 1,
      targetColumn: 1,
      options: ["antipatica", "antipatico", "antipatici", "antipatiche"],
      answer: "antipatica",
      hint: "Женский род единственного числа: -a.",
      explain: "antipatica — неприятная."
    },
    {
      type: "error-choice",
      question: "Найди ошибку",
      tokens: [
        { text: "Sono", id: "wrong" },
        { text: "gli", id: "1" },
        { text: "occhi", id: "2" },
        { text: "azzurri", id: "3" }
      ],
      answer: "wrong",
      hint: "Глаза — это то, что у тебя есть: ho.",
      explain: "Правильно: Ho gli occhi azzurri."
    },
    {
      type: "dialog-choice",
      question: "Выбери ответ",
      dialog: [
        { who: "Anna", text: "Com'è il tuo amico?" }
      ],
      options: [
        "È simpatico.",
        "Ha fame.",
        "Va a scuola.",
        "Costa dieci euro."
      ],
      answer: "È simpatico.",
      hint: "Вопрос Com'è? спрашивает, какой человек.",
      explain: "È simpatico — он славный."
    },
    {
      type: "match",
      question: "Соедини прилагательное и перевод",
      pairs: [
        { left: "gentile", right: "добрый" },
        { left: "antipatico", right: "неприятный" },
        { left: "divertente", right: "весёлый" },
        { left: "noioso", right: "скучный" },
        { left: "timido", right: "застенчивый" }
      ],
      explain: "Эти слова нужны для оценки людей.",
      explainWrong: "Неверная пара. Gentile = добрый, antipatico = неприятный, divertente = весёлый, noioso = скучный, timido = застенчивый."
    },
    {
      type: "fill",
      question: "Напиши «У него короткие волосы»",
      answer: "Ha i capelli corti",
      accept: [
        "Ha i capelli corti",
        "ha i capelli corti",
        "Lui ha i capelli corti",
        "lui ha i capelli corti"
      ],
      placeholder: "Напиши по-итальянски",
      hint: "Волосы — ha i capelli...",
      explain: "Ha i capelli corti — у него короткие волосы."
    },
    {
      type: "build",
      question: "Собери фразу: «Она умная и добрая»",
      words: ["È", "intelligente", "e", "gentile"],
      answer: "È intelligente e gentile",
      hint: "Intelligente e gentile не меняются по роду в единственном числе.",
      explain: "È intelligente e gentile — она умная и добрая."
    },
    {
      type: "choice",
      question: "Как сказать «Мне не нравится»?",
      options: ["Non mi piace.", "Mi piace non.", "No mi piace.", "Non piace me."],
      answer: "Non mi piace.",
      hint: "Non ставится перед mi piace.",
      explain: "Non mi piace — мне не нравится."
    },
    {
      type: "error-choice",
      question: "Найди ошибку",
      tokens: [
        { text: "La", id: "0" },
        { text: "mia", id: "1" },
        { text: "amica", id: "2" },
        { text: "è", id: "3" },
        { text: "simpatico", id: "wrong" }
      ],
      answer: "wrong",
      hint: "Amica — женский род, поэтому simpatica.",
      explain: "Правильно: La mia amica è simpatica."
    },
    {
      type: "table",
      question: "Заполни отрицание",
      headers: ["Утверждение", "Отрицание"],
      rows: [
        ["È alto.", "Non è alto."],
        ["È gentile.", ""]
      ],
      targetRow: 1,
      targetColumn: 1,
      options: ["Non è gentile.", "È non gentile.", "No è gentile.", "Non gentile."],
      answer: "Non è gentile.",
      hint: "Non ставится перед è.",
      explain: "Non è gentile — он/она не добрый / недобрая."
    },
    {
      type: "dialog-choice",
      question: "Выбери ответ",
      dialog: [
        { who: "Anna", text: "Ti piace Marco?" }
      ],
      options: [
        "Sì, è molto simpatico.",
        "Sì, ha Marco.",
        "Sì, è Marco.",
        "Sì, mi chiamo Marco."
      ],
      answer: "Sì, è molto simpatico.",
      hint: "Нужна оценка человека.",
      explain: "Sì, è molto simpatico — Да, он очень славный."
    }
  ]
};
