window.LESSONS = window.LESSONS || {};

window.LESSONS["a2-u3-l3"] = {
  id: "a2-u3-l3",
  title: "Participio passato con i pronomi diretti",
  level: "A2",
  xp: 40,
  theory: [
    {
      title: "Quando il participio cambia",
      summary: "Con avere, di solito il participio passato non cambia: Ho visto Marco. Ho visto Maria. Ma se il pronome diretto sta prima dell'ausiliare, il participio si accorda con il pronome.",
      rule: [
        "lo -> participio maschile singolare: l'ho visto.",
        "la -> participio femminile singolare: l'ho vista.",
        "li -> participio maschile plurale: li ho visti.",
        "le -> participio femminile plurale: le ho viste."
      ],
      table: {
        headers: ["Domanda", "Risposta", "Accordo"],
        rows: [
          ["Hai visto Marco?", "Sì, l'ho visto.", "maschile singolare"],
          ["Hai visto Maria?", "Sì, l'ho vista.", "femminile singolare"],
          ["Hai visto i ragazzi?", "Sì, li ho visti.", "maschile plurale"],
          ["Hai visto le ragazze?", "Sì, le ho viste.", "femminile plurale"]
        ]
      },
      tips: [
        "Secreto: non guardare il soggetto, guarda il pronome che sostituisce l'oggetto.",
        "Secreto: la terminazione segue il pronome: -o per lo, -a per la, -i per li, -e per le."
      ],
      mistakes: [
        "Non dire *Ho vista Maria senza pronome. Corretto: Ho visto Maria.",
        "Non dire *Li ho visto. Corretto: Li ho visti.",
        "Non dire *Le ho visto. Corretto: Le ho viste."
      ],
      examples: [
        { it: "Hai comprato la torta? Sì, l'ho comprata.", ru: "Ты купил торт? Да, я купила его." },
        { it: "Hai letto i libri? Sì, li ho letti.", ru: "Ты прочитал книги? Да, я прочитал их." },
        { it: "Hai chiuso le finestre? Sì, le ho chiuse.", ru: "Ты закрыл окна? Да, я закрыл их." },
        { it: "Hai visto Anna? Sì, l'ho vista stamattina.", ru: "Ты видел Анну? Да, я видел её утром." }
      ]
    },
    {
      title: "Participi regolari e irregolari con lo/la/li/le",
      summary: "La regola dell'accordo vale anche per i participi irregolari. Impara le forme più comuni.",
      rule: [
        "mangiato -> mangiata, mangiati, mangiate.",
        "comprato -> comprata, comprati, comprate.",
        "visto -> vista, visti, viste.",
        "fatto -> fatta, fatti, fatte.",
        "detto -> detta, detti, dette.",
        "scritto -> scritta, scritti, scritte.",
        "preso -> presa, presi, prese.",
        "aperto -> aperta, aperti, aperte.",
        "chiuso -> chiusa, chiusi, chiuse."
      ],
      table: {
        headers: ["Participio base", "la", "li", "le"],
        rows: [
          ["visto", "vista", "visti", "viste"],
          ["fatto", "fatta", "fatti", "fatte"],
          ["preso", "presa", "presi", "prese"],
          ["aperto", "aperta", "aperti", "aperte"],
          ["chiuso", "chiusa", "chiusi", "chiuse"]
        ]
      },
      tips: [
        "Secreto: se il pronome è la, pensa femminile singolare: -a. Se è le, femminile plurale: -e.",
        "Secreto: con l'elisione, la e lo diventano l', ma l'accordo resta: l'ho vista, l'ho visto."
      ],
      mistakes: [
        "Non dire *L'ho visto Maria. Corretto: Ho visto Maria oppure L'ho vista.",
        "Non dire *Le ho aperto la porta. Se la porta è sostituita: L'ho aperta.",
        "Non confondere l'accordo con essere e con pronome diretto: con essere accordo col soggetto; con lo/la/li/le accordo col pronome."
      ],
      examples: [
        { it: "Hai invitato le amiche? Sì, le ho invitate.", ru: "Ты пригласил подруг? Да, я пригласил их." },
        { it: "Hai scritto le lettere? Sì, le ho scritte.", ru: "Ты написал письма? Да, я написал их." },
        { it: "Hai preso i biglietti? Sì, li ho presi.", ru: "Ты взял билеты? Да, я взял их." }
      ],
      dialog: [
        { who: "Anna", text: "Hai visto le mie chiavi?", ru: "Ты видел мои ключи?" },
        { who: "Marco", text: "Sì, le ho viste sul tavolo.", ru: "Да, я видел их на столе." }
      ]
    }
  ],
  exercises: [
    {
      type: "gap",
      question: "Completa il participio",
      sentence: "Hai comprato la torta? Sì, l'ho ___.",
      options: ["comprata", "comprato", "comprati", "comprate"],
      answer: "comprata",
      hint: "la torta è femminile singolare.",
      explain: "l'ho comprata."
    },
    {
      type: "table",
      question: "Completa l'accordo",
      headers: ["Pronome", "Participio di vedere"],
      rows: [
        ["la", "vista"],
        ["le", ""]
      ],
      targetRow: 1,
      targetColumn: 1,
      options: ["viste", "visto", "visti", "vista"],
      answer: "viste",
      hint: "le è femminile plurale.",
      explain: "le ho viste."
    },
    {
      type: "error-choice",
      question: "Trova l'errore",
      sentence: "Li ho visto.",
      options: ["Li", "ho", "visto"],
      answer: "visto",
      hint: "li è maschile plurale, serve visti.",
      explain: "Corretto: Li ho visti."
    },
    {
      type: "match",
      question: "Collega domanda e risposta corretta",
      pairs: [
        { left: "Hai visto Maria?", right: "Sì, l'ho vista." },
        { left: "Hai letto i libri?", right: "Sì, li ho letti." },
        { left: "Hai comprato le mele?", right: "Sì, le ho comprate." },
        { left: "Hai aperto la finestra?", right: "Sì, l'ho aperta." },
        { left: "Hai chiuso le porte?", right: "Sì, le ho chiuse." }
      ],
      explain: "Il participio si accorda con lo/la/li/le.",
      explainWrong: "Coppia sbagliata. Controlla genere e numero del pronome."
    },
    {
      type: "dialog-choice",
      question: "Scegli la risposta corretta",
      dialog: [
        { who: "Anna", text: "Hai invitato le amiche?" }
      ],
      options: [
        "Sì, le ho invitate.",
        "Sì, l'ho invitata.",
        "Sì, li ho invitati.",
        "Sì, ho invitate."
      ],
      answer: "Sì, le ho invitate.",
      hint: "le amiche -> le, femminile plurale.",
      explain: "Sì, le ho invitate."
    },
    {
      type: "choice",
      question: "Con il pronome la, il participio di mangiare diventa...",
      options: ["mangiata", "mangiato", "mangiati", "mangiate"],
      answer: "mangiata",
      hint: "la è femminile singolare.",
      explain: "l'ho mangiata."
    },
    {
      type: "fill",
      question: "Scrivi Li ho comprati",
      answer: "Li ho comprati",
      accept: [
        "Li ho comprati",
        "li ho comprati"
      ],
      placeholder: "Scrivi in italiano",
      hint: "li + participio maschile plurale.",
      explain: "Li ho comprati."
    },
    {
      type: "build",
      question: "Costruisci: L'ho vista",
      words: ["L'ho", "vista"],
      answer: "L'ho vista",
      hint: "la + ho -> l'ho, femminile singolare.",
      explain: "L'ho vista."
    },
    {
      type: "error-choice",
      question: "Trova l'errore",
      tokens: [
        { text: "Ho", id: "0" },
        { text: "vista", id: "wrong" },
        { text: "Maria.", id: "2" }
      ],
      answer: "wrong",
      hint: "Senza pronome diretto prima dell'ausiliare, il participio con avere non cambia.",
      explain: "Corretto: Ho visto Maria."
    },
    {
      type: "table",
      question: "Correggi l'accordo",
      headers: ["Frase sbagliata", "Corretto"],
      rows: [
        ["Le ho visto.", "Le ho viste."],
        ["Li ho vista.", ""]
      ],
      targetRow: 1,
      targetColumn: 1,
      options: ["Li ho visti.", "Li ho vista.", "Li ho visto.", "Li ho viste."],
      answer: "Li ho visti.",
      hint: "li è maschile plurale.",
      explain: "Corretto: Li ho visti."
    }
  ]
};
