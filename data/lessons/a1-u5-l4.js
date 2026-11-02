window.LESSONS = window.LESSONS || {};

window.LESSONS["a1-u5-l4"] = {
  id: "a1-u5-l4",
  title: "Avverbii di frequenza: всегда, часто, иногда, никогда",
  level: "A1",
  xp: 35,
  theory: [
    {
      title: "Наречия частоты",
      summary: "Наречия частоты показывают, как часто что-то происходит. Большинство ставится перед основным глаголом, а с essere — после глагола.",
      rule: [
        "sempre — всегда",
        "spesso — часто",
        "di solito — обычно",
        "qualche volta / a volte — иногда",
        "raramente — редко",
        "quasi mai — почти никогда",
        "mai — никогда"
      ],
      table: {
        headers: ["Наречие", "Значение", "Пример"],
        rows: [
          ["sempre", "всегда", "Vado sempre a letto presto."],
          ["spesso", "часто", "Mangio spesso la pasta."],
          ["di solito", "обычно", "Di solito faccio colazione alle otto."],
          ["a volte", "иногда", "A volte guardo un film."],
          ["raramente", "редко", "Raramente bevo vino."],
          ["mai", "никогда", "Non vado mai in discoteca."]
        ]
      },
      tips: [
        "Секрет: mai почти всегда требует non: Non vado mai. — Я никогда не хожу.",
        "A volte можно ставить в начало фразы: A volte studio la sera. — Иногда я учусь вечером."
      ],
      mistakes: [
        "Не говори *Vado mai al cinema, если хочешь сказать «я никогда не хожу». Правильно: Non vado mai al cinema.",
        "Не путай sempre и mai: sempre = всегда, mai = никогда.",
        "Не ставь non после глагола: не *Vado non sempre. Правильно: Non vado sempre."
      ],
      examples: [
        { it: "Sono sempre a casa la domenica.", ru: "По воскресеньям я всегда дома." },
        { it: "Vado spesso in palestra.", ru: "Я часто хожу в спортзал." },
        { it: "A volte pranzo fuori.", ru: "Иногда я обедаю вне дома." },
        { it: "Non mangio mai la carne.", ru: "Я никогда не ем мясо." }
      ]
    },
    {
      title: "Позиция наречия: перед глаголом или после essere",
      summary: "Это небольшая, но важная деталь. С обычными глаголами наречие часто стоит перед глаголом. С essere — после essere.",
      rule: [
        "Mangio sempre alle tredici. — Я всегда ем в 13:00.",
        "Vado spesso al mercato. — Я часто хожу на рынок.",
        "Sono sempre a casa. — Я всегда дома.",
        "È spesso gentile. — Он/она часто добрый / добрая.",
        "Non vado mai in banca di sabato. — Я никогда не хожу в банк по субботам."
      ],
      table: {
        headers: ["Тип глагола", "Позиция", "Пример"],
        rows: [
          ["обычный глагол", "перед глаголом", "Mangio sempre alle tredici."],
          ["essere", "после essere", "Sono sempre a casa."],
          ["отрицание non", "non перед местоимением/глаголом", "Non vado mai al cinema."]
        ]
      },
      tips: [
        "Секрет: если сомневаешься, ставь наречие перед основным глаголом: spesso vado, sempre mangio, mai vado.",
        "С essere безопасно после: sono sempre, è spesso, siamo sempre."
      ],
      mistakes: [
        "Не говори *Sono a casa sempre, если хочешь звучать естественно. Лучше: Sono sempre a casa.",
        "Не говори *Non sempre vado. Лучше: Non vado sempre.",
        "Не забывай, что mai без non обычно означает вопрос или эмоцию, а не «никогда» в утверждении."
      ],
      examples: [
        { it: "Di solito mi sveglio alle sette.", ru: "Обычно я просыпаюсь в семь." },
        { it: "Raramente sono triste.", ru: "Я редко бываю грустным." },
        { it: "Quasi mai bevo caffè la sera.", ru: "Я почти никогда не пью кофе вечером." },
        { it: "Qualche volta ceno con amici.", ru: "Иногда я ужинаю с друзьями." }
      ],
      dialog: [
        { who: "Anna", text: "Vai spesso in palestra?", ru: "Ты часто ходишь в спортзал?" },
        { who: "Marco", text: "Sì, vado tre volte a settimana.", ru: "Да, я хожу три раза в неделю." },
        { who: "Anna", text: "Io vado a volte.", ru: "Я хожу иногда." }
      ]
    }
  ],
  exercises: [
    {
      type: "gap",
      question: "Вставь наречие",
      sentence: "Non vado ___ in discoteca.",
      options: ["mai", "sempre", "spesso", "molto"],
      answer: "mai",
      hint: "Non ... mai = никогда не.",
      explain: "Non vado mai in discoteca — я никогда не хожу в дискотеку."
    },
    {
      type: "table",
      question: "Заполни значение",
      headers: ["Значение", "Фраза"],
      rows: [
        ["часто", "spesso"],
        ["никогда", ""]
      ],
      targetRow: 1,
      targetColumn: 1,
      options: ["non ... mai", "sempre", "a volte", "raramente"],
      answer: "non ... mai",
      hint: "Для «никогда» нужен non ... mai.",
      explain: "non ... mai — никогда не."
    },
    {
      type: "error-choice",
      question: "Найди ошибку",
      tokens: [
        { text: "Sono", id: "0" },
        { text: "a", id: "1" },
        { text: "casa", id: "2" },
        { text: "sempre", id: "wrong" }
      ],
      answer: "wrong",
      hint: "С essere наречие обычно ставится после глагола.",
      explain: "Правильно: Sono sempre a casa."
    },
    {
      type: "dialog-choice",
      question: "Выбери ответ",
      dialog: [
        { who: "Anna", text: "Vai spesso in palestra?" }
      ],
      options: [
        "Sì, vado tre volte a settimana.",
        "Sì, vado alle tre.",
        "Sì, è lontana.",
        "Sì, costa poco."
      ],
      answer: "Sì, vado tre volte a settimana.",
      hint: "Вопрос про частоту: часто ли?",
      explain: "Sì, vado tre volte a settimana — Да, я хожу три раза в неделю."
    },
    {
      type: "match",
      question: "Соедини наречие и перевод",
      pairs: [
        { left: "sempre", right: "всегда" },
        { left: "spesso", right: "часто" },
        { left: "a volte", right: "иногда" },
        { left: "raramente", right: "редко" },
        { left: "mai", right: "никогда" }
      ],
      explain: "Это базовая шкала частоты.",
      explainWrong: "Неверная пара. Sempre = всегда, spesso = часто, a volte = иногда, raramente = редко, mai = никогда."
    },
    {
      type: "fill",
      question: "Напиши «Она редко опаздывает»",
      answer: "È raramente in ritardo",
      accept: [
        "È raramente in ritardo",
        "è raramente in ritardo",
        "Raramente è in ritardo",
        "raramente è in ritardo"
      ],
      placeholder: "Напиши по-итальянски",
      hint: "In ritardo = опаздывать / быть вовремя? буквально «в задержке».",
      explain: "È raramente in ritardo — она редко опаздывает."
    },
    {
      type: "build",
      question: "Собери фразу: «Я никогда не ем мясо»",
      words: ["Non", "mangio", "mai", "la", "carne"],
      answer: "Non mangio mai la carne",
      hint: "Non ... mai.",
      explain: "Non mangio mai la carne — я никогда не ем мясо."
    },
    {
      type: "choice",
      question: "Как сказать «Я обычно завтракаю в семь»?",
      options: [
        "Di solito faccio colazione alle sette.",
        "Faccio di solito colazione alle sette.",
        "Alle sette faccio di solito colazione.",
        "Colazione di solito faccio alle sette."
      ],
      answer: "Di solito faccio colazione alle sette.",
      hint: "DiUsually часто ставят в начало или перед глаголом.",
      explain: "Di solito faccio colazione alle sette — обычно я завтракаю в семь."
    },
    {
      type: "table",
      question: "Заполни перевод",
      headers: ["Фраза", "Перевод"],
      rows: [
        ["Non vado mai al cinema.", "Я никогда не хожу в кино."],
        ["Vado a volte al mercato.", ""]
      ],
      targetRow: 1,
      targetColumn: 1,
      options: ["Иногда я хожу на рынок.", "Я всегда хожу на рынок.", "Я редко хожу на рынок.", "Я часто хожу на рынок."],
      answer: "Иногда я хожу на рынок.",
      hint: "A volte = иногда.",
      explain: "Vado a volte al mercato — иногда я хожу на рынок."
    },
    {
      type: "error-choice",
      question: "Найди ошибку",
      tokens: [
        { text: "Non", id: "0" },
        { text: "mangio", id: "1" },
        { text: "sempre", id: "2" },
        { text: "mai", id: "wrong" },
        { text: "pesce", id: "4" }
      ],
      answer: "wrong",
      hint: "Нельзя одновременно sempre и mai в одной простой фразе.",
      explain: "Правильно: Non mangio mai il pesce. Или: Mangio sempre il pesce."
    }
  ]
};
