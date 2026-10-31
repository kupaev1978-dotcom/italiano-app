window.LESSONS = window.LESSONS || {};

window.LESSONS["a1-u2-l2"] = {
  id: "a1-u2-l2",
  title: "Артикулированные предлоги: del, al, dal, nel, sul",
  level: "A1",
  xp: 40,
  theory: [
    {
      title: "Предлог и артикль склеиваются",
      summary: "Когда предлоги di, a, da, in, su встречаются с определённым артиклем, они образуют одну форму. Это не новая грамматика, а удобное слияние звуков.",
      rule: [
        "di + il = del: il copertina del libro — обложка книги.",
        "a + il = al: vado al bar — я иду в бар.",
        "da + il = dal: sono dal medico — я у врача.",
        "in + il = nel: sono nel parco — я в парке.",
        "su + il = sul: il libro è sul tavolo — книга на столе."
      ],
      table: {
        headers: ["Слияние", "Пример", "Значение"],
        rows: [
          ["del", "il nome del studente", "имя студента"],
          ["al", "vado al bar", "иду в бар"],
          ["dal", "sono dal medico", "у врача"],
          ["nel", "sono nel parco", "в парке"],
          ["sul", "è sul tavolo", "на столе"]
        ]
      },
      tips: [
        "Секрет: если после предлога идёт конкретное существительное с артиклем, почти всегда нужно слитное слово. Не a il bar, а al bar.",
        "Самые частые для A1: al bar, al ristorante, dal medico, nel centro, sul treno."
      ],
      mistakes: [
        "Не говори vado a il bar. Правильно: vado al bar.",
        "Не говори sono in il parco. Правильно: sono nel parco.",
        "Не путай dal и del: dal medico = у врача; del medico = врача / принадлежащий врачу."
      ],
      examples: [
        { it: "Vado al supermercato.", ru: "Я иду в супермаркет." },
        { it: "Sono dal dentista.", ru: "Я у стоматолога." },
        { it: "Il caffè è nel bicchiere.", ru: "Кофе в стакане." },
        { it: "La chiave è sul tavolo.", ru: "Ключ на столе." }
      ]
    },
    {
      title: "Женский род, множественное число и гласные",
      summary: "Артикулированные предлоги работают и с la, le, l'. На A1 достаточно знать несколько частых форм.",
      rule: [
        "a + la = alla: vado alla stazione.",
        "da + la = dalla: vengo dalla farmacia.",
        "in + la = nella: sono nella piazza.",
        "su + la = sulla: è sulla destra.",
        "a + l' = all': sono all'università.",
        "da + l' = dall': vengo dall'aeroporto.",
        "in + l' = nell': sono nell'hotel.",
        "su + l' = sull': sono sull'autobus."
      ],
      table: {
        headers: ["Форма", "Пример", "Перевод"],
        rows: [
          ["alla", "alla stazione", "на вокзал / к вокзалу"],
          ["dalla", "dalla farmacia", "из аптеки / у аптеки"],
          ["nella", "nella piazza", "на площади"],
          ["sulla", "sulla destra", "справа"],
          ["all'", "all'università", "в университете"],
          ["dall'", "dall'aeroporto", "из аэропорта"],
          ["nell'", "nell'hotel", "в отеле"],
          ["sull'", "sull'autobus", "в автобусе"]
        ]
      },
      tips: [
        "Секрет про l': перед гласной артикль сокращается, и предлог тоже склеивается с апострофом: all', dall', nell', sull'.",
        "Con обычно не склеивается в стандартном итальянском. Говори con il amico? Нет: con l'amico. Не col amico в нейтральной речи."
      ],
      mistakes: [
        "Не говори a la stazione. Правильно: alla stazione.",
        "Не говори in l'hotel. Правильно: nell'hotel.",
        "Не используй col, cogl и другие разговорные сокращения, пока не поймешь регистр."
      ],
      examples: [
        { it: "Vado alla fermata.", ru: "Я иду на остановку." },
        { it: "Torno dalla palestra.", ru: "Я возвращаюсь из спортзала." },
        { it: "Siamo nel centro storico.", ru: "Мы в историческом центре." },
        { it: "Il bar è sulla sinistra.", ru: "Бар слева." }
      ],
      dialog: [
        { who: "Luca", text: "Dove vai?", ru: "Куда ты идёшь?" },
        { who: "Anna", text: "Vado alla stazione.", ru: "Я иду на вокзал." },
        { who: "Luca", text: "Io sono dal medico.", ru: "Я у врача." },
        { who: "Anna", text: "Allora ci vediamo nel bar.", ru: "Тогда увидимся в баре." }
      ]
    }
  ],
  exercises: [
    {
      type: "gap",
      question: "Выбери правильную форму",
      sentence: "Vado ___ bar.",
      options: ["al", "a", "la", "del"],
      answer: "al",
      hint: "a + il = al.",
      explain: "Vado al bar — я иду в бар."
    },
    {
      type: "table",
      question: "Заполни артикулированный предлог",
      headers: ["Фраза", "Форма"],
      rows: [
        ["a + la stazione", "alla stazione"],
        ["da + il medico", ""]
      ],
      targetRow: 1,
      targetColumn: 1,
      options: ["dal medico", "del medico", "al medico", "nel medico"],
      answer: "dal medico",
      hint: "da + il = dal.",
      explain: "Sono dal medico — я у врача."
    },
    {
      type: "match",
      question: "Соедини форму и её происхождение",
      pairs: [
        { left: "del", right: "di + il" },
        { left: "al", right: "a + il" },
        { left: "dal", right: "da + il" },
        { left: "nel", right: "in + il" },
        { left: "sul", right: "su + il" }
      ],
      explain: "Это базовые слияния с мужским артиклем il.",
      explainWrong: "Неверная пара. Помни: del = di+il, al = a+il, dal = da+il, nel = in+il, sul = su+il."
    },
    {
      type: "choice",
      question: "Как сказать «Я в парке»?",
      options: ["Sono in parco.", "Sono nel parco.", "Sono al parco.", "Sono dal parco."],
      answer: "Sono nel parco.",
      hint: "in + il = nel.",
      explain: "Sono nel parco — я в парке."
    },
    {
      type: "fill",
      question: "Напиши «Она у врача»",
      answer: "È dal medico",
      accept: ["È dal medico", "è dal medico", "Lei è dal medico", "lei è dal medico"],
      placeholder: "Напиши по-итальянски",
      hint: "da + il medico = dal medico.",
      explain: "È dal medico — она у врача."
    },
    {
      type: "build",
      question: "Собери фразу: «Мы в центре»",
      words: ["Siamo", "nel", "centro"],
      answer: "Siamo nel centro",
      hint: "in + il centro = nel centro.",
      explain: "Siamo nel centro — мы в центре."
    },
    {
      type: "gap",
      question: "Выбери форму",
      sentence: "Il libro è ___ tavolo.",
      options: ["sul", "su", "al", "nel"],
      answer: "sul",
      hint: "su + il tavolo = sul tavolo.",
      explain: "Il libro è sul tavolo — книга на столе."
    },
    {
      type: "table",
      question: "Заполни форму перед гласной",
      headers: ["Фраза", "Форма"],
      rows: [
        ["a + l'università", "all'università"],
        ["da + l'aeroporto", ""]
      ],
      targetRow: 1,
      targetColumn: 1,
      options: ["dall'aeroporto", "dal aeroporto", "aeroporto", "all'aeroporto"],
      answer: "dall'aeroporto",
      hint: "da + l' = dall'.",
      explain: "Vengo dall'aeroporto — я из аэропорта."
    },
    {
      type: "match",
      question: "Соедини фразу и перевод",
      pairs: [
        { left: "Vado alla stazione.", right: "Я иду на вокзал." },
        { left: "Sono nell'hotel.", right: "Я в отеле." },
        { left: "È sulla destra.", right: "Это справа." },
        { left: "Torno dalla farmacia.", right: "Я возвращаюсь из аптеки." },
        { left: "Il treno è sul binario.", right: "Поезд на платформе." }
      ],
      explain: "Артикулированные предлоги делают речь естественной.",
      explainWrong: "Неверная пара. Вспомни: alla = a+la, nell' = in+l', sulla = su+la, dalla = da+la, sul = su+il."
    },
    {
      type: "choice",
      question: "Какая фраза неверная?",
      options: ["Vado al bar.", "Sono nel parco.", "Abito a la piazza.", "È sul tavolo."],
      answer: "Abito a la piazza.",
      hint: "a + la должно склеиться в alla.",
      explain: "Правильно: Abito alla piazza / in piazza, но не a la piazza."
    }
  ]
};
