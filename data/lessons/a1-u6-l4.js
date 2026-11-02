window.LESSONS = window.LESSONS || {};

window.LESSONS["a1-u6-l4"] = {
  id: "a1-u6-l4",
  title: "Sentimenti e stati d'animo: чувства и состояния",
  level: "A1",
  xp: 35,
  theory: [
    {
      title: "Essere, avere, sentirsi",
      summary: "Большинство чувств выражается через essere: sono stanco, sono contento. Но страх и сонливость — через avere: ho paura, ho sonno. Самочувствие — через mi sento.",
      rule: [
        "Sono stanco / stanca. — Я устал / устала.",
        "Sono contento / contenta. — Я рад / рада.",
        "Sono triste. — Мне грустно / я грустный.",
        "Sono arrabbiato / arrabbiata. — Я злюсь.",
        "Sono nervoso / nervosa. — Я нервничаю.",
        "Sono preoccupato / preoccupata. — Я волнуюсь.",
        "Ho paura. — Мне страшно / я боюсь.",
        "Ho sonno. — Я хочу спать / я сонный.",
        "Mi sento bene. — Я чувствую себя хорошо.",
        "Mi sento male. — Я чувствую себя плохо."
      ],
      table: {
        headers: ["Чувство", "Мужской род", "Женский род"],
        rows: [
          ["устал", "sono stanco", "sono stanca"],
          ["рад", "sono contento", "sono contenta"],
          ["злюсь", "sono arrabbiato", "sono arrabbiata"],
          ["волнуюсь", "sono preoccupato", "sono preoccupata"],
          ["нервничаю", "sono nervoso", "sono nervosa"]
        ]
      },
      tips: [
        "Секрет: ho paura и ho sonno — это «имею страх / имею сонливость», как ho fame и ho sete.",
        "Triste не меняется по роду в единственном числе: sono triste — и он, и она."
      ],
      mistakes: [
        "Не говори Ho stanca. Правильно: Sono stanca.",
        "Не говори Sono paura. Правильно: Ho paura.",
        "Не забывай согласование: Maria è contenta, Marco è contento."
      ],
      examples: [
        { it: "Sono molto stanco.", ru: "Я очень устал." },
        { it: "Maria è contenta.", ru: "Мария рада." },
        { it: "Ho paura del buio.", ru: "Я боюсь темноты." },
        { it: "Mi sento bene oggi.", ru: "Сегодня я чувствую себя хорошо." }
      ]
    },
    {
      title: "Множественное число и простые реакции",
      summary: "Если говорим о нескольких людях, прилагательное тоже меняется: siamo stanchi, sono contenti, sono contente.",
      rule: [
        "Siamo stanchi. — Мы устали.",
        "Siamo stanche. — Мы устали, все женщины.",
        "Sono contenti. — Они рады.",
        "Sono contente. — Они рады, все женщины.",
        "Abbiamo paura. — Нам страшно.",
        "Avete sonno? — Вы хотите спать?",
        "Non mi sento bene. — Я плохо себя чувствую."
      ],
      table: {
        headers: ["Лицо", "Фраза"],
        rows: [
          ["io", "Sono stanco."],
          ["tu", "Sei stanco?"],
          ["lui / lei", "È stanco / È stanca."],
          ["noi", "Siamo stanchi."],
          ["voi", "Siete stanchi?"],
          ["loro", "Sono stanchi."]
        ]
      },
      tips: [
        "Секрет: если группа смешанная или мужская, используем masculine plural: stanchi, contenti.",
        "Если все женщины: stanche, contente."
      ],
      mistakes: [
        "Не говори Siamo stanca. Правильно: Siamo stanchi / stanche.",
        "Не путай sono e siamo: я устал — sono stanco, мы устали — siamo stanchi.",
        "Не говори Ho contenti. Правильно: Sono contenti."
      ],
      examples: [
        { it: "I bambini sono contenti.", ru: "Дети рады." },
        { it: "Noi siamo stanchi.", ru: "Мы устали." },
        { it: "Voi avete sonno?", ru: "Вы хотите спать?" }
      ],
      dialog: [
        { who: "Anna", text: "Come ti senti?", ru: "Как ты себя чувствуешь?" },
        { who: "Marco", text: "Sono stanco, ma contento.", ru: "Я устал, но рад." },
        { who: "Anna", text: "Hai dormito bene?", ru: "Ты хорошо спал?" },
        { who: "Marco", text: "No, ho sonno.", ru: "Нет, я хочу спать." }
      ]
    }
  ],
  exercises: [
    {
      type: "gap",
      question: "Вставь правильную форму",
      sentence: "Maria è molto ___.",
      options: ["contenta", "contento", "contenti", "contente"],
      answer: "contenta",
      hint: "Maria — женский род единственного числа.",
      explain: "Maria è molto contenta — Мария очень рада."
    },
    {
      type: "table",
      question: "Заполни множественное число",
      headers: ["Фраза", "Форма"],
      rows: [
        ["Io sono stanco.", "stanco"],
        ["Noi siamo ___.", ""]
      ],
      targetRow: 1,
      targetColumn: 1,
      options: ["stanchi", "stanca", "stanco", "stanche"],
      answer: "stanchi",
      hint: "Мы устали — мужской или смешанный множественный род.",
      explain: "Noi siamo stanchi — мы устали."
    },
    {
      type: "error-choice",
      question: "Найди ошибку",
      tokens: [
        { text: "Ho", id: "wrong" },
        { text: "stanca", id: "1" }
      ],
      answer: "wrong",
      hint: "С прилагательными состояния обычно используется essere.",
      explain: "Правильно: Sono stanca."
    },
    {
      type: "dialog-choice",
      question: "Выбери ответ",
      dialog: [
        { who: "Anna", text: "Come ti senti?" }
      ],
      options: [
        "Mi sento bene.",
        "Ho vent'anni.",
        "Vado al lavoro.",
        "Costa dieci euro."
      ],
      answer: "Mi sento bene.",
      hint: "Вопрос про самочувствие.",
      explain: "Mi sento bene — я чувствую себя хорошо."
    },
    {
      type: "match",
      question: "Соедини чувство и перевод",
      pairs: [
        { left: "sono triste", right: "мне грустно" },
        { left: "sono arrabbiato", right: "я злюсь" },
        { left: "ho paura", right: "мне страшно" },
        { left: "ho sonno", right: "я хочу спать" },
        { left: "sono nervosa", right: "я нервничаю" }
      ],
      explain: "Это базовые эмоциональные фразы.",
      explainWrong: "Неверная пара. Triste = грустный, arrabbiato = злой, paura = страх, sonno = сонливость, nervosa = нервная."
    },
    {
      type: "fill",
      question: "Напиши «Мне страшно»",
      answer: "Ho paura",
      accept: ["Ho paura", "ho paura", "Io ho paura", "io ho paura"],
      placeholder: "Напиши по-итальянски",
      hint: "Страх — avere: ho paura.",
      explain: "Ho paura — мне страшно."
    },
    {
      type: "build",
      question: "Собери фразу: «Они рады»",
      words: ["Sono", "contenti"],
      answer: "Sono contenti",
      hint: "Loro + essere + contenti.",
      explain: "Sono contenti — они рады."
    },
    {
      type: "error-choice",
      question: "Найди ошибку",
      tokens: [
        { text: "Sono", id: "wrong" },
        { text: "sonno", id: "1" }
      ],
      answer: "wrong",
      hint: "Сонливость выражается через avere.",
      explain: "Правильно: Ho sonno."
    },
    {
      type: "table",
      question: "Заполни женскую форму",
      headers: ["Мужской род", "Женский род"],
      rows: [
        ["arrabbiato", "arrabbiata"],
        ["preoccupato", ""]
      ],
      targetRow: 1,
      targetColumn: 1,
      options: ["preoccupata", "preoccupato", "preoccupati", "preoccupate"],
      answer: "preoccupata",
      hint: "Женский род единственного числа: -a.",
      explain: "preoccupata — встревожена."
    },
    {
      type: "choice",
      question: "Как сказать «Нам страшно»?",
      options: ["Abbiamo paura.", "Siamo paura.", "Hanno paura.", "Avete paura."],
      answer: "Abbiamo paura.",
      hint: "Noi + avere = abbiamo.",
      explain: "Abbiamo paura — нам страшно."
    }
  ]
};
