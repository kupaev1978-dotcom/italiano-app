window.LESSONS = window.LESSONS || {};

window.LESSONS["a2-u1-l2"] = {
  id: "a2-u1-l2",
  title: "Imperfetto irregolare: ero, facevo, bevevo",
  level: "A2",
  xp: 40,
  theory: [
    {
      title: "Essere all'imperfetto",
      summary: "Essere e il verbo piu importante dell'imperfetto perche serve per descrivere: ero stanco, era bello, erano amici. Ha forme irregolari ma molto regolari nello schema.",
      rule: [
        "essere -> ero, eri, era, eravamo, eravate, erano.",
        "Io ero contento.",
        "Tu eri gentile.",
        "Lui / Lei era lontano.",
        "Noi eravamo pronti.",
        "Voi eravate stanchi.",
        "Loro erano felici."
      ],
      table: {
        headers: ["Persona", "essere"],
        rows: [
          ["io", "ero"],
          ["tu", "eri"],
          ["lui / lei", "era"],
          ["noi", "eravamo"],
          ["voi", "eravate"],
          ["loro", "erano"]
        ]
      },
      tips: [
        "Secreto: ero / eri / era / erano si usano continuamente nelle descrizioni. Imparali a memoria come blocchi.",
        "Secreto: con essere l'aggettivo si accorda: ero stanco (m), ero stanca (f), eravamo stanchi (mpl), eravamo stanche (fpl)."
      ],
      mistakes: [
        "Non dire *io sono ero. La forma e solo ero.",
        "Non dire *loro era. Per loro si usa erano.",
        "Non dimenticare l'accordo: *Maria era contento -> Maria era contenta."
      ],
      examples: [
        { it: "Da piccolo ero molto timido.", ru: "В детстве я был очень застенчивым." },
        { it: "La casa era grande e luminosa.", ru: "Дом был большой и светлый." },
        { it: "I miei nonni erano gentili.", ru: "Мои бабушка и дедушка были добрыми." },
        { it: "Noi eravamo felici quel giorno.", ru: "Мы были счастливы в тот день." }
      ]
    },
    {
      title: "Altri irregolari fondamentali",
      summary: "Fare, bere, dire, andare, venire, vedere, sapere e i modali hanno imperfetti irregolari ma utilissimi.",
      rule: [
        "fare -> facevo, facevi, faceva, facevamo, facevate, facevano.",
        "bere -> bevevo, bevevi, beveva, bevevamo, bevevate, bevevano.",
        "dire -> dicevo, dicevi, diceva, dicevamo, dicevate, dicevano.",
        "andare -> andavo, andavi, andava, andavamo, andavate, andavano.",
        "venire -> venivo, venivi, veniva, venivamo, venivate, venivano.",
        "vedere -> vedevo, vedevi, vedeva, vedevamo, vedevate, vedevano.",
        "sapere -> sapevo, sapevi, sapeva, sapevamo, sapevate, sapevano.",
        "potere -> potevo; dovere -> dovevo; volere -> volevo."
      ],
      table: {
        headers: ["Infinito", "Io", "Loro"],
        rows: [
          ["fare", "facevo", "facevano"],
          ["bere", "bevevo", "bevevano"],
          ["dire", "dicevo", "dicevano"],
          ["andare", "andavo", "andavano"],
          ["venire", "venivo", "venivano"],
          ["vedere", "vedevo", "vedevano"],
          ["sapere", "sapevo", "sapevano"]
        ]
      },
      tips: [
        "Secreto: andare all'imperfetto e andavo, non *andevo. E una trappola classica.",
        "Secreto: fare -> facevo con la -c-; bere -> bevevo con la -v-; dire -> dicevo con la -c-."
      ],
      mistakes: [
        "Non dire *io andevo. Corretto: io andavo.",
        "Non dire *io favevo. Corretto: io facevo.",
        "Non dire *loro veniano. Corretto: loro venivano."
      ],
      examples: [
        { it: "Prima facevo colazione alle sette.", ru: "Раньше я завтракал в семь." },
        { it: "Bevevo sempre caffe la mattina.", ru: "Я всегда пил кофе утром." },
        { it: "Andavo a scuola a piedi.", ru: "Я ходил в школу пешком." },
        { it: "Sapevo gia la risposta.", ru: "Я уже знал ответ." }
      ],
      dialog: [
        { who: "Anna", text: "Dove andavi da bambino in estate?", ru: "Куда ты ездил ребёнком летом?" },
        { who: "Marco", text: "Andavo al mare con i miei genitori.", ru: "Я ездил на море с родителями." }
      ]
    }
  ],
  exercises: [
    {
      type: "gap",
      question: "Inserisci la forma di essere",
      sentence: "Da giovane io ___ molto attivo.",
      options: ["ero", "era", "erano", "eri"],
      answer: "ero",
      hint: "Io + essere imperfetto = ero.",
      explain: "Da giovane ero molto attivo."
    },
    {
      type: "table",
      question: "Completa la coniugazione di fare",
      headers: ["Persona", "Forma"],
      rows: [
        ["io", "facevo"],
        ["lui / lei", ""],
        ["loro", "facevano"]
      ],
      targetRow: 1,
      targetColumn: 1,
      options: ["faceva", "facevo", "facevamo", "facevi"],
      answer: "faceva",
      hint: "Lui/lei + -va.",
      explain: "lui/lei faceva."
    },
    {
      type: "error-choice",
      question: "Trova l'errore",
      tokens: [
        { text: "Io", id: "0" },
        { text: "andevo", id: "wrong" },
        { text: "a", id: "2" },
        { text: "scuola", id: "3" }
      ],
      answer: "wrong",
      hint: "Andare imperfetto = andavo, non *andevo.",
      explain: "Corretto: Io andavo a scuola."
    },
    {
      type: "match",
      question: "Collega infinito e imperfetto (io)",
      pairs: [
        { left: "essere", right: "ero" },
        { left: "fare", right: "facevo" },
        { left: "bere", right: "bevevo" },
        { left: "dire", right: "dicevo" },
        { left: "sapere", right: "sapevo" }
      ],
      explain: "Questi sono gli irregolari piu frequenti.",
      explainWrong: "Coppia sbagliata. essere->ero, fare->facevo, bere->bevevo, dire->dicevo, sapere->sapevo."
    },
    {
      type: "choice",
      question: "Come si dice «Loro erano felici»?",
      options: ["Loro erano felici.", "Loro era felici.", "Loro eri felici.", "Loro ero felici."],
      answer: "Loro erano felici.",
      hint: "Loro + erano.",
      explain: "Loro erano felici."
    },
    {
      type: "dialog-choice",
      question: "Scegli la risposta",
      dialog: [
        { who: "Anna", text: "Cosa bevevi la mattina?" }
      ],
      options: [
        "Bevevo caffe.",
        "Bevo caffe.",
        "Ho bevuto caffe.",
        "Bevero caffe."
      ],
      answer: "Bevevo caffe.",
      hint: "Domanda all'imperfetto -> risposta all'imperfetto.",
      explain: "Bevevo caffe."
    },
    {
      type: "fill",
      question: "Scrivi «Noi sapevamo la verita»",
      answer: "Noi sapevamo la verita",
      accept: [
        "Noi sapevamo la verita",
        "noi sapevamo la verita",
        "Sapevamo la verita",
        "sapevamo la verita"
      ],
      placeholder: "Scrivi in italiano",
      hint: "Noi + sapere = sapevamo.",
      explain: "Sapevamo la verita."
    },
    {
      type: "build",
      question: "Costruisci: «Lei diceva sempre la verita»",
      words: ["Lei", "diceva", "sempre", "la", "verita"],
      answer: "Lei diceva sempre la verita",
      hint: "Lei + dire = diceva.",
      explain: "Lei diceva sempre la verita."
    },
    {
      type: "table",
      question: "Completa con l'accordo giusto",
      headers: ["Soggetto", "Frase"],
      rows: [
        ["Io (m)", "ero stanco"],
        ["Maria", ""]
      ],
      targetRow: 1,
      targetColumn: 1,
      options: ["era stanca", "era stanco", "erano stanche", "eri stanca"],
      answer: "era stanca",
      hint: "Maria femminile singolare -> stanca.",
      explain: "Maria era stanca."
    },
    {
      type: "error-choice",
      question: "Trova l'errore",
      sentence: "I bambini era contenti.",
      options: ["I", "bambini", "era", "contenti"],
      answer: "era",
      hint: "Loro/plurale -> erano.",
      explain: "Corretto: I bambini erano contenti."
    }
  ]
};
