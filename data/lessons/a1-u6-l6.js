window.LESSONS = window.LESSONS || {};

window.LESSONS["a1-u6-l6"] = {
  id: "a1-u6-l6",
  title: "Checkpoint: здоровье, погода, чувства и советы",
  level: "A1",
  xp: 60,
  theory: [
    {
      title: "Большой тест A1-U6 🎯",
      summary: "Здесь смешаны части тела, симптомы, врач, погода, чувства и советы. Цель — проверить, что ты можешь сказать, как себя чувствуешь, описать погоду и дать простой совет.",
      rule: [
        "Ho la febbre, ho la tosse, ho mal di testa.",
        "Mi fa male + singular; Mi fanno male + plural.",
        "Devo andare dal medico.",
        "Fa caldo / fa freddo; c'è il sole; piove / nevica.",
        "Sono stanco / stanca; ho paura / sonno; mi sento bene / male.",
        "Devi / dovresti / è meglio / cerca di + инфинитив."
      ],
      tips: [
        "Если сомневаешься между ho и sono, спроси себя: это симптом/чувство-состояние или прилагательное?",
        "Если сомневаешься в совете, помни: после devi и dovresti нужен инфинитив."
      ],
      note: "После этого checkpoint можно переходить к A1-U7: планы, будущее, путешествия и простые сложные предложения."
    }
  ],
  exercises: [
    {
      type: "gap",
      question: "Вставь правильную форму",
      sentence: "Mi ___ male le gambe.",
      options: ["fanno", "fa", "ho", "sono"],
      answer: "fanno",
      hint: "Gambe — множественное число.",
      explain: "Mi fanno male le gambe — у меня болят ноги."
    },
    {
      type: "table",
      question: "Заполни фразу",
      headers: ["Симптом", "Фраза"],
      rows: [
        ["температура", "Ho la febbre."],
        ["кашель", ""]
      ],
      targetRow: 1,
      targetColumn: 1,
      options: [
        "Ho la tosse.",
        "Sono la tosse.",
        "Ho il tosse.",
        "Fa la tosse."
      ],
      answer: "Ho la tosse.",
      hint: "Кашель «имеют»: ho la tosse.",
      explain: "Ho la tosse — у меня кашель."
    },
    {
      type: "error-choice",
      question: "Найди ошибку",
      tokens: [
        { text: "Sono", id: "wrong" },
        { text: "la", id: "1" },
        { text: "febbre", id: "2" }
      ],
      answer: "wrong",
      hint: "Симптом выражается через avere.",
      explain: "Правильно: Ho la febbre."
    },
    {
      type: "dialog-choice",
      question: "Выбери ответ",
      dialog: [
        { who: "Dottore", text: "Che problema ha?" }
      ],
      options: [
        "Ho mal di testa.",
        "Ho vent'anni.",
        "Vado al cinema.",
        "Costa poco."
      ],
      answer: "Ho mal di testa.",
      hint: "Врач спрашивает о проблеме.",
      explain: "Ho mal di testa — у меня болит голова."
    },
    {
      type: "choice",
      question: "Как сказать «Сегодня идёт дождь»?",
      options: [
        "Oggi piove.",
        "Oggi nevica.",
        "Oggi fa sole.",
        "Oggi sono pioggia."
      ],
      answer: "Oggi piove.",
      hint: "Piove — идёт дождь.",
      explain: "Oggi piove — сегодня идёт дождь."
    },
    {
      type: "table",
      question: "Заполни погодную фразу",
      headers: ["Погода", "Фраза"],
      rows: [
        ["солнечно", "C'è il sole."],
        ["холодно", ""]
      ],
      targetRow: 1,
      targetColumn: 1,
      options: [
        "Fa freddo.",
        "È freddo.",
        "Ho freddo.",
        "C'è freddo."
      ],
      answer: "Fa freddo.",
      hint: "О погоде: fa freddo.",
      explain: "Fa freddo — холодно."
    },
    {
      type: "error-choice",
      question: "Найди ошибку",
      tokens: [
        { text: "Sono", id: "wrong" },
        { text: "caldo", id: "1" }
      ],
      answer: "wrong",
      hint: "Если человеку жарко: ho caldo.",
      explain: "Правильно: Ho caldo."
    },
    {
      type: "match",
      question: "Соедини чувство и перевод",
      pairs: [
        { left: "sono stanco", right: "я устал" },
        { left: "ho paura", right: "мне страшно" },
        { left: "sono contenta", right: "я рада" },
        { left: "ho sonno", right: "я хочу спать" },
        { left: "mi sento male", right: "я плохо себя чувствую" }
      ],
      explain: "Это базовые состояния.",
      explainWrong: "Неверная пара. Stanco = устал, paura = страх, contenta = рада, sonno = сонливость, sento male = чувствую себя плохо."
    },
    {
      type: "fill",
      question: "Напиши «Мне нужно к врачу»",
      answer: "Devo andare dal medico",
      accept: [
        "Devo andare dal medico",
        "devo andare dal medico",
        "Io devo andare dal medico",
        "io devo andare dal medico"
      ],
      placeholder: "Напиши по-итальянски",
      hint: "Devo + andare + dal medico.",
      explain: "Devo andare dal medico — мне нужно к врачу."
    },
    {
      type: "dialog-choice",
      question: "Выбери совет",
      dialog: [
        { who: "Anna", text: "Ho la febbre." }
      ],
      options: [
        "Dovresti andare dal medico.",
        "Quanto costa?",
        "Vado al lavoro.",
        "C'è il sole."
      ],
      answer: "Dovresti andare dal medico.",
      hint: "При температуре советуют врача.",
      explain: "Dovresti andare dal medico — тебе стоило бы пойти к врачу."
    },
    {
      type: "error-choice",
      question: "Найди ошибку",
      sentence: "Devi riposa.",
      options: ["Devi", "riposa"],
      answer: "riposa",
      hint: "После devi нужен инфинитив.",
      explain: "Правильно: Devi riposare."
    },
    {
      type: "build",
      question: "Собери фразу: «Не волнуйся, всё хорошо»",
      words: ["Non", "preoccuparti", ",", "va", "tutto", "bene"],
      answer: "Non preoccuparti, va tutto bene",
      hint: "Non preoccuparti.",
      explain: "Non preoccuparti, va tutto bene — не волнуйся, всё хорошо."
    },
    {
      type: "table",
      question: "Заполни множественное число",
      headers: ["Единственное число", "Множественное число"],
      rows: [
        ["Mi fa male la gamba.", "Mi fanno male le gambe."],
        ["Mi fa male l'occhio.", ""]
      ],
      targetRow: 1,
      targetColumn: 1,
      options: [
        "Mi fanno male gli occhi.",
        "Mi fa male gli occhi.",
        "Mi fanno male l'occhi.",
        "Mi fa male occhio."
      ],
      answer: "Mi fanno male gli occhi.",
      hint: "Occhio -> occhi, множественное число.",
      explain: "Mi fanno male gli occhi — у меня болят глаза."
    },
    {
      type: "choice",
      question: "Как сказать «Лучше подождать»?",
      options: [
        "È meglio aspettare.",
        "È meglio aspetta.",
        "Devi aspettare.",
        "Cerca aspettare."
      ],
      answer: "È meglio aspettare.",
      hint: "È meglio + инфинитив.",
      explain: "È meglio aspettare — лучше подождать."
    },
    {
      type: "match",
      question: "Соедини фразу и значение",
      pairs: [
        { left: "Fa bel tempo.", right: "Хорошая погода." },
        { left: "Ho mal di gola.", right: "У меня болит горло." },
        { left: "Sono preoccupata.", right: "Я волнуюсь." },
        { left: "Bevi acqua.", right: "Пей воду." },
        { left: "Devo riposare.", right: "Мне нужно отдыхать." }
      ],
      explain: "Это практические фразы A1-U6.",
      explainWrong: "Неверная пара. Bel tempo = хорошая погода, gola = горло, preoccupata = волнуюсь, bevi = пей, riposare = отдыхать."
    }
  ]
};
