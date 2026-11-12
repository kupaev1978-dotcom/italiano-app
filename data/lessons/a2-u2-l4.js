window.LESSONS = window.LESSONS || {};

window.LESSONS["a2-u2-l4"] = {
  id: "a2-u2-l4",
  title: "Raccontare una storia breve",
  level: "A2",
  xp: 40,
  theory: [
    {
      title: "I marcatori del racconto",
      summary: "Per guidare l'ascoltatore attraverso una storia servono parole di collegamento temporale. Aprono la scena, mostrano la sequenza, segnalano una svolta e chiudono il racconto.",
      rule: [
        "all'inizio / dapprima -> apertura",
        "poi / dopo / successivamente -> sequenza",
        "a un certo punto / all'improvviso -> svolta",
        "intanto / nel frattempo -> azione parallela",
        "alla fine / infine -> chiusura"
      ],
      table: {
        headers: ["Marcatore", "Funzione", "Esempio"],
        rows: [
          ["all'inizio", "apertura", "All'inizio ero tranquillo."],
          ["poi", "sequenza", "Poi ho perso il biglietto."],
          ["all'improvviso", "svolta", "All'improvviso ho visto un amico."],
          ["intanto", "parallelo", "Intanto pioveva sempre piu forte."],
          ["alla fine", "chiusura", "Alla fine abbiamo preso un altro treno."]
        ]
      },
      tips: [
        "Secreto: all'inizio e alla fine spesso incorniciano lo stato (imperfetto): All'inizio ero calmo. Alla fine ero esausto.",
        "Secreto: poi e all'improvviso di solito introducono eventi (passato prossimo): Poi e arrivato il capo."
      ],
      mistakes: [
        "Non usare i marcatori a caso: ogni marcatore ha una posizione nella struttura.",
        "Non confondere intanto (durata parallela, imperfetto) con poi (evento successivo, passato prossimo).",
        "Non chiudere la storia con un marcatore di apertura."
      ],
      examples: [
        { it: "All'inizio non capivo niente, poi ho capito tutto.", ru: "Сначала я ничего не понимал, потом понял всё." },
        { it: "Intanto il tempo peggiorava e alla fine siamo tornati.", ru: "Тем временем погода ухудшалась, и в конце мы вернулись." },
        { it: "All'improvviso si e spenta la luce.", ru: "Внезапно свет погас." }
      ]
    },
    {
      title: "Il каркас del racconto",
      summary: "Un racconto chiaro ha cinque parti: sfondo iniziale, evento scatenante, sviluppi, momento di tensione, conclusione. Lo sfondo e la conclusione usano l'imperfetto per gli stati; gli sviluppi usano il passato prossimo per i fatti.",
      rule: [
        "1. Sfondo iniziale (imperfetto): Era sabato, pioveva e io ero a casa.",
        "2. Evento scatenante (passato prossimo): All'improvviso ha squillato il telefono.",
        "3. Sviluppi (passato prossimo): Marco mi ha chiamato, mi ha spiegato il problema, sono uscito.",
        "4. Tensione (imperfetto + pp): Avevo fretta e ho corso alla stazione.",
        "5. Conclusione (imperfetto): Alla fine ero stanco ma contento."
      ],
      table: {
        headers: ["Parte", "Tempo dominante", "Esempio"],
        rows: [
          ["sfondo", "imperfetto", "Faceva freddo."],
          ["evento scatenante", "passato prossimo", "E arrivata una mail."],
          ["sviluppi", "passato prossimo", "Ho risposto, ho chiamato, ho deciso."],
          ["stato durante", "imperfetto", "Ero indeciso."],
          ["conclusione", "imperfetto", "Alla fine ero sollevato."]
        ]
      },
      tips: [
        "Secreto: alterna sfondo e azione. Troppi eventi di fila stancano; troppo sfondo rallenta.",
        "Secreto: la conclusione con un aggettivo all'imperfetto (ero contento / ero deluso) chiude bene il cerchio emotivo."
      ],
      mistakes: [
        "Non raccontare solo eventi senza sfondo: manca l'atmosfera.",
        "Non mettere lo stato al passato prossimo: *sono stato contento tutta la sera (se descrivi il periodo) -> ero contento tutta la sera.",
        "Non dimenticare i marcatori: senza poi / alla fine il racconto sembra un elenco."
      ],
      examples: [
        { it: "Era notte. Pioveva. All'improvviso ho sentito un rumore e sono sceso.", ru: "Была ночь. Шёл дождь. Вдруг я услышал шум и спустился." },
        { it: "All'inizio ero nervoso, poi mi sono calmato e alla fine ero felice.", ru: "Сначала я нервничал, потом успокоился и в конце был счастлив." }
      ],
      dialog: [
        { who: "Anna", text: "Com'e andata la giornata?", ru: "Как прошёл день?" },
        { who: "Marco", text: "Strana. All'inizio pioveva e ero a casa. Poi ho ricevuto una chiamata e sono uscito. Alla fine ero bagnato ma contento.", ru: "Странный. Сначала шёл дождь, и я был дома. Потом мне позвонили, и я вышел. В конце я был мокрый, но довольный." }
      ]
    }
  ],
  exercises: [
    {
      type: "choice",
      question: "Quale marcatore segnala una svolta improvvisa?",
      options: ["all'improvviso", "all'inizio", "alla fine", "intanto"],
      answer: "all'improvviso",
      hint: "Svolta inattesa -> all'improvviso.",
      explain: "All'improvviso introduce un evento inatteso."
    },
    {
      type: "gap",
      question: "Completa con il marcatore giusto",
      sentence: "___ ero tranquillo, poi e arrivato il capo.",
      options: ["All'inizio", "Alla fine", "Intanto", "Appena"],
      answer: "All'inizio",
      hint: "Apertura del racconto -> all'inizio.",
      explain: "All'inizio ero tranquillo."
    },
    {
      type: "table",
      question: "Collega marcatore e funzione",
      headers: ["Marcatore", "Funzione"],
      rows: [
        ["poi", "sequenza"],
        ["alla fine", ""]
      ],
      targetRow: 1,
      targetColumn: 1,
      options: ["chiusura", "sequenza", "apertura", "parallelismo"],
      answer: "chiusura",
      hint: "Alla fine chiude il racconto.",
      explain: "Alla fine = chiusura."
    },
    {
      type: "error-choice",
      question: "Trova l'errore di tempo nello stato",
      tokens: [
        { text: "Alla", id: "0" },
        { text: "fine", id: "1" },
        { text: "sono stato", id: "wrong" },
        { text: "contento", id: "3" },
        { text: "tutta", id: "4" },
        { text: "la", id: "5" },
        { text: "sera", id: "6" }
      ],
      answer: "wrong",
      hint: "Stato duraturo -> imperfetto ero contento.",
      explain: "Corretto: Alla fine ero contento tutta la sera."
    },
    {
      type: "dialog-choice",
      question: "Scegli il racconto ben strutturato",
      dialog: [
        { who: "Anna", text: "Raccontami la giornata." }
      ],
      options: [
        "All'inizio pioveva, poi ho preso l'ombrello e alla fine ero asciutto.",
        "Pioveva ombrello asciutto.",
        "Piovera poi prendo e alla fine saro asciutto.",
        "Piove poi prendo e alla fine sono asciutto."
      ],
      answer: "All'inizio pioveva, poi ho preso l'ombrello e alla fine ero asciutto.",
      hint: "Sfondo imperfetto + eventi pp + stato finale imperfetto.",
      explain: "All'inizio pioveva, poi ho preso l'ombrello e alla fine ero asciutto."
    },
    {
      type: "match",
      question: "Collega parte del racconto e tempo",
      pairs: [
        { left: "sfondo iniziale", right: "imperfetto" },
        { left: "evento scatenante", right: "passato prossimo" },
        { left: "sviluppi", right: "passato prossimo" },
        { left: "stato durante", right: "imperfetto" },
        { left: "conclusione emotiva", right: "imperfetto" }
      ],
      explain: "Sfondo e stati all'imperfetto; fatti e svolte al passato prossimo.",
      explainWrong: "Coppia sbagliata. Ricorda: descrizione/stato -> imperfetto; evento -> passato prossimo."
    },
    {
      type: "fill",
      question: "Scrivi «Intanto pioveva sempre piu forte»",
      answer: "Intanto pioveva sempre piu forte",
      accept: [
        "Intanto pioveva sempre piu forte",
        "intanto pioveva sempre piu forte",
        "Intanto pioveva sempre più forte",
        "intanto pioveva sempre più forte"
      ],
      placeholder: "Scrivi in italiano",
      hint: "Azione parallela in corso -> imperfetto.",
      explain: "Intanto pioveva sempre piu forte."
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
      question: "Quale marcatore introduce un'azione parallela in corso?",
      options: ["intanto", "poi", "all'improvviso", "alla fine"],
      answer: "intanto",
      hint: "Intanto = тем временем, durata.",
      explain: "Intanto segnala un'azione parallela."
    },
    {
      type: "table",
      question: "Completa la parte del racconto",
      headers: ["Parte", "Esempio"],
      rows: [
        ["evento scatenante", "Ha squillato il telefono."],
        ["conclusione", ""]
      ],
      targetRow: 1,
      targetColumn: 1,
      options: ["Alla fine ero sollevato.", "All'improvviso ha squillato.", "Poi sono uscito.", "Intanto pioveva."],
      answer: "Alla fine ero sollevato.",
      hint: "Chiusura con stato -> imperfetto.",
      explain: "Alla fine ero sollevato = conclusione."
    }
  ]
};
