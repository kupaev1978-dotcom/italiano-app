window.LESSONS = window.LESSONS || {};

window.LESSONS["a1-u6-l5"] = {
  id: "a1-u6-l5",
  title: "Consigli: советы и рекомендации",
  level: "A1",
  xp: 35,
  theory: [
    {
      title: "Devi, dovresti, è meglio, cerca di",
      summary: "Чтобы советовать, итальянцы используют несколько простых конструкций. Devi — сильнее, dovresti — мягче, è meglio — нейтрально, cerca di — попытайся.",
      rule: [
        "Devi dormire di più. — Тебе нужно больше спать.",
        "Dovresti riposare. — Тебе стоило бы отдохнуть.",
        "È meglio aspettare. — Лучше подождать.",
        "Cerca di rilassarti. — Постарайся расслабиться.",
        "Non devi fumare. — Тебе не нужно курить.",
        "Dovresti bere più acqua. — Тебе стоило бы пить больше воды."
      ],
      table: {
        headers: ["Конструкция", "Значение", "Пример"],
        rows: [
          ["devi + инфинитив", "ты должен", "Devi studiare."],
          ["dovresti + инфинитив", "тебе стоило бы", "Dovresti dormire."],
          ["è meglio + инфинитив", "лучше", "È meglio riposare."],
          ["cerca di + инфинитив", "постарайся", "Cerca di calmarti."]
        ]
      },
      tips: [
        "Секрет: после devi, dovresti, è meglio, cerca di нужен инфинитив: dormire, riposare, aspettare.",
        "Dovresti звучит мягче и вежливее, чем devi."
      ],
      mistakes: [
        "Не говори Devi dormi. Правильно: Devi dormire.",
        "Не говори È meglio riposa. Правильно: È meglio riposare.",
        "Не говори Cerca riposare. Правильно: Cerca di riposare."
      ],
      examples: [
        { it: "Sei stanco? Dovresti dormire.", ru: "Ты устал? Тебе стоило бы поспать." },
        { it: "È meglio non uscire.", ru: "Лучше не выходить." },
        { it: "Cerca di non preoccuparti.", ru: "Постарайся не волноваться." }
      ]
    },
    {
      title: "Простые императивы: bevi, mangia, riposa",
      summary: "В разговоре с другом можно использовать короткие приказы-советы: Bevi acqua! Mangia frutta! Riposa!",
      rule: [
        "Bevi acqua! — Пей воду!",
        "Mangia frutta! — Ешь фрукты!",
        "Dormi di più! — Спи больше!",
        "Riposa! — Отдыхай!",
        "Studia italiano! — Учи итальянский!",
        "Non preoccuparti! — Не волнуйся!"
      ],
      table: {
        headers: ["Совет", "Фраза"],
        rows: [
          ["пить воду", "Bevi acqua."],
          ["есть фрукты", "Mangia frutta."],
          ["спать больше", "Dormi di più."],
          ["отдыхать", "Riposa."],
          ["не волноваться", "Non preoccuparti."]
        ]
      },
      tips: [
        "Секрет: это формы для tu, дружеские. С незнакомцем лучше использовать Lei или мягкие конструкции: Dovresti..., È meglio...",
        "Non preoccuparti — очень частая фраза: «не переживай»."
      ],
      mistakes: [
        "Не добавляй лишние слова. Правильно: Bevi acqua.",
        "Не путай riposa и riposare: Riposa! — приказ, riposare — инфинитив.",
        "Не забывай di в dormi di più: спи больше."
      ],
      examples: [
        { it: "Bevi acqua e riposa.", ru: "Пей воду и отдыхай." },
        { it: "Non preoccuparti, va tutto bene.", ru: "Не волнуйся, всё хорошо." },
        { it: "Mangia sano e fai sport.", ru: "Питайся здорово и занимайся спортом." }
      ],
      dialog: [
        { who: "Anna", text: "Sono molto stanca.", ru: "Я очень устала." },
        { who: "Marco", text: "Dovresti dormire di più.", ru: "Тебе стоило бы больше спать." },
        { who: "Anna", text: "Sì, hai ragione.", ru: "Да, ты прав." }
      ]
    }
  ],
  exercises: [
    {
      type: "gap",
      question: "Вставь форму",
      sentence: "Tu ___ dormire di più.",
      options: ["devi", "devo", "dobbiamo", "devono"],
      answer: "devi",
      hint: "Для tu у глагола dovere форма devi.",
      explain: "Tu devi dormire di più — тебе нужно больше спать."
    },
    {
      type: "table",
      question: "Заполни совет",
      headers: ["Ситуация", "Фраза"],
      rows: [
        ["мягкий совет", "Dovresti riposare."],
        ["сильный совет", ""]
      ],
      targetRow: 1,
      targetColumn: 1,
      options: [
        "Devi riposare.",
        "Dovresti riposare.",
        "È meglio riposare.",
        "Cerca di riposare."
      ],
      answer: "Devi riposare.",
      hint: "Devi — сильнее, чем dovresti.",
      explain: "Devi riposare — тебе нужно отдыхать."
    },
    {
      type: "error-choice",
      question: "Найди ошибку",
      sentence: "Devi dormi.",
      options: ["Devi", "dormi"],
      answer: "dormi",
      hint: "После devi нужен инфинитив.",
      explain: "Правильно: Devi dormire."
    },
    {
      type: "dialog-choice",
      question: "Выбери совет",
      dialog: [
        { who: "Anna", text: "Sono molto stanca." }
      ],
      options: [
        "Dovresti dormire di più.",
        "Quanto costa?",
        "Vado al lavoro.",
        "Ho la febbre."
      ],
      answer: "Dovresti dormire di più.",
      hint: "Усталому человеку советуют спать.",
      explain: "Dovresti dormire di più — тебе стоило бы больше спать."
    },
    {
      type: "match",
      question: "Соедини совет и перевод",
      pairs: [
        { left: "Bevi acqua.", right: "Пей воду." },
        { left: "Mangia frutta.", right: "Ешь фрукты." },
        { left: "Riposa.", right: "Отдыхай." },
        { left: "Non preoccuparti.", right: "Не волнуйся." },
        { left: "Dormi di più.", right: "Спи больше." }
      ],
      explain: "Это простые дружеские советы.",
      explainWrong: "Неверная пара. Bevi = пей, mangia = ешь, riposa = отдыхай, non preoccuparti = не волнуйся, dormi = спи."
    },
    {
      type: "fill",
      question: "Напиши «Лучше отдохнуть»",
      answer: "È meglio riposare",
      accept: [
        "È meglio riposare",
        "è meglio riposare"
      ],
      placeholder: "Напиши по-итальянски",
      hint: "È meglio + инфинитив.",
      explain: "È meglio riposare — лучше отдохнуть."
    },
    {
      type: "build",
      question: "Собери фразу: «Пей воду!»",
      words: ["Bevi", "acqua"],
      answer: "Bevi acqua",
      hint: "Bevi — пей.",
      explain: "Bevi acqua — пей воду."
    },
    {
      type: "error-choice",
      question: "Найди ошибку",
      tokens: [
        { text: "Devi", id: "0" },
        { text: "riposa", id: "wrong" },
        { text: "bene", id: "2" }
      ],
      answer: "wrong",
      hint: "После devi нужен инфинитив riposare.",
      explain: "Правильно: Devi riposare bene."
    },
    {
      type: "choice",
      question: "Как сказать «Постарайся расслабиться»?",
      options: [
        "Cerca di rilassarti.",
        "Cerca rilassarti.",
        "Devi rilassarti di.",
        "È meglio rilassarti di."
      ],
      answer: "Cerca di rilassarti.",
      hint: "Cerca di + инфинитив.",
      explain: "Cerca di rilassarti — постарайся расслабиться."
    },
    {
      type: "table",
      question: "Заполни отрицательный совет",
      headers: ["Совет", "Фраза"],
      rows: [
        ["не волнуйся", "Non preoccuparti."],
        ["не кури", ""]
      ],
      targetRow: 1,
      targetColumn: 1,
      options: [
        "Non fumare.",
        "Non fumi.",
        "Non fumo.",
        "Fumare non."
      ],
      answer: "Non fumare.",
      hint: "Инфинитив часто используется в общих запретах.",
      explain: "Non fumare — не кури."
    }
  ]
};
