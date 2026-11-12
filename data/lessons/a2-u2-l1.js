window.LESSONS = window.LESSONS || {};

window.LESSONS["a2-u2-l1"] = {
  id: "a2-u2-l1",
  title: "Due aspetti del passato: imperfetto contro passato prossimo",
  level: "A2",
  xp: 40,
  theory: [
    {
      title: "Due modi di guardare il passato",
      summary: "L'italiano ha due tempi principali per il passato. L'imperfetto mostra il passato come sfondo, abitudine o descrizione senza confini netti. Il passato prossimo mostra un evento concluso, un punto sulla linea del tempo. La scelta cambia il significato della frase.",
      rule: [
        "Imperfetto: abitudini, stati, descrizioni, azioni in corso, nulla di concluso.",
        "Passato prossimo: eventi puntuali, azioni concluse, sequenze di fatti.",
        "Faceva freddo. (descrizione/stato) vs Ha fatto freddo ieri. (evento concluso)",
        "Leggevo un libro. (azione in corso) vs Ho letto un libro. (libro finito)",
        "Da ragazzo giocavo a calcio. (abitudine) vs Ieri ho giocato a calcio. (evento singolo)"
      ],
      table: {
        headers: ["Domanda", "Tempo", "Esempio"],
        rows: [
          ["Com'era? / Cosa succedeva di solito?", "imperfetto", "La casa era grande. Giocavo sempre fuori."],
          ["Cosa hai fatto? / Cosa è successo?", "passato prossimo", "Ho pulito la casa. È arrivato Marco."],
          ["Azione in corso (senza fine)", "imperfetto", "Guardavo la TV."],
          ["Azione conclusa", "passato prossimo", "Ho guardato un film."]
        ]
      },
      tips: [
        "Secreto: immagina una linea del tempo. L'imperfetto e una nuvola sopra la linea (durata, sfondo). Il passato prossimo e un punto sulla linea (evento).",
        "Secreto: lo stesso verbo cambia senso: leggevo = stavo leggendo / ero solito leggere; ho letto = ho finito di leggere."
      ],
      mistakes: [
        "Non usare il passato prossimo per un'abitudine lunga: *da bambino ho giocato sempre -> da bambino giocavo sempre.",
        "Non usare l'imperfetto per un evento singolo concluso: *ieri guardavo un film (se intendi un fatto finito) -> ieri ho guardato un film.",
        "Non tradurre letteralmente dal russo: il russo usa l'aspetto, l'italiano usa il tempo."
      ],
      examples: [
        { it: "Prima pioveva spesso.", ru: "Раньше часто шёл дождь." },
        { it: "Ieri ha piovuto tutto il giorno.", ru: "Вчера весь день шёл дождь." },
        { it: "Vivevo a Roma.", ru: "Я жил в Риме (в тот период)." },
        { it: "Ho vissuto a Roma per tre anni.", ru: "Я прожил в Риме три года (завершённый факт)." }
      ]
    },
    {
      title: "Scegliere il tempo: le domande guida",
      summary: "Per decidere quale tempo usare, fatti una domanda semplice. Se la risposta descrive com'era la situazione o cosa succedeva di solito, usa l'imperfetto. Se la risposta elenca fatti avvenuti e finiti, usa il passato prossimo.",
      rule: [
        "Com'era il tempo? -> Faceva caldo. (imperfetto)",
        "Cosa facevi di solito? -> Camminavo ogni mattina. (imperfetto)",
        "Cosa hai fatto ieri? -> Sono uscito alle otto. (passato prossimo)",
        "Cosa è successo? -> Ha squillato il telefono. (passato prossimo)",
        "Cosa stavi facendo quando...? -> Dormivo quando... (imperfetto + evento)"
      ],
      table: {
        headers: ["Tipo di informazione", "Tempo", "Esempio"],
        rows: [
          ["descrizione", "imperfetto", "Il cielo era grigio."],
          ["abitudine", "imperfetto", "La sera leggevo."],
          ["evento singolo", "passato prossimo", "Ho comprato un ombrello."],
          ["sequenza", "passato prossimo", "Sono uscito, ho preso l'autobus, sono arrivato."],
          ["stato emotivo", "imperfetto", "Ero contento."]
        ]
      },
      tips: [
        "Secreto: gli stati (essere, avere, sembrare, piacere, volere, sapere) quasi sempre vanno all'imperfetto per descrivere un periodo: ero stanco, avevo fame, mi piaceva.",
        "Secreto: le sequenze di azioni compiute vanno al passato prossimo: sono entrato, ho salutato, mi sono seduto."
      ],
      mistakes: [
        "Non dire *ero andato per un evento singolo; corretto: sono andato. (andare vuole essere, ma il tempo dipende dal senso)",
        "Non confondere l'ausiliare con il tempo: l'imperfetto di andare e andavo, il passato prossimo e sono andato.",
        "Non usare il passato prossimo per un'emozione duratura: *ho avuto paura tutta la sera (se intendi uno stato) -> avevo paura tutta la sera."
      ],
      examples: [
        { it: "Avevo sonno, quindi sono andato a letto.", ru: "Я хотел спать, поэтому лёг в кровать." },
        { it: "Mi piaceva il mare, così ho nuotato.", ru: "Мне нравилось море, поэтому я поплыл." },
        { it: "Era buio e ho acceso la luce.", ru: "Было темно, и я включил свет." }
      ],
      dialog: [
        { who: "Anna", text: "Com'era la vacanza l'anno scorso?", ru: "Каким был отпуск в прошлом году?" },
        { who: "Marco", text: "Bellissima. Faceva sempre caldo e nuotavamo ogni giorno.", ru: "Прекрасным. Всегда было тепло, и мы плавали каждый день." },
        { who: "Anna", text: "E cosa avete fatto l'ultimo giorno?", ru: "А что вы делали в последний день?" },
        { who: "Marco", text: "Abbiamo preso il treno e siamo tornati a casa.", ru: "Мы сели на поезд и вернулись домой." }
      ]
    }
  ],
  exercises: [
    {
      type: "choice",
      question: "Quale tempo descrive un'abitudine passata?",
      options: ["imperfetto", "passato prossimo", "futuro", "presente"],
      answer: "imperfetto",
      hint: "Abitudine = durata, senza confine -> imperfetto.",
      explain: "Le abitudini passate si esprimono con l'imperfetto."
    },
    {
      type: "gap",
      question: "Scegli il tempo corretto",
      sentence: "Da ragazzo ___ a calcio tutti i giorni.",
      options: ["giocavo", "ho giocato", "giocherò", "gioco"],
      answer: "giocavo",
      hint: "Tutti i giorni + passato -> abitudine -> imperfetto.",
      explain: "Da ragazzo giocavo a calcio tutti i giorni."
    },
    {
      type: "table",
      question: "Collega la frase al tempo",
      headers: ["Frase", "Tempo"],
      rows: [
        ["Faceva freddo.", "imperfetto"],
        ["Ha nevicato ieri.", ""]
      ],
      targetRow: 1,
      targetColumn: 1,
      options: ["passato prossimo", "imperfetto", "futuro", "presente"],
      answer: "passato prossimo",
      hint: "Ieri + evento singolo -> passato prossimo.",
      explain: "Ha nevicato ieri = evento concluso."
    },
    {
      type: "match",
      question: "Collega domanda e tempo della risposta",
      pairs: [
        { left: "Com'era la casa?", right: "imperfetto" },
        { left: "Cosa hai fatto ieri?", right: "passato prossimo" },
        { left: "Cosa facevi di solito?", right: "imperfetto" },
        { left: "Cosa è successo?", right: "passato prossimo" },
        { left: "Eri contento?", right: "imperfetto" }
      ],
      explain: "Descrizione e abitudine -> imperfetto; evento -> passato prossimo.",
      explainWrong: "Coppia sbagliata. Ricorda: com'era / di solito / stato -> imperfetto; cosa hai fatto / è successo -> passato prossimo."
    },
    {
      type: "error-choice",
      question: "Trova l'errore di tempo",
      tokens: [
        { text: "Da", id: "0" },
        { text: "bambino", id: "1" },
        { text: "ho letto", id: "wrong" },
        { text: "tanti", id: "3" },
        { text: "libri", id: "4" }
      ],
      answer: "wrong",
      hint: "Abitudine lunga nel passato -> imperfetto leggevo.",
      explain: "Corretto: Da bambino leggevo tanti libri."
    },
    {
      type: "dialog-choice",
      question: "Scegli la risposta corretta",
      dialog: [
        { who: "Anna", text: "Cosa facevi la sera quando eri studente?" }
      ],
      options: [
        "Studiavo e ascoltavo musica.",
        "Ho studiato e ho ascoltato musica ieri.",
        "Studiero e ascoltero musica.",
        "Studio e ascolto musica."
      ],
      answer: "Studiavo e ascoltavo musica.",
      hint: "Domanda sulle abitudini passate -> imperfetto.",
      explain: "Studiavo e ascoltavo musica."
    },
    {
      type: "fill",
      question: "Scrivi «Ieri ho comprato il pane»",
      answer: "Ieri ho comprato il pane",
      accept: [
        "Ieri ho comprato il pane",
        "ieri ho comprato il pane",
        "Ho comprato il pane",
        "ho comprato il pane"
      ],
      placeholder: "Scrivi in italiano",
      hint: "Evento singolo con ieri -> passato prossimo.",
      explain: "Ieri ho comprato il pane."
    },
    {
      type: "build",
      question: "Costruisci: «Prima vivevo in campagna»",
      words: ["Prima", "vivevo", "in", "campagna"],
      answer: "Prima vivevo in campagna",
      hint: "Prima + stato duraturo -> imperfetto.",
      explain: "Prima vivevo in campagna."
    },
    {
      type: "choice",
      question: "Quale frase indica una sequenza di eventi conclusi?",
      options: [
        "Sono entrato, ho salutato e mi sono seduto.",
        "Entravo, salutavo e mi sedevo.",
        "Entrero, saluterò e mi siederò.",
        "Entro, saluto e mi siedo."
      ],
      answer: "Sono entrato, ho salutato e mi sono seduto.",
      hint: "Sequenza di fatti finiti -> passato prossimo.",
      explain: "La sequenza di eventi usa il passato prossimo."
    },
    {
      type: "table",
      question: "Completa con il tempo giusto",
      headers: ["Informazione", "Tempo"],
      rows: [
        ["descrizione di un periodo", "imperfetto"],
        ["evento puntuale concluso", ""]
      ],
      targetRow: 1,
      targetColumn: 1,
      options: ["passato prossimo", "imperfetto", "futuro", "condizionale"],
      answer: "passato prossimo",
      hint: "Evento concluso -> passato prossimo.",
      explain: "Evento puntuale -> passato prossimo."
    }
  ]
};
