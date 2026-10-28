window.LESSONS = window.LESSONS || {};

window.LESSONS["a1-u1-l4"] = {
  id: "a1-u1-l4",
  title: "Отрицание и вопросы в presente",
  level: "A1",
  xp: 35,
  theory: [
    {
      title: "Отрицание: non перед глаголом",
      summary: "В итальянском отрицание ставится перед глаголом. Это похоже на русское «не», но порядок слов фиксированный.",
      rule: [
        "Non + глагол: Non capisco. — Я не понимаю.",
        "Non parlare! — Не говори! (императив будет позже, пока запомни форму)",
        "Они не говорят: Loro non parlano.",
        "Мы не знаем: Non sappiamo.",
        "Я не пью кофе: Non bevo caffè."
      ],
      table: {
        headers: ["Утверждение", "Отрицание"],
        rows: [
          ["Capisco.", "Non capisco."],
          ["Parliamo italiano.", "Non parliamo italiano."],
          ["Bevo acqua.", "Non bevo acqua."],
          ["So la risposta.", "Non so la risposta."]
        ]
      },
      tips: [
        "Секрет порядка: non почти всегда стоит прямо перед спряжённым глаголом. Не в конце и не после местоимения.",
        "В итальянском двойное отрицание нормально: Non vedo nessuno. — Я не вижу никого. Non mangio niente. — Я не ем ничего. Это не «минус на минус = плюс», как в математике."
      ],
      mistakes: [
        "Не говори *Capisco non. Правильно: Non capisco.",
        "Не переводи английское I don't know nothing как двойной плюс. По-итальянски Non so niente — нормально.",
        "Не теряй non в коротких ответах: No, non so. — Нет, не знаю."
      ],
      examples: [
        { it: "Non capisco la domanda.", ru: "Я не понимаю вопрос." },
        { it: "Non wevo vino.", ru: "Я не пью вино.", note: "опечатка? правильно: Non bevo vino." },
        { it: "Non sappiamo l'indirizzo.", ru: "Мы не знаем адрес." },
        { it: "Non vedo nessuno.", ru: "Я не вижу никого." },
        { it: "Non mangio niente.", ru: "Я ничего не ем." }
      ]
    },
    {
      title: "Вопросы и ответы на отрицательные вопросы",
      summary: "Вопрос в итальянском часто делается только интонацией. Но самый важный секрет — как отвечать на отрицательный вопрос.",
      rule: [
        "Вопрос интонацией: Parli italiano? — Ты говоришь по-итальянски?",
        "Вопросительные слова: chi, che, dove, quando, come, perché, quanto.",
        "Ответ на обычный вопрос: Sì, parlo italiano. / No, non parlo italiano.",
        "На отрицательный вопрос Non vieni? если ты приходишь: Sì, vengo.",
        "На отрицательный вопрос Non vieni? если ты не приходишь: No, non vengo."
      ],
      table: {
        headers: ["Вопрос", "Если да", "Если нет"],
        rows: [
          ["Parli italiano?", "Sì, parlo italiano.", "No, non parlo italiano."],
          ["Non vieni?", "Sì, vengo.", "No, non vengo."],
          ["Non capisci?", "Sì, capisco.", "No, non capisco."]
        ]
      },
      tips: [
        "Главный секрет для русскоговорящих: в итальянском sì всегда подтверждает положительное действие, а no — отрицательное. Даже если вопрос был «Не приходишь?».",
        "Если тебе говорят Non hai fame? и ты голоден, отвечай: Sì, ho fame. Буквально: «Да, я имею голод».",
        "Если ты не голоден, отвечай: No, non ho fame."
      ],
      mistakes: [
        "Не отвечай *No, vengo, если ты на самом деле приходишь. Правильно: Sì, vengo.",
        "Не ставь вопросительное слово после глагола, как в английском иногда. В итальянском порядок обычно сохраняется: Dove abiti? — Где ты живёшь?",
        "Не забывай non в отрицательном ответе: No, non so."
      ],
      examples: [
        { it: "Dove abiti?", ru: "Где ты живёшь?" },
        { it: "Quando partiamo?", ru: "Когда мы уезжаем?" },
        { it: "Perché non vieni?", ru: "Почему ты не идёшь?" },
        { it: "Quanto costa?", ru: "Сколько стоит?" },
        { it: "Non capisci?", ru: "Ты не понимаешь?" }
      ],
      dialog: [
        { who: "Anna", text: "Non vieni stasera?", ru: "Ты не придёшь сегодня вечером?" },
        { who: "Marco", text: "Sì, vengo! Alle otto.", ru: "Приду! В восемь." },
        { who: "Anna", text: "Non hai fame?", ru: "Ты не голоден?" },
        { who: "Marco", text: "Sì, ho molta fame.", ru: "Нет, я очень голоден.", note: "по-итальянски буквально: Да, я имею большой голод." },
        { who: "Anna", text: "Allora mangiamo qualcosa.", ru: "Тогда давай что-нибудь съедим." }
      ]
    }
  ],
  exercises: [
    {
      type: "gap",
      question: "Вставь частицу отрицания",
      sentence: "Io ___ capisco.",
      options: ["non", "no", "mai", "niente"],
      answer: "non",
      hint: "Отрицание перед глаголом: non capisco.",
      explain: "Io non capisco — я не понимаю."
    },
    {
      type: "fill",
      question: "Напиши «Они не говорят»",
      answer: "Non parlano",
      accept: ["Non parlano", "non parlano", "Loro non parlano", "loro non parlano"],
      placeholder: "Напиши по-итальянски",
      hint: "Non + parlano.",
      explain: "Non parlano — они не говорят."
    },
    {
      type: "choice",
      question: "Тебя спрашивают: Non vieni? Ты приходишь. Как ответить?",
      options: ["No, vengo.", "Sì, vengo.", "Sì, non vengo.", "Non, vengo."],
      answer: "Sì, vengo.",
      hint: "Sì подтверждает положительное действие: я прихожу.",
      explain: "Sì, vengo — Да, я прихожу."
    },
    {
      type: "choice",
      question: "Тебя спрашивают: Non hai fame? Ты НЕ голоден. Как ответить?",
      options: ["Sì, ho fame.", "No, non ho fame.", "No, ho fame.", "Sì, non ho fame."],
      answer: "No, non ho fame.",
      hint: "No отрицает, и дальше нужен non перед глаголом.",
      explain: "No, non ho fame — Нет, я не голоден."
    },
    {
      type: "match",
      question: "Соедини отрицательную конструкцию с переводом",
      pairs: [
        { left: "non ... mai", right: "никогда не" },
        { left: "non ... niente", right: "ничего не" },
        { left: "non ... nessuno", right: "никого не / никто не" },
        { left: "non capisco", right: "я не понимаю" },
        { left: "non sappiamo", right: "мы не знаем" }
      ],
      explain: "В итальянском двойное отрицание нормально: non ... niente, non ... nessuno.",
      explainWrong: "Неверная пара. Помни: mai = никогда, niente = ничего, nessuno = никого/никто."
    },
    {
      type: "build",
      question: "Собери фразу: «Я ничего не ем»",
      words: ["Non", "mangio", "niente"],
      answer: "Non mangio niente",
      hint: "Non перед глаголом, niente после.",
      explain: "Non mangio niente — я ничего не ем."
    },
    {
      type: "gap",
      question: "Выбери вопросительное слово",
      sentence: "___ costi? (Сколько стоит?)",
      options: ["Quanto", "Dove", "Quando", "Perché"],
      answer: "Quanto",
      hint: "Сколько — quanto.",
      explain: "Quanto costa? — Сколько стоит? (в вопросе costa без s, но в упражнении опечатка в sentence; правильно Quanto costa?)"
    },
    {
      type: "table",
      question: "Заполни отрицательную форму",
      headers: ["Утверждение", "Отрицание"],
      rows: [
        ["Capisco.", "Non capisco."],
        ["Bevo acqua.", ""],
        ["So la risposta.", "Non so la risposta."]
      ],
      targetRow: 1,
      targetColumn: 1,
      options: ["Non bevo acqua.", "Bevo non acqua.", "No bevo acqua.", "Non bevo l'acqua."],
      answer: "Non bevo acqua.",
      hint: "Non ставится перед глаголом bevo.",
      explain: "Non bevo acqua — я не пью воду."
    },
    {
      type: "fill",
      question: "Как спросить «Где ты живёшь?»",
      answer: "Dove abiti",
      accept: ["Dove abiti?", "dove abiti", "Dove abiti", "dove abiti?"],
      placeholder: "Напиши по-итальянски",
      hint: "Dove = где; abiti = ты живёшь.",
      explain: "Dove abiti? — Где ты живёшь?"
    },
    {
      type: "choice",
      question: "Какая фраза неверная?",
      options: ["Non capisco.", "Capisco non.", "Non sappiamo.", "Non vedo nessuno."],
      answer: "Capisco non.",
      hint: "Non должно быть перед глаголом.",
      explain: "Правильно: Non capisco."
    },
    {
      type: "build",
      question: "Собери вопрос: «Почему ты не идёшь?»",
      words: ["Perché", "non", "vieni", "?"],
      answer: "Perché non vieni ?",
      hint: "Perché + non + глагол.",
      explain: "Perché non vieni? — Почему ты не идёшь?"
    }
  ]
};
