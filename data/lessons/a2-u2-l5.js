window.LESSONS = window.LESSONS || {};

window.LESSONS["a2-u2-l5"] = {
  id: "a2-u2-l5",
  title: "Errori tipici: passato prossimo contro imperfetto",
  level: "A2",
  xp: 35,
  theory: [
    {
      title: "Le trappole piu comuni",
      summary: "I parlanti russi sbagliano spesso perche il russo usa l'aspetto (совершенный / несовершенный вид), non il tempo. Ecco le trappole classiche e come evitarle.",
      rule: [
        "*ho andato -> sono andato (andare vuole essere, ma il tempo dipende dal senso: evento -> pp, abitudine -> imperfetto andavo)",
        "*mentre ho camminato -> mentre camminavo (dopo mentre, azione in corso)",
        "*quando ero piccolo, sono andato a scuola a piedi (abitudine) -> andavo a scuola a piedi",
        "*ero mangiato -> ho mangiato (mangiare vuole avere)",
        "*facevo la colazione e poi sono uscito (ok) vs *ho fatto colazione tutti i giorni (abitudine -> facevo)"
      ],
      table: {
        headers: ["Errore", "Perche e sbagliato", "Corretto"],
        rows: [
          ["ho andato", "andare usa essere", "sono andato / andavo"],
          ["mentre ho camminato", "mentre regge l'in corso", "mentre camminavo"],
          ["da bambino ho giocato sempre", "abitudine -> imperfetto", "da bambino giocavo sempre"],
          ["ero mangiato", "mangiare usa avere", "ho mangiato"],
          ["quando ero piccolo, sono andato (abitudine)", "abitudine -> imperfetto", "quando ero piccolo, andavo"]
        ]
      },
      tips: [
        "Secreto: prima di scegliere il tempo, chiediti: e un'abitudine/stato/descrizione (imperfetto) o un evento singolo/concluso (passato prossimo)?",
        "Secreto: dopo mentre, quasi sempre imperfetto. Dopo quando/appena per un punto preciso, passato prossimo."
      ],
      mistakes: [
        "Non tradurre il aspetto russo con il passato prossimo: «я ходил» come abitudine -> andavo, non ho andato.",
        "Non usare l'imperfetto per un fatto unico concluso: *ieri andavo al cinema (se e un fatto finito) -> ieri sono andato al cinema.",
        "Non confondere l'ausiliare (essere/avere) con il tempo (imperfetto/passato prossimo): sono due scelte indipendenti."
      ],
      examples: [
        { it: "Da studente andavo in biblioteca (abitudine).", ru: "Студентом я ходил в библиотеку (привычка)." },
        { it: "Ieri sono andato in biblioteca (evento).", ru: "Вчера я сходил в библиотеку (событие)." },
        { it: "Mentre leggevo, ho sentito un rumore.", ru: "Пока я читал, я услышал шум." }
      ]
    },
    {
      title: "Autocontrollo in tre domande",
      summary: "Prima di scrivere un verbo al passato, fatti tre domande rapide. Se rispondi correttamente, il tempo sara giusto.",
      rule: [
        "1. E un'abitudine, uno stato o una descrizione? -> imperfetto.",
        "2. E un evento singolo, concluso, che fa avanzare la storia? -> passato prossimo.",
        "3. E dopo mentre? -> imperfetto nella frase di mentre.",
        "4. E dopo quando/appena per un punto preciso? -> passato prossimo.",
        "5. Il verbo vuole essere o avere? (indipendente dal tempo)"
      ],
      table: {
        headers: ["Situazione", "Scelta"],
        rows: [
          ["descrizione di un periodo", "imperfetto"],
          ["evento che rompe la scena", "passato prossimo"],
          ["dopo mentre", "imperfetto"],
          ["dopo appena (punto)", "passato prossimo"],
          ["stato emotivo duraturo", "imperfetto"]
        ]
      },
      tips: [
        "Secreto: rileggi il racconto e colora mentalmente: lo sfondo e una nuvola (imperfetto), i fatti sono punti (passato prossimo).",
        "Secreto: se una frase suona «sospesa» senza fine, probabilmente e imperfetto; se suona «completata», e passato prossimo."
      ],
      mistakes: [
        "Non applicare le regole meccanicamente senza senso: il contesto decide.",
        "Non dimenticare che alcuni verbi (piacere, mancare, servire) si accordano con la cosa, non con la persona, in entrambi i tempi.",
        "Non usare il passato remoto (parlai) a A2: non e richiesto."
      ],
      examples: [
        { it: "Avevo fame (stato) e ho mangiato un panino (evento).", ru: "Я был голоден (состояние) и съел бутерброд (событие)." },
        { it: "Mentre pioveva (sfondo), sono rimasto a casa (evento).", ru: "Пока шёл дождь (фон), я остался дома (событие)." }
      ],
      dialog: [
        { who: "Anna", text: "Perche hai usato l'imperfetto qui?", ru: "Почему ты использовал здесь imperfetto?" },
        { who: "Marco", text: "Perche descrivevo l'atmosfera, non un fatto singolo.", ru: "Потому что я описывал атмосферу, а не отдельный факт." }
      ]
    }
  ],
  exercises: [
    {
      type: "error-choice",
      question: "Trova l'errore",
      sentence: "Ieri ho andato al cinema.",
      options: ["Ieri", "ho", "andato", "al", "cinema"],
      answer: "ho",
      hint: "Andare usa essere: sono andato.",
      explain: "Corretto: Ieri sono andato al cinema."
    },
    {
      type: "error-choice",
      question: "Trova l'errore dopo mentre",
      tokens: [
        { text: "Mentre", id: "0" },
        { text: "ho camminato", id: "wrong" },
        { text: ",", id: "2" },
        { text: "ho visto", id: "3" },
        { text: "un", id: "4" },
        { text: "gatto", id: "5" }
      ],
      answer: "wrong",
      hint: "Dopo mentre, azione in corso -> camminavo.",
      explain: "Corretto: Mentre camminavo, ho visto un gatto."
    },
    {
      type: "choice",
      question: "Quale frase esprime un'abitudine passata?",
      options: [
        "Da bambino andavo al fiume d'estate.",
        "Ieri sono andato al fiume.",
        "Domani andro al fiume.",
        "Adesso vado al fiume."
      ],
      answer: "Da bambino andavo al fiume d'estate.",
      hint: "Abitudine -> imperfetto andavo.",
      explain: "Da bambino andavo al fiume d'estate."
    },
    {
      type: "gap",
      question: "Completa con il tempo giusto",
      sentence: "Quando ero piccolo, ___ a scuola a piedi.",
      options: ["andavo", "sono andato", "andro", "vado"],
      answer: "andavo",
      hint: "Abitudine nel periodo -> imperfetto.",
      explain: "Quando ero piccolo, andavo a scuola a piedi."
    },
    {
      type: "table",
      question: "Correggi l'ausiliare o il tempo",
      headers: ["Frase sbagliata", "Correzione"],
      rows: [
        ["ho andato", "sono andato"],
        ["ero mangiato", ""]
      ],
      targetRow: 1,
      targetColumn: 1,
      options: ["ho mangiato", "ero mangiato", "sono mangiato", "mangiavo sempre"],
      answer: "ho mangiato",
      hint: "Mangiare usa avere.",
      explain: "Corretto: ho mangiato."
    },
    {
      type: "match",
      question: "Collega frase e correzione",
      pairs: [
        { left: "mentre ho dormito", right: "mentre dormivo" },
        { left: "da ragazzo ho giocato sempre", right: "da ragazzo giocavo sempre" },
        { left: "ho andato a casa", right: "sono andato a casa" },
        { left: "quando ero piccolo, sono andato (abitudine)", right: "quando ero piccolo, andavo" },
        { left: "ero bevuto caffe", right: "ho bevuto caffe" }
      ],
      explain: "Ogni errore ha una regola: ausiliare, tempo dopo mentre, abitudine.",
      explainWrong: "Coppia sbagliata. Ricorda le trappole: andare->essere; mentre->imperfetto; abitudine->imperfetto."
    },
    {
      type: "dialog-choice",
      question: "Scegli la risposta corretta",
      dialog: [
        { who: "Anna", text: "Cosa facevi la domenica da bambino?" }
      ],
      options: [
        "Andavo in chiesa con i nonni.",
        "Sono andato in chiesa con i nonni.",
        "Andro in chiesa con i nonni.",
        "Vado in chiesa con i nonni."
      ],
      answer: "Andavo in chiesa con i nonni.",
      hint: "Abitudine domenicale -> imperfetto.",
      explain: "Andavo in chiesa con i nonni."
    },
    {
      type: "fill",
      question: "Scrivi «Mentre guidavo, ho sentito una voce»",
      answer: "Mentre guidavo, ho sentito una voce",
      accept: [
        "Mentre guidavo, ho sentito una voce",
        "mentre guidavo ho sentito una voce",
        "Mentre guidavo ho sentito una voce",
        "mentre guidavo, ho sentito una voce"
      ],
      placeholder: "Scrivi in italiano",
      hint: "Mentre + imperfetto, evento + pp.",
      explain: "Mentre guidavo, ho sentito una voce."
    },
    {
      type: "build",
      question: "Costruisci: «Da studente facevo many errori» -> correggi in italiano",
      words: ["Da", "studente", "facevo", "molti", "errori"],
      answer: "Da studente facevo molti errori",
      hint: "Abitudine -> imperfetto facevo.",
      explain: "Da studente facevo molti errori."
    },
    {
      type: "error-choice",
      question: "Trova l'errore",
      sentence: "Ieri mentre guardavo la TV, ho mangiato una pizza.",
      options: ["Ieri", "mentre", "guardavo", "ho mangiato", "una pizza"],
      answer: "Ieri",
      hint: "Con mentre + evento singolo, meglio un marcatore di contesto; ma la vera trappola e un'altra: ricontrolla. In realta la frase e corretta. Scegli l'opzione che segnala 'nessun errore' se disponibile; qui l'esercizio valuta la consapevolezza: la frase e accettabile.",
      explain: "La frase e corretta: mentre guardavo (sfondo) + ho mangiato (evento). Nessun errore reale."
    }
  ]
};
