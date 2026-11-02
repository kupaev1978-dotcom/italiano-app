window.LESSONS = window.LESSONS || {};

window.LESSONS["a1-u7-l1"] = {
  id: "a1-u7-l1",
  title: "Futuro semplice: andrò, farò, vedrò",
  level: "A1",
  xp: 40,
  theory: [
    {
      title: "Futuro semplice: как говорить о будущем",
      summary: "В итальянском будущее время образуется от инфинитива. У правильных глаголов убираем -are, -ere, -ire и добавляем будущие окончания. Но самые важные глаголы часто неправильные.",
      rule: [
        "Правильные глаголы на -ARE: parlerò, parlerai, parlerà, parleremo, parlerete, parleranno.",
        "Правильные глаголы на -ERE: scriverò, scriverai, scriverà, scriveremo, scriverete, scriveranno.",
        "Правильные глаголы на -IRE: dormirò, dormirai, dormirà, dormiremo, dormirete, dormiranno.",
        "Будущие окончания: -ò, -ai, -à, -emo, -ete, -anno.",
        "Andare -> andrò, andrai, andrà, andremo, andrete, andranno.",
        "Fare -> farò, farai, farà, faremo, farete, faranno.",
        "Vedere -> vedrò, vedrai, vedrà, vedremo, vedrete, vedranno."
      ],
      table: {
        headers: ["Лицо", "parlare", "andare", "fare", "vedere"],
        rows: [
          ["io", "parlerò", "andrò", "farò", "vedrò"],
          ["tu", "parlerai", "andrai", "farai", "vedrai"],
          ["lui / lei", "parlerà", "andrà", "farà", "vedrà"],
          ["noi", "parleremo", "andremo", "faremo", "vedremo"],
          ["voi", "parlerete", "andrete", "farete", "vedrete"],
          ["loro", "parleranno", "andranno", "faranno", "vedranno"]
        ]
      },
      tips: [
        "Секрет: будущие окончания почти одинаковые для всех: -ò, -ai, -à, -emo, -ete, -anno. Разница часто в основе глагола.",
        "Запомни три главных неправильных глагола будущего: andrò, farò, vedrò. Они нужны очень часто."
      ],
      mistakes: [
        "Не говори *io andaro. Правильно: io andrò.",
        "Не говори *io faro. Правильно: io farò.",
        "Не говори *io vedero. Правильно: io vedrò."
      ],
      examples: [
        { it: "Domani andrò a Roma.", ru: "Завтра я поеду в Рим." },
        { it: "Stasera farò colazione alle otto.", ru: "Сегодня вечером я позавтракаю в восемь." },
        { it: "Lunedì vedrò i miei amici.", ru: "В понедельник я увижу своих друзей." },
        { it: "Partiremo domani mattina.", ru: "Мы уедем завтра утром." }
      ]
    },
    {
      title: "Ещё важные будущие формы",
      summary: "Для планов и путешествий нужны также глаголы potere, dovere, volere, sapere, avere, essere.",
      rule: [
        "potere -> potrò, potrai, potrà, potremo, potrete, potranno.",
        "dovere -> dovrò, dovrai, dovrà, dovremo, dovrete, dovranno.",
        "volere -> vorrò, vorrai, vorrà, vorremo, vorrete, vorranno.",
        "sapere -> saprò, saprai, saprà, sapremo, saprete, sapranno.",
        "avere -> avrò, avrai, avrà, avremo, avrete, avranno.",
        "essere -> sarò, sarai, sarà, saremo, sarete, saranno."
      ],
      table: {
        headers: ["Лицо", "potere", "dovere", "volere", "avere"],
        rows: [
          ["io", "potrò", "dovrò", "vorrò", "avrò"],
          ["tu", "potrai", "dovrai", "vorrai", "avrai"],
          ["lui / lei", "potrà", "dovrà", "vorrà", "avrà"],
          ["noi", "potremo", "dovremo", "vorremo", "avremo"],
          ["voi", "potrete", "dovrete", "vorete", "avrete"],
          ["loro", "potranno", "dovranno", "vorranno", "avranno"]
        ]
      },
      tips: [
        "Секрет: vorrò встречается реже, чем vorrei. Для вежливой просьбы лучше usare vorrei: Vorrei un caffè.",
        "Dovrai / dovrò useful for plans: Domani dovrò lavorare. — Завтра мне придётся работать."
      ],
      mistakes: [
        "Не говори *io podro. Правильно: io potrò.",
        "Не говори *io doverò. Правильно: io dovrò.",
        "Не путай vorrei и vorrò: vorrei — вежливая просьба, vorrò — простое будущее «я захочу»."
      ],
      examples: [
        { it: "Domani potrò venire con te.", ru: "Завтра я смогу пойти с тобой." },
        { it: "Stasera dovrò studiare.", ru: "Сегодня вечером мне придётся учиться." },
        { it: "L'anno prossimo avrò più tempo.", ru: "В следующем году у меня будет больше времени." },
        { it: "Sabato sarò a Milano.", ru: "В субботу я буду в Милане." }
      ],
      dialog: [
        { who: "Anna", text: "Cosa farai domani?", ru: "Что ты будешь делать завтра?" },
        { who: "Marco", text: "Andrò a Roma e vedrò il Colosseo.", ru: "Поеду в Рим и посмотрю Колизей." },
        { who: "Anna", text: "Che fortuna!", ru: "Как повезло!" }
      ]
    }
  ],
  exercises: [
    {
      type: "gap",
      question: "Вставь правильную форму",
      sentence: "Domani io ___ a Roma.",
      options: ["andrò", "andaro", "vado", "andai"],
      answer: "andrò",
      hint: "Будущее от andare для io — andrò.",
      explain: "Domani io andrò a Roma — завтра я поеду в Рим."
    },
    {
      type: "table",
      question: "Заполни форму будущего",
      headers: ["Лицо", "Форма"],
      rows: [
        ["io", "farò"],
        ["tu", ""],
        ["lui / lei", "farà"]
      ],
      targetRow: 1,
      targetColumn: 1,
      options: ["farai", "farò", "farà", "faremo"],
      answer: "farai",
      hint: "Для tu будущее окончание -ai.",
      explain: "Tu farai i compiti — ты сделаешь домашнее задание."
    },
    {
      type: "choice",
      question: "Как сказать «Мы увидим фильм»?",
      options: ["Vedremo un film.", "Vediamo un film futuro.", "Vederemo un film.", "Vedi un film."],
      answer: "Vedremo un film.",
      hint: "Noi + vedere в будущем — vedremo.",
      explain: "Vedremo un film — мы увидим фильм."
    },
    {
      type: "match",
      question: "Соедини лицо и форму глагола andare",
      pairs: [
        { left: "io", right: "andrò" },
        { left: "tu", right: "andrai" },
        { left: "lui / lei", right: "andrà" },
        { left: "noi", right: "andremo" },
        { left: "loro", right: "andranno" }
      ],
      explain: "Это базовые формы будущего от andare.",
      explainWrong: "Неверная пара. Помни: andrò, andrai, andrà, andremo, andrete, andranno."
    },
    {
      type: "error-choice",
      question: "Найди ошибку",
      tokens: [
        { text: "Io", id: "0" },
        { text: "andirò", id: "wrong" },
        { text: "a", id: "2" },
        { text: "Milano", id: "3" }
      ],
      answer: "wrong",
      hint: "Будущее от andare — andrò, без -i-.",
      explain: "Правильно: Io andrò a Milano."
    },
    {
      type: "dialog-choice",
      question: "Выбери подходящий ответ",
      dialog: [
        { who: "Anna", text: "Cosa farai stasera?" }
      ],
      options: [
        "Uscirò con gli amici.",
        "Esco perché sono amico.",
        "Ho uscito ieri.",
        "Esci tu."
      ],
      answer: "Uscirò con gli amici.",
      hint: "Вопрос в будущем: farai. Ответ тоже лучше в будущем.",
      explain: "Uscirò con gli amici — я выйду с друзьями."
    },
    {
      type: "fill",
      question: "Напиши «Завтра я пойду в кино»",
      answer: "Domani andrò al cinema",
      accept: [
        "Domani andrò al cinema",
        "domani andrò al cinema",
        "Io andrò al cinema",
        "io andrò al cinema"
      ],
      placeholder: "Напиши по-итальянски",
      hint: "Andrò + al cinema.",
      explain: "Domani andrò al cinema — завтра я пойду в кино."
    },
    {
      type: "build",
      question: "Собери фразу: «Мы уедем завтра»",
      words: ["Partiremo", "domani"],
      answer: "Partiremo domani",
      hint: "Noi + partire в будущем — partiremo.",
      explain: "Partiremo domani — мы уедем завтра."
    },
    {
      type: "table",
      question: "Заполни форму potere",
      headers: ["Лицо", "Форма"],
      rows: [
        ["io", "potrò"],
        ["tu", ""],
        ["noi", "potremo"]
      ],
      targetRow: 1,
      targetColumn: 1,
      options: ["potrai", "potrò", "potrà", "potranno"],
      answer: "potrai",
      hint: "Для tu будущее окончание -ai.",
      explain: "Tu potrai venire — ты сможешь прийти."
    },
    {
      type: "error-choice",
      question: "Найди ошибку",
      sentence: "Loro farano domani.",
      options: ["Loro", "farano", "domani"],
      answer: "farano",
      hint: "Будущее от fare для loro — faranno.",
      explain: "Правильно: Loro faranno domani."
    }
  ]
};
