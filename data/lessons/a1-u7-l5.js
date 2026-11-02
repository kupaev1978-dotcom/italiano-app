window.LESSONS = window.LESSONS || {};

window.LESSONS["a1-u7-l5"] = {
  id: "a1-u7-l5",
  title: "Richieste gentili: vorrei, posso, mi può",
  level: "A1",
  xp: 35,
  theory: [
    {
      title: "Вежливые просьбы в путешествии",
      summary: "В Италии важно быть вежливым. Вместо voglio лучше использовать vorrei, posso, mi può, scusi, per favore.",
      rule: [
        "Vorrei prenotare una camera. — Я хотел бы забронировать номер.",
        "Vorrei un biglietto per Roma. — Я хотел бы билет до Рима.",
        "Posso pagare con la carta? — Можно заплатить картой?",
        "Mi può aiutare, per favore? — Вы можете мне помочь, пожалуйста?",
        "Mi può indicare la stazione? — Вы можете указать мне вокзал?",
        "Scusi, dov'è l'aeroporto? — Извините, где аэропорт?"
      ],
      table: {
        headers: ["Фраза", "Значение", "Когда использовать"],
        rows: [
          ["Vorrei...", "Я хотел бы...", "заказ, бронь, просьба"],
          ["Posso...?", "Можно...?", "разрешение"],
          ["Mi può...?", "Вы можете мне...?", "вежливая просьба к незнакомцу"],
          ["Scusi...", "Извините...", "начать разговор"]
        ]
      },
      tips: [
        "Секрет: vorrei — это мягкая форма. Она лучше, чем voglio, в большинстве бытовых ситуаций.",
        "Mi può + инфинитив очень полезно: Mi può aiutare, Mi può indicare, Mi può ripetere."
      ],
      mistakes: [
        "Не говори *Voglio camera. Правильно: Vorrei una camera.",
        "Не говори *Mi può aiuta. После può нужен инфинитив: Mi può aiutare.",
        "Не начинай просьбу без scusi/per favore с незнакомцем. Лучше: Scusi, mi può...?"
      ],
      examples: [
        { it: "Vorrei un'informazione, per favore.", ru: "Я хотел бы получить информацию, пожалуйста." },
        { it: "Mi può ripetere, per favore?", ru: "Вы можете повторить, пожалуйста?" },
        { it: "Posso lasciare la valigia qui?", ru: "Можно оставить чемодан здесь?" }
      ]
    },
    {
      title: "Типовые диалоги: отель, вокзал, улица",
      summary: "Эти мини-диалоги можно запоминать целиком. Они очень полезны в реальной поездке.",
      rule: [
        "In hotel: Buongiorno, vorrei una camera per due notti.",
        "Alla stazione: Mi può dire a che ora parte il treno per Firenze?",
        "Per strada: Scusi, come arrivo all'aeroporto?",
        "Al bar: Vorrei un caffè e un'acqua, per favore.",
        "Negozio: Posso provare questa giacca?"
      ],
      table: {
        headers: ["Место", "Фраза"],
        rows: [
          ["hotel", "Vorrei una camera doppia."],
          ["stazione", "A che ora parte il treno?"],
          ["strada", "Come arrivo all'aeroporto?"],
          ["bar", "Vorrei un caffè."],
          ["negozio", "Posso provare questa giacca?"]
        ]
      },
      tips: [
        "Секрет: come arrivo a...? — как мне добраться до...? Очень полезная фраза.",
        "All'aeroporto = a + l'aeroporto. Alla stazione = a + la stazione."
      ],
      mistakes: [
        "Не говори *Come arrivo aeroporto. Правильно: Come arrivo all'aeroporto?",
        "Не говори *Mi può dire che ora parte? Лучше: Mi può dire a che ora parte il treno?",
        "Не теряй per favore в просьбах."
      ],
      examples: [
        { it: "Scusi, come arrivo alla stazione?", ru: "Извините, как мне добраться до вокзала?" },
        { it: "Mi può dire a che ora parte il bus?", ru: "Вы можете сказать, во сколько отправляется автобус?" },
        { it: "Vorrei un'informazione turistica.", ru: "Я хотел бы туристическую информацию." }
      ],
      dialog: [
        { who: "Turista", text: "Scusi, mi può indicare l'uscita?", ru: "Извините, вы можете указать мне выход?" },
        { who: "Passante", text: "Certo, vada dritto e giri a destra.", ru: "Конечно, идите прямо и поверните направо." },
        { who: "Turista", text: "Grazie mille!", ru: "Огромное спасибо!" }
      ]
    }
  ],
  exercises: [
    {
      type: "choice",
      question: "Как вежливо сказать «Я хотел бы номер»?",
      options: [
        "Vorrei una camera.",
        "Voglio camera.",
        "Ho camera.",
        "Sono una camera."
      ],
      answer: "Vorrei una camera.",
      hint: "Vorrei + артикль + существительное.",
      explain: "Vorrei una camera — я хотел бы номер."
    },
    {
      type: "gap",
      question: "Вставь правильную форму",
      sentence: "Mi può ___ , per favore?",
      options: ["aiutare", "aiuto", "aiuti", "aiutiamo"],
      answer: "aiutare",
      hint: "После può нужен инфинитив.",
      explain: "Mi può aiutare, per favore? — Вы можете мне помочь, пожалуйста?"
    },
    {
      type: "table",
      question: "Заполни фразу",
      headers: ["Ситуация", "Фраза"],
      rows: [
        ["вежливая просьба", "Vorrei un caffè."],
        ["разрешение", ""]
      ],
      targetRow: 1,
      targetColumn: 1,
      options: ["Posso pagare con la carta?", "Voglio pagare.", "Ho una carta.", "Sono carta."],
      answer: "Posso pagare con la carta?",
      hint: "Posso...? — можно...?",
      explain: "Posso pagare con la carta? — Можно заплатить картой?"
    },
    {
      type: "error-choice",
      question: "Найди ошибку",
      tokens: [
        { text: "Voglio", id: "wrong" },
        { text: "camera", id: "1" }
      ],
      answer: "wrong",
      hint: "Для вежливой просьбы лучше vorrei, и нужен артикль una.",
      explain: "Правильно: Vorrei una camera."
    },
    {
      type: "dialog-choice",
      question: "Выбери ответ на улице",
      dialog: [
        { who: "Turista", text: "Scusi, come arrivo all'aeroporto?" }
      ],
      options: [
        "Prenda l'autobus numero 10.",
        "Vorrei un caffè.",
        "Ho una valigia.",
        "Il volo parte alle dieci."
      ],
      answer: "Prenda l'autobus numero 10.",
      hint: "Нужен маршрут или совет, как добраться.",
      explain: "Prenda l'autobus numero 10 — сядьте на автобус номер 10."
    },
    {
      type: "match",
      question: "Соедини фразу и перевод",
      pairs: [
        { left: "Mi può indicare la stazione?", right: "Вы можете указать вокзал?" },
        { left: "Posso pagare con la carta?", right: "Можно заплатить картой?" },
        { left: "Vorrei un'informazione.", right: "Я хотел бы информацию." },
        { left: "Come arrivo all'aeroporto?", right: "Как мне добраться до аэропорта?" },
        { left: "Mi può ripetere, per favore?", right: "Вы можете повторить, пожалуйста?" }
      ],
      explain: "Это вежливые дорожные фразы.",
      explainWrong: "Неверная пара. Indicare = указать, pagare = заплатить, informazione = информация, arrivare = добраться, ripetere = повторить."
    },
    {
      type: "fill",
      question: "Напиши «Можно мне повторить?» в значении «Вы можете повторить?»",
      answer: "Mi può ripetere",
      accept: [
        "Mi può ripetere",
        "mi può ripetere",
        "Mi può ripetere?",
        "mi può ripetere?"
      ],
      placeholder: "Напиши по-итальянски",
      hint: "Mi può + инфинитив.",
      explain: "Mi può ripetere? — Вы можете повторить?"
    },
    {
      type: "build",
      question: "Собери фразу: «Я хотел бы билет до Флоренции»",
      words: ["Vorrei", "un", "biglietto", "per", "Firenze"],
      answer: "Vorrei un biglietto per Firenze",
      hint: "Vorrei + un biglietto + per + город.",
      explain: "Vorrei un biglietto per Firenze — я хотел бы билет до Флоренции."
    },
    {
      type: "choice",
      question: "Какая фраза самая вежливая для просьбы?",
      options: [
        "Vorrei un caffè, per favore.",
        "Voglio caffè.",
        "Dammi caffè.",
        "Caffè!"
      ],
      answer: "Vorrei un caffè, per favore.",
      hint: "Vorrei + per favore — вежливо.",
      explain: "Vorrei un caffè, per favore — я хотел бы кофе, пожалуйста."
    },
    {
      type: "error-choice",
      question: "Найди ошибку",
      sentence: "Mi può aiuta?",
      options: ["Mi", "può", "aiuta"],
      answer: "aiuta",
      hint: "После può нужен инфинитив aiutare.",
      explain: "Правильно: Mi può aiutare?"
    }
  ]
};
