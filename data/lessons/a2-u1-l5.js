window.LESSONS = window.LESSONS || {};

window.LESSONS["a2-u1-l5"] = {
  id: "a2-u1-l5",
  title: "Prima e adesso: imperfetto contro presente",
  level: "A2",
  xp: 35,
  theory: [
    {
      title: "Contrasto prima / adesso",
      summary: "L'imperfetto descrive com'era la vita prima; il presente descrive com'e adesso. Questo contrasto e uno degli usi piu naturali di A2.",
      rule: [
        "Prima abitavo in campagna, adesso vivo in citta.",
        "Da giovane lavoravo molto, ora riposo di piu.",
        "Prima non mi piaceva il caffe, adesso lo adoro.",
        "Una volta si viaggiava in treno, oggi si vola.",
        "Prima i telefoni erano grandi, adesso sono piccoli."
      ],
      table: {
        headers: ["Prima (imperfetto)", "Adesso (presente)"],
        rows: [
          ["abitavo in campagna", "vivo in citta"],
          ["lavoravo molto", "lavoro meno"],
          ["non mi piaceva il caffe", "adoro il caffe"],
          ["si viaggiava in treno", "si vola"],
          ["i telefoni erano grandi", "sono piccoli"]
        ]
      },
      tips: [
        "Secreto: prima / una volta / da giovane chiedono imperfetto; adesso / ora / oggi chiedono presente.",
        "Secreto: il verbo piacere al passato: non mi piaceva (singolare) / non mi piacevano (plurale)."
      ],
      mistakes: [
        "Non dire *prima vivo in campagna. Corretto: prima abitavo.",
        "Non dire *adesso abitavo. Corretto: adesso vivo.",
        "Non confondere piaceva / piacevano con il numero di cio che piace."
      ],
      examples: [
        { it: "Prima studiavo poco, adesso studio tanto.", ru: "Раньше я мало учился, теперь много." },
        { it: "Una volta si scriveva con la penna.", ru: "Раньше писали ручкой." },
        { it: "Adesso mando messaggi.", ru: "Теперь я отправляю сообщения." }
      ]
    },
    {
      title: "Piacere e mancare al passato",
      summary: "Mi piaceva / mi piacevano e mi mancava / mi mancano funzionano allo stesso modo dell'imperfetto: il verbo si accorda con la cosa, non con la persona.",
      rule: [
        "Mi piaceva la musica.",
        "Mi piacevano i film.",
        "Non mi piaceva la pioggia.",
        "Mi mancava la mia famiglia.",
        "Mi mancavano i miei amici.",
        "Adesso mi piace la musica (presente)."
      ],
      table: {
        headers: ["Cosa", "Frase al passato"],
        rows: [
          ["la musica (sing.)", "Mi piaceva la musica."],
          ["i film (plur.)", "Mi piacevano i film."],
          ["la famiglia (sing.)", "Mi mancava la famiglia."],
          ["gli amici (plur.)", "Mi mancavano gli amici."]
        ]
      },
      tips: [
        "Secreto: guarda la cosa dopo piaceva/piacciono: singolare -> -va, plurale -> -vano.",
        "Secreto: mancare al passato = «я скучал по»: mi mancavano gli amici."
      ],
      mistakes: [
        "Non dire *mi piaceva i film. Corretto: mi piacevano i film.",
        "Non dire *mi mancava gli amici. Corretto: mi mancavano gli amici.",
        "Non usare ho mancato: mancare usa essere, ma qui e imperfetto di piacere/mancare con mi."
      ],
      examples: [
        { it: "Da ragazzo mi piacevano le automobili.", ru: "В юности мне нравились автомобили." },
        { it: "All'estero mi mancava casa mia.", ru: "За границей я скучал по дому." },
        { it: "Mi mancavano i miei nonni.", ru: "Я скучал по бабушке и дедушке." }
      ],
      dialog: [
        { who: "Anna", text: "Com'era la tua vita prima?", ru: "Какова была твоя жизнь раньше?" },
        { who: "Marco", text: "Più semplice. Mi piaceva leggere e non avevo fretta.", ru: "Проще. Мне нравилось читать, и я не спешил." }
      ]
    }
  ],
  exercises: [
    {
      type: "gap",
      question: "Inserisci la forma giusta",
      sentence: "Prima ___ in campagna, adesso vivo in citta.",
      options: ["abitavo", "abito", "abitero", "ho abitato"],
      answer: "abitavo",
      hint: "Prima -> imperfetto.",
      explain: "Prima abitavo in campagna."
    },
    {
      type: "table",
      question: "Completa il contrasto",
      headers: ["Prima", "Adesso"],
      rows: [
        ["lavoravo molto", "lavoro meno"],
        ["non mi piaceva il caffe", ""]
      ],
      targetRow: 1,
      targetColumn: 1,
      options: ["adesso mi piace", "adesso mi piaceva", "prima mi piace", "adesso piacevo"],
      answer: "adesso mi piace",
      hint: "Adesso -> presente.",
      explain: "Adesso mi piace il caffe."
    },
    {
      type: "error-choice",
      question: "Trova l'errore",
      tokens: [
        { text: "Mi", id: "0" },
        { text: "piaceva", id: "wrong" },
        { text: "i", id: "2" },
        { text: "film", id: "3" }
      ],
      answer: "wrong",
      hint: "Film plurale -> piacevano.",
      explain: "Corretto: Mi piacevano i film."
    },
    {
      type: "dialog-choice",
      question: "Scegli la risposta",
      dialog: [
        { who: "Anna", text: "Cosa ti mancava quando eri all'estero?" }
      ],
      options: [
        "Mi mancavano la famiglia e gli amici.",
        "Mi manca la famiglia adesso.",
        "Mi mancero la famiglia.",
        "Ho mancato la famiglia."
      ],
      answer: "Mi mancavano la famiglia e gli amici.",
      hint: "Plurale di cose -> mancavano; passato -> imperfetto.",
      explain: "Mi mancavano la famiglia e gli amici."
    },
    {
      type: "match",
      question: "Collega frase e traduzione",
      pairs: [
        { left: "Prima studiavo poco.", right: "Раньше я мало учился." },
        { left: "Adesso studio tanto.", right: "Теперь я много учусь." },
        { left: "Mi piaceva leggere.", right: "Мне нравилось читать." },
        { left: "Mi mancavano i miei amici.", right: "Я скучал по друзьям." },
        { left: "Una volta si viaggiava in treno.", right: "Раньше путешествовали на поезде." }
      ],
      explain: "Contrasto prima/adesso e piacere/mancare.",
      explainWrong: "Coppia sbagliata. Controlla i marcatori prima/adesso e l'accordo di piacere/mancare."
    },
    {
      type: "fill",
      question: "Scrivi «Раньше я много работал»",
      answer: "Prima lavoravo molto",
      accept: [
        "Prima lavoravo molto",
        "prima lavoravo molto",
        "Una volta lavoravo molto",
        "una volta lavoravo molto"
      ],
      placeholder: "Scrivi in italiano",
      hint: "Prima + imperfetto.",
      explain: "Prima lavoravo molto."
    },
    {
      type: "build",
      question: "Costruisci: «Adesso mando messaggi»",
      words: ["Adesso", "mando", "messaggi"],
      answer: "Adesso mando messaggi",
      hint: "Adesso -> presente mando.",
      explain: "Adesso mando messaggi."
    },
    {
      type: "choice",
      question: "Quale frase e corretta?",
      options: [
        "Mi mancava gli amici.",
        "Mi mancavano gli amici.",
        "Mi mancavano l'amico.",
        "Mi mancava l'amici."
      ],
      answer: "Mi mancavano gli amici.",
      hint: "Amici plurale -> mancavano.",
      explain: "Mi mancavano gli amici."
    },
    {
      type: "table",
      question: "Completa con il tempo giusto",
      headers: ["Marcatore", "Tempo"],
      rows: [
        ["prima", "imperfetto"],
        ["adesso", ""]
      ],
      targetRow: 1,
      targetColumn: 1,
      options: ["presente", "imperfetto", "futuro", "passato prossimo"],
      answer: "presente",
      hint: "Adesso -> presente.",
      explain: "adesso -> presente."
    },
    {
      type: "error-choice",
      question: "Trova l'errore",
      sentence: "Prima vivo in campagna.",
      options: ["Prima", "vivo", "in", "campagna"],
      answer: "vivo",
      hint: "Prima -> imperfetto abitavo.",
      explain: "Corretto: Prima abitavo in campagna."
    }
  ]
};
