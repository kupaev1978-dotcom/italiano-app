window.LESSONS = window.LESSONS || {};

window.LESSONS["a2-u1-l3"] = {
  id: "a2-u1-l3",
  title: "Abitudini nel passato: da bambino, una volta, di solito",
  level: "A2",
  xp: 35,
  theory: [
    {
      title: "Marcatori delle abitudini passate",
      summary: "L'imperfetto ama le espressioni che indicano ripetizione o durata nel passato: da bambino, quando ero piccolo, di solito, sempre, spesso, tutti i giorni, una volta, a quell'epoca.",
      rule: [
        "da bambino / da bambina -> da piccolo/da piccola",
        "quando ero piccolo / quando ero piccola",
        "di solito",
        "sempre",
        "spesso",
        "tutti i giorni",
        "una volta",
        "a quell'epoca",
        "ai miei tempi"
      ],
      table: {
        headers: ["Marcatore", "Esempio"],
        rows: [
          ["da bambino", "Da bambino giocavo a calcio."],
          ["quando ero piccolo", "Quando ero piccolo, vivevo in campagna."],
          ["di solito", "Di solito facevo colazione alle sette."],
          ["tutti i giorni", "Tutti i giorni camminavo nel parco."],
          ["una volta", "Una volta andavo al mare ogni estate."]
        ]
      },
      tips: [
        "Secreto: se vedi «sempre / spesso / tutti i giorni / di solito» nel passato, quasi certamente serve l'imperfetto.",
        "Secreto: «una volta» qui significa «un tempo / in passato», non «una sola volta»."
      ],
      mistakes: [
        "Non dire *da bambino ho giocato sempre. Per abitudine: da bambino giocavo sempre.",
        "Non confondere «una volta = un tempo» con «una volta = una sola volta».",
        "Non usare il futuro con marcatori passati."
      ],
      examples: [
        { it: "Da ragazza leggevo molti libri.", ru: "В юности я читала много книг." },
        { it: "Di solito pranzavamo alle tredici.", ru: "Обычно мы обедали в тринадцать." },
        { it: "Tutti i giorni sentivo la radio.", ru: "Каждый день я слушал радио." },
        { it: "Una volta gli amici si vedevano di piu.", ru: "Раньше друзья виделись чаще." }
      ]
    },
    {
      title: "Raccontare l'infanzia",
      summary: "Un mini-racconto al imperfetto: dove vivevi, cosa facevi, chi erano le persone intorno a te.",
      rule: [
        "Quando ero piccolo, vivevo in un paese vicino al fiume.",
        "La mia casa era piccola ma accogliente.",
        "I miei vicini erano persone gentili.",
        "D'estate giocavo sempre fuori con gli amici.",
        "La sera mia madre raccontava una storia."
      ],
      table: {
        headers: ["Aspetto", "Frase esempio"],
        rows: [
          ["luogo", "Vivevo in campagna."],
          ["casa", "La casa era vecchia ma bella."],
          ["persone", "I nonni erano severi ma buoni."],
          ["azione abituale", "Giocavo a pallone."],
          ["routine", "Andavo a letto presto."]
        ]
      },
      tips: [
        "Secreto: per il racconto dell'infanzia mescola essere (descrizioni) e verbi regolari/irregolari (abitudini).",
        "Secreto: «raccontava una storia» = habits of narration, imperfetto perfetto qui."
      ],
      mistakes: [
        "Non dire *la casa era piccole. Accordo: era piccola.",
        "Non dire *i vicini era gentili. Plurale: erano gentili.",
        "Non passare al passato prossimo per un'abitudine lunga."
      ],
      examples: [
        { it: "Da bambino adoravo il gelato.", ru: "Ребёнком я обожал мороженое." },
        { it: "Mio padre lavorava in fabbrica.", ru: "Мой отец работал на фабрике." },
        { it: "La domenica andavamo in chiesa.", ru: "По воскресеньям мы ходили в церковь." }
      ],
      dialog: [
        { who: "Anna", text: "Com'era la tua infanzia?", ru: "Каково было твоё детство?" },
        { who: "Marco", text: "Bellissima. Vivevo in campagna e giocavo sempre all'aperto.", ru: "Прекрасное. Я жил в деревне и всегда играл на улице." }
      ]
    }
  ],
  exercises: [
    {
      type: "gap",
      question: "Inserisci il marcatore giusto",
      sentence: "___ bambino, giocavo a calcio tutti i giorni.",
      options: ["Da", "A", "In", "Per"],
      answer: "Da",
      hint: "Da bambino = in quanto bambino.",
      explain: "Da bambino giocavo a calcio."
    },
    {
      type: "table",
      question: "Collega marcatore e tempo verbale",
      headers: ["Marcatore", "Tempo tipico"],
      rows: [
        ["sempre (nel passato)", "imperfetto"],
        ["ieri sera (evento finito)", ""]
      ],
      targetRow: 1,
      targetColumn: 1,
      options: ["passato prossimo", "imperfetto", "futuro", "presente"],
      answer: "passato prossimo",
      hint: "Evento puntuale concluso -> passato prossimo.",
      explain: "ieri sera -> passato prossimo (lo vedremo in A2-U2)."
    },
    {
      type: "error-choice",
      question: "Trova l'errore",
      tokens: [
        { text: "Di", id: "0" },
        { text: "solito", id: "1" },
        { text: "ho fatto", id: "wrong" },
        { text: "colazione", id: "3" },
        { text: "alle", id: "4" },
        { text: "sette", id: "5" }
      ],
      answer: "wrong",
      hint: "Di solito + abitudine -> imperfetto facevo.",
      explain: "Corretto: Di solito facevo colazione alle sette."
    },
    {
      type: "dialog-choice",
      question: "Scegli la risposta",
      dialog: [
        { who: "Anna", text: "Cosa facevi tutti i giorni da studente?" }
      ],
      options: [
        "Andavo in biblioteca e studiavo.",
        "Sono andato in biblioteca ieri.",
        "Andro in biblioteca domani.",
        "Vado in biblioteca adesso."
      ],
      answer: "Andavo in biblioteca e studiavo.",
      hint: "Tutti i giorni da studente -> imperfetto.",
      explain: "Andavo in biblioteca e studiavo."
    },
    {
      type: "match",
      question: "Collega frase e traduzione",
      pairs: [
        { left: "Da piccolo vivevo in campagna.", right: "В детстве я жил в деревне." },
        { left: "La sera mia madre raccontava storie.", right: "Вечером мама рассказывала истории." },
        { left: "I miei amici erano simpatici.", right: "Мои друзья были славные." },
        { left: "Tutti i giorni camminavo nel parco.", right: "Каждый день я гулял в парке." },
        { left: "Una volta si stava meglio.", right: "Раньше было лучше." }
      ],
      explain: "Tutte abitudini e descrizioni al imperfetto.",
      explainWrong: "Coppia sbagliata. Rileggi i marcatori: da piccolo, tutti i giorni, una volta, erano."
    },
    {
      type: "fill",
      question: "Scrivi «Quando ero piccola leggevo molto»",
      answer: "Quando ero piccola leggevo molto",
      accept: [
        "Quando ero piccola leggevo molto",
        "quando ero piccola leggevo molto",
        "Da piccola leggevo molto",
        "da piccola leggevo molto"
      ],
      placeholder: "Scrivi in italiano",
      hint: "Quando ero piccola + leggevo.",
      explain: "Quando ero piccola leggevo molto."
    },
    {
      type: "build",
      question: "Costruisci: «Di solito pranzavamo alle tredici»",
      words: ["Di", "solito", "pranzavamo", "alle", "tredici"],
      answer: "Di solito pranzavamo alle tredici",
      hint: "Di solito + noi imperfetto.",
      explain: "Di solito pranzavamo alle tredici."
    },
    {
      type: "choice",
      question: "Quale frase racconta un'abitudine passata?",
      options: [
        "La domenica andavamo dai nonni.",
        "Domenica sono andato dai nonni.",
        "Domenica andro dai nonni.",
        "Domenica vado dai nonni."
      ],
      answer: "La domenica andavamo dai nonni.",
      hint: "La domenica = ogni domenica, abitudine.",
      explain: "La domenica andavamo dai nonni."
    },
    {
      type: "table",
      question: "Completa l'accordo",
      headers: ["Soggetto", "Frase"],
      rows: [
        ["Io (m)", "ero timido"],
        ["Io (f)", ""]
      ],
      targetRow: 1,
      targetColumn: 1,
      options: ["ero timida", "ero timido", "era timida", "erano timide"],
      answer: "ero timida",
      hint: "Femminile singolare -> timida.",
      explain: "Io (f) ero timida."
    },
    {
      type: "error-choice",
      question: "Trova l'errore",
      sentence: "Da bambino ho giocato sempre fuori.",
      options: ["Da", "bambino", "ho giocato", "sempre", "fuori"],
      answer: "ho giocato",
      hint: "Sempre + infanzia -> imperfetto giocavo.",
      explain: "Corretto: Da bambino giocavo sempre fuori."
    }
  ]
};
