window.LESSONS = window.LESSONS || {};

window.LESSONS["a0-u4-l1"] = {
  id: "a0-u4-l1",
  title: "Цвета, внешность и описание людей",
  level: "A0",
  xp: 30,
  theory: [
    {
      title: "Цвета согласуются, как прилагательные",
      summary: "Большинство цветов меняется по роду и числу. Но есть два важных цвета-исключения: verde и blu.",
      rule: [
        "rosso / rossa / rossi / rosse — красный, красная, красные",
        "nero / nera / neri / nere — чёрный, чёрная, чёрные",
        "bianco / bianca / bianchi / bianche — белый, белая, белые",
        "giallo / gialla / gialli / gialle — жёлтый, жёлтая, жёлтые",
        "verde / verdi — зелёный, зелёные; в единственном числе не меняется по роду",
        "blu — синий, голубой; не меняется ни по роду, ни по числу"
      ],
      table: {
        headers: ["Цвет", "муж. ед.", "жен. ед.", "муж. мн.", "жен. мн."],
        rows: [
          ["красный", "rosso", "rossa", "rossi", "rosse"],
          ["чёрный", "nero", "nera", "neri", "nere"],
          ["белый", "bianco", "bianca", "bianchi", "bianche"],
          ["зелёный", "verde", "verde", "verdi", "verdi"],
          ["синий/голубой", "blu", "blu", "blu", "blu"]
        ]
      },
      tips: [
        "Секрет про blu: это одно из самых удобных слов. Не нужно думать: il cielo blu, gli occhi blu, le macchine blu. Форма всегда одна.",
        "Цвет обычно ставится после существительного: la macchina rossa, gli occhi verdi, i capelli neri."
      ],
      mistakes: [
        "Не говори la macchina rosso. Правильно: la macchina rossa.",
        "Не изменяй blu: не бывает blua, blui, blue.",
        "Не переводи «у меня зелёные глаза» как sono gli occhi verdi. Правильно: ho gli occhi verdi."
      ],
      examples: [
        { it: "la macchina rossa", ru: "красная машина" },
        { it: "gli occhi verdi", ru: "зелёные глаза" },
        { it: "i capelli neri", ru: "чёрные волосы" },
        { it: "il cielo blu", ru: "голубое небо" },
        { it: "le scarpe bianche", ru: "белые туфли" }
      ]
    },
    {
      title: "Внешность: рост, волосы, глаза, возраст",
      summary: "Чтобы описать человека, итальянцы часто используют avere: ho gli occhi..., ho i capelli..., ho vent'anni. И essere для роста и возраста-характеристик: è alto, è giovane.",
      rule: [
        "Ho gli occhi verdi. — У меня зелёные глаза.",
        "Ho i capelli neri. — У меня чёрные волосы.",
        "Ho i capelli corti. — У меня короткие волосы.",
        "Ho i capelli lunghi. — У меня длинные волосы.",
        "È alto. — Он высокий.",
        "È bassa. — Она низкая.",
        "È giovane. — Он/она молодой/молодая.",
        "È vecchio / è vecchia. — Он старый / она старая."
      ],
      table: {
        headers: ["Признак", "муж. ед.", "жен. ед.", "муж. мн.", "жен. мн."],
        rows: [
          ["высокий", "alto", "alta", "alti", "alte"],
          ["низкий", "basso", "bassa", "bassi", "basse"],
          ["молодой", "giovane", "giovane", "giovani", "giovani"],
          ["короткий", "corto", "corta", "corti", "corte"],
          ["длинный", "lungo", "lunga", "lunghi", "lunghe"]
        ]
      },
      tips: [
        "Главный секрет: глаза и волосы — это то, что у тебя есть, поэтому ho. Не sono i capelli neri, а ho i capelli neri.",
        "Слова на -e, как giovane, в единственном числе не меняются по роду: è giovane — и он, и она. Во множественном числе: sono giovani."
      ],
      mistakes: [
        "Не говори Sono gli occhi azzurri. Правильно: Ho gli occhi azzurri.",
        "Не путай è alta и ho alta. Про рост говорят è alta, про глаза и волосы — ho.",
        "Не используй vecchio для людей слишком грубо без контекста. È vecchio — он старый, но в разговоре иногда мягче сказать è anziano."
      ],
      examples: [
        { it: "Ho gli occhi azzurri.", ru: "У меня голубые глаза." },
        { it: "Ha i capelli corti.", ru: "У него/неё короткие волосы." },
        { it: "È molto alto.", ru: "Он очень высокий." },
        { it: "Sono giovani.", ru: "Они молодые." }
      ],
      dialog: [
        { who: "Luca", text: "Com'è Maria?", ru: "Какая Мария?" },
        { who: "Anna", text: "È alta e ha i capelli neri.", ru: "Она высокая и у неё чёрные волосы." },
        { who: "Luca", text: "E ha gli occhi verdi?", ru: "А у неё зелёные глаза?" },
        { who: "Anna", text: "Sì, ha gli occhi verdi.", ru: "Да, у неё зелёные глаза." }
      ]
    }
  ],
  exercises: [
    {
      type: "gap",
      question: "Выбери правильный цвет",
      sentence: "La macchina è ___.",
      options: ["rosso", "rossa", "rossi", "rosse"],
      answer: "rossa",
      hint: "Macchina женского рода, поэтому rossa.",
      explain: "La macchina è rossa — машина красная."
    },
    {
      type: "choice",
      question: "Как сказать «У меня зелёные глаза»?",
      options: ["Sono gli occhi verdi", "Ho gli occhi verdi", "Ho l'occhi verdi", "Sono verdi gli occhi"],
      answer: "Ho gli occhi verdi",
      hint: "Глаза — это то, что у тебя есть: ho.",
      explain: "Ho gli occhi verdi — у меня зелёные глаза."
    },
    {
      type: "table",
      question: "Заполни множественное число",
      headers: ["Единственное число", "Множественное число"],
      rows: [
        ["occhio verde", "occhi verdi"],
        ["capello nero", ""]
      ],
      targetRow: 1,
      targetColumn: 1,
      options: ["capelli neri", "capelli nera", "capello neri", "capelli nere"],
      answer: "capelli neri",
      hint: "Capelli — мужской род множественного числа, поэтому neri.",
      explain: "capelli neri — чёрные волосы."
    },
    {
      type: "match",
      question: "Соедини фразу и перевод",
      pairs: [
        { left: "ho gli occhi blu", right: "у меня голубые глаза" },
        { left: "ho i capelli corti", right: "у меня короткие волосы" },
        { left: "è alta", right: "она высокая" },
        { left: "è basso", right: "он низкий" },
        { left: "sono giovani", right: "они молодые" }
      ],
      explain: "Глаза и волосы — через ho, рост и возраст — через essere."
    },
    {
      type: "fill",
      question: "Напиши: «У меня чёрные волосы»",
      answer: "Ho i capelli neri",
      accept: [
        "Ho i capelli neri",
        "ho i capelli neri",
        "Io ho i capelli neri",
        "io ho i capelli neri"
      ],
      placeholder: "Напиши по-итальянски",
      hint: "Ho + i capelli + neri.",
      explain: "Ho i capelli neri — у меня чёрные волосы."
    },
    {
      type: "choice",
      question: "Какой цвет не меняется по роду и числу?",
      options: ["rosso", "bianco", "blu", "nero"],
      answer: "blu",
      hint: "Это удобное исключение.",
      explain: "blu не меняется: il cielo blu, gli occhi blu, le macchine blu."
    },
    {
      type: "gap",
      question: "Вставь правильную форму",
      sentence: "Le scarpe sono ___.",
      options: ["bianco", "bianca", "bianchi", "bianche"],
      answer: "bianche",
      hint: "Scarpe — женский род множественного числа.",
      explain: "Le scarpe sono bianche — туфли белые."
    },
    {
      type: "build",
      question: "Собери фразу: «Он высокий»",
      words: ["È", "alto"],
      answer: "È alto",
      hint: "Про рост используем essere: è.",
      explain: "È alto — он высокий."
    },
    {
      type: "table",
      question: "Выбери форму для слова occhi",
      headers: ["Существительное", "Прилагательное"],
      rows: [
        ["l'occhio", "verde"],
        ["gli occhi", ""]
      ],
      targetRow: 1,
      targetColumn: 1,
      options: ["verde", "verdi", "verda", "verdes"],
      answer: "verdi",
      hint: "Множественное число от verde — verdi.",
      explain: "gli occhi verdi — зелёные глаза."
    }
  ]
};
