window.LESSONS = window.LESSONS || {};

window.LESSONS["a2-u3-l6"] = {
  id: "a2-u3-l6",
  title: "Checkpoint: pronomi diretti e ne",
  level: "A2",
  xp: 70,
  theory: [
    {
      title: "Grande test A2-U3",
      summary: "Qui mescoliamo pronomi diretti, posizione, accordo del participio, pronomi tonici e ne. L'obiettivo è rispondere senza ripetere il nome e usare le quantità in modo naturale.",
      rule: [
        "lo = maschile singolare, la = femminile singolare, li = maschile plurale, le = femminile plurale.",
        "Pronome diretto prima del verbo coniugato: Lo vedo. Non la chiamo.",
        "Con infinito: Voglio vederlo. Devo farla.",
        "Con passato prossimo: L'ho visto. L'ho vista. Li ho visti. Le ho viste.",
        "Pronomi tonici dopo preposizione: con me, con te, con lui, con lei, con loro.",
        "Ne per quantità: Ne voglio due. Non ne ho idea."
      ],
      tips: [
        "Prima di scegliere lo/la/li/le, identifica genere e numero della parola sostituita.",
        "Se c'è una quantità o un部分 di un tutto, pensa a ne.",
        "Dopo una preposizione, usa il pronome tonico, non lo/la/li/le."
      ],
      note: "Dopo questo checkpoint passa a A2-U4: pronomi indiretti, combinati e si."
    }
  ],
  exercises: [
    {
      type: "gap",
      question: "Completa con il pronome giusto",
      sentence: "Conosci Maria? Sì, ___ conosco.",
      options: ["la", "lo", "li", "le"],
      answer: "la",
      hint: "Maria è femminile singolare.",
      explain: "Sì, la conosco."
    },
    {
      type: "table",
      question: "Completa il pronome",
      headers: ["Frase", "Pronome"],
      rows: [
        ["Vedo i libri.", "li"],
        ["Vedo le riviste.", ""]
      ],
      targetRow: 1,
      targetColumn: 1,
      options: ["le", "li", "la", "lo"],
      answer: "le",
      hint: "Riviste è femminile plurale.",
      explain: "Le vedo."
    },
    {
      type: "error-choice",
      question: "Trova l'errore",
      tokens: [
        { text: "Voglio", id: "0" },
        { text: "vedere", id: "1" },
        { text: "lo", id: "wrong" }
      ],
      answer: "wrong",
      hint: "Con l'infinito: vederlo.",
      explain: "Corretto: Voglio vederlo."
    },
    {
      type: "dialog-choice",
      question: "Scegli la risposta corretta",
      dialog: [
        { who: "Anna", text: "Hai visto Marco?" }
      ],
      options: [
        "Sì, l'ho visto.",
        "Sì, lo ho visto.",
        "Sì, ho lo visto.",
        "Sì, visto l'ho."
      ],
      answer: "Sì, l'ho visto.",
      hint: "lo + ho -> l'ho.",
      explain: "Sì, l'ho visto."
    },
    {
      type: "match",
      question: "Collega frase diretta e frase con pronome",
      pairs: [
        { left: "Conosco Marco.", right: "Lo conosco." },
        { left: "Parlo con Marco.", right: "Parlo con lui." },
        { left: "Vedo Maria.", right: "La vedo." },
        { left: "Guardo le stelle.", right: "Le guardo." },
        { left: "Invito le amiche.", right: "Le invito." }
      ],
      explain: "Oggetto diretto -> lo/la/li/le; dopo preposizione -> tonico.",
      explainWrong: "Coppia sbagliata. Ricorda: con/tra/per + persona -> pronome tonico."
    },
    {
      type: "fill",
      question: "Scrivi Le ho comprate",
      answer: "Le ho comprate",
      accept: [
        "Le ho comprate",
        "le ho comprate"
      ],
      placeholder: "Scrivi in italiano",
      hint: "le femminile plurale + participio -ate.",
      explain: "Le ho comprate."
    },
    {
      type: "build",
      question: "Costruisci: Ne ho due",
      words: ["Ne", "ho", "due"],
      answer: "Ne ho due",
      hint: "Quantità -> ne.",
      explain: "Ne ho due."
    },
    {
      type: "choice",
      question: "Quale frase è corretta con ne?",
      options: [
        "Ne voglio tre.",
        "Voglio ne tre.",
        "Tre ne voglio?",
        "Ne tre voglio."
      ],
      answer: "Ne voglio tre.",
      hint: "ne prima del verbo coniugato.",
      explain: "Ne voglio tre."
    },
    {
      type: "error-choice",
      question: "Trova l'errore",
      sentence: "Parlo con lo.",
      options: ["Parlo", "con", "lo"],
      answer: "lo",
      hint: "Dopo con serve il pronome tonico lui.",
      explain: "Corretto: Parlo con lui."
    },
    {
      type: "table",
      question: "Completa l'accordo del participio",
      headers: ["Domanda", "Risposta"],
      rows: [
        ["Hai visto Maria?", "Sì, l'ho vista."],
        ["Hai visto Marco?", ""]
      ],
      targetRow: 1,
      targetColumn: 1,
      options: ["Sì, l'ho visto.", "Sì, lo ho visto.", "Sì, ho visto l'.", "Sì, visto l'ho."],
      answer: "Sì, l'ho visto.",
      hint: "Marco è maschile singolare.",
      explain: "Sì, l'ho visto."
    },
    {
      type: "dialog-choice",
      question: "Scegli la risposta corretta",
      dialog: [
        { who: "Anna", text: "Quante mele vuoi?" }
      ],
      options: [
        "Ne voglio due.",
        "Lo voglio due.",
        "La voglio due.",
        "Li voglio due."
      ],
      answer: "Ne voglio due.",
      hint: "Quantità di mele -> ne.",
      explain: "Ne voglio due."
    },
    {
      type: "match",
      question: "Collega pronome e significato",
      pairs: [
        { left: "lo", right: "maschile singolare" },
        { left: "la", right: "femminile singolare" },
        { left: "li", right: "maschile plurale" },
        { left: "le", right: "femminile plurale" },
        { left: "ne", right: "quantità o parte di un tutto" }
      ],
      explain: "Questa è la base dei pronomi diretti e di ne.",
      explainWrong: "Coppia sbagliata. Ricorda genere, numero e funzione di ne."
    },
    {
      type: "gap",
      question: "Completa il participio",
      sentence: "Con il pronome le, il participio di chiudere diventa ___.",
      options: ["chiuse", "chiuso", "chiusa", "chiusi"],
      answer: "chiuse",
      hint: "le è femminile plurale.",
      explain: "Le ho chiuse."
    },
    {
      type: "error-choice",
      question: "Trova l'errore",
      tokens: [
        { text: "Sì,", id: "0" },
        { text: "ho", id: "wrong" },
        { text: "due", id: "2" },
        { text: "fratelli.", id: "3" }
      ],
      answer: "wrong",
      hint: "Per quantità serve ne: ne ho due.",
      explain: "Corretto: Sì, ne ho due fratelli. Oppure: Sì, ne ho due."
    },
    {
      type: "build",
      question: "Costruisci: Voglio vederlo",
      words: ["Voglio", "vederlo"],
      answer: "Voglio vederlo",
      hint: "Infinito + pronome attaccato.",
      explain: "Voglio vederlo."
    },
    {
      type: "choice",
      question: "Quale uso del pronome tonico è corretto?",
      options: [
        "Con lui vado al cinema.",
        "Con lo vado al cinema.",
        "Con la vado al cinema.",
        "Con li vado al cinema."
      ],
      answer: "Con lui vado al cinema.",
      hint: "Dopo con serve il tonico.",
      explain: "Con lui vado al cinema."
    }
  ]
};
