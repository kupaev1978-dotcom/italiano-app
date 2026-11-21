window.LESSONS = window.LESSONS || {};

window.LESSONS["a2-u3-l1"] = {
  id: "a2-u3-l1",
  title: "Pronomi diretti: lo, la, li, le",
  level: "A2",
  xp: 40,
  theory: [
    {
      title: "Cosa sono i pronomi diretti",
      summary: "I pronomi diretti sostituiscono la persona o la cosa che subisce l'azione. Rispondono alla domanda chi? che cosa? ed evitano ripetizioni.",
      rule: [
        "lo = lui, maschile singolare.",
        "la = lei, femminile singolare.",
        "li = loro, maschile plurale.",
        "le = loro, femminile plurale."
      ],
      table: {
        headers: ["Nome sostituito", "Pronome", "Frase"],
        rows: [
          ["Marco", "lo", "Conosco Marco. -> Lo conosco."],
          ["la pizza", "la", "Mangio la pizza. -> La mangio."],
          ["i libri", "li", "Leggo i libri. -> Li leggo."],
          ["le amiche", "le", "Invito le amiche. -> Le invito."]
        ]
      },
      tips: [
        "Secreto: guarda il genere e il numero della parola sostituita, non il soggetto della frase.",
        "Secreto: la pizza è femminile singolare -> la; i libri sono maschile plurale -> li."
      ],
      mistakes: [
        "Non dire *Conosco lui come forma di default; nella frase semplice meglio Lo conosco.",
        "Non confondere la con lo: la pizza -> la, il libro -> lo.",
        "Non usare li per cose femminili: le mele -> le, non li."
      ],
      examples: [
        { it: "Dove è Marco? Lo vedo davanti alla porta.", ru: "Где Марко? Я вижу его перед дверью." },
        { it: "Vuoi la torta? Sì, la voglio.", ru: "Хочешь торт? Да, я хочу его." },
        { it: "Conosci i miei genitori? Sì, li conosco.", ru: "Ты знаешь моих родителей? Да, я знаю их." },
        { it: "Aspetti le ragazze? Sì, le aspetto.", ru: "Ты ждёшь девушек? Да, я жду их." }
      ]
    },
    {
      title: "Verbi utili con pronomi diretti",
      summary: "Questi verbi spesso richiedono un oggetto diretto: vedere, conoscere, comprare, mangiare, invitare, aspettare, cercare, chiamare.",
      rule: [
        "vedere -> Lo vedo. / La vedo. / Li vedo. / Le vedo.",
        "conoscere -> Lo conosco. / La conosco. / Li conosciamo. / Le conosciamo.",
        "comprare -> Lo compro. / La compro. / Li compriamo. / Le compriamo.",
        "mangiare -> Lo mangio. / La mangio. / Li mangiamo. / Le mangiamo.",
        "aspettare -> Lo aspetto. / La aspetto. / Li aspettiamo. / Le aspettiamo."
      ],
      table: {
        headers: ["Verbo", "Esempio con pronome"],
        rows: [
          ["chiamare", "Chiamo Marco. -> Lo chiamo."],
          ["cercare", "Cerco le chiavi. -> Le cerco."],
          ["ascoltare", "Ascolto la radio. -> La ascolto."],
          ["guardare", "Guardo i film. -> Li guardo."],
          ["invitare", "Invito gli amici. -> Li invito."]
        ]
      },
      tips: [
        "Secreto: se il verbo risponde a che cosa? o chi? senza preposizione, probabilmente serve un pronome diretto.",
        "Secreto: nelle risposte brevi si usa spesso Sì, lo / Sì, la / Sì, li / Sì, le."
      ],
      mistakes: [
        "Non dire *Lo chiamo a Marco. Se Marco è già sostituito, non ripetere il nome.",
        "Non dire *La vedo Marco. Corretto: Lo vedo, perché Marco è maschile.",
        "Non usare il pronome dopo il verbo coniugato: *Vedo lo -> Lo vedo."
      ],
      examples: [
        { it: "Hai visto il treno? Sì, l'ho visto.", ru: "Ты видел поезд? Да, я его видел." },
        { it: "Compri la frutta? Sì, la compro ogni mattina.", ru: "Ты покупаешь фрукты? Да, покупаю каждое утро." },
        { it: "Aspetti i bambini? Sì, li aspetto alla scuola.", ru: "Ты ждёшь детей? Да, жду их у школы." }
      ],
      dialog: [
        { who: "Anna", text: "Hai visto Marco?", ru: "Ты видел Марко?" },
        { who: "Marco", text: "No, non l'ho visto. Tu?", ru: "Нет, я его не видел. А ты?" },
        { who: "Anna", text: "Sì, l'ho visto poco fa.", ru: "Да, я видела его недавно." }
      ]
    }
  ],
  exercises: [
    {
      type: "choice",
      question: "Quale pronome sostituisce la pizza?",
      options: ["la", "lo", "li", "le"],
      answer: "la",
      hint: "Pizza è femminile singolare.",
      explain: "la pizza -> la."
    },
    {
      type: "gap",
      question: "Completa con il pronome giusto",
      sentence: "Conosco Marco. ___ conosco bene.",
      options: ["Lo", "La", "Li", "Le"],
      answer: "Lo",
      hint: "Marco è maschile singolare.",
      explain: "Lo conosco bene."
    },
    {
      type: "table",
      question: "Completa la tabella",
      headers: ["Nome", "Pronome"],
      rows: [
        ["i libri", "li"],
        ["le mele", ""]
      ],
      targetRow: 1,
      targetColumn: 1,
      options: ["le", "li", "la", "lo"],
      answer: "le",
      hint: "Mele è femminile plurale.",
      explain: "le mele -> le."
    },
    {
      type: "match",
      question: "Collega elemento e pronome",
      pairs: [
        { left: "il cane", right: "lo" },
        { left: "la casa", right: "la" },
        { left: "i fiori", right: "li" },
        { left: "le chiavi", right: "le" },
        { left: "Marco", right: "lo" }
      ],
      explain: "lo e la sono singolari, li e le sono plurali.",
      explainWrong: "Coppia sbagliata. Ricorda: maschile singolare lo, femminile singolare la, maschile plurale li, femminile plurale le."
    },
    {
      type: "error-choice",
      question: "Trova l'errore",
      tokens: [
        { text: "Vedo", id: "0" },
        { text: "lo", id: "wrong" },
        { text: ".", id: "2" }
      ],
      answer: "wrong",
      hint: "Il pronome diretto va prima del verbo coniugato.",
      explain: "Corretto: Lo vedo."
    },
    {
      type: "dialog-choice",
      question: "Scegli la risposta corretta",
      dialog: [
        { who: "Anna", text: "Compri le arance?" }
      ],
      options: [
        "Sì, le compro.",
        "Sì, la compro.",
        "Sì, lo compro.",
        "Sì, li compro."
      ],
      answer: "Sì, le compro.",
      hint: "Arance è femminile plurale.",
      explain: "Le arance -> le."
    },
    {
      type: "fill",
      question: "Scrivi Li aspetto",
      answer: "Li aspetto",
      accept: [
        "Li aspetto",
        "li aspetto"
      ],
      placeholder: "Scrivi in italiano",
      hint: "Loro maschile plurale -> li.",
      explain: "Li aspetto."
    },
    {
      type: "build",
      question: "Costruisci: La mangio volentieri",
      words: ["La", "mangio", "volentieri"],
      answer: "La mangio volentieri",
      hint: "Pronome prima del verbo.",
      explain: "La mangio volentieri."
    },
    {
      type: "choice",
      question: "Quale frase è corretta?",
      options: [
        "Le invito stasera.",
        "Invito le stasera.",
        "Invito la stasera.",
        "Li invito stasera per le ragazze."
      ],
      answer: "Le invito stasera.",
      hint: "Le ragazze -> le, pronome prima del verbo.",
      explain: "Le invito stasera."
    },
    {
      type: "table",
      question: "Completa la sostituzione",
      headers: ["Frase originale", "Con pronome"],
      rows: [
        ["Vedo Marco.", "Lo vedo."],
        ["Vedo Maria.", ""]
      ],
      targetRow: 1,
      targetColumn: 1,
      options: ["La vedo.", "Lo vedo.", "Li vedo.", "Le vedo."],
      answer: "La vedo.",
      hint: "Maria è femminile singolare.",
      explain: "Vedo Maria. -> La vedo."
    }
  ]
};
