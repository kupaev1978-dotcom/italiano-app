window.LESSONS = window.LESSONS || {};

window.LESSONS["a1-u5-l5"] = {
  id: "a1-u5-l5",
  title: "Preposizioni di tempo: a, in, di, alle, da...a",
  level: "A1",
  xp: 40,
  theory: [
    {
      title: "Главные предлоги времени",
      summary: "Для времени нужны маленькие слова: a, in, di, alle, da...a, per, tra. Их лучше учить готовыми парами: a maggio, in estate, di sera, alle otto.",
      rule: [
        "a + месяц: a maggio, a settembre.",
        "in + сезон: in estate, in inverno.",
        "di + часть дня: di mattina, di sera, di notte.",
        "alle + часы: alle otto, alle tredici.",
        "da...a + диапазон: dal lunedì al venerdì, dalle nove alle cinque.",
        "per + длительность: per due ore, per un anno.",
        "tra / fra + через некоторое время: tra un'ora, fra due giorni."
      ],
      table: {
        headers: ["Предлог", "Когда использовать", "Пример"],
        rows: [
          ["a", "месяцы", "Parto a giugno."],
          ["in", "сезоны", "Vado al mare in estate."],
          ["di", "части дня", "Studio di sera."],
          ["alle", "часы", "Ci vediamo alle otto."],
          ["da...a", "диапазон", "Lavoro dal lunedì al venerdì."],
          ["tra", "через", "Torno tra un'ora."]
        ]
      },
      tips: [
        "Секрет: alle = a + le. Поэтому alle otto, alle nove, alle tredici.",
        "С днями недели предлог обычно не нужен: Lunedì lavoro. Для регулярности: Il lunedì lavoro."
      ],
      mistakes: [
        "Не говори *in otto. Правильно: alle otto.",
        "Не говори *a mattina. Лучше: di mattina или la mattina.",
        "Не говори *In lunedì. Правильно: Lunedì или Il lunedì."
      ],
      examples: [
        { it: "A settembre inizio il corso.", ru: "В сентябре я начинаю курс." },
        { it: "In inverno fa freddo.", ru: "Зимой холодно." },
        { it: "Di sera guardo la televisione.", ru: "Вечером я смотрю телевизор." },
        { it: "Alle otto faccio colazione.", ru: "В восемь я завтракаю." },
        { it: "Dal lunedì al venerdì sono occupato.", ru: "С понедельника по пятницу я занят." }
      ]
    },
    {
      title: "La mattina, il pomeriggio, la sera, di notte",
      summary: "Части дня часто используются без предлога или с di. Для базового уровня запомни готовые блоки.",
      rule: [
        "la mattina — утром",
        "il mattino — утро, более литературно",
        "il pomeriggio — днём, после обеда",
        "la sera — вечером",
        "di notte — ночью",
        "a mezzogiorno — в полдень",
        "a mezzanotte — в полночь"
      ],
      table: {
        headers: ["Время", "Фраза", "Значение"],
        rows: [
          ["la mattina", "La mattina mi sveglio.", "Утром я просыпаюсь."],
          ["il pomeriggio", "Il pomeriggio studio.", "Днём я учусь."],
          ["la sera", "La sera ceno.", "Вечером я ужинаю."],
          ["di notte", "Di notte dormo.", "Ночью я сплю."],
          ["a mezzogiorno", "A mezzogiorno pranzo.", "В полдень я обедаю."]
        ]
      },
      tips: [
        "Секрет: la mattina / la sera часто используются без предлога: La mattina lavoro.",
        "Di notte — устойчивое выражение: ночью."
      ],
      mistakes: [
        "Не говори *in mattina. Правильно: la mattina или di mattina.",
        "Не говори *a notte. Правильно: di notte.",
        "Не путай pomeriggio и sera: pomeriggio — после обеда до вечера, sera — вечер."
      ],
      examples: [
        { it: "La mattina bevo caffè.", ru: "Утром я пью кофе." },
        { it: "Il pomeriggio faccio una pausa.", ru: "Днём я делаю перерыв." },
        { it: "La sera esco con amici.", ru: "Вечером я выхожу с друзьями." },
        { it: "Di notte dormo otto ore.", ru: "Ночью я сплю восемь часов." }
      ],
      dialog: [
        { who: "Anna", text: "Quando studi?", ru: "Когда ты учишься?" },
        { who: "Marco", text: "Di solito studio la sera.", ru: "Обычно я учусь вечером." },
        { who: "Anna", text: "Anch'io. La mattina non riesco.", ru: "Я тоже. Утром не получается." }
      ]
    }
  ],
  exercises: [
    {
      type: "gap",
      question: "Вставь предлог",
      sentence: "Ci vediamo ___ tre.",
      options: ["alle", "a", "in", "di"],
      answer: "alle",
      hint: "С часами используется alle.",
      explain: "Ci vediamo alle tre — встречаемся в три."
    },
    {
      type: "table",
      question: "Заполни фразу",
      headers: ["Ситуация", "Фраза"],
      rows: [
        ["летом", "in estate"],
        ["в понедельник", ""]
      ],
      targetRow: 1,
      targetColumn: 1,
      options: ["lunedì", "in lunedì", "a lunedì", "di lunedì"],
      answer: "lunedì",
      hint: "С днями недели предлог обычно не нужен.",
      explain: "lunedì — в понедельник."
    },
    {
      type: "error-choice",
      question: "Найди ошибку",
      tokens: [
        { text: "Vado", id: "0" },
        { text: "a", id: "1" },
        { text: "lavoro", id: "2" },
        { text: "in", id: "wrong" },
        { text: "otto", id: "4" }
      ],
      answer: "wrong",
      hint: "С часами нужно alle.",
      explain: "Правильно: Vado a lavoro alle otto. Или лучше: Vado al lavoro alle otto."
    },
    {
      type: "dialog-choice",
      question: "Выбери ответ",
      dialog: [
        { who: "Anna", text: "Quando torni a casa?" }
      ],
      options: [
        "Tra un'ora.",
        "A casa.",
        "Al binario tre.",
        "Sì, certo."
      ],
      answer: "Tra un'ora.",
      hint: "Когда спрашивают «когда вернёшься?», можно ответить «через час».",
      explain: "Tra un'ora — через час."
    },
    {
      type: "match",
      question: "Соедини предлог и использование",
      pairs: [
        { left: "a", right: "с месяцами" },
        { left: "in", right: "с сезонами" },
        { left: "di", right: "с частью дня" },
        { left: "alle", right: "с часами" },
        { left: "da...a", right: "с диапазоном времени" }
      ],
      explain: "Это базовая логика предлогов времени.",
      explainWrong: "Неверная пара. a maggio, in estate, di sera, alle otto, dal lunedì al venerdì."
    },
    {
      type: "fill",
      question: "Напиши «С понедельника по пятницу»",
      answer: "Dal lunedì al venerdì",
      accept: [
        "Dal lunedì al venerdì",
        "dal lunedì al venerdì",
        "Dal lunedì al venerdì."
      ],
      placeholder: "Напиши по-итальянски",
      hint: "da + il lunedì = dal lunedì; a + il venerdì = al venerdì.",
      explain: "Dal lunedì al venerdì — с понедельника по пятницу."
    },
    {
      type: "build",
      question: "Собери фразу: «Вечером я смотрю телевизор»",
      words: ["La", "sera", "guardo", "la", "televisione"],
      answer: "La sera guardo la televisione",
      hint: "La sera = вечером.",
      explain: "La sera guardo la televisione — вечером я смотрю телевизор."
    },
    {
      type: "choice",
      question: "Как сказать «Я работаю по утрам»?",
      options: ["La mattina lavoro.", "In mattina lavoro.", "A mattina lavoro.", "Il mattina lavoro."],
      answer: "La mattina lavoro.",
      hint: "La mattina — утром.",
      explain: "La mattina lavoro — по утрам я работаю."
    },
    {
      type: "table",
      question: "Заполни фразу",
      headers: ["Значение", "Фраза"],
      rows: [
        ["с 9 до 5", "dalle nove alle cinque"],
        ["через час", ""]
      ],
      targetRow: 1,
      targetColumn: 1,
      options: ["tra un'ora", "per un'ora", "a un'ora", "in un'ora"],
      answer: "tra un'ora",
      hint: "Tra используется для «через».",
      explain: "tra un'ora — через час."
    },
    {
      type: "error-choice",
      question: "Найди ошибку",
      tokens: [
        { text: "Vado", id: "0" },
        { text: "a", id: "1" },
        { text: "scuola", id: "2" },
        { text: "in", id: "wrong" },
        { text: "mattina", id: "4" }
      ],
      answer: "wrong",
      hint: "С утром используют la mattina или di mattina.",
      explain: "Правильно: Vado a scuola la mattina. Или: Vado a scuola di mattina."
    }
  ]
};
