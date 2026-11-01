window.LESSONS = window.LESSONS || {};

window.LESSONS["a1-u3-l2"] = {
  id: "a1-u3-l2",
  title: "Семья и отношения",
  level: "A1",
  xp: 35,
  theory: [
    {
      title: "Расширенная семья и отношения",
      summary: "На A1 нужно уметь рассказать не только о родителях и братьях, но и о бабушках, дедушках, дядях, тётях, кузенах, муже, жене, парне и девушке.",
      rule: [
        "i genitori — родители",
        "il figlio / la figlia — сын / дочь",
        "i figli — дети",
        "il nonno / la nonna — дедушка / бабушка",
        "i nonni — бабушка и дедушка / дедушки и бабушки",
        "lo zio / la zia — дядя / тётя",
        "il cugino / la cugina — кузен / кузина, двоюродный брат / двоюродная сестра",
        "il marito / la moglie — муж / жена",
        "il fidanzato / la fidanzata — парень / девушка, жених / невеста",
        "il compagno / la compagna — партнёр / партнёрша, спутник / спутница"
      ],
      table: {
        headers: ["Мужской род", "Женский род", "Значение"],
        rows: [
          ["il fratello", "la sorella", "брат / сестра"],
          ["il figlio", "la figlia", "сын / дочь"],
          ["il nonno", "la nonna", "дедушка / бабушка"],
          ["lo zio", "la zia", "дядя / тётя"],
          ["il cugino", "la cugina", "кузен / кузина"],
          ["il marito", "la moglie", "муж / жена"],
          ["il fidanzato", "la fidanzata", "парень / девушка"]
        ]
      },
      tips: [
        "Секрет про nipote: слово nipote может значить и «внук», и «племянник». Итальянцы понимают по контексту: il nipote di mia madre — племянник моей мамы; il nipote di mia nonna — внук моей бабушки.",
        "Fidanzato/a — очень частое слово. Может значить и «парень/девушка», и «жених/невеста»."
      ],
      mistakes: [
        "Не говори il madre. Madre женского рода: la madre.",
        "Не говори la padre. Padre мужского рода: il padre.",
        "Не переводи «жена» как moglie для мужчины. Moglie — жена; marito — муж."
      ],
      examples: [
        { it: "Ho un fratello e una sorella.", ru: "У меня есть брат и сестра." },
        { it: "I miei nonni sono a Milano.", ru: "Мои бабушка и дедушка в Милане." },
        { it: "Mia zia è simpatica.", ru: "Моя тётя славная." },
        { it: "Il marito di Anna è Marco.", ru: "Муж Анны — Марко." }
      ]
    },
    {
      title: "Как говорить о семье: ho, è, sono",
      summary: "Про наличие членов семьи говорят через avere: ho un fratello. Про качества и состояние — через essere: è gentile, sono a casa.",
      rule: [
        "Ho un fratello. — У меня есть брат.",
        "Ho due sorelle. — У меня две сестры.",
        "Non ho fratelli. — У меня нет братьев и сестёр.",
        "Mia madre è italiana. — Моя мама итальянка.",
        "I miei genitori sono a Roma. — Мои родители в Риме.",
        "Sono sposato. — Я женат. / Sono sposata. — Я замужем.",
        "Il mio fidanzato si chiama Luca. — Моего парня зовут Лука."
      ],
      table: {
        headers: ["Фраза", "Значение"],
        rows: [
          ["Ho un fratello.", "У меня есть брат."],
          ["Ho due sorelle.", "У меня две сестры."],
          ["Mia madre è gentile.", "Моя мама добрая."],
          ["I miei nonni sono a casa.", "Мои бабушка и дедушка дома."],
          ["Sono sposato.", "Я женат."],
          ["Sono sposata.", "Я замужем."]
        ]
      },
      tips: [
        "Секрет: «у меня есть брат» — это не sono fratello, а ho un fratello. Ты имеешь брата.",
        "Про семейное положение: sono sposato/a. Окончание зависит от пола говорящего: мужчина — sposato, женщина — sposata."
      ],
      mistakes: [
        "Не говори Sono un fratello, если хочешь сказать «у меня есть брат». Правильно: Ho un fratello.",
        "Не говори Mio genitori. Правильно: I miei genitori.",
        "Не забывай множественное число: sorella -> sorelle, fratello -> fratelli."
      ],
      examples: [
        { it: "La mia famiglia è piccola.", ru: "Моя семья маленькая." },
        { it: "Ho molti cugini.", ru: "У меня много кузенов и кузин." },
        { it: "Mia moglie è dottoressa.", ru: "Моя жена врач." },
        { it: "Mio marito è cuoco.", ru: "Мой муж повар." }
      ],
      dialog: [
        { who: "Anna", text: "Hai fratelli?", ru: "У тебя есть братья?" },
        { who: "Marco", text: "Sì, ho un fratello e una sorella.", ru: "Да, у меня есть брат и сестра." },
        { who: "Anna", text: "Come si chiamano?", ru: "Как их зовут?" },
        { who: "Marco", text: "Si chiamano Luca e Giulia.", ru: "Их зовут Лука и Джулия." }
      ]
    }
  ],
  exercises: [
    {
      type: "match",
      question: "Соедини слово и перевод",
      pairs: [
        { left: "la sorella", right: "сестра" },
        { left: "il fratello", right: "брат" },
        { left: "la nonna", right: "бабушка" },
        { left: "il figlio", right: "сын" },
        { left: "la moglie", right: "жена" }
      ],
      explain: "Эти слова нужны для рассказа о семье.",
      explainWrong: "Неверная пара. Sorella = сестра, fratello = брат, nonna = бабушка, figlio = сын, moglie = жена."
    },
    {
      type: "gap",
      question: "Вставь множественное число",
      sentence: "Ho due ___.",
      options: ["sorelle", "sorella", "fratelli", "fratello"],
      answer: "sorelle",
      hint: "Две сестры: sorella -> sorelle.",
      explain: "Ho due sorelle — у меня две сестры."
    },
    {
      type: "table",
      question: "Заполни множественное число",
      headers: ["Единственное число", "Множественное число"],
      rows: [
        ["fratello", "fratelli"],
        ["sorella", ""]
      ],
      targetRow: 1,
      targetColumn: 1,
      options: ["sorelle", "sorelli", "sorelas", "sorellae"],
      answer: "sorelle",
      hint: "Женский род на -a даёт -e во множественном числе.",
      explain: "sorella -> sorelle."
    },
    {
      type: "dialog-choice",
      question: "Выбери подходящую реплику",
      dialog: [
        { who: "Marco", text: "Questa è mia moglie." }
      ],
      options: [
        "Piacere di conoscerLa.",
        "Buonanotte.",
        "Quanto costa?",
        "Vado a casa."
      ],
      answer: "Piacere di conoscerLa.",
      hint: "Когда представляют женщину вежливо, можно сказать Piacere di conoscerLa.",
      explain: "Piacere di conoscerLa — приятно познакомиться."
    },
    {
      type: "error-choice",
      question: "Найди ошибку",
      tokens: [
        { text: "Mio", id: "wrong" },
        { text: "genitori", id: "1" },
        { text: "sono", id: "2" },
        { text: "a", id: "3" },
        { text: "casa", id: "4" }
      ],
      answer: "wrong",
      hint: "Genitori — множественное число, нужно I miei.",
      explain: "Правильно: I miei genitori sono a casa."
    },
    {
      type: "fill",
      question: "Напиши «У меня есть брат»",
      answer: "Ho un fratello",
      accept: ["Ho un fratello", "ho un fratello", "Io ho un fratello", "io ho un fratello"],
      placeholder: "Напиши по-итальянски",
      hint: "Использовать avere: ho.",
      explain: "Ho un fratello — у меня есть брат."
    },
    {
      type: "build",
      question: "Собери фразу: «Моя мама итальянка»",
      words: ["Mia", "madre", "è", "italiana"],
      answer: "Mia madre è italiana",
      hint: "Madre женского рода, поэтому mia.",
      explain: "Mia madre è italiana — моя мама итальянка."
    },
    {
      type: "choice",
      question: "Как сказать «мои родители»?",
      options: ["I miei genitori", "Mio genitori", "La miei genitori", "Le miei genitori"],
      answer: "I miei genitori",
      hint: "Genitori — множественное число мужского рода.",
      explain: "I miei genitori — мои родители."
    },
    {
      type: "match",
      question: "Соедини слово и значение",
      pairs: [
        { left: "il fidanzato", right: "парень / жених" },
        { left: "la fidanzata", right: "девушка / невеста" },
        { left: "lo zio", right: "дядя" },
        { left: "la zia", right: "тётя" },
        { left: "il cugino", right: "кузен" }
      ],
      explain: "Эти слова нужны для описания отношений и семьи.",
      explainWrong: "Неверная пара. Fidanzato = парень/жених, fidanzata = девушка/невеста, zio = дядя, zia = тётя, cugino = кузен."
    },
    {
      type: "dialog-choice",
      question: "Выбери ответ",
      dialog: [
        { who: "Anna", text: "Hai fratelli?" }
      ],
      options: [
        "Sì, ho un fratello.",
        "Sì, sono un fratello.",
        "Sì, c'è un fratello.",
        "Sì, vado a casa."
      ],
      answer: "Sì, ho un fratello.",
      hint: "Про наличие брата или сестры говорят через ho.",
      explain: "Sì, ho un fratello — Да, у меня есть брат."
    }
  ]
};
