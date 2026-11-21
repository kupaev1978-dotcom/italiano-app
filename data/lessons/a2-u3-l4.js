window.LESSONS = window.LESSONS || {};

window.LESSONS["a2-u3-l4"] = {
  id: "a2-u3-l4",
  title: "Pronomi tonici: me, te, lui, lei, noi, voi, loro",
  level: "A2",
  xp: 35,
  theory: [
    {
      title: "Cosa sono i pronomi tonici",
      summary: "I pronomi tonici si usano dopo le preposizioni, per enfasi o per confronto. Non sostituiscono semplicemente l'oggetto come lo/la/li/le, ma danno rilievo alla persona.",
      rule: [
        "io -> me",
        "tu -> te",
        "lui -> lui",
        "lei -> lei",
        "noi -> noi",
        "voi -> voi",
        "loro -> loro"
      ],
      table: {
        headers: ["Persona", "Pronome tonico", "Esempio"],
        rows: [
          ["io", "me", "Parla con me."],
          ["tu", "te", "Questo è per te."],
          ["lui", "lui", "Vado con lui."],
          ["lei", "lei", "Penso a lei."],
          ["noi", "noi", "Tra noi va bene."],
          ["voi", "voi", "Aspetto voi."],
          ["loro", "loro", "Sono d'accordo con loro."]
        ]
      },
      tips: [
        "Secreto: dopo una preposizione quasi sempre serve il pronome tonico: con me, con te, con lui, con lei, con loro.",
        "Secreto: i pronomi tonici possono essere usati per contrasto: Vedo lui, non te."
      ],
      mistakes: [
        "Non dire *con lo, *con la, *con li, *con le. Corretto: con lui, con lei, con loro.",
        "Non usare il pronome tonico come oggetto neutro di default: Lo vedo è normale; Vedo lui è enfatico o contrastivo.",
        "Non confondere me con mi: mi è pronome indiretto/diretto debole, me è tonico."
      ],
      examples: [
        { it: "Non parlare con lui, parla con me.", ru: "Не говори с ним, говори со мной." },
        { it: "È più alto di me.", ru: "Он выше меня." },
        { it: "Anche loro vengono alla festa.", ru: "Они тоже приходят на вечеринку." },
        { it: "Tra te e me, chi ha ragione?", ru: "Между тобой и мной, кто прав?" }
      ]
    },
    {
      title: "Tonici per enfasi e confronto",
      summary: "I pronomi tonici servono anche per sottolineare una persona o fare un confronto.",
      rule: [
        "Io lo so, non te.",
        "Vedo lui, non te.",
        "Marco è gentile, ma lei è più gentile di lui.",
        "Noi restiamo, voi potete andare.",
        "Loro hanno ragione, non noi."
      ],
      table: {
        headers: ["Funzione", "Esempio"],
        rows: [
          ["dopo preposizione", "con me, per te, senza lui"],
          ["enfasi", "Io lo so, non te."],
          ["confronto", "più alto di me"],
          ["scelta alternativa", "lui o lei"],
          ["gruppo incluso", "anche loro"]
        ]
      },
      tips: [
        "Secreto: se puoi sostituire la persona con un nome dopo la preposizione, usa il tonico: con Marco -> con lui.",
        "Secreto: nella lingua parlata, lui/lei/loro sono molto frequenti anche senza preposizione per enfatizzare."
      ],
      mistakes: [
        "Non dire *con me lo. Corretto: con lui.",
        "Non dire *per io. Corretto: per me.",
        "Non dire *tra io e te. Corretto: tra me e te."
      ],
      examples: [
        { it: "Aspetto te, non lui.", ru: "Я жду тебя, а не его." },
        { it: "Questo regalo è per noi.", ru: "Этот подарок для нас." },
        { it: "Vai con loro o con noi?", ru: "Ты идёшь с ними или с нами?" }
      ],
      dialog: [
        { who: "Anna", text: "Chi viene con te?", ru: "Кто идёт с тобой?" },
        { who: "Marco", text: "Vengo con lui, non con te.", ru: "Я иду с ним, а не с тобой." }
      ]
    }
  ],
  exercises: [
    {
      type: "choice",
      question: "Dopo la preposizione con, per Marco maschile singolare si dice...",
      options: ["con lui", "con lo", "con la", "con li"],
      answer: "con lui",
      hint: "Dopo preposizione serve il pronome tonico.",
      explain: "con lui."
    },
    {
      type: "gap",
      question: "Completa con il pronome tonico",
      sentence: "Non parlare con ___, parla con me.",
      options: ["lui", "lo", "la", "li"],
      answer: "lui",
      hint: "con + uomo -> con lui.",
      explain: "Non parlare con lui."
    },
    {
      type: "table",
      question: "Completa la tabella",
      headers: ["Persona", "Pronome tonico"],
      rows: [
        ["io", "me"],
        ["tu", ""]
      ],
      targetRow: 1,
      targetColumn: 1,
      options: ["te", "me", "lui", "lei"],
      answer: "te",
      hint: "tu diventa te dopo preposizione o per enfasi.",
      explain: "tu -> te."
    },
    {
      type: "match",
      question: "Collega combinazione e forma corretta",
      pairs: [
        { left: "con + Marco", right: "con lui" },
        { left: "con + Maria", right: "con lei" },
        { left: "per + noi", right: "per noi" },
        { left: "tra + te + io", right: "tra te e me" },
        { left: "senza + loro", right: "senza loro" }
      ],
      explain: "I pronomi tonici seguono le preposizioni.",
      explainWrong: "Coppia sbagliata. Ricorda: me, te, lui, lei, noi, voi, loro."
    },
    {
      type: "error-choice",
      question: "Trova l'errore",
      tokens: [
        { text: "Parla", id: "0" },
        { text: "con", id: "1" },
        { text: "lo", id: "wrong" }
      ],
      answer: "wrong",
      hint: "Dopo con serve lui, non lo.",
      explain: "Corretto: Parla con lui."
    },
    {
      type: "dialog-choice",
      question: "Scegli la risposta corretta",
      dialog: [
        { who: "Anna", text: "Chi viene?" }
      ],
      options: [
        "Viene lui.",
        "Viene lo.",
        "Viene la.",
        "Viene li."
      ],
      answer: "Viene lui.",
      hint: "Per enfasi si usa il pronome tonico.",
      explain: "Viene lui."
    },
    {
      type: "fill",
      question: "Scrivi È più grande di me",
      answer: "È più grande di me",
      accept: [
        "È più grande di me",
        "è più grande di me"
      ],
      placeholder: "Scrivi in italiano",
      hint: "di + pronome tonico.",
      explain: "È più grande di me."
    },
    {
      type: "build",
      question: "Costruisci: Vedo lui, non te",
      words: ["Vedo", "lui,", "non", "te"],
      answer: "Vedo lui, non te",
      hint: "Contrasto con pronomi tonici.",
      explain: "Vedo lui, non te."
    },
    {
      type: "choice",
      question: "Quale frase è enfatica?",
      options: [
        "Lo vedo.",
        "Vedo lui, non te.",
        "Lo vedo bene.",
        "Lo vedi?"
      ],
      answer: "Vedo lui, non te.",
      hint: "Il contrasto usa pronomi tonici.",
      explain: "Vedo lui, non te."
    },
    {
      type: "table",
      question: "Correggi il pronome dopo preposizione",
      headers: ["Frase sbagliata", "Corretto"],
      rows: [
        ["Parlo con la.", "Parlo con lei."],
        ["Parlo con li.", ""]
      ],
      targetRow: 1,
      targetColumn: 1,
      options: ["Parlo con loro.", "Parlo con li.", "Parlo con le.", "Parlo con los."],
      answer: "Parlo con loro.",
      hint: "Dopo con serve il tonico loro.",
      explain: "Corretto: Parlo con loro."
    }
  ]
};
