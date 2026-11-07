window.LESSONS = window.LESSONS || {};

window.LESSONS["a2-u1-l1"] = {
  id: "a2-u1-l1",
  title: "Imperfetto regolare: parlavo, credevo, dormivo",
  level: "A2",
  xp: 40,
  theory: [
    {
      title: "Che cos'e l'imperfetto?",
      summary: "L'imperfetto describe il passato come sfondo: abitudini, stati, descrizioni e azioni senza un inizio o una fine precisi. Per il russo e vicino a «я говорил / я бывал / я обычно делал», а не к одноразовому «я поговорил».",
      rule: [
        "Imperfetto regolare si forma togliendo -are, -ere, -ire e aggiungendo le desinenze dell'imperfetto.",
        "-ARE -> -avo, -avi, -ava, -avamo, -avate, -avano.",
        "-ERE -> -evo, -evi, -eva, -evamo, -evate, -evano.",
        "-IRE -> -ivo, -ivi, -iva, -ivamo, -ivate, -ivano.",
        "parlare -> parlavo, parlavi, parlava, parlavamo, parlavate, parlavano.",
        "credere -> credevo, credevi, credeva, credevamo, credevate, credevano.",
        "dormire -> dormivo, dormivi, dormiva, dormivamo, dormivate, dormivano."
      ],
      table: {
        headers: ["Persona", "parlare", "credere", "dormire"],
        rows: [
          ["io", "parlavo", "credevo", "dormivo"],
          ["tu", "parlavi", "credevi", "dormivi"],
          ["lui / lei", "parlava", "credeva", "dormiva"],
          ["noi", "parlavamo", "credevamo", "dormivamo"],
          ["voi", "parlavate", "credevate", "dormivate"],
          ["loro", "parlavano", "credevano", "dormivano"]
        ]
      },
      tips: [
        "Secreto: le desinenze sono quasi regolari per tutti. Impara bene -avo / -evo / -ivo per io, e il resto segue lo schema.",
        "Secreto: l'imperfetto non indica un'azione conclusa. Per un evento puntuale serve il passato prossimo (lo vedremo in A2-U2)."
      ],
      mistakes: [
        "Non dire *io parlavo ieri sera una volta sola se intendi un evento finito; meglio ho parlato. Ma per un'abitudine: da ragazzo parlavo poco.",
        "Non confondere *parlai (passato remoto, non A2) con parlavo (imperfetto).",
        "Non dimenticare la desinenza: *io parla e sbagliato, serve parlavo."
      ],
      examples: [
        { it: "Da piccolo giocavo sempre in giardino.", ru: "Da pequeño yo siempre jugaba en el jardin." },
        { it: "Lei parlava italiano molto bene.", ru: "Она говорила по-итальянски очень хорошо." },
        { it: "Noi credevamo nelle favole.", ru: "Мы верили в сказки." },
        { it: "Loro dormivano fino a tardi.", ru: "Они спали допоздна." }
      ]
    },
    {
      title: "Verbi regolari utili per l'imperfetto",
      summary: "Questi verbi compaiono spesso nei racconti al passato: lavorare, studiare, mangiare, bere, guardare, ascoltare, vivere, abitare.",
      rule: [
        "lavorare -> lavoravo",
        "studiare -> studiavo",
        "mangiare -> mangiavo",
        "bere -> bevevo (irregolare, lo vedi in L2)",
        "guardare -> guardavo",
        "ascoltare -> ascoltavo",
        "vivere -> vivevo",
        "abitare -> abitavo",
        "camminare -> camminavo",
        "parlare -> parlavo"
      ],
      table: {
        headers: ["Infinito", "Io imperfetto", "Frase esempio"],
        rows: [
          ["lavorare", "lavoravo", "Lavoravo in una fabbrica."],
          ["studiare", "studiavo", "Studiavo tutte le sere."],
          ["mangiare", "mangiavo", "Mangiavo poca carne."],
          ["guardare", "guardavo", "Guardavo la TV la sera."],
          ["abitare", "abitavo", "Abitavo in un paese piccolo."]
        ]
      },
      tips: [
        "Secreto: mangio / beve / guardo al presente diventano mangiavo / bevevo / guardavo all'imperfetto. Nota la -i- in mangiavo e la -v- in bevevo.",
        "Secreto: abitare e vivere sono quasi sinonimi qui: abitavo a Roma / vivevo a Roma."
      ],
      mistakes: [
        "Non dire *mangiavo con la -gi- persa: e mangiavo, non *magiavo.",
        "Non dire *abitavo a con citta sbagliata: abitavo a Roma, abitavo in Italia.",
        "Non usare il presente per un'abitudine passata: *lavoro in fabbrica da ragazzo -> lavoravo."
      ],
      examples: [
        { it: "Prima lavoravo in un bar.", ru: "Раньше я работал в баре." },
        { it: "Da studente studiavo molto.", ru: "Студентом я много учился." },
        { it: "La sera guardavo un film.", ru: "Вечером я смотрел фильм." },
        { it: "Abitavo vicino al mare.", ru: "Я жил у моря." }
      ],
      dialog: [
        { who: "Anna", text: "Che lavoro facevi prima?", ru: "Какую работу ты делал раньше?" },
        { who: "Marco", text: "Lavoravo in un ristorante, ma non mi piaceva.", ru: "Я работал в ресторане, но мне не нравилось." }
      ]
    }
  ],
  exercises: [
    {
      type: "choice",
      question: "Come si dice «io parlavo» all'imperfetto?",
      options: ["parlavo", "parlo", "parlai", "parlerò"],
      answer: "parlavo",
      hint: "Desinenza -avo per io con verbi -ARE.",
      explain: "parlavo = io parlavo (imperfetto)."
    },
    {
      type: "gap",
      question: "Inserisci la forma corretta",
      sentence: "Da bambino ___ sempre in giardino.",
      options: ["giocavo", "gioco", "giocai", "giocherò"],
      answer: "giocavo",
      hint: "Abitudine nel passato -> imperfetto.",
      explain: "Da bambino giocavo sempre in giardino."
    },
    {
      type: "table",
      question: "Completa la coniugazione",
      headers: ["Persona", "Forma"],
      rows: [
        ["io", "credevo"],
        ["tu", ""],
        ["noi", "credevamo"]
      ],
      targetRow: 1,
      targetColumn: 1,
      options: ["credevi", "credevo", "credeva", "credevano"],
      answer: "credevi",
      hint: "Tu + -evi per verbi -ERE.",
      explain: "tu credevi."
    },
    {
      type: "match",
      question: "Collega infinito e imperfetto (io)",
      pairs: [
        { left: "lavorare", right: "lavoravo" },
        { left: "studiare", right: "studiavo" },
        { left: "dormire", right: "dormivo" },
        { left: "credere", right: "credevo" },
        { left: "abitare", right: "abitavo" }
      ],
      explain: "-ARE -> -avo, -ERE -> -evo, -IRE -> -ivo.",
      explainWrong: "Coppia sbagliata. Ricorda: lavorare->lavoravo, studiare->studiavo, dormire->dormivo, credere->credevo, abitare->abitavo."
    },
    {
      type: "error-choice",
      question: "Trova l'errore",
      tokens: [
        { text: "Da", id: "0" },
        { text: "ragazzo", id: "1" },
        { text: "lavoro", id: "wrong" },
        { text: "in", id: "3" },
        { text: "fabbrica", id: "4" }
      ],
      answer: "wrong",
      hint: "Abitudine passata -> imperfetto lavoravo.",
      explain: "Corretto: Da ragazzo lavoravo in fabbrica."
    },
    {
      type: "dialog-choice",
      question: "Scegli la risposta giusta",
      dialog: [
        { who: "Anna", text: "Cosa facevi la sera da studente?" }
      ],
      options: [
        "Studiavo e guardavo la TV.",
        "Studio e guardo la TV.",
        "Studierò e guarderò la TV.",
        "Ho studiato ieri."
      ],
      answer: "Studiavo e guardavo la TV.",
      hint: "Domanda sulle abitudini passate -> imperfetto.",
      explain: "Studiavo e guardavo la TV."
    },
    {
      type: "fill",
      question: "Scrivi «Noi abitavamo vicino al mare»",
      answer: "Noi abitavamo vicino al mare",
      accept: [
        "Noi abitavamo vicino al mare",
        "noi abitavamo vicino al mare",
        "Abitavamo vicino al mare",
        "abitavamo vicino al mare"
      ],
      placeholder: "Scrivi in italiano",
      hint: "Noi + -avamo.",
      explain: "Abitavamo vicino al mare."
    },
    {
      type: "build",
      question: "Costruisci: «Loro dormivano fino a tardi»",
      words: ["Loro", "dormivano", "fino", "a", "tardi"],
      answer: "Loro dormivano fino a tardi",
      hint: "Loro + -ivano per -IRE.",
      explain: "Loro dormivano fino a tardi."
    },
    {
      type: "choice",
      question: "Quale frase descrive un'abitudine passata?",
      options: [
        "Mangiavo pasta ogni giorno.",
        "Ho mangiato pasta ieri.",
        "Mangerò pasta domani.",
        "Mangio pasta adesso."
      ],
      answer: "Mangiavo pasta ogni giorno.",
      hint: "Ogni giorno + passato -> imperfetto.",
      explain: "Mangiavo pasta ogni giorno = abitudine."
    },
    {
      type: "table",
      question: "Completa la desinenza",
      headers: ["Verbo", "Io"],
      rows: [
        ["parlare", "parlavo"],
        ["dormire", ""]
      ],
      targetRow: 1,
      targetColumn: 1,
      options: ["dormivo", "dormavo", "dormevo", "dormo"],
      answer: "dormivo",
      hint: "-IRE -> -ivo.",
      explain: "dormire -> dormivo."
    }
  ]
};
