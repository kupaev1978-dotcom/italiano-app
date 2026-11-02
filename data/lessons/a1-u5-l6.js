window.LESSONS = window.LESSONS || {};

window.LESSONS["a1-u5-l6"] = {
  id: "a1-u5-l6",
  title: "Checkpoint: время, дни, распоряд и частота",
  level: "A1",
  xp: 70,
  theory: [
    {
      title: "Большой тест A1-U5 🎯",
      summary: "Здесь смешаны время, дни недели, месяцы, распоряд дня, наречия частоты и предлоги времени. Цель — проверить, что ты можешь говорить о повседневной жизни.",
      rule: [
        "È l'una, ma sono le due.",
        "Mezzogiorno e mezzanotte — с è.",
        "Дни недели: lunedì, martedì, mercoledì, giovedì, venerdì, sabato, domenica.",
        "Месяцы: a maggio; сезоны: in estate.",
        "Распорядок: mi sveglio, mi alzo, faccio colazione, vado al lavoro, pranzo, ceno, vado a dormire.",
        "Частота: sempre, spesso, a volte, raramente, non ... mai.",
        "Предлоги времени: alle otto, di sera, la mattina, dal lunedì al venerdì, tra un'ora."
      ],
      tips: [
        "Если сомневаешься в времени, сначала определи: один час — è l'una, остальные — sono le.",
        "Если сомневаешься в предлоге, спроси себя: это часы, день, месяц, сезон или часть дня?"
      ],
      note: "После этого checkpoint A1 становится очень крепким. Дальше можно идти в A1-U6: здоровье, погода, чувства и простые советские конструкции."
    }
  ],
  exercises: [
    {
      type: "gap",
      question: "Вставь правильную форму",
      sentence: "___ le otto e mezza.",
      options: ["Sono", "È", "A", "Alle"],
      answer: "Sono",
      hint: "Otto — множественное число.",
      explain: "Sono le otto e mezza — сейчас половина девятого."
    },
    {
      type: "table",
      question: "Заполни день недели",
      headers: ["Italiano", "Русский"],
      rows: [
        ["martedì", "вторник"],
        ["giovedì", ""]
      ],
      targetRow: 1,
      targetColumn: 1,
      options: ["четверг", "среда", "пятница", "суббота"],
      answer: "четверг",
      hint: "Giovedì — четвёртый день недели.",
      explain: "giovedì — четверг."
    },
    {
      type: "error-choice",
      question: "Найди ошибку",
      tokens: [
        { text: "Lui", id: "0" },
        { text: "mi", id: "wrong" },
        { text: "sveglia", id: "2" },
        { text: "presto", id: "3" }
      ],
      answer: "wrong",
      hint: "Для lui нужно si.",
      explain: "Правильно: Lui si sveglia presto."
    },
    {
      type: "dialog-choice",
      question: "Выбери ответ",
      dialog: [
        { who: "Anna", text: "Che fai la sera?" }
      ],
      options: [
        "Guardo la televisione.",
        "Faccio colazione.",
        "Vado al lavoro.",
        "Pranzo alle dodici."
      ],
      answer: "Guardo la televisione.",
      hint: "Вечером обычно не завтракают и не идут на работу.",
      explain: "Guardo la televisione — я смотрю телевизор."
    },
    {
      type: "match",
      question: "Соедини наречие и перевод",
      pairs: [
        { left: "spesso", right: "часто" },
        { left: "raramente", right: "редко" },
        { left: "sempre", right: "всегда" },
        { left: "mai", right: "никогда" },
        { left: "a volte", right: "иногда" }
      ],
      explain: "Это шкала частоты.",
      explainWrong: "Неверная пара. Spesso = часто, raramente = редко, sempre = всегда, mai = никогда, a volte = иногда."
    },
    {
      type: "fill",
      question: "Напиши «Я встаю в семь»",
      answer: "Mi sveglio alle sette",
      accept: [
        "Mi sveglio alle sette",
        "mi sveglio alle sette",
        "Io mi sveglio alle sette",
        "io mi sveglio alle sette"
      ],
      placeholder: "Напиши по-итальянски",
      hint: "Mi sveglio + alle + часы.",
      explain: "Mi sveglio alle sette — я встаю/просыпаюсь в семь."
    },
    {
      type: "table",
      question: "Заполни предлог",
      headers: ["Фраза", "Предлог"],
      rows: [
        ["in estate", "in"],
        ["___ maggio", ""]
      ],
      targetRow: 1,
      targetColumn: 1,
      options: ["a", "di", "da", "alle"],
      answer: "a",
      hint: "С месяцами обычно a.",
      explain: "a maggio — в мае."
    },
    {
      type: "error-choice",
      question: "Найди ошибку",
      tokens: [
        { text: "Vado", id: "0" },
        { text: "a", id: "1" },
        { text: "lavoro", id: "2" },
        { text: "in", id: "wrong" },
        { text: "otto", id: "4" }
      ],
      answer: "wrong",
      hint: "С часами нужно alle.",
      explain: "Правильно: Vado al lavoro alle otto."
    },
    {
      type: "dialog-choice",
      question: "Выбери ответ",
      dialog: [
        { who: "Turista", text: "Scusi, che ore sono?" }
      ],
      options: [
        "Sono le due e un quarto.",
        "Il due giugno.",
        "A casa.",
        "Sì, certo."
      ],
      answer: "Sono le due e un quarto.",
      hint: "Вопрос о времени.",
      explain: "Sono le due e un quarto — сейчас 2:15."
    },
    {
      type: "build",
      question: "Собери фразу: «По понедельникам я работаю дома»",
      words: ["Il", "lunedì", "lavoro", "da", "casa"],
      answer: "Il lunedì lavoro da casa",
      hint: "Il lunedì = по понедельникам.",
      explain: "Il lunedì lavoro da casa — по понедельникам я работаю дома."
    },
    {
      type: "choice",
      question: "Как сказать «без четверти девять»?",
      options: [
        "Sono le nove meno un quarto.",
        "Sono le nove e un quarto.",
        "È le nove meno un quarto.",
        "Alle nove e un quarto."
      ],
      answer: "Sono le nove meno un quarto.",
      hint: "Meno un quarto = без четверти.",
      explain: "Sono le nove meno un quarto — без четверти девять."
    },
    {
      type: "table",
      question: "Заполни действие",
      headers: ["Момент", "Действие"],
      rows: [
        ["la mattina", "faccio colazione"],
        ["la sera", ""]
      ],
      targetRow: 1,
      targetColumn: 1,
      options: ["ceno", "pranzo", "vado al lavoro", "mi sveglio"],
      answer: "ceno",
      hint: "Вечером ужинают.",
      explain: "La sera ceno — вечером я ужинаю."
    },
    {
      type: "error-choice",
      question: "Найди ошибку",
      tokens: [
        { text: "Vado", id: "0" },
        { text: "mai", id: "wrong" },
        { text: "al", id: "2" },
        { text: "cinema", id: "3" }
      ],
      answer: "wrong",
      hint: "Для «никогда» нужен non ... mai.",
      explain: "Правильно: Non vado mai al cinema."
    },
    {
      type: "match",
      question: "Соедини фразу и перевод",
      pairs: [
        { left: "mezzogiorno", right: "полдень" },
        { left: "mezzanotte", right: "полночь" },
        { left: "di notte", right: "ночью" },
        { left: "tra un'ora", right: "через час" },
        { left: "dalle nove alle cinque", right: "с 9 до 5" }
      ],
      explain: "Это полезные временные выражения.",
      explainWrong: "Неверная пара. Mezzogiorno = полдень, mezzanotte = полночь, di notte = ночью, tra un'ora = через час."
    },
    {
      type: "fill",
      question: "Напиши «Мой день рождения 3 января»",
      answer: "Il mio compleanno è il tre gennaio",
      accept: [
        "Il mio compleanno è il tre gennaio",
        "il mio compleanno è il tre gennaio",
        "Il mio compleanno è il 3 gennaio",
        "il mio compleanno è il 3 gennaio"
      ],
      placeholder: "Напиши по-итальянски",
      hint: "Compleanno + è + il + число + месяц.",
      explain: "Il mio compleanno è il tre gennaio — мой день рождения третьего января."
    },
    {
      type: "dialog-choice",
      question: "Выбери ответ",
      dialog: [
        { who: "Anna", text: "Vai spesso in palestra?" }
      ],
      options: [
        "Sì, due volte a settimana.",
        "Sì, alle due.",
        "Sì, è vicina.",
        "Sì, costa poco."
      ],
      answer: "Sì, due volte a settimana.",
      hint: "Вопрос про частоту.",
      explain: "Sì, due volte a settimana — Да, два раза в неделю."
    }
  ]
};
