window.LESSONS = window.LESSONS || {};

window.LESSONS["a1-u7-l3"] = {
  id: "a1-u7-l3",
  title: "In viaggio: aeroporto, hotel e biglietti",
  level: "A1",
  xp: 40,
  theory: [
    {
      title: "Слова для путешествий",
      summary: "В аэропорту, отеле и на вокзале нужны базовые слова: билет, самолёт, рейс, valigia, camera, reception, partenza, arrivo.",
      rule: [
        "il viaggio — путешествие",
        "l'aeroporto — аэропорт",
        "l'aereo — самолёт",
        "il volo — рейс, полёт",
        "il biglietto — билет",
        "la valigia — чемодан",
        "i bagagli — багаж",
        "la camera — комната, номер",
        "la reception — ресепшн, стойка регистрации",
        "la partenza — отправление",
        "l'arrivo — прибытие",
        "il passaporto — паспорт",
        "la carta d'identità — удостоверение личности"
      ],
      table: {
        headers: ["Слово", "Перевод", "Пример"],
        rows: [
          ["il volo", "рейс", "Il volo parte alle dieci."],
          ["la valigia", "чемодан", "Ho una valigia grande."],
          ["la camera", "номер", "Vorrei una camera doppia."],
          ["la reception", "ресепшн", "Sono alla reception."],
          ["il passaporto", "паспорт", "Ecco il mio passaporto."]
        ]
      },
      tips: [
        "Секрет: camera в отеле — это номер. Camera può também значить комната или фотоаппарат, но в путешествиях чаще номер.",
        "Bagagli обычно во множественном числе: i bagagli — багаж."
      ],
      mistakes: [
        "Не говори il aeroporto женского рода. Правильно: l'aeroporto, мужской род.",
        "Не говори la volo. Правильно: il volo.",
        "Не переводи «чемоданы» как valigia для нескольких. Правильно: le valigie."
      ],
      examples: [
        { it: "Il volo per Roma parte alle dieci.", ru: "Рейс в Рим отправляется в десять." },
        { it: "Ho due valigie.", ru: "У меня два чемодана." },
        { it: "Dov'è la reception?", ru: "Где ресепшн?" }
      ]
    },
    {
      title: "Фразы в аэропорту и отеле",
      summary: "Эти фразы можно использовать как готовые шаблоны. Они спасают при посадке, регистрации и заселении.",
      rule: [
        "Vorrei prenotare una camera singola / doppia.",
        "Per quante notti?",
        "Dal dieci al quindici.",
        "La colazione è inclusa?",
        "A che ora parte il volo?",
        "Dov'è il gate / l'imbarco?",
        "Ho perso la valigia.",
        "Dov'è il ritiro bagagli?",
        "Il mio posto è vicino al finestrino."
      ],
      table: {
        headers: ["Ситуация", "Фраза"],
        rows: [
          ["забронировать номер", "Vorrei prenotare una camera."],
          ["спросить про завтрак", "La colazione è inclusa?"],
          ["спросить про рейс", "A che ora parte il volo?"],
          ["потерять чемодан", "Ho perso la valigia."],
          ["найти багаж", "Dov'è il ritiro bagagli?"]
        ]
      },
      tips: [
        "Секрет: singola — одноместный номер, doppia — двухместный, familiare — семейный.",
        "Inclusa означает «включена»: La colazione è inclusa? — Завтрак включён?"
      ],
      mistakes: [
        "Не говори Vorrei una camera doppio. Правильно: doppia, потому что camera женского рода.",
        "Не говори Il volo va a Roma? Лучше: Il volo parte per Roma? или A che ora parte il volo per Roma?",
        "Не путай partenza и arrivo: partenza — отправление, arrivo — прибытие."
      ],
      examples: [
        { it: "Vorrei una camera doppia per due notti.", ru: "Я хотел бы двухместный номер на две ночи." },
        { it: "Il volo per Milano parte alle otto.", ru: "Рейс в Милан отправляется в восемь." },
        { it: "Scusi, dov'è il ritiro bagagli?", ru: "Извините, где получение багажа?" }
      ],
      dialog: [
        { who: "Cliente", text: "Buongiorno. Vorrei prenotare una camera doppia.", ru: "Добрый день. Я хотел бы забронировать двухместный номер." },
        { who: "Receptionist", text: "Per quante notti?", ru: "На сколько ночей?" },
        { who: "Cliente", text: "Per tre notti.", ru: "На три ночи." },
        { who: "Receptionist", text: "La colazione è inclusa.", ru: "Завтрак включён." }
      ]
    }
  ],
  exercises: [
    {
      type: "choice",
      question: "Как сказать «Я хотел бы забронировать двухместный номер»?",
      options: [
        "Vorrei prenotare una camera doppia.",
        "Vorrei prenotare un camera doppio.",
        "Voglio camera doppio.",
        "Vorrei prenotare le camera doppia."
      ],
      answer: "Vorrei prenotare una camera doppia.",
      hint: "Camera женского рода: una camera doppia.",
      explain: "Vorrei prenotare una camera doppia — я хотел бы забронировать двухместный номер."
    },
    {
      type: "gap",
      question: "Вставь слово",
      sentence: "Il ___ per Roma parte alle dieci.",
      options: ["volo", "valigia", "biglietto", "passaporto"],
      answer: "volo",
      hint: "Рейс/полёт — volo.",
      explain: "Il volo per Roma parte alle dieci — рейс в Рим отправляется в десять."
    },
    {
      type: "table",
      question: "Заполни множественное число",
      headers: ["Единственное число", "Множественное число"],
      rows: [
        ["la valigia", "le valigie"],
        ["il biglietto", ""]
      ],
      targetRow: 1,
      targetColumn: 1,
      options: ["i biglietti", "il biglietti", "le biglietti", "i biglietto"],
      answer: "i biglietti",
      hint: "Biglietto -> biglietti, мужской род.",
      explain: "i biglietti — билеты."
    },
    {
      type: "error-choice",
      question: "Найди ошибку",
      tokens: [
        { text: "Vorrei", id: "0" },
        { text: "una", id: "1" },
        { text: "camera", id: "2" },
        { text: "doppio", id: "wrong" }
      ],
      answer: "wrong",
      hint: "Camera женского рода, поэтому doppia.",
      explain: "Правильно: Vorrei una camera doppia."
    },
    {
      type: "dialog-choice",
      question: "Выбери ответ на ресепшене",
      dialog: [
        { who: "Receptionist", text: "Ha una prenotazione?" }
      ],
      options: [
        "Sì, ho una prenotazione.",
        "Sì, ho una valigia grande.",
        "Sì, vado all'aeroporto.",
        "Sì, il volo parte alle dieci."
      ],
      answer: "Sì, ho una prenotazione.",
      hint: "Вопрос про бронь: есть ли у вас бронирование?",
      explain: "Sì, ho una prenotazione — Да, у меня есть бронь."
    },
    {
      type: "match",
      question: "Соедини слово и перевод",
      pairs: [
        { left: "l'aeroporto", right: "аэропорт" },
        { left: "la valigia", right: "чемодан" },
        { left: "il biglietto", right: "билет" },
        { left: "la reception", right: "ресепшн" },
        { left: "il passaporto", right: "паспорт" }
      ],
      explain: "Это базовые слова для путешествий.",
      explainWrong: "Неверная пара. Aeroporto = аэропорт, valigia = чемодан, biglietto = билет, reception = ресепшн, passaporto = паспорт."
    },
    {
      type: "fill",
      question: "Напиши «Где получение багажа?»",
      answer: "Dov'è il ritiro bagagli?",
      accept: [
        "Dov'è il ritiro bagagli?",
        "dov'è il ritiro bagagli",
        "Dov'è il ritiro bagagli",
        "dov'è il ritiro bagagli?"
      ],
      placeholder: "Напиши по-итальянски",
      hint: "Dov'è + il ritiro bagagli.",
      explain: "Dov'è il ritiro bagagli? — Где получение багажа?"
    },
    {
      type: "build",
      question: "Собери фразу: «Завтрак включён?»",
      words: ["La", "colazione", "è", "inclusa", "?"],
      answer: "La colazione è inclusa ?",
      hint: "Colazione женского рода: inclusa.",
      explain: "La colazione è inclusa? — Завтрак включён?"
    },
    {
      type: "choice",
      question: "Как спросить «Во сколько отправляется рейс?»",
      options: [
        "A che ora parte il volo?",
        "Dove parte il volo?",
        "Quando è il arrivo?",
        "Quanto costa il volo?"
      ],
      answer: "A che ora parte il volo?",
      hint: "A che ora? = во сколько?",
      explain: "A che ora parte il volo? — Во сколько отправляется рейс?"
    },
    {
      type: "error-choice",
      question: "Найди ошибку",
      sentence: "Ho perso le valigia.",
      options: ["Ho", "perso", "le", "valigia"],
      answer: "valigia",
      hint: "После le нужно множественное число: valigie.",
      explain: "Правильно: Ho perso le valigie. Или: Ho perso la valigia."
    }
  ]
};
