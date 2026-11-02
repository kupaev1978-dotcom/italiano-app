window.LESSONS = window.LESSONS || {};

window.LESSONS["a1-u7-l6"] = {
  id: "a1-u7-l6",
  title: "Checkpoint: будущее, планы и путешествия",
  level: "A1",
  xp: 70,
  theory: [
    {
      title: "Большой тест A1-U7 🎯",
      summary: "Здесь смешаны futuro semplice, планы с presente, путешествия, perché/quando/se и вежливые просьбы.",
      rule: [
        "Futuro: andrò, farò, vedrò, potrò, dovrò, partirò.",
        "Piani: Domani vado a Roma. Stasera esco con amici.",
        "Viaggi: Vorrei prenotare una camera doppia. A che ora parte il volo?",
        "Congiunzioni: perché, quando, se.",
        "Cortesia: Vorrei..., Posso..., Mi può...?"
      ],
      tips: [
        "Если говоришь о решённом плане, часто можно usare presente: Domani vado.",
        "Если даёшь обещание или делаешь предположение, часто usa futuro: Ti chiamerò. Forse pioverà."
      ],
      note: "После этого checkpoint A1 становится очень сильным. Дальше можно идти в A1-U8: прошлое время passato prossimo."
    }
  ],
  exercises: [
    {
      type: "gap",
      question: "Вставь будущую форму",
      sentence: "Domani io ___ a Milano.",
      options: ["andrò", "vado", "andai", "andaro"],
      answer: "andrò",
      hint: "Будущее от andare для io — andrò.",
      explain: "Domani io andrò a Milano — завтра я поеду в Милан."
    },
    {
      type: "table",
      question: "Заполни форму",
      headers: ["Лицо", "Форма"],
      rows: [
        ["io", "farò"],
        ["noi", ""]
      ],
      targetRow: 1,
      targetColumn: 1,
      options: ["faremo", "faranno", "farai", "farà"],
      answer: "faremo",
      hint: "Noi + fare в будущем — faremo.",
      explain: "Noi faremo un viaggio — мы совершим путешествие."
    },
    {
      type: "choice",
      question: "Как сказать «Завтра я работаю из дома» как план?",
      options: [
        "Domani lavoro da casa.",
        "Domani io lavorai da casa.",
        "Domani lavorare da casa.",
        "Domani lavoro da casa domani."
      ],
      answer: "Domani lavoro da casa.",
      hint: "Presente с domani для плана.",
      explain: "Domani lavoro da casa — завтра я работаю из дома."
    },
    {
      type: "error-choice",
      question: "Найди ошибку",
      tokens: [
        { text: "Vorrei", id: "0" },
        { text: "prenotare", id: "1" },
        { text: "camera", id: "wrong" },
        { text: "doppia", id: "3" }
      ],
      answer: "wrong",
      hint: "Нужен артикль una перед camera.",
      explain: "Правильно: Vorrei prenotare una camera doppia."
    },
    {
      type: "dialog-choice",
      question: "Выбери ответ",
      dialog: [
        { who: "Receptionist", text: "Per quante notti?" }
      ],
      options: [
        "Per tre notti.",
        "Per il volo.",
        "Per la stazione.",
        "Per favore."
      ],
      answer: "Per tre notti.",
      hint: "Вопрос про количество ночей.",
      explain: "Per tre notti — на три ночи."
    },
    {
      type: "match",
      question: "Соедини союз и значение",
      pairs: [
        { left: "perché", right: "потому что" },
        { left: "quando", right: "когда" },
        { left: "se", right: "если" },
        { left: "ma", right: "но" },
        { left: "e", right: "и" }
      ],
      explain: "Союзы связывают простые предложения.",
      explainWrong: "Неверная пара. Perché = потому что, quando = когда, se = если, ma = но, e = и."
    },
    {
      type: "fill",
      question: "Напиши «Если будет дождь, я останусь дома»",
      answer: "Se piove, resto a casa",
      accept: [
        "Se piove, resto a casa",
        "se piove resto a casa",
        "Se piove resto a casa",
        "se piove, resto a casa"
      ],
      placeholder: "Напиши по-итальянски",
      hint: "Se + presente, poi presente.",
      explain: "Se piove, resto a casa — если будет дождь, я останусь дома."
    },
    {
      type: "build",
      question: "Собери фразу: «Я хотел бы забронировать номер»",
      words: ["Vorrei", "prenotare", "una", "camera"],
      answer: "Vorrei prenotare una camera",
      hint: "Vorrei + инфинитив + артикль + существительное.",
      explain: "Vorrei prenotare una camera — я хотел бы забронировать номер."
    },
    {
      type: "table",
      question: "Заполни перевод",
      headers: ["Italiano", "Русский"],
      rows: [
        ["il volo", "рейс"],
        ["la valigia", ""]
      ],
      targetRow: 1,
      targetColumn: 1,
      options: ["чемодан", "билет", "паспорт", "аэропорт"],
      answer: "чемодан",
      hint: "Valigia — чемодан.",
      explain: "la valigia — чемодан."
    },
    {
      type: "error-choice",
      question: "Найди ошибку",
      sentence: "Vado a Roma perché che mi piace.",
      options: ["Vado", "a", "Roma", "perché", "che", "mi", "piace"],
      answer: "che",
      hint: "После perché не нужен che.",
      explain: "Правильно: Vado a Roma perché mi piace."
    },
    {
      type: "dialog-choice",
      question: "Выбери вежливую просьбу",
      dialog: [
        { who: "Turista", text: "..." }
      ],
      options: [
        "Mi può indicare l'uscita, per favore?",
        "Dammi l'uscita!",
        "Uscita?",
        "Voglio uscita."
      ],
      answer: "Mi può indicare l'uscita, per favore?",
      hint: "С незнакомцем используй Mi può... e per favore.",
      explain: "Mi può indicare l'uscita, per favore? — Вы можете указать мне выход, пожалуйста?"
    },
    {
      type: "choice",
      question: "Как сказать «Мы уедем завтра»?",
      options: [
        "Partiremo domani.",
        "Partiamo domani futuro.",
        "Domani partire.",
        "Noi partiamo domani andremo."
      ],
      answer: "Partiremo domani.",
      hint: "Noi + partire в будущем — partiremo.",
      explain: "Partiremo domani — мы уедем завтра."
    },
    {
      type: "match",
      question: "Соедини фразу и перевод",
      pairs: [
        { left: "A che ora parte il treno?", right: "Во сколько отправляется поезд?" },
        { left: "La colazione è inclusa?", right: "Завтрак включён?" },
        { left: "Ho perso la valigia.", right: "Я потерял чемодан." },
        { left: "Quando ho tempo, studio.", right: "Когда у меня есть время, я учусь." },
        { left: "Ti chiamerò stasera.", right: "Я позвоню тебе сегодня вечером." }
      ],
      explain: "Это практические фразы A1-U7.",
      explainWrong: "Неверная пара. Parte = отправляется, inclusa = включён, perso = потерял, chiamerò = позвоню."
    },
    {
      type: "gap",
      question: "Вставь союз",
      sentence: "Non esco ___ piove.",
      options: ["perché", "se", "quando", "ma"],
      answer: "perché",
      hint: "Причина: потому что идёт дождь.",
      explain: "Non esco perché piove — я не выхожу, потому что идёт дождь."
    },
    {
      type: "error-choice",
      question: "Найди ошибку",
      tokens: [
        { text: "Mi", id: "0" },
        { text: "può", id: "1" },
        { text: "ripete", id: "wrong" },
        { text: "per", id: "3" },
        { text: "favore", id: "4" }
      ],
      answer: "wrong",
      hint: "После può нужен инфинитив ripetere.",
      explain: "Правильно: Mi può ripetere, per favore?"
    }
  ]
};
