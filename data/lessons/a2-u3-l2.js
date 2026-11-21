window.LESSONS = window.LESSONS || {};

window.LESSONS["a2-u3-l2"] = {
  id: "a2-u3-l2",
  title: "Posizione dei pronomi diretti",
  level: "A2",
  xp: 40,
  theory: [
    {
      title: "Pronome prima del verbo coniugato",
      summary: "Con un verbo coniugato, il pronome diretto va prima del verbo. La negazione non va prima del pronome, ma prima dell'intero gruppo pronome + verbo.",
      rule: [
        "Lo vedo. / La vedo. / Li vedo. / Le vedo.",
        "Non lo vedo. / Non la chiamo. / Non li aspetto. / Non le invito.",
        "Lo conosci? / La aspetti? / Li compri? / Le senti?",
        "Il pronome non si separa dal verbo coniugato: *Vedo lo -> Lo vedo."
      ],
      table: {
        headers: ["Struttura", "Esempio"],
        rows: [
          ["pronome + verbo", "Lo chiamo."],
          ["non + pronome + verbo", "Non lo chiamo."],
          ["domanda con pronome", "Lo chiami?"],
          ["pronome plurale", "Li aspetto."],
          ["pronome femminile plurale", "Le invito."]
        ]
      },
      tips: [
        "Secreto: pensa al pronome come a un piccolo blocco che si attacca prima del verbo: lo vedo, non lo vedo, lo vedi?",
        "Secreto: con elisione, lo + ho diventa l'ho, la + ho diventa l'ho."
      ],
      mistakes: [
        "Non dire *Vedo lo. Corretto: Lo vedo.",
        "Non dire *Non vedo lo. Corretto: Non lo vedo.",
        "Non dire *Lo non vedo. Corretto: Non lo vedo."
      ],
      examples: [
        { it: "Marco è qui. Lo vedo.", ru: "Марко здесь. Я вижу его." },
        { it: "Non conosco Maria. Non la conosco.", ru: "Я не знаю Марию. Я её не знаю." },
        { it: "Aspetti i bambini? Sì, li aspetto.", ru: "Ты ждёшь детей? Да, жду их." },
        { it: "Inviti le amiche? No, non le invito.", ru: "Ты приглашаешь подруг? Нет, я их не приглашаю." }
      ],
      dialog: [
        { who: "Anna", text: "Vedi Marco?", ru: "Ты видишь Марко?" },
        { who: "Marco", text: "Sì, lo vedo, ma non lo sento.", ru: "Да, я вижу его, но не слышу его." }
      ]
    },
    {
      title: "Pronome con infinito e passato prossimo",
      summary: "Con i modali come voglio, devo, posso, il pronome spesso si attacca all'infinito. Con il passato prossimo, il pronome va prima dell'ausiliare.",
      rule: [
        "Voglio vederlo. / Devo farlo. / Posso comprarla.",
        "Vogliamo vederli. / Dovete farle. / Possono chiamarli.",
        "L'ho visto. / L'ho vista. / Li ho visti. / Le ho viste.",
        "Non l'ho visto. / Non li ho comprati. / Non le ho chiamate."
      ],
      table: {
        headers: ["Struttura", "Esempio"],
        rows: [
          ["modale + infinito + pronome", "Voglio vederlo."],
          ["pronome + ho/ha/abbiamo", "L'ho visto."],
          ["non + pronome + ausiliare", "Non l'ho visto."],
          ["pronome plurale + ausiliare", "Li ho comprati."],
          ["pronome femminile plurale + ausiliare", "Le ho viste."]
        ]
      },
      tips: [
        "Secreto: con l'infinito il pronome finisce attaccato alla parola: vedere + lo -> vederlo.",
        "Secreto: nel passato prossimo, prima controlla il pronome, poi scegli l'ausiliare: lo/la -> l'ho; li/le -> li ho / le ho."
      ],
      mistakes: [
        "Non dire *Voglio vedere lo. Corretto: Voglio vederlo.",
        "Non dire *Ho lo visto. Corretto: L'ho visto.",
        "Non dire *Non lo ho visto. Corretto: Non l'ho visto."
      ],
      examples: [
        { it: "Devo chiamare Anna. Devo chiamarla.", ru: "Мне нужно позвонить Анне. Мне нужно позвонить ей." },
        { it: "Posso comprare il pane? Sì, puoi comprarlo.", ru: "Могу я купить хлеб? Да, ты можешь купить его." },
        { it: "Hai visto i film? Sì, li ho visti.", ru: "Ты видел фильмы? Да, я их видел." },
        { it: "Hai comprato le mele? Sì, le ho comprate.", ru: "Ты купил яблоки? Да, я их купил." }
      ],
      dialog: [
        { who: "Anna", text: "Vuoi vedere il film?", ru: "Хочешь посмотреть фильм?" },
        { who: "Marco", text: "Sì, voglio vederlo stasera.", ru: "Да, я хочу посмотреть его сегодня вечером." }
      ]
    }
  ],
  exercises: [
    {
      type: "choice",
      question: "Dove va il pronome diretto con un verbo coniugato?",
      options: [
        "prima del verbo",
        "dopo il verbo",
        "solo con l'infinito",
        "mai nella frase"
      ],
      answer: "prima del verbo",
      hint: "Lo vedo, non Vedo lo.",
      explain: "Con il verbo coniugato il pronome va prima del verbo."
    },
    {
      type: "gap",
      question: "Completa con il pronome giusto",
      sentence: "Marco è qui. ___ vedo.",
      options: ["Lo", "La", "Li", "Le"],
      answer: "Lo",
      hint: "Marco è maschile singolare.",
      explain: "Lo vedo."
    },
    {
      type: "table",
      question: "Correggi la posizione",
      headers: ["Frase sbagliata", "Forma corretta"],
      rows: [
        ["Vedo lo", "Lo vedo."],
        ["Ho lo visto", ""]
      ],
      targetRow: 1,
      targetColumn: 1,
      options: ["L'ho visto.", "Ho visto lo.", "Lo ho visto.", "Visto l'ho."],
      answer: "L'ho visto.",
      hint: "lo + ho -> l'ho.",
      explain: "Corretto: L'ho visto."
    },
    {
      type: "match",
      question: "Collega frase e forma corretta",
      pairs: [
        { left: "Non chiamo Marco.", right: "Non lo chiamo." },
        { left: "Vedo Maria.", right: "La vedo." },
        { left: "Aspettiamo gli amici.", right: "Li aspettiamo." },
        { left: "Compro la casa.", right: "La compro." },
        { left: "Invito le ragazze.", right: "Le invito." }
      ],
      explain: "Il pronome va prima del verbo coniugato.",
      explainWrong: "Coppia sbagliata. Ricorda: lo/la/li/le prima del verbo."
    },
    {
      type: "error-choice",
      question: "Trova l'errore",
      tokens: [
        { text: "Voglio", id: "0" },
        { text: "vedere", id: "1" },
        { text: "lo", id: "wrong" }
      ],
      answer: "wrong",
      hint: "Con l'infinito il pronome si attacca: vederlo.",
      explain: "Corretto: Voglio vederlo."
    },
    {
      type: "dialog-choice",
      question: "Scegli la risposta corretta",
      dialog: [
        { who: "Anna", text: "Hai visto il film?" }
      ],
      options: [
        "Sì, l'ho visto.",
        "Sì, lo ho visto.",
        "Sì, ho lo visto.",
        "Sì, visto l'ho."
      ],
      answer: "Sì, l'ho visto.",
      hint: "lo + ho -> l'ho.",
      explain: "Sì, l'ho visto."
    },
    {
      type: "fill",
      question: "Scrivi Non la conosco",
      answer: "Non la conosco",
      accept: [
        "Non la conosco",
        "non la conosco"
      ],
      placeholder: "Scrivi in italiano",
      hint: "non + pronome + verbo.",
      explain: "Non la conosco."
    },
    {
      type: "build",
      question: "Costruisci: Voglio comprarlo",
      words: ["Voglio", "comprarlo"],
      answer: "Voglio comprarlo",
      hint: "Infinito + pronome attaccato.",
      explain: "Voglio comprarlo."
    },
    {
      type: "choice",
      question: "Quale frase è corretta?",
      options: [
        "Non lo vedo.",
        "Lo non vedo.",
        "Vedo non lo.",
        "Non vedo lo."
      ],
      answer: "Non lo vedo.",
      hint: "non precede il gruppo pronome + verbo.",
      explain: "Non lo vedo."
    },
    {
      type: "table",
      question: "Completa il passato prossimo",
      headers: ["Domanda", "Risposta"],
      rows: [
        ["Hai comprato la torta?", "Sì, l'ho comprata."],
        ["Hai comprato i fiori?", ""]
      ],
      targetRow: 1,
      targetColumn: 1,
      options: ["Sì, li ho comprati.", "Sì, l'ho comprato.", "Sì, ho comprati li.", "Sì, comprati li ho."],
      answer: "Sì, li ho comprati.",
      hint: "i fiori -> li, participio maschile plurale.",
      explain: "Sì, li ho comprati."
    }
  ]
};
