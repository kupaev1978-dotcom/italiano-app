window.LESSONS = window.LESSONS || {};

window.LESSONS["a1-u9-l4"] = {
  id: "a1-u9-l4",
  title: "Final checkpoint A1",
  level: "A1",
  xp: 100,
  theory: [
    {
      title: "Итоговый тест A1",
      summary: "Здесь собраны главные темы A1: времена, предлоги, путешествия, люди, еда, здоровье, покупки, чувства и союзы.",
      rule: [
        "Presente: oggi, di solito, domani для плана.",
        "Passato prossimo: ieri, due giorni fa, la settimana scorsa, l'anno scorso.",
        "Futuro semplice: domani, la settimana prossima, l'anno prossimo.",
        "Avere o essere nel passato: ho mangiato / sono andato.",
        "Preposizioni: a Roma, in Italia, in centro, alla stazione, dal medico.",
        "Mi piace / mi piacciono.",
        "Ho fame / sete / sonno / paura.",
        "Mi fa male / mi fanno male.",
        "Quanto costa? / Quanto costano?",
        "Perche, quando, se, pero, quindi."
      ],
      tips: [
        "Перед ответом определи маркер времени: ieri, domani, oggi.",
        "Для места спроси себя: город, страна, транспорт, человек или часы?",
        "Для piace/costa посчитай предмет: один или несколько?"
      ],
      note: "После этого checkpoint можно переходить к A2-U1: passato imperfetto."
    }
  ],
  exercises: [
    {
      type: "gap",
      question: "Вставь правильную форму",
      sentence: "Ieri ___ al cinema.",
      options: ["sono andato", "vado", "andro", "andai"],
      answer: "sono andato",
      hint: "Ieri + andare = sono andato.",
      explain: "Ieri sono andato al cinema - вчера я ходил в кино."
    },
    {
      type: "table",
      question: "Заполни вспомогательный глагол",
      headers: ["Глагол", "Ausiliare"],
      rows: [
        ["partire", "essere"],
        ["comprare", ""]
      ],
      targetRow: 1,
      targetColumn: 1,
      options: ["avere", "essere", "fare", "andare"],
      answer: "avere",
      hint: "Comprare usa avere.",
      explain: "Ho comprato - я купил."
    },
    {
      type: "error-choice",
      question: "Найди ошибку",
      tokens: [
        { text: "Ho", id: "wrong" },
        { text: "andato", id: "1" },
        { text: "a", id: "2" },
        { text: "Roma", id: "3" }
      ],
      answer: "wrong",
      hint: "Con andare si usa essere.",
      explain: "Правильно: Sono andato a Roma."
    },
    {
      type: "dialog-choice",
      question: "Выбери ответ",
      dialog: [
        { who: "Anna", text: "Hai gia mangiato?" },
        { who: "Marco", text: "No, ..." }
      ],
      options: [
        "non ho ancora mangiato.",
        "ho gia mangiato.",
        "mangio gia.",
        "non mangio mai."
      ],
      answer: "non ho ancora mangiato.",
      hint: "No + non ... ancora.",
      explain: "No, non ho ancora mangiato - Нет, я ещё не ел."
    },
    {
      type: "match",
      question: "Соедини союз и перевод",
      pairs: [
        { left: "perche", right: "потому что" },
        { left: "quando", right: "когда" },
        { left: "se", right: "если" },
        { left: "pero", right: "но" },
        { left: "quindi", right: "поэтому" }
      ],
      explain: "Эти союзы делают речь связной.",
      explainWrong: "Неверная пара. Perche = потому что, quando = когда, se = если, pero = но, quindi = поэтому."
    },
    {
      type: "fill",
      question: "Напиши «Мне нравится кофе»",
      answer: "Mi piace il caffe",
      accept: [
        "Mi piace il caffe",
        "mi piace il caffe",
        "A me piace il caffe",
        "a me piace il caffe"
      ],
      placeholder: "Напиши по-итальянски",
      hint: "Caffe - единственное число: piace.",
      explain: "Mi piace il caffe - мне нравится кофе."
    },
    {
      type: "build",
      question: "Собери фразу: «Завтра я поеду в Милан»",
      words: ["Domani", "andro", "a", "Milano"],
      answer: "Domani andro a Milano",
      hint: "Domani + andro + a + город.",
      explain: "Domani andro a Milano - завтра я поеду в Милан."
    },
    {
      type: "choice",
      question: "Как сказать «Я ещё не видел этот фильм»?",
      options: [
        "Non ho ancora visto questo film.",
        "Non vedo ancora questo film.",
        "Non ho mai visto questo film.",
        "Non vedevo ancora questo film."
      ],
      answer: "Non ho ancora visto questo film.",
      hint: "Non ... ancora + passato prossimo.",
      explain: "Non ho ancora visto questo film - я ещё не видел этот фильм."
    },
    {
      type: "error-choice",
      question: "Найди ошибку",
      sentence: "Mi piacciono la pizza.",
      options: ["Mi", "piacciono", "la", "pizza"],
      answer: "piacciono",
      hint: "Pizza - единственное число.",
      explain: "Правильно: Mi piace la pizza."
    },
    {
      type: "table",
      question: "Заполни тему",
      headers: ["Тема", "Фраза"],
      rows: [
        ["погода", "Piove."],
        ["здоровье", ""]
      ],
      targetRow: 1,
      targetColumn: 1,
      options: [
        "Ho la febbre.",
        "Fa caldo.",
        "Vado al mare.",
        "Costa poco."
      ],
      answer: "Ho la febbre.",
      hint: "Здоровье: симптомы через ho.",
      explain: "Ho la febbre - у меня температура."
    },
    {
      type: "dialog-choice",
      question: "Выбери ответ",
      dialog: [
        { who: "Turista", text: "Scusi, mi puo indicare l'uscita?" }
      ],
      options: [
        "Certo, vada dritto.",
        "Vorrei un caffe.",
        "Ho mal di testa.",
        "Il conto, per favore."
      ],
      answer: "Certo, vada dritto.",
      hint: "Вежливая просьба указать выход.",
      explain: "Certo, vada dritto - Конечно, идите прямо."
    },
    {
      type: "match",
      question: "Соедини слово и перевод",
      pairs: [
        { left: "la reception", right: "ресепшн" },
        { left: "il volo", right: "рейс" },
        { left: "la valigia", right: "чемодан" },
        { left: "il biglietto", right: "билет" },
        { left: "l'aeroporto", right: "аэропорт" }
      ],
      explain: "Это слова для путешествий.",
      explainWrong: "Неверная пара. Reception = ресепшн, volo = рейс, valigia = чемодан, biglietto = билет, aeroporto = аэропорт."
    },
    {
      type: "gap",
      question: "Вставь правильную форму",
      sentence: "Se piove, ___ a casa.",
      options: ["resto", "resterò", "restai", "restare"],
      answer: "resto",
      hint: "На A1 после se для реального условия часто используется presente.",
      explain: "Se piove, resto a casa - если идёт дождь, я остаюсь дома."
    },
    {
      type: "error-choice",
      question: "Найди ошибку",
      tokens: [
        { text: "Maria", id: "0" },
        { text: "e", id: "1" },
        { text: "andato", id: "wrong" },
        { text: "a", id: "3" },
        { text: "casa", id: "4" }
      ],
      answer: "wrong",
      hint: "Maria - женский род.",
      explain: "Правильно: Maria e andata a casa."
    },
    {
      type: "table",
      question: "Заполни время",
      headers: ["Маркер", "Время"],
      rows: [
        ["ieri", "passato"],
        ["domani", ""]
      ],
      targetRow: 1,
      targetColumn: 1,
      options: ["futuro", "passato", "presente", "imperfetto"],
      answer: "futuro",
      hint: "Domani относится к будущему.",
      explain: "Domani обычно требует futuro или presente для плана."
    },
    {
      type: "build",
      question: "Собери фразу: «Я хотел бы забронировать номер»",
      words: ["Vorrei", "prenotare", "una", "camera"],
      answer: "Vorrei prenotare una camera",
      hint: "Vorrei + инфинитив.",
      explain: "Vorrei prenotare una camera - я хотел бы забронировать номер."
    },
    {
      type: "choice",
      question: "Какая фраза самая вежливая?",
      options: [
        "Vorrei un caffe, per favore.",
        "Voglio caffe.",
        "Dammi caffe.",
        "Caffe!"
      ],
      answer: "Vorrei un caffe, per favore.",
      hint: "Vorrei + per favore.",
      explain: "Vorrei un caffe, per favore - я хотел бы кофе, пожалуйста."
    },
    {
      type: "match",
      question: "Соедини чувство и перевод",
      pairs: [
        { left: "sono stanco", right: "я устал" },
        { left: "ho paura", right: "мне страшно" },
        { left: "sono contento", right: "я рад" },
        { left: "ho sonno", right: "я хочу спать" },
        { left: "mi sento bene", right: "я хорошо себя чувствую" }
      ],
      explain: "Это базовые состояния.",
      explainWrong: "Неверная пара. Stanco = устал, paura = страх, contento = рад, sonno = сон, sento bene = чувствую себя хорошо."
    }
  ]
};
