window.LESSONS = window.LESSONS || {};

window.LESSONS["a2-u1-l4"] = {
  id: "a2-u1-l4",
  title: "Descrivere persone, luoghi e tempo: era, c'era, c'erano",
  level: "A2",
  xp: 35,
  theory: [
    {
      title: "Descrizioni con era / erano",
      summary: "Per descrivere com'era una persona, un luogo o una situazione nel passato si usa essere all'imperfetto con aggettivi.",
      rule: [
        "Marco era alto e biondo.",
        "Anna era simpatica e intelligente.",
        "La citta era rumorosa ma viva.",
        "I bambini erano rumorosi.",
        "Le strade erano strette e buie.",
        "Il tempo era brutto."
      ],
      table: {
        headers: ["Soggetto", "Frase"],
        rows: [
          ["lui", "era alto"],
          ["lei", "era alta"],
          ["loro (m/misto)", "erano alti"],
          ["loro (f)", "erano alte"],
          ["esso (luogo)", "era bello"]
        ]
      },
      tips: [
        "Secreto: l'aggettivo si accorda sempre con il soggetto di essere.",
        "Secreto: per il meteo nel passato si usa faceva / era: faceva caldo, era una giornata grigia."
      ],
      mistakes: [
        "Non dire *Anna era alto. Corretto: era alta.",
        "Non dire *le strade era strette. Plurale: erano strette.",
        "Non usare il presente per una descrizione passata."
      ],
      examples: [
        { it: "Il mio professore era severo ma giusto.", ru: "Мой учитель был строгим, но справедливым." },
        { it: "La piazza era piena di gente.", ru: "Площадь была полна людей." },
        { it: "Le montagne erano coperte di neve.", ru: "Горы были покрыты снегом." }
      ]
    },
    {
      title: "C'era / c'erano e il meteo nel passato",
      summary: "C'era introduce cio che esisteva nel passato (singolare o massa), c'erano per il plurale. Per il tempo: faceva + aggettivo, c'era + sostantivo.",
      rule: [
        "C'era un albero davanti casa.",
        "C'erano molti negozi in centro.",
        "C'era il sole.",
        "C'era la nebbia.",
        "Faceva caldo.",
        "Faceva freddo.",
        "Faceva vento.",
        "Era una giornata grigia."
      ],
      table: {
        headers: ["Struttura", "Esempio"],
        rows: [
          ["c'era + singolare/massa", "C'era il sole."],
          ["c'erano + plurale", "C'erano molti turisti."],
          ["faceva + aggettivo meteo", "Faceva freddo."],
          ["era + aggettivo giornata", "Era una bella giornata."]
        ]
      },
      tips: [
        "Secreto: c'era / c'erano = «было / были» nel senso di esistenza nel passato.",
        "Secreto: non dire *c'era molti amici. Plurale -> c'erano molti amici."
      ],
      mistakes: [
        "Non dire *c'era molti negozi. Corretto: c'erano molti negozi.",
        "Non dire *faceva il sole. Corretto: c'era il sole.",
        "Non dire *era caldo oggi per il passato; per il passato: faceva caldo."
      ],
      examples: [
        { it: "C'era un bar all'angolo.", ru: "На углу было кафе." },
        { it: "C'erano tante persone in spiaggia.", ru: "На пляже было много людей." },
        { it: "Faceva freddo e c'era la nebbia.", ru: "Было холодно и был туман." }
      ],
      dialog: [
        { who: "Anna", text: "Com'era il tuo paese da bambino?", ru: "Каков был твой посёлок в детстве?" },
        { who: "Marco", text: "Era piccolo e tranquillo. C'erano pochi negozi ma tanto verde.", ru: "Он был маленький и тихий. Магазинов было мало, зато много зелени." }
      ]
    }
  ],
  exercises: [
    {
      type: "gap",
      question: "Inserisci la forma giusta",
      sentence: "La casa ___ vecchia ma bella.",
      options: ["era", "erano", "eri", "ero"],
      answer: "era",
      hint: "Singolare -> era.",
      explain: "La casa era vecchia ma bella."
    },
    {
      type: "table",
      question: "Completa c'era / c'erano",
      headers: ["Frase", "Forma"],
      rows: [
        ["___ il sole.", "c'era"],
        ["___ molti turisti.", ""]
      ],
      targetRow: 1,
      targetColumn: 1,
      options: ["c'erano", "c'era", "c'eri", "c'erano essere"],
      answer: "c'erano",
      hint: "Plurale -> c'erano.",
      explain: "C'erano molti turisti."
    },
    {
      type: "error-choice",
      question: "Trova l'errore",
      tokens: [
        { text: "Le", id: "0" },
        { text: "strade", id: "1" },
        { text: "era", id: "wrong" },
        { text: "buie", id: "3" }
      ],
      answer: "wrong",
      hint: "Plurale -> erano.",
      explain: "Corretto: Le strade erano buie."
    },
    {
      type: "dialog-choice",
      question: "Scegli la risposta",
      dialog: [
        { who: "Anna", text: "Che tempo faceva in inverno?" }
      ],
      options: [
        "Faceva freddo e c'era la neve.",
        "Fa freddo e c'e la neve.",
        "Fara freddo e ci sara neve.",
        "Ho fatto freddo."
      ],
      answer: "Faceva freddo e c'era la neve.",
      hint: "Descrizione abituale del meteo -> imperfetto.",
      explain: "Faceva freddo e c'era la neve."
    },
    {
      type: "match",
      question: "Collega frase e traduzione",
      pairs: [
        { left: "Marco era alto.", right: "Марко был высоким." },
        { left: "Anna era simpatica.", right: "Анна была славной." },
        { left: "C'era un parco vicino.", right: "Рядом был парк." },
        { left: "C'erano molti alberi.", right: "Было много деревьев." },
        { left: "Faceva caldo.", right: "Было жарко." }
      ],
      explain: "Descrizioni e meteo al imperfetto.",
      explainWrong: "Coppia sbagliata. Ricorda l'accordo e c'era/c'erano."
    },
    {
      type: "fill",
      question: "Scrivi «La piazza era piena di gente»",
      answer: "La piazza era piena di gente",
      accept: [
        "La piazza era piena di gente",
        "la piazza era piena di gente",
        "C'era tanta gente in piazza",
        "c'era tanta gente in piazza"
      ],
      placeholder: "Scrivi in italiano",
      hint: "Piazza femminile -> era piena.",
      explain: "La piazza era piena di gente."
    },
    {
      type: "build",
      question: "Costruisci: «C'erano pochi negozi»",
      words: ["C'erano", "pochi", "negozi"],
      answer: "C'erano pochi negozi",
      hint: "Plurale -> c'erano.",
      explain: "C'erano pochi negozi."
    },
    {
      type: "choice",
      question: "Quale frase e corretta?",
      options: [
        "C'era molti bambini.",
        "C'erano molti bambini.",
        "C'eri molti bambini.",
        "C'erano molto bambini."
      ],
      answer: "C'erano molti bambini.",
      hint: "Plurale + molti.",
      explain: "C'erano molti bambini."
    },
    {
      type: "table",
      question: "Completa l'accordo dell'aggettivo",
      headers: ["Soggetto", "Frase"],
      rows: [
        ["Il film", "era noioso"],
        ["La citta", ""]
      ],
      targetRow: 1,
      targetColumn: 1,
      options: ["era bella", "era bello", "erano belle", "eri bella"],
      answer: "era bella",
      hint: "Citta femminile singolare -> bella.",
      explain: "La citta era bella."
    },
    {
      type: "error-choice",
      question: "Trova l'errore",
      sentence: "Faceva il sole quella mattina.",
      options: ["Faceva", "il", "sole", "quella", "mattina"],
      answer: "Faceva",
      hint: "Per il sole si usa c'era, non faceva.",
      explain: "Corretto: C'era il sole quella mattina."
    }
  ]
};
