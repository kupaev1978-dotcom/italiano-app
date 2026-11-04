window.LESSONS = window.LESSONS || {};

window.LESSONS["a1-u8-l3"] = {
  id: "a1-u8-l3",
  title: "Participi passati irregolari",
  level: "A1",
  xp: 35,
  theory: [
    {
      title: "Самые важные неправильные participi",
      summary: "Многие частотные глаголы имеют неправильный participio passato. Их лучше запомнить как отдельные формы.",
      rule: [
        "fare -> fatto",
        "dire -> detto",
        "scrivere -> scritto",
        "leggere -> letto",
        "prendere -> preso",
        "mettere -> messo",
        "vedere -> visto",
        "aprire -> aperto",
        "chiudere -> chiuso",
        "rompere -> rotto",
        "scegliere -> scelto",
        "vincere -> vinto",
        "perdere -> perso",
        "tenere -> tenuto"
      ],
      table: {
        headers: ["Infinitivo", "Participio passato", "Пример"],
        rows: [
          ["fare", "fatto", "Ho fatto colazione."],
          ["dire", "detto", "Hai detto la verità?"],
          ["scrivere", "scritto", "Ho scritto un messaggio."],
          ["leggere", "letto", "Ho letto un libro."],
          ["vedere", "visto", "Ho visto un film."],
          ["prendere", "preso", "Ho preso l'autobus."],
          ["aprire", "aperto", "Ho aperto la finestra."],
          ["chiudere", "chiuso", "Ho chiuso la porta."]
        ]
      },
      tips: [
        "Секрет: большинство неправильных participi — у глаголов на -ERE.",
        "Запомни топ-10: fatto, detto, scritto, letto, preso, messo, visto, aperto, chiuso, rotto."
      ],
      mistakes: [
        "Не говори *faced, *facuto, *fadetto. Правильно: fatto.",
        "Не говори *scrivuto. Правильно: scritto.",
        "Не говори *veduto. Правильно: visto."
      ],
      examples: [
        { it: "Ho fatto i compiti.", ru: "Я сделал домашнее задание." },
        { it: "Hai detto bene.", ru: "Ты сказал правильно." },
        { it: "Ho scritto una lettera.", ru: "Я написал письмо." },
        { it: "Ho letto un articolo.", ru: "Я прочитал статью." }
      ]
    },
    {
      title: "Бытовые фразы с неправильными participi",
      summary: "Эти фразы сразу дают возможность рассказать о прошлом в быту, учебе и путешествиях.",
      rule: [
        "Ho fatto colazione. — Я позавтракал.",
        "Ho detto la verità. — Я сказал правду.",
        "Ho scritto un messaggio. — Я написал сообщение.",
        "Ho letto un libro. — Я прочитал книгу.",
        "Ho preso il treno. — Я сел на поезд.",
        "Ho visto Marco. — Я видел Марко.",
        "Ho aperto la porta. — Я открыл дверь.",
        "Ho chiuso la finestra. — Я закрыл окно.",
        "Ho rotto il bicchiere. — Я разбил стакан.",
        "Ho perso le chiavi. — Я потерял ключи."
      ],
      table: {
        headers: ["Фраза", "Значение"],
        rows: [
          ["Ho fatto colazione.", "Я позавтракал."],
          ["Ho preso l'autobus.", "Я сел на автобус."],
          ["Ho visto un film.", "Я посмотрел фильм."],
          ["Ho perso le chiavi.", "Я потерял ключи."],
          ["Ho scelto il caffè.", "Я выбрал кофе."]
        ]
      },
      tips: [
        "Секрет: prendere часто означает «брать», «саждаться на транспорт», «покупать» в разговорной речи.",
        "Perdere может значить «терять» и «проигрывать»: ho perso le chiavi / ho la partita."
      ],
      mistakes: [
        "Не говори *ho preso il autobus без артикля. Лучше: ho preso l'autobus.",
        "Не путай aperto и chiuso: aperto = открыт, chiuso = закрыт.",
        "Не забывай, что visto не меняется с avere: Maria ha visto, Marco ha visto."
      ],
      examples: [
        { it: "Cosa hai preso al bar?", ru: "Что ты взял в баре?" },
        { it: "Ho preso un caffè.", ru: "Я взял кофе." },
        { it: "Hai visto la mia borsa?", ru: "Ты видел мою сумку?" },
        { it: "Ho perso il treno.", ru: "Я опоздал на поезд / потерял поезд." }
      ],
      dialog: [
        { who: "Anna", text: "Hai visto il mio telefono?", ru: "Ты видел мой телефон?" },
        { who: "Marco", text: "Sì, l'ho visto sul tavolo.", ru: "Да, я видел его на столе." },
        { who: "Anna", text: "Grazie!", ru: "Спасибо!" }
      ]
    }
  ],
  exercises: [
    {
      type: "match",
      question: "Соедини инфинитив и participio passato",
      pairs: [
        { left: "fare", right: "fatto" },
        { left: "dire", right: "detto" },
        { left: "scrivere", right: "scritto" },
        { left: "leggere", right: "letto" },
        { left: "vedere", right: "visto" }
      ],
      explain: "Это самые частые неправильные participi.",
      explainWrong: "Неверная пара. Помни: fare -> fatto, dire -> detto, scrivere -> scritto, leggere -> letto, vedere -> visto."
    },
    {
      type: "gap",
      question: "Вставь правильную форму",
      sentence: "Ho ___ una lettera.",
      options: ["scritto", "scrivo", "scrivere", "scrivuto"],
      answer: "scritto",
      hint: "Participio di scrivere è scritto.",
      explain: "Ho scritto una lettera — я написал письмо."
    },
    {
      type: "table",
      question: "Заполни participio passato",
      headers: ["Глагол", "Participio"],
      rows: [
        ["prendere", "preso"],
        ["mettere", ""]
      ],
      targetRow: 1,
      targetColumn: 1,
      options: ["messo", "mettuto", "metto", "mettere"],
      answer: "messo",
      hint: "mettere -> messo.",
      explain: "mettere -> messo."
    },
    {
      type: "error-choice",
      question: "Найди ошибку",
      tokens: [
        { text: "Ho", id: "0" },
        { text: "facuto", id: "wrong" },
        { text: "colazione", id: "2" }
      ],
      answer: "wrong",
      hint: "Participio di fare è fatto.",
      explain: "Правильно: Ho fatto colazione."
    },
    {
      type: "dialog-choice",
      question: "Выбери подходящий ответ",
      dialog: [
        { who: "Anna", text: "Hai visto Marco?" }
      ],
      options: [
        "Sì, ho visto Marco.",
        "Sì, sono visto Marco.",
        "Sì, ho vedere Marco.",
        "Sì, ho visto a Marco."
      ],
      answer: "Sì, ho visto Marco.",
      hint: "vedere -> visto, вспомогательный глагол avere.",
      explain: "Sì, ho visto Marco — Да, я видел Марко."
    },
    {
      type: "choice",
      question: "Какой participio passato у глагола leggere?",
      options: ["letto", "leggoto", "legguto", "leggito"],
      answer: "letto",
      hint: "leggere -> letto.",
      explain: "leggere -> letto."
    },
    {
      type: "fill",
      question: "Напиши «Я сказал правду»",
      answer: "Ho detto la verità",
      accept: [
        "Ho detto la verità",
        "ho detto la verità",
        "Io ho detto la verità",
        "io ho detto la verità",
        "Ho detto la verita",
        "ho detto la verita"
      ],
      placeholder: "Напиши по-итальянски",
      hint: "dire -> detto.",
      explain: "Ho detto la verità — я сказал правду."
    },
    {
      type: "build",
      question: "Собери фразу: «Она открыла окно»",
      words: ["Ha", "aperto", "la", "finestra"],
      answer: "Ha aperto la finestra",
      hint: "aprire -> aperto.",
      explain: "Ha aperto la finestra — она открыла окно."
    },
    {
      type: "error-choice",
      question: "Найди ошибку",
      sentence: "Ho scrivo una lettera.",
      options: ["Ho", "scrivo", "una", "lettera"],
      answer: "scrivo",
      hint: "Нужен participio passato: scritto.",
      explain: "Правильно: Ho scritto una lettera."
    },
    {
      type: "table",
      question: "Заполни перевод",
      headers: ["Italiano", "Русский"],
      rows: [
        ["Ho preso l'autobus.", "Я сел на автобус."],
        ["Ho perso le chiavi.", ""]
      ],
      targetRow: 1,
      targetColumn: 1,
      options: ["Я потерял ключи.", "Я выиграл.", "Я выбрал.", "Я закрыл."],
      answer: "Я потерял ключи.",
      hint: "perdere -> perso.",
      explain: "Ho perso le chiavi — я потерял ключи."
    }
  ]
};
