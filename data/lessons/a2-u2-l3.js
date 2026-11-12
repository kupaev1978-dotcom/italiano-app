window.LESSONS = window.LESSONS || {};

window.LESSONS["a2-u2-l3"] = {
  id: "a2-u2-l3",
  title: "Mentre, quando, appena",
  level: "A2",
  xp: 35,
  theory: [
    {
      title: "Mentre: due azioni in parallelo",
      summary: "Mentre significa «в то время как» e introduce un'azione in corso. Di solito regge l'imperfetto. Se le due azioni sono entrambe in corso e parallele, entrambe vanno all'imperfetto. Se una azione breve interrompe l'altra, la breve va al passato prossimo.",
      rule: [
        "Mentre + imperfetto, imperfetto: due azioni parallele in corso.",
        "Mentre studiavo, ascoltavo musica.",
        "Mentre camminavamo, parlavamo del piu e del meno.",
        "Mentre + imperfetto, passato prossimo: un evento interrompe.",
        "Mentre dormivo, ha squillato il telefono.",
        "Mentre guidavo, ho visto un incidente."
      ],
      table: {
        headers: ["Struttura", "Significato", "Esempio"],
        rows: [
          ["Mentre + imp, imp", "due azioni contemporanee", "Mentre leggevo, scrivevo appunti."],
          ["Mentre + imp, pp", "evento che interrompe", "Mentre mangiavo, e arrivato un amico."],
          ["Mentre + imp, presente", "non si usa nel passato", "(*errato)"]
        ]
      },
      tips: [
        "Secreto: mentre guarda sempre all'interno di un'azione in corso, quindi la sua frase reggente e quasi sempre imperfetto.",
        "Secreto: se dopo mentre vedi due fatti finiti, probabilmente serve quando, non mentre."
      ],
      mistakes: [
        "Non dire *mentre ho camminato (azione in corso) -> mentre camminavo.",
        "Non usare mentre per due eventi puntuali successivi: *mentre sono arrivato, ho mangiato -> quando sono arrivato, ho mangiato.",
        "Non confondere mentre (durata) con quando (punto)."
      ],
      examples: [
        { it: "Mentre aspettavo, ho letto un messaggio.", ru: "Пока я ждал, я прочитал сообщение." },
        { it: "Mentre pioveva, siamo rimasti in casa.", ru: "Пока шёл дождь, мы оставались дома." },
        { it: "Mentre cucinavo, il telefono ha squillato.", ru: "Пока я готовил, зазвонил телефон." }
      ]
    },
    {
      title: "Quando e appena: punti sulla linea del tempo",
      summary: "Quando introduce un momento preciso. Appena significa «как только» e indica che un evento segue immediatamente un altro. Dopo quando e appena, per il futuro si usa spesso il presente, ma nel racconto al passato si usa il passato prossimo per l'evento puntuale.",
      rule: [
        "Quando + passato prossimo, imperfetto: dopo un evento, uno stato in corso.",
        "Quando sono arrivato, erano gia le otto.",
        "Quando ha smesso di piovere, siamo usciti.",
        "Appena + passato prossimo, passato prossimo: uno dietro l'altro.",
        "Appena ho visto il treno, sono corso alla stazione.",
        "Appena e arrivato, mi ha chiamato."
      ],
      table: {
        headers: ["Congiunzione", "Funzione", "Esempio"],
        rows: [
          ["mentre", "durata parallela", "Mentre leggevo, bevevo caffe."],
          ["quando", "momento preciso", "Quando e arrivato, ho sorriso."],
          ["appena", "subito dopo", "Appena ho finito, sono uscito."]
        ]
      },
      tips: [
        "Secreto: mentre = «в течение»; quando = «в момент»; appena = «едва / как только».",
        "Secreto: nel racconto, quando spesso apre una nuova scena: Quando sono entrato, tutti zittivano."
      ],
      mistakes: [
        "Non dire *appena io arrivero (futuro dopo appena nel racconto passato) -> appena sono arrivato.",
        "Non usare quando per due azioni lunghe parallele: *quando studiavo, ascoltavo -> mentre studiavo, ascoltavo.",
        "Non mettere l'imperfetto dopo appena per un evento puntuale: *appena arrivavo -> appena sono arrivato."
      ],
      examples: [
        { it: "Quando ero piccolo, andavo al fiume d'estate.", ru: "Когда я был маленьким, летом ходил на реку." },
        { it: "Appena ho saputo la notizia, ti ho chiamato.", ru: "Как только я узнал новость, я тебе позвонил." },
        { it: "Quando ha finito di lavorare, si e riposato.", ru: "Когда он закончил работать, он отдохнул." }
      ],
      dialog: [
        { who: "Anna", text: "Cosa facevi mentre aspettavi?", ru: "Что ты делал, пока ждал?" },
        { who: "Marco", text: "Leggevo. Appena e arrivato il treno, sono salito.", ru: "Я читал. Как только пришёл поезд, я сел." }
      ]
    }
  ],
  exercises: [
    {
      type: "choice",
      question: "Quale congiunzione introduce due azioni parallele in corso?",
      options: ["mentre", "appena", "perche", "pero"],
      answer: "mentre",
      hint: "Mentre = в то время как, durata.",
      explain: "Mentre unisce due azioni in corso."
    },
    {
      type: "gap",
      question: "Completa con il tempo giusto",
      sentence: "Mentre ___ , ha squillato il telefono.",
      options: ["dormivo", "ho dormito", "dormiro", "dormo"],
      answer: "dormivo",
      hint: "Azione in corso interrotta -> imperfetto.",
      explain: "Mentre dormivo, ha squillato il telefono."
    },
    {
      type: "table",
      question: "Collega congiunzione e funzione",
      headers: ["Congiunzione", "Funzione"],
      rows: [
        ["mentre", "durata parallela"],
        ["appena", ""]
      ],
      targetRow: 1,
      targetColumn: 1,
      options: ["subito dopo", "durata parallela", "causa", "contrasto"],
      answer: "subito dopo",
      hint: "Appena = как только.",
      explain: "Appena indica immediatezza."
    },
    {
      type: "error-choice",
      question: "Trova l'errore",
      tokens: [
        { text: "Mentre", id: "0" },
        { text: "ho camminato", id: "wrong" },
        { text: ",", id: "2" },
        { text: "ho visto", id: "3" },
        { text: "un", id: "4" },
        { text: "amico", id: "5" }
      ],
      answer: "wrong",
      hint: "Dopo mentre, azione in corso -> camminavo.",
      explain: "Corretto: Mentre camminavo, ho visto un amico."
    },
    {
      type: "dialog-choice",
      question: "Scegli la risposta corretta",
      dialog: [
        { who: "Anna", text: "Cosa hai fatto appena sei arrivato?" }
      ],
      options: [
        "Appena sono arrivato, ho acceso la luce.",
        "Appena arrivavo, accendevo la luce.",
        "Appena arrivero, accendero la luce.",
        "Appena arrivo, accendo la luce."
      ],
      answer: "Appena sono arrivato, ho acceso la luce.",
      hint: "Appena + evento puntuale -> passato prossimo.",
      explain: "Appena sono arrivato, ho acceso la luce."
    },
    {
      type: "match",
      question: "Collega frase e congiunzione adatta",
      pairs: [
        { left: "___ studiavo, ascoltavo musica.", right: "Mentre" },
        { left: "___ sono arrivato, erano le otto.", right: "Quando" },
        { left: "___ ho finito, sono uscito.", right: "Appena" },
        { left: "___ pioveva, siamo rimasti in casa.", right: "Mentre" },
        { left: "___ e smesso di piovere, siamo usciti.", right: "Quando" }
      ],
      explain: "Mentre per durata, quando per momento, appena per immediatezza.",
      explainWrong: "Coppia sbagliata. Ricorda: mentre = in corso; quando = punto; appena = subito dopo."
    },
    {
      type: "fill",
      question: "Scrivi «Mentre aspettavo, leggevo un libro»",
      answer: "Mentre aspettavo, leggevo un libro",
      accept: [
        "Mentre aspettavo, leggevo un libro",
        "mentre aspettavo leggevo un libro",
        "Mentre aspettavo leggevo un libro",
        "mentre aspettavo, leggevo un libro"
      ],
      placeholder: "Scrivi in italiano",
      hint: "Due azioni parallele -> entrambi imperfetto.",
      explain: "Mentre aspettavo, leggevo un libro."
    },
    {
      type: "build",
      question: "Costruisci: «Appena ho saputo, ti ho chiamato»",
      words: ["Appena", "ho", "saputo", ",", "ti", "ho", "chiamato"],
      answer: "Appena ho saputo ti ho chiamato",
      hint: "Appena + pp, pp.",
      explain: "Appena ho saputo, ti ho chiamato."
    },
    {
      type: "choice",
      question: "Quale frase e corretta?",
      options: [
        "Quando ero bambino, andavo al mare ogni estate.",
        "Quando sono stato bambino, sono andato al mare ogni estate.",
        "Quando saro bambino, andro al mare ogni estate.",
        "Quando sono bambino, vado al mare ogni estate."
      ],
      answer: "Quando ero bambino, andavo al mare ogni estate.",
      hint: "Periodo duraturo + abitudine -> imperfetto.",
      explain: "Quando ero bambino, andavo al mare ogni estate."
    },
    {
      type: "table",
      question: "Completa la struttura",
      headers: ["Frase", "Tempo dopo mentre"],
      rows: [
        ["Mentre leggevo, ___ musica.", "ascoltavo"],
        ["Mentre dormivo, ___ il telefono.", ""]
      ],
      targetRow: 1,
      targetColumn: 1,
      options: ["ha squillato", "squillava", "squillera", "squillo"],
      answer: "ha squillato",
      hint: "Evento che interrompe -> passato prossimo.",
      explain: "Mentre dormivo, ha squillato il telefono."
    }
  ]
};
