window.LESSONS = window.LESSONS || {};

window.LESSONS["a0-u4-l2"] = {
  id: "a0-u4-l2",
  title: "Базовые неправильные глаголы: andare, venire, fare, stare",
  level: "A0",
  xp: 35,
  theory: [
    {
      title: "Andare и venire: идти и приходить",
      summary: "Эти два глагола нужны каждый день. Andare — движение к чему-то, venire — движение к говорящему или источник.",
      rule: [
        "andare — идти, ехать, ходить",
        "venire — приходить, приехать",
        "vado, vai, va, andiamo, andate, vanno",
        "vengo, vieni, viene, veniamo, venite, vengono"
      ],
      table: {
        headers: ["Лицо", "andare", "venire"],
        rows: [
          ["io", "vado", "vengo"],
          ["tu", "vai", "vieni"],
          ["lui / lei", "va", "viene"],
          ["noi", "andiamo", "veniamo"],
          ["voi", "andate", "venite"],
          ["loro", "vanno", "vengono"]
        ]
      },
      tips: [
        "Секрет про andare: с городами и местами часто используется предлог a: vado a Roma, vado a casa, vado al bar.",
        "Секрет про venire: часто используется с da, чтобы сказать, откуда человек: vengo da Mosca, vieni dall'Italia?"
      ],
      mistakes: [
        "Не говори vado in Roma, если имеешь в виду город. Правильно: vado a Roma.",
        "Не путай vado и vai: io vado, tu vai."
      ],
      examples: [
        { it: "Vado a scuola.", ru: "Я иду в школу." },
        { it: "Vieni a casa mia?", ru: "Ты приходишь ко мне домой?" },
        { it: "Loro vengono da Roma.", ru: "Они приезжают из Рима." },
        { it: "Andiamo al bar.", ru: "Пойдём в бар." }
      ]
    },
    {
      title: "Fare и stare: делать и находиться/чувствовать",
      summary: "Fare — очень продуктивный глагол. Stare — про состояние, здоровье и местонахождение в разговорной речи.",
      rule: [
        "fare — делать",
        "faccio, fai, fa, facciamo, fate, fanno",
        "stare — находиться, оставаться, чувствовать себя",
        "sto, stai, sta, stiamo, state, stanno"
      ],
      table: {
        headers: ["Лицо", "fare", "stare"],
        rows: [
          ["io", "faccio", "sto"],
          ["tu", "fai", "stai"],
          ["lui / lei", "fa", "sta"],
          ["noi", "facciamo", "stiamo"],
          ["voi", "fate", "state"],
          ["loro", "fanno", "stanno"]
        ]
      },
      tips: [
        "Секрет про fare: оно входит во множество бытовых выражений: fare colazione — завтракать, fare la doccia — принимать душ, fare una foto — сделать фото, fare sport — заниматься спортом.",
        "Секрет про stare: о самочувствии говорят sto bene / sto male, а не sono bene / sono male. Stare хорошо работает для здоровья и состояния."
      ],
      mistakes: [
        "Не говори io fo. Правильно: io faccio.",
        "Не говори Sono bene, если хочешь сказать «мне хорошо / я в порядке». Лучше: Sto bene.",
        "Не переводи «я делаю душ» как faccio una doccia? Правильно: faccio la doccia."
      ],
      examples: [
        { it: "Faccio colazione alle sette.", ru: "Я завтракаю в семь." },
        { it: "Sto bene, grazie.", ru: "Мне хорошо, спасибо." },
        { it: "Che fai?", ru: "Что делаешь? / Чем занимаешься?" },
        { it: "Come stai?", ru: "Как ты?" }
      ],
      dialog: [
        { who: "Anna", text: "Come stai?", ru: "Как ты?" },
        { who: "Marco", text: "Sto bene. E tu?", ru: "Мне хорошо. А ты?" },
        { who: "Anna", text: "Sto bene anch'io. Che fai stasera?", ru: "Мне тоже хорошо. Что делаешь вечером?" },
        { who: "Marco", text: "Vado al cinema.", ru: "Я иду в кино." }
      ]
    }
  ],
  exercises: [
    {
      type: "gap",
      question: "Вставь форму andare для io",
      sentence: "Io ___ a Roma.",
      options: ["vado", "vai", "va", "andiamo"],
      answer: "vado",
      hint: "Я иду/еду — io vado.",
      explain: "Vado a Roma — я еду в Рим."
    },
    {
      type: "table",
      question: "Заполни форму venire для tu",
      headers: ["Лицо", "Форма"],
      rows: [
        ["io", "vengo"],
        ["tu", ""],
        ["lui/lei", "viene"]
      ],
      targetRow: 1,
      targetColumn: 1,
      options: ["vieni", "vengo", "viene", "venite"],
      answer: "vieni",
      hint: "Ты приходишь — tu vieni.",
      explain: "Tu vieni — ты приходишь."
    },
    {
      type: "choice",
      question: "Как сказать «Они идут в школу»?",
      options: ["Loro va a scuola.", "Loro vanno a scuola.", "Loro andiamo a scuola.", "Loro vai a scuola."],
      answer: "Loro vanno a scuola.",
      hint: "Для loro у andare форма vanno.",
      explain: "Loro vanno a scuola — они идут в школу."
    },
    {
      type: "match",
      question: "Соедини лицо и форму fare",
      pairs: [
        { left: "io", right: "faccio" },
        { left: "tu", right: "fai" },
        { left: "lui/lei", right: "fa" },
        { left: "noi", right: "facciamo" },
        { left: "voi", right: "fate" },
        { left: "loro", right: "fanno" }
      ],
      explain: "Fare — неправильный глагол, формы нужно запомнить."
    },
    {
      type: "fill",
      question: "Как сказать «Мне хорошо»?",
      answer: "Sto bene",
      accept: ["Sto bene", "sto bene", "Io sto bene", "io sto bene"],
      placeholder: "Напиши по-итальянски",
      hint: "Про самочувствие используем stare: sto bene.",
      explain: "Sto bene — мне хорошо, я в порядке."
    },
    {
      type: "gap",
      question: "Вставь правильную форму",
      sentence: "Noi ___ al bar.",
      options: ["vado", "vai", "va", "andiamo"],
      answer: "andiamo",
      hint: "Для noi у andare форма andiamo.",
      explain: "Noi andiamo al bar — мы идём в бар."
    },
    {
      type: "build",
      question: "Собери фразу: «Я завтракаю»",
      words: ["Faccio", "colazione"],
      answer: "Faccio colazione",
      hint: "Fare colazione — завтракать.",
      explain: "Faccio colazione — я завтракаю."
    },
    {
      type: "choice",
      question: "Какая фраза неверная?",
      options: ["Io vado a casa.", "Tu vieni qui.", "Loro fanno i compiti.", "Io fo la doccia."],
      answer: "Io fo la doccia.",
      hint: "Форма io от fare — faccio, а не fo.",
      explain: "Правильно: Io faccio la doccia."
    },
    {
      type: "table",
      question: "Заполни форму stare per voi",
      headers: ["Лицо", "Форма"],
      rows: [
        ["noi", "stiamo"],
        ["voi", ""],
        ["loro", "stanno"]
      ],
      targetRow: 1,
      targetColumn: 1,
      options: ["state", "stai", "sta", "stanno"],
      answer: "state",
      hint: "Вы находитесь / вы чувствуете себя — voi state.",
      explain: "Voi state bene? — Вы хорошо себя чувствуете?"
    }
  ]
};
