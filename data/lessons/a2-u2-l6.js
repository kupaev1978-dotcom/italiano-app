window.LESSONS = window.LESSONS || {};

window.LESSONS["a2-u2-l6"] = {
  id: "a2-u2-l6",
  title: "Checkpoint: racconto al passato",
  level: "A2",
  xp: 70,
  theory: [
    {
      title: "Grande test A2-U2",
      summary: "Qui mescoliamo imperfetto e passato prossimo in un racconto. Devi scegliere il tempo giusto, usare mentre/quando/appena, inserire i marcatori e correggere gli errori tipici.",
      rule: [
        "Sfondo, abitudine, stato, descrizione -> imperfetto.",
        "Evento singolo, sequenza, svolta -> passato prossimo.",
        "Mentre + imperfetto; quando/appena + punto -> passato prossimo.",
        "Marcatori: all'inizio, poi, all'improvviso, intanto, alla fine.",
        "Attenzione agli ausiliari: andare/venire/partire -> essere; mangiare/bere/leggere -> avere."
      ],
      tips: [
        "Prima di rispondere, chiediti: e una nuvola (durata) o un punto (evento)?",
        "Rileggi il racconto ad alta voce: se suona sospeso, imperfetto; se suona completato, passato prossimo."
      ],
      note: "Dopo questo checkpoint passa a A2-U3: pronomi diretti e ne."
    }
  ],
  exercises: [
    {
      type: "gap",
      question: "Completa con il tempo giusto",
      sentence: "Ieri sera ___ a casa quando ___ il telefono.",
      options: ["ero / ha squillato", "sono stato / squillava", "ero / squillava", "sono stato / ha squillato"],
      answer: "ero / ha squillato",
      hint: "Sfondo imperfetto + evento pp.",
      explain: "Ieri sera ero a casa quando ha squillato il telefono."
    },
    {
      type: "table",
      question: "Scegli il tempo per ogni parte",
      headers: ["Parte", "Tempo"],
      rows: [
        ["descrizione della stanza", "imperfetto"],
        ["l'arrivo di un ospite", ""]
      ],
      targetRow: 1,
      targetColumn: 1,
      options: ["passato prossimo", "imperfetto", "futuro", "presente"],
      answer: "passato prossimo",
      hint: "Evento puntuale -> passato prossimo.",
      explain: "L'arrivo di un ospite = evento -> passato prossimo."
    },
    {
      type: "error-choice",
      question: "Trova l'errore",
      tokens: [
        { text: "Mentre", id: "0" },
        { text: "ho letto", id: "wrong" },
        { text: ",", id: "2" },
        { text: "ho sentito", id: "3" },
        { text: "un", id: "4" },
        { text: "rumore", id: "5" }
      ],
      answer: "wrong",
      hint: "Dopo mentre, azione in corso -> leggevo.",
      explain: "Corretto: Mentre leggevo, ho sentito un rumore."
    },
    {
      type: "dialog-choice",
      question: "Scegli il racconto corretto",
      dialog: [
        { who: "Anna", text: "Raccontami la giornata difficile." }
      ],
      options: [
        "All'inizio pioveva, poi ho perso l'ombrello e alla fine ero bagnato.",
        "All'inizio ha piovuto, poi perdevo l'ombrello e alla fine sono stato bagnato.",
        "All'inizio piovera, poi perdero l'ombrello e alla fine saro bagnato.",
        "All'inizio piove, poi perdo l'ombrello e alla fine sono bagnato."
      ],
      answer: "All'inizio pioveva, poi ho perso l'ombrello e alla fine ero bagnato.",
      hint: "Sfondo imperfetto + eventi pp + stato finale imperfetto.",
      explain: "All'inizio pioveva, poi ho perso l'ombrello e alla fine ero bagnato."
    },
    {
      type: "match",
      question: "Collega frase e tempo",
      pairs: [
        { left: "Da ragazzo sognavo di viaggiare.", right: "imperfetto" },
        { left: "Ieri ho preso il treno.", right: "passato prossimo" },
        { left: "Mentre camminavo, cantavo.", right: "imperfetto" },
        { left: "Appena sono arrivato, ho telefonato.", right: "passato prossimo" },
        { left: "Era buio e avevo paura.", right: "imperfetto" }
      ],
      explain: "Sogni/abitudini/stati -> imperfetto; fatti puntuali -> passato prossimo.",
      explainWrong: "Coppia sbagliata. Ricorda la regola della nuvola e del punto."
    },
    {
      type: "fill",
      question: "Scrivi «Quando sono arrivato, tutti dormivano»",
      answer: "Quando sono arrivato, tutti dormivano",
      accept: [
        "Quando sono arrivato, tutti dormivano",
        "quando sono arrivato tutti dormivano",
        "Quando sono arrivato tutti dormivano",
        "quando sono arrivato, tutti dormivano"
      ],
      placeholder: "Scrivi in italiano",
      hint: "quando + pp (punto), principale imperfetto (stato in corso).",
      explain: "Quando sono arrivato, tutti dormivano."
    },
    {
      type: "build",
      question: "Costruisci: «All'improvviso si e spenta la luce»",
      words: ["All'improvviso", "si", "e", "spenta", "la", "luce"],
      answer: "All'improvviso si e spenta la luce",
      hint: "Svolta improvvisa -> passato prossimo.",
      explain: "All'improvviso si e spenta la luce."
    },
    {
      type: "choice",
      question: "Quale frase usa correttamente intanto?",
      options: [
        "Intanto pioveva e io leggevo.",
        "Intanto ha piovuto e io ho letto (due eventi puntuali).",
        "Intanto piovera e io leggiero.",
        "Intanto piove e io leggo."
      ],
      answer: "Intanto pioveva e io leggevo.",
      hint: "Intanto = azione parallela in corso -> imperfetto.",
      explain: "Intanto pioveva e io leggevo."
    },
    {
      type: "table",
      question: "Correggi l'ausiliare",
      headers: ["Frase", "Ausiliare corretto"],
      rows: [
        ["sono andato", "essere"],
        ["ho mangiato", ""]
      ],
      targetRow: 1,
      targetColumn: 1,
      options: ["avere", "essere", "fare", "andare"],
      answer: "avere",
      hint: "Mangiare usa avere.",
      explain: "mangiare -> avere."
    },
    {
      type: "error-choice",
      question: "Trova l'errore",
      sentence: "Da bambino ho vissuto in campagna per dieci anni e giocavo sempre fuori.",
      options: ["Da", "bambino", "ho vissuto", "in campagna", "giocavo"],
      answer: "ho vissuto",
      hint: "Periodo descrittivo come sfondo -> vivevo; ma 'per dieci anni' puo essere pp. La trappola qui e il contrasto: se e sfondo narrativo, meglio vivevo.",
      explain: "In un racconto di sfondo: Da bambino vivevo in campagna e giocavo sempre fuori."
    },
    {
      type: "dialog-choice",
      question: "Scegli la domanda corretta",
      dialog: [
        { who: "Marco", text: "___ quando e arrivato il treno?" }
      ],
      options: [
        "Cosa facevi",
        "Cosa hai fatto",
        "Cosa farai",
        "Cosa fai"
      ],
      answer: "Cosa facevi",
      hint: "Azione in corso al momento dell'arrivo -> imperfetto.",
      explain: "Cosa facevi quando e arrivato il treno?"
    },
    {
      type: "match",
      question: "Collega marcatore e tipo di frase",
      pairs: [
        { left: "all'inizio", right: "sfondo (imperfetto)" },
        { left: "poi", right: "evento (passato prossimo)" },
        { left: "all'improvviso", right: "svolta (passato prossimo)" },
        { left: "intanto", right: "parallelo (imperfetto)" },
        { left: "alla fine", right: "chiusura (imperfetto o pp)" }
      ],
      explain: "Ogni marcatore tende a un tempo tipico.",
      explainWrong: "Coppia sbagliata. Ricorda: all'inizio/intanto -> imperfetto; poi/all'improvviso -> pp."
    },
    {
      type: "gap",
      question: "Completa il racconto",
      sentence: "Era notte, ___ forte e io ___ a casa da solo.",
      options: ["pioveva / ero", "ha piovuto / sono stato", "piovera / saro", "piove / sono"],
      answer: "pioveva / ero",
      hint: "Sfondo notturno -> entrambi imperfetto.",
      explain: "Era notte, pioveva forte e io ero a casa da solo."
    },
    {
      type: "error-choice",
      question: "Trova l'errore",
      tokens: [
        { text: "Appena", id: "0" },
        { text: "arrivavo", id: "wrong" },
        { text: ",", id: "2" },
        { text: "ho", id: "3" },
        { text: "chiamato", id: "4" }
      ],
      answer: "wrong",
      hint: "Appena + punto preciso -> passato prossimo.",
      explain: "Corretto: Appena sono arrivato, ho chiamato."
    },
    {
      type: "build",
      question: "Costruisci: «Alla fine ero stanco ma contento»",
      words: ["Alla", "fine", "ero", "stanco", "ma", "contento"],
      answer: "Alla fine ero stanco ma contento",
      hint: "Stato finale -> imperfetto.",
      explain: "Alla fine ero stanco ma contento."
    },
    {
      type: "choice",
      question: "Quale racconto e piu naturale?",
      options: [
        "Camminavo per il bosco quando ho sentito un ramo spezzarsi.",
        "Ho camminato per il bosco quando sentivo un ramo spezzarsi.",
        "Camminero per il bosco quando sentiro un ramo spezzarsi.",
        "Cammino per il bosco quando sento un ramo spezzarsi."
      ],
      answer: "Camminavo per il bosco quando ho sentito un ramo spezzarsi.",
      hint: "Sfondo in corso + evento puntuale.",
      explain: "Camminavo per il bosco quando ho sentito un ramo spezzarsi."
    }
  ]
};
