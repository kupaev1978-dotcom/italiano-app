window.LESSONS = window.LESSONS || {};

window.LESSONS["a1-u3-l3"] = {
  id: "a1-u3-l3",
  title: "Questo e quello: указательные местоимения",
  level: "A1",
  xp: 35,
  theory: [
    {
      title: "Questo = этот, quello = тот",
      summary: "Questo показывает на то, что близко к говорящему. Quello показывает на то, что дальше. Как и артикли, они согласуются с родом и числом.",
      rule: [
        "questo — этот, мужской род единственного числа: questo libro",
        "questa — эта, женский род единственного числа: questa casa",
        "questi — эти, мужской род множественного числа: questi libri",
        "queste — эти, женский род множественного числа: queste case",
        "quello — тот, мужской род единственного числа: quello studente",
        "quella — та, женский род единственного числа: quella casa",
        "quelli — те, мужской род множественного числа: quelli libri",
        "quelle — те, женский род множественного числа: quelle case"
      ],
      table: {
        headers: ["Рядо", "муж. ед.", "жен. ед.", "муж. мн.", "жен. мн."],
        rows: [
          ["близко: этот", "questo", "questa", "questi", "queste"],
          ["далеко: тот", "quello", "quella", "quelli", "quelle"]
        ]
      },
      tips: [
        "Секрет: смотри на существительное. Libro мужского рода: questo libro. Casa женского рода: questa casa.",
        "Questo и quello работают как маленькие артикли: они должны совпадать с родом и числом предмета."
      ],
      mistakes: [
        "Не говори questo casa. Правильно: questa casa.",
        "Не говори questa libro. Правильно: questo libro.",
        "Не говори questi amica. Amica женского рода: questa amica."
      ],
      examples: [
        { it: "questo libro", ru: "эта книга" },
        { it: "questa matita", ru: "этот карандаш" },
        { it: "questi amici", ru: "эти друзья" },
        { it: "queste amiche", ru: "эти подруги" },
        { it: "quello studente", ru: "тот студент" },
        { it: "quella ragazza", ru: "та девушка" }
      ]
    },
    {
      title: "Quello перед гласной и s + согласная",
      summary: "Quello ведёт себя похоже на определённый артикль lo/l'. Это не новая сложная тема, а продолжение артиклей.",
      rule: [
        "quel + обычная согласная: quel libro, quel tavolo",
        "quello + s + согласная, z, ps, gn, y: quello studente, quello zaino",
        "quell' + гласная: quell'amico, quell'automobile",
        "quella + женский род: quella casa, quella amica",
        "quell' может быть и перед женской гласной: quell'amica"
      ],
      table: {
        headers: ["Форма", "Когда", "Пример"],
        rows: [
          ["quel", "перед обычной согласной", "quel libro"],
          ["quello", "перед s + согласная, z, ps, gn, y", "quello studente"],
          ["quell'", "перед гласной", "quell'amico"],
          ["quella", "женский род", "quella casa"]
        ]
      },
      tips: [
        "Секрет: если ты помнишь il/lo/l', то quello запоминается легко. Lo studente -> quello studente. L'amico -> quell'amico.",
        "На A1 не нужно идеально знать все исключения. Достаточно чувствовать: гласная -> quell', s + согласная -> quello, обычная согласная -> quel."
      ],
      mistakes: [
        "Не говори quello amico. Перед гласной: quell'amico.",
        "Не говори quel studente. Перед s + согласная: quello studente.",
        "Не путай questa и quella: questa = эта, quella = та."
      ],
      examples: [
        { it: "quel libro", ru: "та книга" },
        { it: "quello studente", ru: "тот студент" },
        { it: "quell'amico", ru: "тот друг" },
        { it: "quell'amica", ru: "та подруга" },
        { it: "quella casa", ru: "тот дом" }
      ],
      dialog: [
        { who: "Commesso", text: "Preferisci questo modello o quello?" },
        { who: "Cliente", text: "Questo, grazie." },
        { who: "Commesso", text: "Molto bene." }
      ]
    }
  ],
  exercises: [
    {
      type: "gap",
      question: "Выбери указательное",
      sentence: "___ casa è bella.",
      options: ["Questa", "Questo", "Questi", "Queste"],
      answer: "Questa",
      hint: "Casa — женский род единственного числа.",
      explain: "Questa casa è bella — этот дом красивый."
    },
    {
      type: "table",
      question: "Заполни форму",
      headers: ["Существительное", "Указательное"],
      rows: [
        ["libro", ""],
        ["matita", "questa"]
      ],
      targetRow: 0,
      targetColumn: 1,
      options: ["questo", "questa", "questi", "queste"],
      answer: "questo",
      hint: "Libro — мужской род единственного числа.",
      explain: "questo libro — эта книга."
    },
    {
      type: "match",
      question: "Соедини форму и значение",
      pairs: [
        { left: "questo", right: "этот, муж. ед." },
        { left: "questa", right: "эта, жен. ед." },
        { left: "questi", right: "эти, муж. мн." },
        { left: "queste", right: "эти, жен. мн." },
        { left: "quello", right: "тот, муж. ед." }
      ],
      explain: "Questo/quello согласуются с существительным.",
      explainWrong: "Неверная пара. Помни род и число: questo maschile singolare, questa femminile singolare, questi maschile plurale, queste femminile plurale."
    },
    {
      type: "error-choice",
      question: "Найди ошибку",
      tokens: [
        { text: "Questo", id: "wrong" },
        { text: "amica", id: "1" },
        { text: "è", id: "2" },
        { text: "simpatica", id: "3" }
      ],
      answer: "wrong",
      hint: "Amica — женский род, поэтому нужна форма questa.",
      explain: "Правильно: Questa amica è simpatica."
    },
    {
      type: "dialog-choice",
      question: "Выбери ответ",
      dialog: [
        { who: "Commesso", text: "Preferisci questo modello o quello?" }
      ],
      options: [
        "Questo, grazie.",
        "Questa, grazie.",
        "Questi, grazie.",
        "Quelle, grazie."
      ],
      answer: "Questo, grazie.",
      hint: "Modello — мужской род единственного числа.",
      explain: "Questo, grazie — этот, спасибо."
    },
    {
      type: "fill",
      question: "Напиши «эти книги» (мужской род, множественное число)",
      answer: "questi libri",
      accept: ["questi libri", "Questi libri"],
      placeholder: "Напиши по-итальянски",
      hint: "Libri — мужской род множественного числа.",
      explain: "questi libri — эти книги."
    },
    {
      type: "build",
      question: "Собери фразу: «те девушки»",
      words: ["Quelle", "ragazze"],
      answer: "Quelle ragazze",
      hint: "Ragazze — женский род множественного числа.",
      explain: "Quelle ragazze — те девушки."
    },
    {
      type: "choice",
      question: "Какая форма перед amico?",
      options: ["quell'", "quello", "quel", "quella"],
      answer: "quell'",
      hint: "Amico начинается с гласной.",
      explain: "quell'amico — тот друг."
    },
    {
      type: "table",
      question: "Заполни форму quello",
      headers: ["Фраза", "Форма"],
      rows: [
        ["___ amico", "quell'"],
        ["___ studente", ""]
      ],
      targetRow: 1,
      targetColumn: 1,
      options: ["quello", "quell'", "quel", "quella"],
      answer: "quello",
      hint: "Studente начинается на s + согласная.",
      explain: "quello studente — тот студент."
    },
    {
      type: "error-choice",
      question: "Найди ошибку",
      sentence: "Queste libro è interessante.",
      options: ["Queste", "libro", "è", "interessante"],
      answer: "Queste",
      hint: "Libro мужского рода: questo libro.",
      explain: "Правильно: Questo libro è interessante."
    }
  ]
};
