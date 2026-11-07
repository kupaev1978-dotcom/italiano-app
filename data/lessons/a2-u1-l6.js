window.LESSONS = window.LESSONS || {};

window.LESSONS["a2-u1-l6"] = {
  id: "a2-u1-l6",
  title: "Checkpoint: imperfetto",
  level: "A2",
  xp: 70,
  theory: [
    {
      title: "Grande test A2-U1",
      summary: "Qui mescoliamo imperfetto regolare e irregolare, abitudini, descrizioni, meteo nel passato e il contrasto prima/adesso.",
      rule: [
        "Regolare: parlavo, credevo, dormivo, lavoravo, abitavo.",
        "Irregolare: ero, facevo, bevevo, dicevo, andavo, venivo, vedevo, sapevo, potevo, dovevo, volevo.",
        "Abitudini: da bambino, di solito, sempre, tutti i giorni, una volta.",
        "Descrizioni: era / erano + aggettivo accordato; c'era / c'erano.",
        "Meteo: faceva caldo/freddo/vento; c'era il sole/la nebbia/la neve.",
        "Prima (imperfetto) vs adesso (presente).",
        "Piacere/mancare: mi piaceva/piacevano, mi mancava/mancavano."
      ],
      tips: [
        "Se il passato e un'abitudine, uno stato o una descrizione -> imperfetto.",
        "Controlla sempre l'accordo dell'aggettivo con essere e il numero con piacere/mancare."
      ],
      note: "Dopo questo checkpoint passa a A2-U2: passato prossimo contro imperfetto, il racconto di eventi."
    }
  ],
  exercises: [
    {
      type: "gap",
      question: "Inserisci la forma giusta",
      sentence: "Da piccolo ___ sempre al parco.",
      options: ["giocavo", "gioco", "giocai", "giochero"],
      answer: "giocavo",
      hint: "Abitudine passata -> imperfetto.",
      explain: "Da piccolo giocavo sempre al parco."
    },
    {
      type: "table",
      question: "Completa l'irregolare",
      headers: ["Infinito", "Io imperfetto"],
      rows: [
        ["essere", "ero"],
        ["andare", ""]
      ],
      targetRow: 1,
      targetColumn: 1,
      options: ["andavo", "andevo", "andai", "andro"],
      answer: "andavo",
      hint: "Andare imperfetto = andavo.",
      explain: "andare -> andavo."
    },
    {
      type: "error-choice",
      question: "Trova l'errore",
      tokens: [
        { text: "Le", id: "0" },
        { text: "montagne", id: "1" },
        { text: "era", id: "wrong" },
        { text: "coperte", id: "3" },
        { text: "di", id: "4" },
        { text: "neve", id: "5" }
      ],
      answer: "wrong",
      hint: "Plurale -> erano.",
      explain: "Corretto: Le montagne erano coperte di neve."
    },
    {
      type: "dialog-choice",
      question: "Scegli la risposta",
      dialog: [
        { who: "Anna", text: "Com'era la tua scuola?" }
      ],
      options: [
        "Era grande e un po' buia, ma i prof erano gentili.",
        "E grande e buia adesso.",
        "Sara grande.",
        "Sono andato a scuola ieri."
      ],
      answer: "Era grande e un po' buia, ma i prof erano gentili.",
      hint: "Descrizione passata -> imperfetto di essere.",
      explain: "Era grande... i prof erano gentili."
    },
    {
      type: "match",
      question: "Collega frase e traduzione",
      pairs: [
        { left: "Faceva freddo.", right: "Было холодно." },
        { left: "C'era la nebbia.", right: "Был туман." },
        { left: "C'erano molti alberi.", right: "Было много деревьев." },
        { left: "Mi piacevano i film.", right: "Мне нравились фильмы." },
        { left: "Prima lavoravo in un bar.", right: "Раньше я работал в баре." }
      ],
      explain: "Meteo, esistenza, piacere e contrasto prima/adesso.",
      explainWrong: "Coppia sbagliata. Ricorda faceva/c'era/c'erano e l'accordo di piacere."
    },
    {
      type: "fill",
      question: "Scrivi «Когда я был маленьким, я жил в деревне»",
      answer: "Quando ero piccolo vivevo in campagna",
      accept: [
        "Quando ero piccolo vivevo in campagna",
        "quando ero piccolo vivevo in campagna",
        "Da piccolo vivevo in campagna",
        "da piccolo vivevo in campagna"
      ],
      placeholder: "Scrivi in italiano",
      hint: "Quando ero piccolo + vivevo.",
      explain: "Quando ero piccolo vivevo in campagna."
    },
    {
      type: "build",
      question: "Costruisci: «I miei nonni erano molto gentili»",
      words: ["I", "miei", "nonni", "erano", "molto", "gentili"],
      answer: "I miei nonni erano molto gentili",
      hint: "Plurale -> erano + gentili.",
      explain: "I miei nonni erano molto gentili."
    },
    {
      type: "choice",
      question: "Quale frase descrive un'abitudine passata?",
      options: [
        "La sera ascoltavo la radio.",
        "Ieri sera ho ascoltato la radio.",
        "Domani ascoltero la radio.",
        "Adesso ascolto la radio."
      ],
      answer: "La sera ascoltavo la radio.",
      hint: "La sera = ogni sera, abitudine.",
      explain: "La sera ascoltavo la radio."
    },
    {
      type: "table",
      question: "Completa c'era / c'erano",
      headers: ["Frase", "Forma"],
      rows: [
        ["___ un lago vicino.", "c'era"],
        ["___ tante stelle.", ""]
      ],
      targetRow: 1,
      targetColumn: 1,
      options: ["c'erano", "c'era", "c'eri", "c'erano essere"],
      answer: "c'erano",
      hint: "Stelle plurale -> c'erano.",
      explain: "C'erano tante stelle."
    },
    {
      type: "error-choice",
      question: "Trova l'errore",
      sentence: "Mi piaceva le montagne.",
      options: ["Mi", "piaceva", "le", "montagne"],
      answer: "piaceva",
      hint: "Montagne plurale -> piacevano.",
      explain: "Corretto: Mi piacevano le montagne."
    },
    {
      type: "dialog-choice",
      question: "Scegli il contrasto corretto",
      dialog: [
        { who: "Anna", text: "La tua vita e cambiata?" }
      ],
      options: [
        "Si, prima lavoravo tanto, adesso lavoro meno.",
        "Si, prima lavoro tanto, adesso lavoravo meno.",
        "Si, prima lavorero tanto, adesso lavoro meno.",
        "Si, prima ho lavorato tanto, adesso lavoravo meno."
      ],
      answer: "Si, prima lavoravo tanto, adesso lavoro meno.",
      hint: "Prima -> imperfetto; adesso -> presente.",
      explain: "prima lavoravo, adesso lavoro."
    },
    {
      type: "match",
      question: "Collega verbo e imperfetto (loro)",
      pairs: [
        { left: "essere", right: "erano" },
        { left: "fare", right: "facevano" },
        { left: "bere", right: "bevevano" },
        { left: "andare", right: "andavano" },
        { left: "dormire", right: "dormivano" }
      ],
      explain: "Irregolari e regolari alla terza plurale.",
      explainWrong: "Coppia sbagliata. essere->erano, fare->facevano, bere->bevevano, andare->andavano, dormire->dormivano."
    },
    {
      type: "gap",
      question: "Inserisci la forma giusta",
      sentence: "Quella mattina ___ caldo e ___ il sole.",
      options: ["faceva / c'era", "fa / c'e", "facevo / ero", "faceva / c'erano"],
      answer: "faceva / c'era",
      hint: "Meteo: faceva + aggettivo; sole singolare -> c'era.",
      explain: "faceva caldo e c'era il sole."
    },
    {
      type: "error-choice",
      question: "Trova l'errore",
      tokens: [
        { text: "Io", id: "0" },
        { text: "andevo", id: "wrong" },
        { text: "a", id: "2" },
        { text: "scuola", id: "3" },
        { text: "a", id: "4" },
        { text: "piedi", id: "5" }
      ],
      answer: "wrong",
      hint: "Andare imperfetto = andavo.",
      explain: "Corretto: Io andavo a scuola a piedi."
    },
    {
      type: "build",
      question: "Costruisci: «Di solito pranzavamo alle tredici»",
      words: ["Di", "solito", "pranzavamo", "alle", "tredici"],
      answer: "Di solito pranzavamo alle tredici",
      hint: "Di solito + imperfetto noi.",
      explain: "Di solito pranzavamo alle tredici."
    }
  ]
};
