window.LESSONS = window.LESSONS || {};

window.LESSONS["a1-u9-l4"] = {
  id: "a1-u9-l4",
  title: "Final checkpoint A1",
  level: "A1",
  xp: 100,
  theory: [
    {
      title: "Итоговый тест A1",
      summary: "Qui sono raccolte le tematiche principali di A1: tempi, preposizioni, viaggi, persone, cibo, salute, shopping, sentimenti e congiunzioni.",
      rule: [
        "Presente: oggi, di solito, domani per un piano.",
        "Passato prossimo: ieri, due giorni fa, la settimana scorsa, l'anno scorso.",
        "Futuro semplice: domani, la settimana prossima, l'anno prossimo.",
        "Avere o essere nel passato: ho mangiato / sono andato.",
        "Preposizioni: a Roma, in Italia, in centro, alla stazione, dal medico.",
        "Mi piace / mi piacciono.",
        "Ho fame / sete / sonno / paura.",
        "Mi fa male / mi fanno male.",
        "Quanto costa? / Quanto costano?",
        "Perché, quando, se, però, quindi."
      ],
      tips: [
        "Prima di rispondere, identifica l'avverbio di tempo: ieri, domani, oggi.",
        "Per il luogo chiediti: città, paese, mezzo, persona o ore?",
        "Per piace/costa conta il nome: uno o più?"
      ],
      note: "Dopo questo checkpoint puoi passare a A2-U1: passato imperfetto."
    }
  ],
  exercises: [
    {
      type: "gap",
      question: "Вставь правильную форму",
      sentence: "Ieri ___ al cinema.",
      options: ["sono andato", "vado", "andrò", "andai"],
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
        { who: "Anna", text: "Hai già mangiato?" },
        { who: "Marco", text: "No, ..." }
      ],
      options: [
        "non ho ancora mangiato.",
        "ho già mangiato.",
        "mangio già.",
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
        { left: "perché", right: "потому что" },
        { left: "quando", right: "когда" },
        { left: "se", right: "если" },
        { left: "però", right: "но" },
        { left: "quindi", right: "поэтому" }
      ],
      explain: "Queste congiunzioni rendono il discorso connesso.",
      explainWrong: "Неверная пара. Perché = потому что, quando = когда, se = если, però = но, quindi = поэтому."
    },
    {
      type: "fill",
      question: "Напиши «Мне нравится кофе»",
      answer: "Mi piace il caffè",
      accept: [
        "Mi piace il caffè",
        "mi piace il caffè",
        "A me piace il caffè",
        "a me piace il caffè"
      ],
      placeholder: "Напиши по-итальянски",
      hint: "Caffè è singolare: piace.",
      explain: "Mi piace il caffè - мне нравится кофе."
    },
    {
      type: "build",
      question: "Собери фразу: «Завтра я поеду в Милан»",
      words: ["Domani", "andrò", "a", "Milano"],
      answer: "Domani andrò a Milano",
      hint: "Domani + andrò + a + città.",
      explain: "Domani andrò a Milano - завтра я поеду в Милан."
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
      hint: "Pizza è singolare.",
      explain: "Правильно: Mi piace la pizza."
    },
    {
      type: "table",
      question: "Заполни тему",
      headers: ["Тема", "Фраза"],
      rows: [
        ["tempo atmosferico", "Piove."],
        ["salute", ""]
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
      hint: "Salute: sintomi con ho.",
      explain: "Ho la febbre - у меня температура."
    },
    {
      type: "dialog-choice",
      question: "Выбери ответ",
      dialog: [
        { who: "Turista", text: "Scusi, mi può indicare l'uscita?" }
      ],
      options: [
        "Certo, vada dritto.",
        "Vorrei un caffè.",
        "Ho mal di testa.",
        "Il conto, per favore."
      ],
      answer: "Certo, vada dritto.",
      hint: "Richiesta gentile per l'uscita.",
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
      explain: "Queste sono parole per viaggiare.",
      explainWrong: "Неверная пара. Reception = ресепшн, volo = рейс, valigia = чемодан, biglietto = билет, aeroporto = аэропорт."
    },
    {
      type: "gap",
      question: "Вставь правильную форму",
      sentence: "Se piove, ___ a casa.",
      options: ["resto", "resterò", "restai", "restare"],
      answer: "resto",
      hint: "A A1 dopo se per una condizione reale si usa spesso il presente.",
      explain: "Se piove, resto a casa - если идёт дождь, я остаюсь дома."
    },
    {
      type: "error-choice",
      question: "Найди ошибку",
      tokens: [
        { text: "Maria", id: "0" },
        { text: "è", id: "1" },
        { text: "andato", id: "wrong" },
        { text: "a", id: "3" },
        { text: "casa", id: "4" }
      ],
      answer: "wrong",
      hint: "Maria è femminile.",
      explain: "Правильно: Maria è andata a casa."
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
      hint: "Domani si riferisce al futuro.",
      explain: "Domani richiede di solito futuro o presente per un piano."
    },
    {
      type: "build",
      question: "Собери фразу: «Я хотел бы забронировать номер»",
      words: ["Vorrei", "prenotare", "una", "camera"],
      answer: "Vorrei prenotare una camera",
      hint: "Vorrei + infinito.",
      explain: "Vorrei prenotare una camera - я хотел бы забронировать номер."
    },
    {
      type: "choice",
      question: "Какая фраза самая вежливая?",
      options: [
        "Vorrei un caffè, per favore.",
        "Voglio caffè.",
        "Dammi caffè.",
        "Caffè!"
      ],
      answer: "Vorrei un caffè, per favore.",
      hint: "Vorrei + per favore.",
      explain: "Vorrei un caffè, per favore - я хотел бы кофе, пожалуйста."
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
      explain: "Questi sono stati di base.",
      explainWrong: "Неверная пара. Stanco = устал, paura = страх, contento = рад, sonno = сон, sento bene = чувствую себя хорошо."
    }
  ]
};
