window.LESSONS = window.LESSONS || {};

window.LESSONS["a1-u1-l1"] = {
  id: "a1-u1-l1",
  title: "Глаголы на -ERE и -IRE в presente",
  level: "A1",
  xp: 35,
  theory: [
    {
      title: "Три спряжения: -ARE, -ERE, -IRE",
      summary: "В итальянском три основных типа глаголов. Ты уже знаешь -ARE. Теперь добавляем -ERE и -IRE. Большая часть логики повторяется, поэтому учить легче.",
      rule: [
        "Глаголы на -ARE: parlare, mangiare, lavorare. Окончания: -o, -i, -a, -iamo, -ate, -ano.",
        "Глаголы на -ERE: scrivere, leggere, vivere, credere. Окончания: -o, -i, -e, -iamo, -ete, -ono.",
        "Глаголы на -IRE: dormire, partire, sentire, aprire. Окончания: -o, -i, -e, -iamo, -ite, -ono.",
        "Обрати внимание: io, tu, lui/lei и noi очень похожи у -ERE и -IRE. Главное различие — voi: -ete против -ite."
      ],
      table: {
        headers: ["Лицо", "-ARE", "-ERE", "-IRE"],
        rows: [
          ["io", "parlo", "scrivo", "dormo"],
          ["tu", "parli", "scrivi", "dormi"],
          ["lui / lei", "parla", "scrive", "dorme"],
          ["noi", "parliamo", "scriviamo", "dormiamo"],
          ["voi", "parlate", "scrivete", "dormite"],
          ["loro", "parlano", "scrivono", "dormono"]
        ]
      },
      tips: [
        "Секрет экономии памяти: для -ERE и -IRE формы io, tu, lui/lei, noi почти одинаковые по схеме: -o, -i, -e, -iamo. Отличаются voi и иногда loro, если глагол на -isc-.",
        "Форма noi всегда узнаётся по -iamo: parliamo, scriviamo, dormiamo, capiamo, finiamo. Это один из самых надёжных хвостов в итальянском."
      ],
      mistakes: [
        "Не говори noi scrivere. Инфинитив не спрягается. Правильно: noi scriviamo.",
        "Не путай voi scrivete и voi dormite: -ERE даёт -ete, -IRE даёт -ite.",
        "Не переноси русское «я пишу» как io scrivo обязательно. В обычной речи чаще просто Scrivo."
      ],
      examples: [
        { it: "Scrivo una lettera.", ru: "Я пишу письмо." },
        { it: "Leggi un libro?", ru: "Ты читаешь книгу?" },
        { it: "Loro dormono otto ore.", ru: "Они спят восемь часов." },
        { it: "Noi partiamo domani.", ru: "Мы уезжаем завтра." }
      ]
    },
    {
      title: "Полезные глаголы -ERE и -IRE",
      summary: "Эти глаголы закрывают бытовые темы: читать, писать, жить, думать, открывать, спать, уезжать, слышать.",
      rule: [
        "scrivere — писать",
        "leggere — читать",
        "vivere — жить",
        "credere — верить, думать",
        "aprire — открывать",
        "dormire — спать",
        "partire — уезжать, отправляться",
        "sentire — слышать, чувствовать"
      ],
      table: {
        headers: ["Глагол", "Тип", "Пример"],
        rows: [
          ["scrivere", "-ERE", "Scrivo un messaggio."],
          ["leggere", "-ERE", "Leggo un libro."],
          ["vivere", "-ERE", "Vivo a Roma."],
          ["credere", "-ERE", "Credo in te."],
          ["aprire", "-IRE", "Apro la finestra."],
          ["dormire", "-IRE", "Dormo bene."],
          ["partire", "-IRE", "Partiamo domani."],
          ["sentire", "-IRE", "Sento la musica."]
        ]
      },
      tips: [
        "Секрет про leggere: в форме io будет doppio g: leggo. Не *levo. Сравни: leggo, leggi, legge, leggiamo, leggete, leggono.",
        "Секрет про sentire: это не то же самое, что ascoltare. Sentire — слышать физически или чувствовать. Ascoltare — активно слушать, прислушиваться."
      ],
      mistakes: [
        "Не говори *io levo. Правильно: io leggo.",
        "Не путай sento и ascolto: Sento un rumore — я слышу шум. Ascolto la musica — я слушаю музыку.",
        "Не переводи «я живу в Риме» как sono Roma. Правильно: Vivo a Roma."
      ],
      examples: [
        { it: "Leggo un libro interessante.", ru: "Я читаю интересную книгу." },
        { it: "Apro la porta.", ru: "Я открываю дверь." },
        { it: "Sento un rumore.", ru: "Я слышу шум." },
        { it: "Credo che sia vero.", ru: "Я думаю, что это правда.", note: "che + congiuntivo будет позже, пока просто запомни фразу" }
      ],
      dialog: [
        { who: "Anna", text: "Che fai?", ru: "Что делаешь?" },
        { who: "Marco", text: "Leggo un libro. E tu?", ru: "Читаю книгу. А ты?" },
        { who: "Anna", text: "Scrivo un messaggio.", ru: "Пишу сообщение." },
        { who: "Marco", text: "Poi partiamo?", ru: "Потом мы уезжаем?" },
        { who: "Anna", text: "Sì, partiamo alle otto.", ru: "Да, мы уезжаем в восемь." }
      ]
    }
  ],
  exercises: [
    {
      type: "gap",
      question: "Вставь правильное окончание для noi",
      sentence: "Noi scriv___ una lettera.",
      options: ["o", "i", "e", "iamo"],
      answer: "iamo",
      hint: "Для noi у глаголов на -ERE окончание -iamo.",
      explain: "Noi scriviamo — мы пишем."
    },
    {
      type: "table",
      question: "Заполни форму для lui/lei",
      headers: ["Лицо", "Форма"],
      rows: [
        ["io", "scrivo"],
        ["tu", "scrivi"],
        ["lui / lei", ""],
        ["noi", "scriviamo"]
      ],
      targetRow: 2,
      targetColumn: 1,
      options: ["scrive", "scrivo", "scrivete", "scrivono"],
      answer: "scrive",
      hint: "Для lui/lei у глаголов на -ERE окончание -e.",
      explain: "Lui/lei scrive — он/она пишет."
    },
    {
      type: "choice",
      question: "Какой глагол относится к -IRE?",
      options: ["scrivere", "leggere", "dormire", "credere"],
      answer: "dormire",
      hint: "Dormire заканчивается на -ire.",
      explain: "dormire — спать, глагол на -IRE."
    },
    {
      type: "match",
      question: "Соедини инфинитив и форму io",
      pairs: [
        { left: "scrivere", right: "scrivo" },
        { left: "leggere", right: "leggo" },
        { left: "dormire", right: "dormo" },
        { left: "aprire", right: "apro" },
        { left: "sentire", right: "sento" }
      ],
      explain: "Это базовые формы io для -ERE и -IRE.",
      explainWrong: "Неверная пара. Помни: leggere даёт leggo, а не *levo."
    },
    {
      type: "fill",
      question: "Напиши «Я читаю» глаголом leggere",
      answer: "Leggo",
      accept: ["Leggo", "leggo", "Io leggo", "io leggo"],
      placeholder: "Форма io",
      hint: "У глагола leggere форма io — leggo, с двойной g.",
      explain: "Leggo — я читаю."
    },
    {
      type: "gap",
      question: "Вставь правильную форму",
      sentence: "Tu ___ domani.",
      options: ["parto", "parti", "parte", "partiamo"],
      answer: "parti",
      hint: "Для tu у глаголов на -IRE окончание -i.",
      explain: "Tu parti domani — ты уезжаешь завтра."
    },
    {
      type: "build",
      question: "Собери фразу: «Мы спим дома»",
      words: ["Dormiamo", "a", "casa"],
      answer: "Dormiamo a casa",
      hint: "Noi + dormire = dormiamo.",
      explain: "Dormiamo a casa — мы спим дома."
    },
    {
      type: "choice",
      question: "Как правильно: «вы читаете»?",
      options: ["Voi leggete.", "Voi leggate.", "Voi legite.", "Voi leggono."],
      answer: "Voi leggete.",
      hint: "Для voi у -ERE окончание -ete.",
      explain: "Voi leggete — вы читаете."
    },
    {
      type: "table",
      question: "Заполни форму для loro",
      headers: ["Лицо", "Форма"],
      rows: [
        ["noi", "apriamo"],
        ["voi", "aprite"],
        ["loro", ""]
      ],
      targetRow: 2,
      targetColumn: 1,
      options: ["aprono", "aprite", "apriamo", "apre"],
      answer: "aprono",
      hint: "Для loro у регулярных -IRE окончание -ono.",
      explain: "Loro aprono — они открывают."
    },
    {
      type: "gap",
      question: "Вставь правильный глагол по смыслу",
      sentence: "___ la musica! (Я слышу музыку!)",
      options: ["Sento", "Ascolto", "Leggo", "Scrivo"],
      answer: "Sento",
      hint: "Sentire — слышать. Ascoltare — слушать активно.",
      explain: "Sento la musica — я слышу музыку."
    }
  ]
};
