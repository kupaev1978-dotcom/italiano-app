window.LESSONS = window.LESSONS || {};

window.LESSONS["a1-u9-l1"] = {
  id: "a1-u9-l1",
  title: "Grande ripasso: presente, passato, futuro",
  level: "A1",
  xp: 40,
  theory: [
    {
      title: "Tre tempi fondamentali",
      summary: "На A1 нужно свободно различать настоящее, прошедшее и будущее. Presente - факты и планы. Passato prossimo - завершённые действия. Futuro semplice - решения, обещания и будущее.",
      rule: [
        "presente: oggi, di solito, sempre, domani в значении решённого плана.",
        "passato prossimo: ieri, l'altro ieri, due giorni fa, la settimana scorsa, l'anno scorso.",
        "futuro semplice: domani, dopodomani, la settimana prossima, l'anno prossimo."
      ],
      table: {
        headers: ["Tempo", "Когда использовать", "Пример"],
        rows: [
          ["presente", "факт, привычка, решённый план", "Oggi lavoro. / Domani vado a Roma."],
          ["passato prossimo", "завершённое действие в прошлом", "Ieri ho lavorato. / Sabato sono andato a Roma."],
          ["futuro semplice", "решение, обещание, будущее", "Domani lavorerò. / Ti chiamerò stasera."]
        ]
      },
      tips: [
        "Секрет: если есть маркер времени, сначала определи его. Ieri почти всегда требует passato prossimo. Domani может требовать presente для плана или futuro для решения.",
        "Самые важные глаголы: andare, fare, vedere, potere, dovere, volere, avere, essere."
      ],
      mistakes: [
        "Не говори: Ieri vado al cinema. Правильно: Ieri sono andato al cinema.",
        "Не говори: Domani andai a Roma. Правильно: Domani vado a Roma или Domani andro a Roma.",
        "Не говори: Ho andato. С andare используется essere: Sono andato."
      ],
      examples: [
        { it: "Oggi studio italiano.", ru: "Сегодня я учу итальянский." },
        { it: "Ieri ho studiato italiano.", ru: "Вчера я учил итальянский." },
        { it: "Domani studiero italiano.", ru: "Завтра я буду учить итальянский." },
        { it: "Sabato sono andato al mare.", ru: "В субботу я ездил на море." }
      ]
    },
    {
      title: "Passato prossimo: avere o essere?",
      summary: "Большинство глаголов использует avere. Глаголы движения, изменения состояния и возвратные глаголы используют essere. С essere participio согласуется с подлежащим.",
      rule: [
        "avere + participio: ho mangiato, hai bevuto, ha dormito, abbiamo parlato, avete comprato, hanno visto.",
        "essere + participio: sono andato / andata, sei partito / partita, e rimasto / rimasta, siamo usciti / uscite, siete tornati / tornate, sono arrivati / arrivate.",
        "Глаголы с essere: andare, venire, partire, arrivare, entrare, uscire, tornare, restare, nascere, morire, diventare, svegliarsi, alzarsi, lavarsi, vestirsi."
      ],
      table: {
        headers: ["Глагол", "Вспомогательный глагол", "Пример"],
        rows: [
          ["mangiare", "avere", "Ho mangiato una pizza."],
          ["vedere", "avere", "Ho visto un film."],
          ["andare", "essere", "Sono andato a Roma."],
          ["partire", "essere", "Siamo partiti alle otto."],
          ["svegliarsi", "essere", "Mi sono svegliato presto."]
        ]
      },
      tips: [
        "Секрет: если действие переходит на объект - есть, пить, смотреть, читать, покупать - почти всегда avere.",
        "Секрет: если субъект сам перемещается или меняет состояние - часто essere."
      ],
      mistakes: [
        "Не говори: Maria e andato. Правильно: Maria e andata.",
        "Не говори: Noi siamo mangiato. Правильно: Noi abbiamo mangiato.",
        "Не говори: Ho partito. Правильно: Sono partito."
      ],
      examples: [
        { it: "Ho comprato il pane.", ru: "Я купил хлеб." },
        { it: "Hai visto Marco?", ru: "Ты видел Марко?" },
        { it: "Sono tornato a casa.", ru: "Я вернулся домой." },
        { it: "Siamo uscite con le amiche.", ru: "Мы вышли с подругами." }
      ],
      dialog: [
        { who: "Anna", text: "Cosa hai fatto ieri?", ru: "Что ты делал вчера?" },
        { who: "Marco", text: "Ho lavorato e poi sono andato al cinema.", ru: "Я работал, а потом пошёл в кино." },
        { who: "Anna", text: "Che film hai visto?", ru: "Какой фильм ты смотрел?" },
        { who: "Marco", text: "Ho visto un film italiano.", ru: "Я смотрел итальянский фильм." }
      ]
    }
  ],
  exercises: [
    {
      type: "choice",
      question: "Как сказать «Вчера я ел пиццу»?",
      options: [
        "Ieri ho mangiato una pizza.",
        "Ieri mangio una pizza.",
        "Ieri mangero una pizza.",
        "Ieri sono mangiato una pizza."
      ],
      answer: "Ieri ho mangiato una pizza.",
      hint: "Mangiare требует avere.",
      explain: "Ieri ho mangiato una pizza - вчера я ел пиццу."
    },
    {
      type: "gap",
      question: "Вставь правильную форму",
      sentence: "Domani ___ a Roma.",
      options: ["andro", "andai", "andaro", "ho andato"],
      answer: "andro",
      hint: "Futuro di andare per io e andro.",
      explain: "Domani andro a Roma - завтра я поеду в Рим."
    },
    {
      type: "table",
      question: "Заполни время глагола",
      headers: ["Фраза", "Tempo"],
      rows: [
        ["Ieri ho lavorato.", "passato prossimo"],
        ["Domani lavorero.", ""]
      ],
      targetRow: 1,
      targetColumn: 1,
      options: ["futuro semplice", "presente", "passato prossimo", "imperfetto"],
      answer: "futuro semplice",
      hint: "Lavorero - futuro.",
      explain: "Domani lavorero - завтра я буду работать."
    },
    {
      type: "match",
      question: "Соедини форму и перевод",
      pairs: [
        { left: "parlo", right: "я говорю" },
        { left: "ho parlato", right: "я говорил" },
        { left: "parlero", right: "я буду говорить" },
        { left: "sono andato", right: "я пошёл" },
        { left: "andro", right: "я пойду" }
      ],
      explain: "Это три главных времени A1.",
      explainWrong: "Неверная пара. Помни: parlo presente, ho parlato passato, parlero futuro."
    },
    {
      type: "error-choice",
      question: "Найди ошибку",
      tokens: [
        { text: "Ieri", id: "0" },
        { text: "vado", id: "wrong" },
        { text: "al", id: "2" },
        { text: "cinema", id: "3" }
      ],
      answer: "wrong",
      hint: "С ieri нужен passato prossimo.",
      explain: "Правильно: Ieri sono andato al cinema."
    },
    {
      type: "dialog-choice",
      question: "Выбери подходящий ответ",
      dialog: [
        { who: "Anna", text: "Cosa hai fatto ieri?" }
      ],
      options: [
        "Ho visto un film.",
        "Vedo un film.",
        "Vedro un film.",
        "Vado al cinema."
      ],
      answer: "Ho visto un film.",
      hint: "Вопрос в passato prossimo.",
      explain: "Ho visto un film - я смотрел фильм."
    },
    {
      type: "fill",
      question: "Напиши «Завтра я буду работать»",
      answer: "Domani lavorero",
      accept: [
        "Domani lavorero",
        "domani lavorero",
        "Lavorero domani",
        "lavorero domani"
      ],
      placeholder: "Напиши по-итальянски",
      hint: "Lavorare -> lavorero.",
      explain: "Domani lavorero - завтра я буду работать."
    },
    {
      type: "build",
      question: "Собери фразу: «Вчера я ел пиццу»",
      words: ["Ieri", "ho", "mangiato", "una", "pizza"],
      answer: "Ieri ho mangiato una pizza",
      hint: "Ieri + ho mangiato.",
      explain: "Ieri ho mangiato una pizza - вчера я ел пиццу."
    },
    {
      type: "choice",
      question: "Какая фраза неверная?",
      options: [
        "Oggi lavoro.",
        "Ieri ho lavorato.",
        "Domani lavorero.",
        "Ieri lavorero."
      ],
      answer: "Ieri lavorero.",
      hint: "Ieri требует прошедшее время.",
      explain: "Правильно: Ieri ho lavorato."
    },
    {
      type: "table",
      question: "Заполни вспомогательный глагол",
      headers: ["Глагол", "Ausiliare"],
      rows: [
        ["andare", "essere"],
        ["mangiare", ""]
      ],
      targetRow: 1,
      targetColumn: 1,
      options: ["avere", "essere", "fare", "andare"],
      answer: "avere",
      hint: "Mangiare usa avere.",
      explain: "mangiare -> ho mangiato."
    }
  ]
};
