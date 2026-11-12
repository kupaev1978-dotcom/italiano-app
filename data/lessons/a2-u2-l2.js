window.LESSONS = window.LESSONS || {};

window.LESSONS["a2-u2-l2"] = {
  id: "a2-u2-l2",
  title: "Sfondo ed evento principale",
  level: "A2",
  xp: 40,
  theory: [
    {
      title: "La struttura del racconto",
      summary: "In un racconto il passato ha due livelli. Il primo livello e lo sfondo: chi c'era, com'era il tempo, cosa stavano facendo le persone. Il secondo livello e l'evento principale: cio che interrompe o fa avanzare la storia. Lo sfondo va all'imperfetto, l'evento al passato prossimo.",
      rule: [
        "Sfondo (imperfetto): ero a casa, pioveva, dormivo, la luce era accesa.",
        "Evento (passato prossimo): ha squillato il telefono, e arrivato Marco, ho aperto la porta.",
        "Dormivo quando il telefono ha squillato.",
        "Pioveva, cosi sono rimasto a casa.",
        "Camminavo per il centro e ho incontrato Anna."
      ],
      table: {
        headers: ["Livello", "Tempo", "Funzione", "Esempio"],
        rows: [
          ["sfondo", "imperfetto", "ambienta la scena", "Era notte e pioveva."],
          ["evento", "passato prossimo", "fa accadere qualcosa", "Ha bussato alla porta."],
          ["stato", "imperfetto", "descrive emozioni", "Avevo paura."],
          ["azione improvvisa", "passato prossimo", "rompe la calma", "Si e spenta la luce."]
        ]
      },
      tips: [
        "Secreto: pensa al cinema. L'imperfetto e la fotografia fissa della scena (pioggia, volto, stanza). Il passato prossimo e l'azione che rompe l'inquadratura.",
        "Secreto: la parola quando spesso unisce i due livelli: sfondo all'imperfetto + evento al passato prossimo."
      ],
      mistakes: [
        "Non mettere l'evento all'imperfetto: *quando il telefono squillava (se e un fatto singolo) -> quando il telefono ha squillato.",
        "Non mettere lo sfondo al passato prossimo: *era notte e ha piovuto (se la pioggia dura) -> era notte e pioveva.",
        "Non confondere l'azione in corso con quella conclusa: guardavo (in corso) vs ho guardato (finito)."
      ],
      examples: [
        { it: "Leggevo tranquillo quando e entrato mio fratello.", ru: "Я спокойно читал, когда вошёл брат." },
        { it: "La neve cadeva e i bambini giocavano in giardino.", ru: "Снег падал, и дети играли в саду." },
        { it: "Guidavo verso casa quando ho visto un incidente.", ru: "Я ехал домой, когда увидел аварию." }
      ]
    },
    {
      title: "Descrivere la scena prima dell'azione",
      summary: "Un buon racconto inizia con lo sfondo. Descrivi luogo, tempo, persone e stati d'animo all'imperfetto, poi fai entrare l'evento al passato prossimo.",
      rule: [
        "Era una sera d'inverno. Faceva freddo e c'era la nebbia.",
        "Io ero stanco e avevo voglia di dormire.",
        "La strada era vuota e i lampioni erano gialli.",
        "All'improvviso ho sentito un rumore.",
        "Mi sono fermato e ho guardato indietro."
      ],
      table: {
        headers: ["Elemento dello sfondo", "Esempio all'imperfetto"],
        rows: [
          ["luogo", "La stanza era piccola."],
          ["meteo", "Pioveva forte."],
          ["persone", "C'erano poche persone."],
          ["stato d'animo", "Ero nervoso."],
          ["azione in corso", "Aspettavo il treno."]
        ]
      },
      tips: [
        "Secreto: accumula 2-3 frasi di sfondo all'imperfetto prima dell'evento. Cosi il lettore entra nella scena.",
        "Secreto: l'evento principale di solito e una frase corta al passato prossimo: e arrivato, ho visto, ha squillato."
      ],
      mistakes: [
        "Non iniziare il racconto con eventi al passato prossimo senza sfondo: suona brusco.",
        "Non passare allo stato al passato prossimo: *ho avuto fame (se descrivi il periodo) -> avevo fame.",
        "Non mescolare i livelli a caso: scegli cosa e cornice e cosa e azione."
      ],
      examples: [
        { it: "Il sole tramontava e il mare era calmo. Poi e arrivata una barca.", ru: "Солнце садилось, и море было спокойным. Потом пришла лодка." },
        { it: "Ero in cucina e preparavo la cena. Ho sentito la porta.", ru: "Я был на кухне и готовил ужин. Я услышал дверь." }
      ],
      dialog: [
        { who: "Anna", text: "Raccontami, cos'e successo?", ru: "Расскажи, что случилось?" },
        { who: "Marco", text: "Era tardi, pioveva e camminavo da solo. All'improvviso ho visto un gatto sotto la macchina.", ru: "Было поздно, шёл дождь, и я шёл один. Вдруг я увидел кота под машиной." },
        { who: "Anna", text: "Che avventura!", ru: "Вот это приключение!" }
      ]
    }
  ],
  exercises: [
    {
      type: "choice",
      question: "In un racconto, lo sfondo di solito va...",
      options: ["all'imperfetto", "al passato prossimo", "al futuro", "al condizionale"],
      answer: "all'imperfetto",
      hint: "Sfondo = durata, descrizione -> imperfetto.",
      explain: "Lo sfondo si esprime con l'imperfetto."
    },
    {
      type: "gap",
      question: "Completa con il tempo giusto",
      sentence: "Dormivo quando il telefono ___.",
      options: ["ha squillato", "squillava", "squillerà", "squillo"],
      answer: "ha squillato",
      hint: "Evento singolo che interrompe -> passato prossimo.",
      explain: "Dormivo quando il telefono ha squillato."
    },
    {
      type: "table",
      question: "Classifica le frasi",
      headers: ["Frase", "Livello"],
      rows: [
        ["Pioveva forte.", "sfondo"],
        ["Ha bussato alla porta.", ""]
      ],
      targetRow: 1,
      targetColumn: 1,
      options: ["evento", "sfondo", "stato", "abitudine"],
      answer: "evento",
      hint: "Azione che rompe la scena -> evento.",
      explain: "Ha bussato alla porta = evento principale."
    },
    {
      type: "match",
      question: "Collega frase e funzione",
      pairs: [
        { left: "La luce era accesa.", right: "sfondo" },
        { left: "E entrato Luca.", right: "evento" },
        { left: "Avevo sonno.", right: "stato" },
        { left: "Ho aperto la finestra.", right: "evento" },
        { left: "C'erano molti libri.", right: "sfondo" }
      ],
      explain: "Sfondo e stato all'imperfetto; azioni compiute al passato prossimo.",
      explainWrong: "Coppia sbagliata. Ricorda: descrizione/stato -> imperfetto; azione finita -> passato prossimo."
    },
    {
      type: "error-choice",
      question: "Trova l'errore di livello",
      tokens: [
        { text: "Era", id: "0" },
        { text: "notte", id: "1" },
        { text: "e", id: "2" },
        { text: "ha piovuto", id: "wrong" },
        { text: "tutta", id: "4" },
        { text: "la", id: "5" },
        { text: "notte", id: "6" }
      ],
      answer: "wrong",
      hint: "Pioggia duratura come sfondo -> imperfetto pioveva.",
      explain: "Corretto: Era notte e pioveva tutta la notte."
    },
    {
      type: "dialog-choice",
      question: "Scegli il racconto naturale",
      dialog: [
        { who: "Anna", text: "Cos'hai fatto ieri sera?" }
      ],
      options: [
        "Ero a casa, guardavo la TV quando ha chiamato Marco.",
        "Sono stato a casa, ho guardato la TV quando Marco ha chiamato.",
        "Sto a casa, guardo la TV quando Marco chiama.",
        "Saro a casa, guardero la TV quando Marco chiamera."
      ],
      answer: "Ero a casa, guardavo la TV quando ha chiamato Marco.",
      hint: "Sfondo all'imperfetto + evento al passato prossimo.",
      explain: "Ero a casa, guardavo la TV quando ha chiamato Marco."
    },
    {
      type: "fill",
      question: "Scrivi «Camminavo per il centro e ho incontrato Anna»",
      answer: "Camminavo per il centro e ho incontrato Anna",
      accept: [
        "Camminavo per il centro e ho incontrato Anna",
        "camminavo per il centro e ho incontrato Anna",
        "Camminavo per il centro e ho incontrato anna",
        "camminavo per il centro e ho incontrato anna"
      ],
      placeholder: "Scrivi in italiano",
      hint: "Sfondo (camminavo) + evento (ho incontrato).",
      explain: "Camminavo per il centro e ho incontrato Anna."
    },
    {
      type: "build",
      question: "Costruisci: «La neve cadeva e i bambini giocavano»",
      words: ["La", "neve", "cadeva", "e", "i", "bambini", "giocavano"],
      answer: "La neve cadeva e i bambini giocavano",
      hint: "Due azioni in corso -> entrambi imperfetto.",
      explain: "La neve cadeva e i bambini giocavano."
    },
    {
      type: "choice",
      question: "Quale coppia e corretta per sfondo + evento?",
      options: [
        "Leggevo quando e entrato mio fratello.",
        "Ho letto quando entrava mio fratello.",
        "Leggero quando sara entrato mio fratello.",
        "Leggo quando entra mio fratello."
      ],
      answer: "Leggevo quando e entrato mio fratello.",
      hint: "Sfondo imperfetto + evento passato prossimo.",
      explain: "Leggevo quando e entrato mio fratello."
    },
    {
      type: "table",
      question: "Completa la frase di sfondo",
      headers: ["Elemento", "Frase"],
      rows: [
        ["meteo", "Pioveva."],
        ["stato d'animo", ""]
      ],
      targetRow: 1,
      targetColumn: 1,
      options: ["Ero nervoso.", "Ho avuto nervoso.", "Saro nervoso.", "Sono nervoso."],
      answer: "Ero nervoso.",
      hint: "Stato nel passato -> imperfetto di essere.",
      explain: "Ero nervoso = stato d'animo nello sfondo."
    }
  ]
};
