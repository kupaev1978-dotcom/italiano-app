window.LESSONS = window.LESSONS || {};

window.LESSONS["a1-u5-l2"] = {
  id: "a1-u5-l2",
  title: "Giorni, mesi e stagioni: дни, месяцы, сезоны",
  level: "A1",
  xp: 35,
  theory: [
    {
      title: "Дни недели",
      summary: "Дни недели в итальянском обычно пишутся со строчной буквы. Для постоянного расписания можно использовать il lunedì, il martedì и так далее.",
      rule: [
        "lunedì — понедельник",
        "martedì — вторник",
        "mercoledì — среда",
        "giovedì — четверг",
        "venerdì — пятница",
        "sabato — суббота",
        "domenica — воскресенье"
      ],
      table: {
        headers: ["Italiano", "Русский", "Пример"],
        rows: [
          ["lunedì", "понедельник", "Lunedì lavoro."],
          ["martedì", "вторник", "Martedì ho lezione."],
          ["mercoledì", "среда", "Mercoledì studio italiano."],
          ["giovedì", "четверг", "Giovedì vado dal medico."],
          ["venerdì", "пятница", "Venerdì esco con gli amici."],
          ["sabato", "суббота", "Sabato riposiamo."],
          ["domenica", "воскресенье", "Domenica sono a casa."]
        ]
      },
      tips: [
        "Секрет: если говоришь о регулярном действии, можно использовать артикль: Il lunedì lavoro da casa. — По понедельникам я работаю дома.",
        "Дни недели часто идут без предлога: Lunedì vado a Roma. — В понедельник я еду в Рим."
      ],
      mistakes: [
        "Не говори *In lunedì studio. Правильно: Lunedì studio или Il lunedì studio.",
        "Не путай mercoledì и martedì: mercoledì — среда, martedì — вторник.",
        "Не забывай акценты: lunedì, martedì, mercoledì, giovedì, venerdì."
      ],
      examples: [
        { it: "Oggi è martedì.", ru: "Сегодня вторник." },
        { it: "Domani è venerdì.", ru: "Завтра пятница." },
        { it: "Il sabato non lavoro.", ru: "По субботам я не работаю." },
        { it: "La domenica sto a casa.", ru: "По воскресеньям я сижу дома." }
      ]
    },
    {
      title: "Месяцы, сезоны и даты",
      summary: "Месяцы тоже обычно пишутся со строчной буквы. С месяцами часто используется a: a maggio. С сезонами — in: in estate.",
      rule: [
        "gennaio — январь",
        "febbraio — февраль",
        "marzo — март",
        "aprile — апрель",
        "maggio — май",
        "giugno — июнь",
        "luglio — июль",
        "agosto — август",
        "settembre — сентябрь",
        "ottobre — октябрь",
        "novembre — ноябрь",
        "dicembre — декабрь",
        "la primavera — весна",
        "l'estate — лето",
        "l'autunno — осень",
        "l'inverno — зима"
      ],
      table: {
        headers: ["Слово", "Значение", "Пример"],
        rows: [
          ["a maggio", "в мае", "Parto a maggio."],
          ["in estate", "летом", "Vado al mare in estate."],
          ["il primo giugno", "первое июня", "Il mio compleanno è il primo giugno."],
          ["il cinque marzo", "пятое марта", "La lezione è il cinque marzo."]
        ]
      },
      tips: [
        "Секрет про даты: первый день месяца — il primo. Остальные дни — числа: il due, il tre, il quattro.",
        "С сезонами используется in: in primavera, in estate, in autunno, in inverno."
      ],
      mistakes: [
        "Не говори *il uno maggio. Правильно: il primo maggio.",
        "Не говори *in maggio, если имеешь в виду просто «в мае». Лучше: a maggio.",
        "Не путай autunno и inverno: autunno — осень, inverno — зима."
      ],
      examples: [
        { it: "Il mio compleanno è il tre gennaio.", ru: "Мой день рождения третьего января." },
        { it: "In estate fa caldo.", ru: "Летом жарко." },
        { it: "A settembre inizio il corso.", ru: "В сентябре я начинаю курс." },
        { it: "Il primo maggio è festa.", ru: "Первое мая — праздник." }
      ],
      dialog: [
        { who: "Anna", text: "Quando parti?", ru: "Когда ты уезжаешь?" },
        { who: "Marco", text: "Parto il cinque giugno.", ru: "Я уезжаю пятого июня." },
        { who: "Anna", text: "Bene! In estate fa bello.", ru: "Отлично! Летом хорошо." }
      ]
    }
  ],
  exercises: [
    {
      type: "match",
      question: "Соедини день недели и перевод",
      pairs: [
        { left: "lunedì", right: "понедельник" },
        { left: "martedì", right: "вторник" },
        { left: "mercoledì", right: "среда" },
        { left: "giovedì", right: "четверг" },
        { left: "venerdì", right: "пятница" }
      ],
      explain: "Это первые пять дней недели.",
      explainWrong: "Неверная пара. Lunedì = понедельник, martedì = вторник, mercoledì = среда, giovedì = четверг, venerdì = пятница."
    },
    {
      type: "gap",
      question: "Выбери предлог",
      sentence: "Il mio compleanno è ___ maggio.",
      options: ["a", "in", "di", "da"],
      answer: "a",
      hint: "С месяцами часто используется a.",
      explain: "a maggio — в мае."
    },
    {
      type: "table",
      question: "Заполни сезон",
      headers: ["Сезон", "Фраза"],
      rows: [
        ["лето", "in estate"],
        ["зима", ""]
      ],
      targetRow: 1,
      targetColumn: 1,
      options: ["in inverno", "a inverno", "di inverno", "in inverno?"],
      answer: "in inverno",
      hint: "С сезонами используется in.",
      explain: "in inverno — зимой."
    },
    {
      type: "error-choice",
      question: "Найди ошибку",
      tokens: [
        { text: "In", id: "wrong" },
        { text: "lunedì", id: "1" },
        { text: "studio", id: "2" },
        { text: "italiano", id: "3" }
      ],
      answer: "wrong",
      hint: "С днями недели предлог in обычно не нужен.",
      explain: "Правильно: Lunedì studio italiano. Или: Il lunedì studio italiano."
    },
    {
      type: "dialog-choice",
      question: "Выбери ответ",
      dialog: [
        { who: "Anna", text: "Quando parti?" }
      ],
      options: [
        "Il cinque giugno.",
        "Alle tre e mezza.",
        "A casa.",
        "Sì, certo."
      ],
      answer: "Il cinque giugno.",
      hint: "Quando? спрашивает о дате.",
      explain: "Il cinque giugno — пятого июня."
    },
    {
      type: "fill",
      question: "Напиши «В среду у меня урок»",
      answer: "Mercoledì ho lezione",
      accept: [
        "Mercoledì ho lezione",
        "mercoledì ho lezione",
        "Il mercoledì ho lezione",
        "il mercoledì ho lezione"
      ],
      placeholder: "Напиши по-итальянски",
      hint: "Mercoledì — среда; ho lezione — у меня урок.",
      explain: "Mercoledì ho lezione — в среду у меня урок."
    },
    {
      type: "build",
      question: "Собери фразу: «По субботам я отдыхаю»",
      words: ["Il", "sabato", "riposo"],
      answer: "Il sabato riposo",
      hint: "Для регулярного действия можно использовать il + день недели.",
      explain: "Il sabato riposo — по субботам я отдыхаю."
    },
    {
      type: "choice",
      question: "Как сказать «первое мая»?",
      options: ["il primo maggio", "il uno maggio", "a primo maggio", "il maggio primo"],
      answer: "il primo maggio",
      hint: "Первый день месяца — il primo.",
      explain: "il primo maggio — первое мая."
    },
    {
      type: "table",
      question: "Заполни перевод месяца",
      headers: ["Месяц", "Перевод"],
      rows: [
        ["gennaio", "январь"],
        ["luglio", ""]
      ],
      targetRow: 1,
      targetColumn: 1,
      options: ["июль", "июнь", "август", "сентябрь"],
      answer: "июль",
      hint: "Luglio — седьмой месяц.",
      explain: "luglio — июль."
    },
    {
      type: "match",
      question: "Соедини слово и перевод",
      pairs: [
        { left: "inverno", right: "зима" },
        { left: "primavera", right: "весна" },
        { left: "estate", right: "лето" },
        { left: "autunno", right: "осень" },
        { left: "dicembre", right: "декабрь" }
      ],
      explain: "Это сезоны и один месяц.",
      explainWrong: "Неверная пара. Inverno = зима, primavera = весна, estate = лето, autunno = осень, dicembre = декабрь."
    }
  ]
};
