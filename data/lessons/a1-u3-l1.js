window.LESSONS = window.LESSONS || {};

window.LESSONS["a1-u3-l1"] = {
  id: "a1-u3-l1",
  title: "Притяжательные прилагательные: mio, tuo, suo...",
  level: "A1",
  xp: 35,
  theory: [
    {
      title: "Притяжательное согласуется с вещью, а не с владельцем",
      summary: "Главный секрет: mio/tuo/suo меняются по роду и числу того предмета, которым владеют. Не важно, мужчина говорит или женщина: важна вещь.",
      rule: [
        "mio / mia / miei / mie — мой / моя / мои / мои",
        "tuo / tua / tuoi / tue — твой / твоя / твои / твои",
        "suo / sua / suoi / sue — его / её / свой",
        "nostro / nostra / nostri / nostre — наш / наша / наши",
        "vostro / vostra / vostri / vostre — ваш / ваша / ваши",
        "loro — их; форма не меняется, но обычно требует артикля: il loro libro, la loro casa, i loro amici, le loro amiche."
      ],
      table: {
        headers: ["Лицо", "муж. ед.", "жен. ед.", "муж. мн.", "жен. мн."],
        rows: [
          ["io", "mio", "mia", "miei", "mie"],
          ["tu", "tuo", "tua", "tuoi", "tue"],
          ["lui / lei", "suo", "sua", "suoi", "sue"],
          ["noi", "nostro", "nostra", "nostri", "nostre"],
          ["voi", "vostro", "vostra", "vostri", "vostre"],
          ["loro", "loro", "loro", "loro", "loro"]
        ]
      },
      tips: [
        "Секрет: смотри на существительное. Casa — женский род, поэтому la mia casa. Libro — мужской род, поэтому il mio libro.",
        "Форма loro удобна тем, что не меняется: il loro fratello, la loro sorella, i loro libri, le loro case."
      ],
      mistakes: [
        "Не говори mio sorella. Sorella женского рода: mia sorella.",
        "Не говори mia fratello. Fratello мужского рода: mio fratello.",
        "Не переводи механически с русского. В итальянском окончание зависит от предмета, а не от пола владельца."
      ],
      examples: [
        { it: "il mio libro", ru: "моя книга", note: "libro мужского рода" },
        { it: "la mia casa", ru: "мой дом", note: "casa женского рода" },
        { it: "i miei amici", ru: "мои друзья" },
        { it: "le mie amiche", ru: "мои подруги" },
        { it: "il loro fratello", ru: "их брат" },
        { it: "la loro sorella", ru: "их сестра" }
      ]
    },
    {
      title: "Семья: единственное число без артикля",
      summary: "С членами семьи в единственном числе итальянцы часто опускают артикль: mio fratello, mia madre. Но во множественном числе артикль нужен: i miei genitori.",
      rule: [
        "mio fratello — мой брат",
        "mia sorella — моя сестра",
        "mio padre — мой отец",
        "mia madre — моя мать",
        "mio figlio — мой сын",
        "mia figlia — моя дочь",
        "i miei genitori — мои родители",
        "le mie sorelle — мои сёстры"
      ],
      table: {
        headers: ["Единственное число", "Множественное число"],
        rows: [
          ["mio fratello", "i miei fratelli"],
          ["mia sorella", "le mie sorelle"],
          ["mio padre", "i miei padri"],
          ["mia madre", "le mie madri"],
          ["mio figlio", "i miei figli"],
          ["mia figlia", "le mie figlie"]
        ]
      },
      tips: [
        "Секрет: одиночный член семьи в единственном числе — без артикля: mio fratello. Но если есть уточнение или прилагательное, артикль возвращается: il mio fratello maggiore — мой старший брат.",
        "Слово genitori во множественном числе, поэтому всегда нужно i miei genitori, а не mio genitori."
      ],
      mistakes: [
        "Не говори la mio fratello. Правильно: mio fratello.",
        "Не говори mio genitori. Правильно: i miei genitori.",
        "Не путай: mia sorella — моя сестра, le mie sorelle — мои сёстры."
      ],
      examples: [
        { it: "Mio fratello è alto.", ru: "Мой брат высокий." },
        { it: "Mia sorella è simpatica.", ru: "Моя сестра славная." },
        { it: "I miei genitori sono a Roma.", ru: "Мои родители в Риме." },
        { it: "Le mie amiche sono italiane.", ru: "Мои подруги итальянки." }
      ],
      dialog: [
        { who: "Anna", text: "Questa è mia sorella.", ru: "Это моя сестра." },
        { who: "Marco", text: "Piacere di conoscerti!", ru: "Приятно познакомиться!" },
        { who: "Sorella", text: "Il piacere è mio.", ru: "Мне приятно." }
      ]
    }
  ],
  exercises: [
    {
      type: "choice",
      question: "Как сказать «моя сестра»?",
      options: ["mio sorella", "mia sorella", "la mio sorella", "mie sorella"],
      answer: "mia sorella",
      hint: "Sorella — женский род единственного числа.",
      explain: "mia sorella — моя сестра."
    },
    {
      type: "gap",
      question: "Выбери притяжательное",
      sentence: "___ fratello è alto.",
      options: ["Mio", "Mia", "Miei", "Mie"],
      answer: "Mio",
      hint: "Fratello — мужской род единственного числа.",
      explain: "Mio fratello è alto — мой брат высокий."
    },
    {
      type: "table",
      question: "Заполни форму",
      headers: ["Фраза", "Форма"],
      rows: [
        ["___ sorella", "tua"],
        ["___ fratello", ""]
      ],
      targetRow: 1,
      targetColumn: 1,
      options: ["tuo", "tua", "tuoi", "tue"],
      answer: "tuo",
      hint: "Fratello — мужской род единственного числа.",
      explain: "tuo fratello — твой брат."
    },
    {
      type: "match",
      question: "Соедини фразу и перевод",
      pairs: [
        { left: "mio fratello", right: "мой брат" },
        { left: "mia sorella", right: "моя сестра" },
        { left: "miei fratelli", right: "мои братья" },
        { left: "mie sorelle", right: "мои сёстры" },
        { left: "i miei genitori", right: "мои родители" }
      ],
      explain: "Притяжательное согласуется с существительным.",
      explainWrong: "Неверная пара. Помни: fratello maschile, sorella femminile, genitori plurale."
    },
    {
      type: "error-choice",
      question: "Найди ошибку",
      tokens: [
        { text: "La", id: "0" },
        { text: "mio", id: "wrong" },
        { text: "casa", id: "2" },
        { text: "è", id: "3" },
        { text: "grande", id: "4" }
      ],
      answer: "wrong",
      hint: "Casa — женский род, поэтому нужно mia.",
      explain: "Правильно: La mia casa è grande."
    },
    {
      type: "dialog-choice",
      question: "Выбери подходящую реплику",
      dialog: [
        { who: "Marco", text: "Com'è tua madre?" }
      ],
      options: [
        "È gentile.",
        "Sono gentile.",
        "Ha i capelli.",
        "Vado a casa."
      ],
      answer: "È gentile.",
      hint: "Вопрос Com'è? просит описание человека.",
      explain: "È gentile — она добрая."
    },
    {
      type: "fill",
      question: "Напиши «мой брат»",
      answer: "mio fratello",
      accept: ["mio fratello", "Mio fratello", "il mio fratello", "Il mio fratello"],
      placeholder: "Напиши по-итальянски",
      hint: "Fratello мужского рода: mio.",
      explain: "mio fratello — мой брат."
    },
    {
      type: "build",
      question: "Собери фразу: «мои родители»",
      words: ["I", "miei", "genitori"],
      answer: "I miei genitori",
      hint: "Genitori — множественное число, нужен артикль i.",
      explain: "I miei genitori — мои родители."
    },
    {
      type: "choice",
      question: "Как сказать «ваша книга» (к одному мужчине/нейтрально, мужской род)?",
      options: ["vostro libro", "vostra libro", "vostri libro", "vostre libro"],
      answer: "vostro libro",
      hint: "Libro — мужской род единственного числа.",
      explain: "il vostro libro — ваша книга."
    },
    {
      type: "table",
      question: "Заполни множественное число",
      headers: ["Единственное число", "Множественное число"],
      rows: [
        ["mia sorella", "le mie sorelle"],
        ["mio fratello", ""]
      ],
      targetRow: 1,
      targetColumn: 1,
      options: ["i miei fratelli", "le mie fratelli", "mio fratelli", "mie fratelli"],
      answer: "i miei fratelli",
      hint: "Fratelli — мужской род множественного числа: i miei.",
      explain: "mio fratello -> i miei fratelli."
    }
  ]
};
