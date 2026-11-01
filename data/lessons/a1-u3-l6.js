window.LESSONS = window.LESSONS || {};

window.LESSONS["a1-u3-l6"] = {
  id: "a1-u3-l6",
  title: "Checkpoint: люди, семья и описание",
  level: "A1",
  xp: 60,
  theory: [
    {
      title: "Большой тест A1-U3 🎯",
      summary: "Здесь смешаны притяжательные прилагательные, семья, questo/quello, профессии, характер и внешность. Цель — проверить, что ты можешь говорить о людях естественно.",
      rule: [
        "Притяжательные согласуются с предметом: mio fratello, mia sorella, i miei genitori.",
        "Семья в единственном числе часто без артикля: mio padre, mia madre.",
        "Questo/quello согласуются с существительным: questo libro, questa casa, questi amici, quelle ragazze.",
        "Профессии: Sono insegnante. Faccio l'insegnante.",
        "Внешность и характер: è alto, è simpatico, ha gli occhi verdi, ha i capelli neri."
      ],
      tips: [
        "Если сомневаешься, сначала определи род и число существительного.",
        "В error-choice ищи именно слово, которое не согласуется или стоит не там, где нужно."
      ],
      note: "После checkpoint можно переходить к A1-U4: еда, ресторан, покупки и деньги."
    }
  ],
  exercises: [
    {
      type: "gap",
      question: "Выбери притяжательное",
      sentence: "___ sorella è alta.",
      options: ["Mia", "Mio", "Mie", "Miei"],
      answer: "Mia",
      hint: "Sorella — женский род единственного числа.",
      explain: "Mia sorella è alta — моя сестра высокая."
    },
    {
      type: "table",
      question: "Заполни указательное",
      headers: ["Фраза", "Указательное"],
      rows: [
        ["___ casa", "questa"],
        ["___ libro", ""]
      ],
      targetRow: 1,
      targetColumn: 1,
      options: ["questo", "questa", "questi", "queste"],
      answer: "questo",
      hint: "Libro — мужской род единственного числа.",
      explain: "questo libro — эта книга."
    },
    {
      type: "error-choice",
      question: "Найди ошибку",
      tokens: [
        { text: "Mio", id: "wrong" },
        { text: "genitori", id: "1" },
        { text: "sono", id: "2" },
        { text: "italiani", id: "3" }
      ],
      answer: "wrong",
      hint: "Genitori — множественное число: I miei.",
      explain: "Правильно: I miei genitori sono italiani."
    },
    {
      type: "dialog-choice",
      question: "Выбери реплику",
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
      hint: "Вежливое знакомство с женщиной.",
      explain: "Piacere di conoscerLa — приятно познакомиться."
    },
    {
      type: "match",
      question: "Соедини профессию и перевод",
      pairs: [
        { left: "insegnante", right: "учитель" },
        { left: "cameriere", right: "официант" },
        { left: "operaio", right: "рабочий" },
        { left: "impiegato", right: "служащий" },
        { left: "cuoco", right: "повар" }
      ],
      explain: "Профессии нужны для вопроса Che fai nella vita?",
      explainWrong: "Неверная пара. Insegnante = учитель, cameriere = официант, operaio = рабочий, impiegato = служащий, cuoco = повар."
    },
    {
      type: "fill",
      question: "Напиши «Я врач»",
      answer: "Sono medico",
      accept: ["Sono medico", "sono medico", "Io sono medico", "io sono medico"],
      placeholder: "Напиши по-итальянски",
      hint: "После essere профессия обычно без артикля.",
      explain: "Sono medico — я врач."
    },
    {
      type: "table",
      question: "Заполни женский род",
      headers: ["Мужской род", "Женский род"],
      rows: [
        ["il fratello", "la sorella"],
        ["il padre", ""]
      ],
      targetRow: 1,
      targetColumn: 1,
      options: ["la madre", "il madre", "le madre", "la padra"],
      answer: "la madre",
      hint: "Padre -> madre.",
      explain: "la madre — мать."
    },
    {
      type: "error-choice",
      question: "Найди ошибку",
      sentence: "Questo amica è simpatica.",
      options: ["Questo", "amica", "è", "simpatica"],
      answer: "Questo",
      hint: "Amica — женский род: questa.",
      explain: "Правильно: Questa amica è simpatica."
    },
    {
      type: "dialog-choice",
      question: "Выбери ответ",
      dialog: [
        { who: "Anna", text: "Che fai nella vita?" }
      ],
      options: [
        "Faccio l'impiegato.",
        "Vado al lavoro.",
        "Il lavoro è noioso.",
        "Sì, certo."
      ],
      answer: "Faccio l'impiegato.",
      hint: "Вопрос о профессии.",
      explain: "Faccio l'impiegato — я работаю служащим."
    },
    {
      type: "gap",
      question: "Выбери указательное",
      sentence: "___ amici sono simpatici.",
      options: ["Questi", "Questa", "Questo", "Queste"],
      answer: "Questi",
      hint: "Amici — мужской род множественного числа.",
      explain: "Questi amici sono simpatici — эти друзья славные."
    },
    {
      type: "table",
      question: "Заполни множественное число",
      headers: ["Единственное число", "Множественное число"],
      rows: [
        ["mio fratello", "i miei fratelli"],
        ["mia sorella", ""]
      ],
      targetRow: 1,
      targetColumn: 1,
      options: ["mie sorelle", "miei fratelli", "mio sorelle", "mia sorelle"],
      answer: "mie sorelle",
      hint: "Sorelle — женский род множественного числа: mie.",
      explain: "mia sorella -> le mie sorelle."
    },
    {
      type: "error-choice",
      question: "Найди ошибку",
      tokens: [
        { text: "Ha", id: "0" },
        { text: "la", id: "wrong" },
        { text: "capelli", id: "2" },
        { text: "neri", id: "3" }
      ],
      answer: "wrong",
      hint: "Capelli — мужской род множественного числа: i.",
      explain: "Правильно: Ha i capelli neri."
    },
    {
      type: "build",
      question: "Собери фразу: «Моя подруга умная»",
      words: ["La", "mia", "amica", "è", "intelligente"],
      answer: "La mia amica è intelligente",
      hint: "Amica — не ближайшая семья, поэтому артикль la возможен.",
      explain: "La mia amica è intelligente — моя подруга умная."
    },
    {
      type: "choice",
      question: "Как сказать «Он скучный»?",
      options: ["È noioso.", "È noiosa.", "Sono noioso.", "Ha noioso."],
      answer: "È noioso.",
      hint: "Он — maschile singolare: noioso.",
      explain: "È noioso — он скучный."
    },
    {
      type: "match",
      question: "Соедини прилагательное и перевод",
      pairs: [
        { left: "gentile", right: "добрый" },
        { left: "antipatico", right: "неприятный" },
        { left: "divertente", right: "весёлый" },
        { left: "timido", right: "застенчивый" },
        { left: "serio", right: "серьёзный" }
      ],
      explain: "Эти слова помогают оценивать людей.",
      explainWrong: "Неверная пара. Gentile = добрый, antipatico = неприятный, divertente = весёлый, timido = застенчивый, serio = серьёзный."
    },
    {
      type: "dialog-choice",
      question: "Выбери ответ",
      dialog: [
        { who: "Anna", text: "Com'è il nuovo professore?" }
      ],
      options: [
        "È severo ma giusto.",
        "Ha vent'anni.",
        "Vado a scuola.",
        "Costa poco."
      ],
      answer: "È severo ma giusto.",
      hint: "Нужна характеристика человека.",
      explain: "È severo ma giusto — он строгий, но справедливый."
    }
  ]
};
