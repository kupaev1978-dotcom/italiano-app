window.LESSONS = window.LESSONS || {};

window.LESSONS["a0-u1-l3"] = {
  id: "a0-u1-l3",
  title: "Страны, национальности и «откуда ты?»",
  level: "A0",
  xp: 25,
  theory: [
    {
      title: "Национальность = прилагательное, согласуется в роде и числе",
      summary: "В итальянском нет отдельного слова «русский» как существительного в значении национальности — это прилагательное, и оно меняется по полу и числу, как bello/bella.",
      rule: [
        "Мужской род ед. ч.: russo, italiano, francese, tedesco.",
        "Женский род ед. ч.: russa, italiana, francese, tedesca.",
        "Множественное: russi / russe, italiani / italiane, francesi / francesi, tedeschi / tedesche.",
        "Sono russo (муж) / Sono russa (жен) / Sono russi (муж. мн) / Sono russe (жен. мн)."
      ],
      table: {
        headers: ["Основа", "муж. ед.", "жен. ед.", "муж. мн.", "жен. мн."],
        rows: [
          ["-о / -а", "italiano", "italiana", "italiani", "italiane"],
          ["-о / -а", "russo", "russa", "russi", "russe"],
          ["-e (не меняется по роду!)", "inglese", "inglese", "inglesi", "inglesi"],
          ["-e", "francese", "francese", "francesi", "francesi"]
        ]
      },
      tips: [
        "Секрет-экономия: прилагательные на -e (inglese, francese, cinese, spagnolo? нет — spagnolo на -o) НЕ меняются по роду:inglese и для мужчины, и для женщины. Меняется только число:inglese → inglesi. Это редко где подчёркивают, а оно снимает половину зубрёжки.",
        "Не путай страну (Russia, Italia — существительное) и национальность (russo, italiano — прилагательное). «Sono Russia» — ошибка; правильно «Sono russo/russa» или «Sono di Russia»."
      ],
      mistakes: [
        "Не говори «sono Russia» — Russia это страна. Национальность: sono russo / russa.",
        "Не изменяй по роду слова на -e: женщина-англичанка = inglese, а НЕ «inglesa»."
      ],
      examples: [
        { it: "Sono russo.", ru: "Я русский (муж)." },
        { it: "Sono russa.", ru: "Я русская (жен)." },
        { it: "Lei è inglese.", ru: "Она англичанка.", note: "inglese не меняется по роду" },
        { it: "Loro sono inglesi.", ru: "Они англичане/англичанки (мн. ч.)." }
      ]
    },
    {
      title: "Di dove sei? и vivo a / in",
      summary: "Спросить, откуда человек, и сказать, где живёшь. На A0 запомни пару якорей предлогов — полная тема будет в A1.",
      rule: [
        "Di dove sei? — Откуда ты? (неформально)",
        "Di dov'è? — Откуда Вы? (вежливо, связка с Lei)",
        "Sono di Roma / Sono di Mosca — Я из Рима / Москвы (город без артикля после di).",
        "Vivo a Roma — Я живу в Риме (город → a).",
        "Vivo in Italia — Я живу в Италии (страна → in)."
      ],
      tips: [
        "Якорь на A0: a + город, in + страна. Не углубляйся — артикулированные предлоги (nel, nella, a + il = al) это тема A1.",
        "Di dove sei? буквально «из где ты есть?» — тут снова essere (sei)."
      ],
      mistakes: [
        "Не говори «sono in Roma» чтобы значит «я из Рима» — in = живу/нахожусь, а родом говорят sono di Roma или sono romano.",
        "Не путай Di dove sei? (откуда родом) и Dove vivi? (где живёшь сейчас) — это разные вопросы."
      ],
      examples: [
        { it: "Di dove sei? — Sono di Milano.", ru: "Откуда ты? — Я из Милана." },
        { it: "Vivo a Roma.", ru: "Я живу в Риме." },
        { it: "Vivo in Italia.", ru: "Я живу в Италии." },
        { it: "Di dov'è? — Sono di San Pietroburgo.", ru: "Откуда Вы? — Я из Санкт-Петербурга." }
      ],
      dialog: [
        { who: "Giulia", text: "Ciao! Di dove sei?", ru: "Привет! Откуда ты?" },
        { who: "Ivan", text: "Sono di Mosca. Ma vivo a Roma ora.", ru: "Я из Москвы. Но сейчас живу в Риме." },
        { who: "Giulia", text: "Sei russo?", ru: "Ты русский?" },
        { who: "Ivan", text: "Sì, sono russo. E tu sei italiana?", ru: "Да, я русский. А ты итальянка?" }
      ]
    }
  ],
  exercises: [
    {
      type: "choice",
      question: "Как сказать «Я русская» (женщина)?",
      options: ["Sono russo", "Sono russa", "Sono Russia", "Sono russi"],
      answer: "Sono russa",
      explain: "Женский род национальности: russa."
    },
    {
      type: "match",
      question: "Соедини страну с национальностью (муж. род)",
      pairs: [
        { left: "Russia", right: "russo" },
        { left: "Italia", right: "italiano" },
        { left: "Inghilterra", right: "inglese" },
        { left: "Francia", right: "francese" },
        { left: "Germania", right: "tedesco" }
      ],
      explain: "Национальность — прилагательное; обратите внимание:inglese и francese на -e.",
      explainWrong: "Неверная пара. Russia-russo, Italia-italiano, Inghilterra-inglese, Francia-francese, Germania-tedesco."
    },
    {
      type: "choice",
      question: "Как сказать «англичанка» (женщина)?",
      options: ["inglesa", "inglese", "inglesi", "inglico"],
      answer: "inglese",
      explain: "Секрет: слова на -e не меняются по роду. Inglese и для мужчины, и для женщины."
    },
    {
      type: "fill",
      question: "Как неформально спросить «откуда ты?»",
      answer: "Di dove sei?",
      accept: ["Di dove sei?", "di dove sei", "Di dove sei", "di dove sei?"],
      explain: "Di dove sei? — буквально «из где ты есть?»."
    },
    {
      type: "build",
      question: "Собери: «Я живу в Риме»",
      words: ["Vivo", "a", "Roma"],
      answer: "Vivo a Roma",
      explain: "Город → предлог a: vivo a Roma."
    },
    {
      type: "choice",
      question: "«Loro sono ___» (Они английские, мн. ч.):",
      options: ["inglese", "inglesi", "inglesa", "ingles"],
      answer: "inglesi",
      explain: "На -e меняется только число:inglese → inglesi."
    },
    {
      type: "fill",
      question: "Как вежливо спросить «откуда Вы?»",
      answer: "Di dov'è?",
      accept: ["Di dov'è?", "di dov'è", "Di dov'e?", "di dove è?"],
      explain: "Вежливость = 3-е лицо: Di dov'è? (связка с Lei)."
    },
    {
      type: "choice",
      question: "Почему «Sono Russia» — ошибка?",
      options: [
        "Russia не существует",
        "Russia — это страна, а нужна национальность (russo/russa) или «sono di Russia»",
        "Нужно сказать Sono russo только",
        "Это правильно"
      ],
      answer: "Russia — это страна, а нужна национальность (russo/russa) или «sono di Russia»",
      explain: "Страна ≠ национальность. Sono russo / Sono di Russia."
    }
  ]
};
