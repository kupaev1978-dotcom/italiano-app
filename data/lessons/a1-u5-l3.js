window.LESSONS = window.LESSONS || {};

window.LESSONS["a1-u5-l3"] = {
  id: "a1-u5-l3",
  title: "La routine quotidiana: распоряд дня",
  level: "A1",
  xp: 40,
  theory: [
    {
      title: "Возвратные глаголы: mi sveglio, ti alzi, si veste",
      summary: "Распоряд дня часто использует возвратные глаголы: svegliarsi, alzarsi, lavarsi, vestirsi. Возвратное местоимение согласуется с подлежащим.",
      rule: [
        "io mi sveglio — я просыпаюсь",
        "tu ti svegli — ты просыпаешься",
        "lui/lei si sveglia — он/она просыпается",
        "noi ci svegliamo — мы просыпаемся",
        "voi vi svegliate — вы просыпаетесь",
        "loro si svegliano — они просыпаются"
      ],
      table: {
        headers: ["Лицо", "Местоимение", "Пример"],
        rows: [
          ["io", "mi", "Mi sveglio alle sette."],
          ["tu", "ti", "Ti alzi presto."],
          ["lui / lei", "si", "Si veste velocemente."],
          ["noi", "ci", "Ci laviamo la mattina."],
          ["voi", "vi", "Vi svegliate tardi."],
          ["loro", "si", "Si addormentano tardi."]
        ]
      },
      tips: [
        "Секрет: местоимение mi/ti/si/ci/vi/si ставится перед глаголом. Не после.",
        "Отрицание: non ставится перед местоимением и глаголом: Non mi sveglio presto. — Я не просыпаюсь рано."
      ],
      mistakes: [
        "Не говори *Io sveglio mi. Правильно: Io mi sveglio.",
        "Не говори *Lui mi sveglia, если он просыпается сам. Правильно: Lui si sveglia.",
        "Не путай ti и si: tu ti svegli, lui/lei si sveglia."
      ],
      examples: [
        { it: "Mi sveglio alle sette.", ru: "Я просыпаюсь в семь." },
        { it: "Ti alzi alle otto?", ru: "Ты встаёшь в восемь?" },
        { it: "Si lava la faccia.", ru: "Он/она умывает лицо." },
        { it: "Ci vestiamo e usciamo.", ru: "Мы одеваемся и выходим." }
      ]
    },
    {
      title: "Полезные глаголы распорядка дня",
      summary: "Эти фразы закрывают базовый день: утро, работа, обед, вечер, сон.",
      rule: [
        "svegliarsi — просыпаться",
        "alzarsi — вставать",
        "lavarsi — умываться, мыться",
        "vestirsi — одеваться",
        "fare colazione — завтракать",
        "andare al lavoro / andare a lavoro — идти на работу",
        "pranzare — обедать",
        "tornare a casa — возвращаться домой",
        "cenare — ужинать",
        "guardare la televisione — смотреть телевизор",
        "andare a dormire / andare a letto — ложиться спать"
      ],
      table: {
        headers: ["Время суток", "Действие", "Пример"],
        rows: [
          ["la mattina", "mi sveglio", "La mattina mi sveglio alle sette."],
          ["la mattina", "faccio colazione", "Faccio colazione alle otto."],
          ["il mezzogiorno", "pranzo", "Pranzo alle tredici."],
          ["la sera", "ceno", "Ceno alle venti."],
          ["la notte", "vado a dormire", "Vado a dormire a mezzanotte."]
        ]
      },
      tips: [
        "Секрет: la mattina, il pomeriggio, la sera, di notte — готовые блоки времени.",
        "Faccio colazione — без артикля. Не *faccio la colazione в базовой фразе."
      ],
      mistakes: [
        "Не говори *faccio la colazione. Лучше: Faccio colazione.",
        "Не говори *vado a dormire alle otto di mattina, если имеешь в виду вечер. Лучше: alle otto di sera.",
        "Не путай pranzo и cena: pranzo — обед, cena — ужин."
      ],
      examples: [
        { it: "La mattina faccio colazione.", ru: "Утром я завтракаю." },
        { it: "Poi vado al lavoro.", ru: "Потом я иду на работу." },
        { it: "La sera guardo la televisione.", ru: "Вечером я смотрю телевизор." },
        { it: "Alle undici vado a dormire.", ru: "В одиннадцать я ложусь спать." }
      ],
      dialog: [
        { who: "Anna", text: "Cosa fai la mattina?", ru: "Что ты делаешь утром?" },
        { who: "Marco", text: "Mi sveglio alle sette e faccio colazione.", ru: "Я просыпаюсь в семь и завтракаю." },
        { who: "Anna", text: "Poi vai al lavoro?", ru: "Потом ты идёшь на работу?" },
        { who: "Marco", text: "Sì, vado al lavoro alle nove.", ru: "Да, я иду на работу в девять." }
      ]
    }
  ],
  exercises: [
    {
      type: "gap",
      question: "Вставь местоимение",
      sentence: "Io ___ sveglio alle sette.",
      options: ["mi", "ti", "si", "ci"],
      answer: "mi",
      hint: "Для io используется mi.",
      explain: "Io mi sveglio — я просыпаюсь."
    },
    {
      type: "table",
      question: "Заполни форму",
      headers: ["Лицо", "Форма"],
      rows: [
        ["tu", "ti svegli"],
        ["lui / lei", ""],
        ["noi", "ci svegliamo"]
      ],
      targetRow: 1,
      targetColumn: 1,
      options: ["si sveglia", "mi sveglio", "ti svegli", "si svegliano"],
      answer: "si sveglia",
      hint: "Для lui/lei используется si.",
      explain: "Lui/lei si sveglia — он/она просыпается."
    },
    {
      type: "error-choice",
      question: "Найди ошибку",
      tokens: [
        { text: "Lui", id: "0" },
        { text: "mi", id: "wrong" },
        { text: "sveglia", id: "2" },
        { text: "presto", id: "3" }
      ],
      answer: "wrong",
      hint: "Для lui нужно si, не mi.",
      explain: "Правильно: Lui si sveglia presto."
    },
    {
      type: "dialog-choice",
      question: "Выбери ответ",
      dialog: [
        { who: "Anna", text: "Cosa fai la mattina?" }
      ],
      options: [
        "Mi sveglio alle sette.",
        "Vado a dormire.",
        "Ho trent'anni.",
        "Costa dieci euro."
      ],
      answer: "Mi sveglio alle sette.",
      hint: "Утром человек просыпается.",
      explain: "Mi sveglio alle sette — я просыпаюсь в семь."
    },
    {
      type: "match",
      question: "Соедини фразу и перевод",
      pairs: [
        { left: "faccio colazione", right: "завтракаю" },
        { left: "mi lavo", right: "умываюсь" },
        { left: "mi vesto", right: "одеваюсь" },
        { left: "vado al lavoro", right: "иду на работу" },
        { left: "torno a casa", right: "возвращаюсь домой" }
      ],
      explain: "Это базовые действия распорядка дня.",
      explainWrong: "Неверная пара. Colazione = завтрак, lavo = умываюсь, vesto = одеваюсь, lavoro = работа, torno = возвращаюсь."
    },
    {
      type: "fill",
      question: "Напиши «Мы встаём в восемь»",
      answer: "Ci alziamo alle otto",
      accept: [
        "Ci alziamo alle otto",
        "ci alziamo alle otto",
        "Noi ci alziamo alle otto",
        "noi ci alziamo alle otto"
      ],
      placeholder: "Напиши по-итальянски",
      hint: "Noi + alzarsi = ci alziamo.",
      explain: "Ci alziamo alle otto — мы встаём в восемь."
    },
    {
      type: "build",
      question: "Собери фразу: «Утром я завтракаю»",
      words: ["La", "mattina", "faccio", "colazione"],
      answer: "La mattina faccio colazione",
      hint: "Faccio colazione — завтракаю.",
      explain: "La mattina faccio colazione — утром я завтракаю."
    },
    {
      type: "choice",
      question: "Как сказать «Они ложатся спать в полночь»?",
      options: [
        "Vanno a dormire a mezzanotte.",
        "Vai a dormire a mezzanotte.",
        "Andiamo a dormire a mezzanotte.",
        "Vengono a dormire a mezzanotte."
      ],
      answer: "Vanno a dormire a mezzanotte.",
      hint: "Loro + andare = vanno.",
      explain: "Vanno a dormire a mezzanotte — они ложатся спать в полночь."
    },
    {
      type: "table",
      question: "Заполни действие",
      headers: ["Время суток", "Действие"],
      rows: [
        ["la mattina", "faccio colazione"],
        ["la sera", ""]
      ],
      targetRow: 1,
      targetColumn: 1,
      options: ["guardo la televisione", "faccio colazione", "vado al lavoro", "pranzo"],
      answer: "guardo la televisione",
      hint: "Вечером обычно смотрят телевизор или ужинают.",
      explain: "La sera guardo la televisione — вечером я смотрю телевизор."
    },
    {
      type: "error-choice",
      question: "Найди ошибку",
      tokens: [
        { text: "Io", id: "0" },
        { text: "sveglio", id: "1" },
        { text: "mi", id: "wrong" },
        { text: "alle", id: "3" },
        { text: "sei", id: "4" }
      ],
      answer: "wrong",
      hint: "Местоимение mi должно стоять перед глаголом.",
      explain: "Правильно: Io mi sveglio alle sei."
    }
  ]
};
