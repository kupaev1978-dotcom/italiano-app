window.LESSONS = window.LESSONS || {};

window.LESSONS["a2-u3-l5"] = {
  id: "a2-u3-l5",
  title: "Ne: quantità e parte di un tutto",
  level: "A2",
  xp: 40,
  theory: [
    {
      title: "Cosa significa ne",
      summary: "Ne sostituisce un complemento introdotto da di, una quantità o una parte di un tutto. Spesso risponde a domande con quanti?, quante?, alcuni?, molto?, poco?.",
      rule: [
        "Vuoi dei biscotti? Sì, ne voglio due.",
        "Hai fratelli? Sì, ne ho uno.",
        "Quante mele compri? Ne compro tre.",
        "Hai visto i film? Sì, ne ho visti molti.",
        "Non ne ho idea."
      ],
      table: {
        headers: ["Domanda", "Risposta con ne"],
        rows: [
          ["Vuoi dei biscotti?", "Sì, ne voglio due."],
          ["Hai fratelli?", "Sì, ne ho uno."],
          ["Quanti amici hai?", "Ne ho molti."],
          ["Vuoi caffè?", "Sì, ne voglio un po'."],
          ["Capisci questa regola?", "No, non ne ho idea."]
        ]
      },
      tips: [
        "Secreto: ne non si traduce sempre in modo letterale. Pensa a: di questo, di quelli, alcuni, quantità.",
        "Secreto: con i numeri, ne sta prima del verbo: ne voglio due, ne ho tre."
      ],
      mistakes: [
        "Non dire *Voglio due di biscotti. Corretto: Ne voglio due.",
        "Non dire *Ho due fratelli? Sì, ho due. Corretto: Sì, ne ho due.",
        "Non dire *Non ho idea quando ti riferisci a una cosa già detta. Meglio: Non ne ho idea."
      ],
      examples: [
        { it: "Quante sorelle hai? Ne ho due.", ru: "Сколько у тебя сестёр? У меня две." },
        { it: "Vuoi delle arance? Sì, ne prendo una.", ru: "Хочешь апельсинов? Да, я возьму один." },
        { it: "Hai letto i libri? Sì, ne ho letti tre.", ru: "Ты прочитал книги? Да, я прочитал три." },
        { it: "Parliamo di questo problema? No, non ne parliamo.", ru: "Мы говорим об этой проблеме? Нет, мы не говорим об этом." }
      ]
    },
    {
      title: "Posizione di ne",
      summary: "Ne va prima del verbo coniugato. Con l'infinito si attacca spesso alla fine del verbo. Nel passato prossimo sta prima dell'ausiliare.",
      rule: [
        "Ne voglio due. / Non ne voglio.",
        "Voglio prenderne due. / Devo farne uno.",
        "Ne ho visti molti. / Non ne ho comprati.",
        "Quanti ne vuoi? Ne voglio tre.",
        "Non ne ho voglia."
      ],
      table: {
        headers: ["Struttura", "Esempio"],
        rows: [
          ["ne + verbo", "Ne voglio due."],
          ["non + ne + verbo", "Non ne voglio."],
          ["infinito + ne", "Voglio prenderne due."],
          ["ne + ausiliare", "Ne ho visti molti."],
          ["domanda con quanti", "Quanti ne vuoi?"]
        ]
      },
      tips: [
        "Secreto: se c'è un infinito, spesso puoi attaccare ne: prendere + ne -> prenderne.",
        "Secreto: con il passato prossimo, ne prima dell'ausiliare: ne ho comprati due."
      ],
      mistakes: [
        "Non dire *Voglio ne due. Corretto: Ne voglio due oppure Voglio prenderne due.",
        "Non dire *Ho ne visti. Corretto: Ne ho visti.",
        "Non dimenticare ne nelle risposte di quantità: *Sì, ho due -> Sì, ne ho due."
      ],
      examples: [
        { it: "Vuoi dei fiori? Sì, ne prendo tre.", ru: "Хочешь цветов? Да, я возьму три." },
        { it: "Quanti caffè bevi? Ne bevo due al giorno.", ru: "Сколько кофе ты пьёшь? Два в день." },
        { it: "Hai soldi? No, non ne ho.", ru: "У тебя есть деньги? Нет, у меня нет." }
      ],
      dialog: [
        { who: "Anna", text: "Vuoi dei mandarini?", ru: "Хочешь мандаринов?" },
        { who: "Marco", text: "Sì, ne prendo due, grazie.", ru: "Да, я возьму два, спасибо." }
      ]
    }
  ],
  exercises: [
    {
      type: "gap",
      question: "Completa con ne",
      sentence: "Hai sorelle? Sì, ___ ho una.",
      options: ["ne", "lo", "la", "li"],
      answer: "ne",
      hint: "Quantità di sorelle -> ne.",
      explain: "Sì, ne ho una."
    },
    {
      type: "table",
      question: "Completa la risposta",
      headers: ["Domanda", "Risposta"],
      rows: [
        ["Vuoi caffè?", "Sì, ne voglio un po'."],
        ["Quanti amici hai?", ""]
      ],
      targetRow: 1,
      targetColumn: 1,
      options: ["Ne ho molti.", "Ho molti.", "Li ho molti.", "Lo ho molti."],
      answer: "Ne ho molti.",
      hint: "Quantità -> ne.",
      explain: "Ne ho molti."
    },
    {
      type: "error-choice",
      question: "Trova l'errore",
      sentence: "Voglio due di mele.",
      options: ["Voglio", "due", "di", "mele"],
      answer: "di",
      hint: "Per quantità si usa ne: Ne voglio due.",
      explain: "Corretto: Ne voglio due."
    },
    {
      type: "dialog-choice",
      question: "Scegli la risposta corretta",
      dialog: [
        { who: "Anna", text: "Hai visto i documentari?" }
      ],
      options: [
        "Sì, ne ho visti due.",
        "Sì, li ho visti due.",
        "Sì, ho visti due.",
        "Sì, ne visti due."
      ],
      answer: "Sì, ne ho visti due.",
      hint: "Quantità di documentari -> ne.",
      explain: "Sì, ne ho visti due."
    },
    {
      type: "match",
      question: "Collega domanda e risposta con ne",
      pairs: [
        { left: "Vuoi del latte?", right: "Sì, ne voglio un bicchiere." },
        { left: "Hai figli?", right: "Sì, ne ho due." },
        { left: "Quanti libri leggi?", right: "Ne leggo molti." },
        { left: "Hai voglia di uscire?", right: "Sì, ne ho voglia." },
        { left: "Capisci questa regola?", right: "No, non ne ho idea." }
      ],
      explain: "Ne sostituisce la quantità o la parte di un tutto.",
      explainWrong: "Coppia sbagliata. Cerca la quantità o l'espressione fissa con ne."
    },
    {
      type: "fill",
      question: "Scrivi Ne compro tre",
      answer: "Ne compro tre",
      accept: [
        "Ne compro tre",
        "ne compro tre"
      ],
      placeholder: "Scrivi in italiano",
      hint: "ne + verbo + numero.",
      explain: "Ne compro tre."
    },
    {
      type: "build",
      question: "Costruisci: Non ne ho idea",
      words: ["Non", "ne", "ho", "idea"],
      answer: "Non ne ho idea",
      hint: "Espressione fissa.",
      explain: "Non ne ho idea."
    },
    {
      type: "choice",
      question: "Quale forma è più naturale con voglio + infinito?",
      options: [
        "Voglio prenderne due.",
        "Voglio ne prendere due.",
        "Prenderne voglio due.",
        "Ne voglio due prendere."
      ],
      answer: "Voglio prenderne due.",
      hint: "Con l'infinito, ne si attacca spesso alla fine.",
      explain: "Voglio prenderne due."
    },
    {
      type: "error-choice",
      question: "Trova l'errore",
      tokens: [
        { text: "Hai", id: "0" },
        { text: "fratelli?", id: "1" },
        { text: "Sì,", id: "2" },
        { text: "ho", id: "wrong" },
        { text: "due.", id: "4" }
      ],
      answer: "wrong",
      hint: "Manca ne prima di ho.",
      explain: "Corretto: Sì, ne ho due."
    },
    {
      type: "table",
      question: "Completa con ne",
      headers: ["Frase", "Con ne"],
      rows: [
        ["Vuoi dei fiori?", "Sì, ne voglio."],
        ["Vuoi due fiori?", ""]
      ],
      targetRow: 1,
      targetColumn: 1,
      options: ["Sì, ne voglio due.", "Sì, voglio due.", "Sì, ne due voglio.", "Sì, voglio ne due."],
      answer: "Sì, ne voglio due.",
      hint: "Quantità precisa -> ne + verbo + numero.",
      explain: "Sì, ne voglio due."
    }
  ]
};
