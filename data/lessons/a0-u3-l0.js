window.LESSONS = window.LESSONS || {};

window.LESSONS["a0-u3-l0"] = {
  id: "a0-u3-l0",
  title: "Мужской и женский род существительных",
  level: "A0",
  xp: 30,
  theory: [
    {
      title: "Род виден по окончанию",
      summary: "В итальянском два рода: maschile и femminile. Среднего рода нет. Чаще всего род сразу виден по последней букве слова.",
      rule: [
        "Слова на -o обычно мужского рода: il libro, il ragazzo.",
        "Слова на -a обычно женского рода: la casa, la ragazza.",
        "Слова на -e могут быть и мужского, и женского рода: il fiore, la chiave.",
        "Артикль — главный помощник: il/lo показывают мужской род, la/l' перед гласной — женский или общий перед гласной."
      ],
      table: {
        headers: ["Окончание", "Род", "Примеры"],
        rows: [
          ["-o", "обычно мужской", "il libro, il ragazzo"],
          ["-a", "обычно женский", "la casa, la ragazza"],
          ["-e", "может быть любым", "il fiore, la chiave"]
        ]
      },
      tips: [
        "Секрет: запоминай слово вместе с артиклем. Не просто libro, а il libro. Не просто casa, а la casa. Так род запоминается автоматически.",
        "Окончание -e не даёт гарантию рода. Поэтому слова на -e нужно учить сразу с артиклем: il fiore, la chiave, il mare, la voce."
      ],
      mistakes: [
        "Не придумывай средний род. В итальянском его нет: всё либо maschile, либо femminile.",
        "Не переноси русский род на итальянский. Например, по-русски «проблема» женского рода, а по-итальянски il problema — мужского."
      ],
      examples: [
        { it: "il libro", ru: "книга", note: "мужской род, окончание -o" },
        { it: "la casa", ru: "дом", note: "женский род, окончание -a" },
        { it: "il fiore", ru: "цветок", note: "мужской род, окончание -e" },
        { it: "la chiave", ru: "ключ", note: "женский род, окончание -e" }
      ]
    },
    {
      title: "Исключения, которые лучше знать сразу",
      summary: "Есть несколько частых слов, которые ломают простое правило «-o = мужской, -a = женский». Их лучше запомнить сразу, чтобы не путаться.",
      rule: [
        "la mano — рука, женский род, хотя заканчивается на -o.",
        "la radio — радио, женский род, хотя заканчивается на -o.",
        "il problema — проблема, мужской род.",
        "il tema — тема, мужской род.",
        "il cinema — кино, мужской род."
      ],
      table: {
        headers: ["Слово", "Род", "Почему важно"],
        rows: [
          ["la mano", "женский", "окончание -o, но род женский"],
          ["la radio", "женский", "окончание -o, но род женский"],
          ["il problema", "мужской", "по-русски «проблема» женская, но по-итальянски мужская"],
          ["il tema", "мужской", "многие слова на -ma мужского рода"]
        ]
      },
      tips: [
        "Секрет: исключения запоминай не как отдельные слова, а как готовые блоки: la mano, il problema. Тогда мозг не будет искать логику там, где её нет.",
        "Если слово заканчивается на -e и ты не знаешь род, не угадывай. Посмотри или запомни с артиклем."
      ],
      mistakes: [
        "Не говори il mano. Правильно: la mano.",
        "Не говори la problema. Правильно: il problema."
      ],
      examples: [
        { it: "Ho mal alla mano.", ru: "У меня болит рука.", note: " mano — женский род" },
        { it: "Il problema è facile.", ru: "Проблема лёгкая.", note: " problema — мужской род" }
      ]
    }
  ],
  exercises: [
    {
      type: "choice",
      question: "Какого рода слово casa?",
      options: ["maschile", "femminile", "neutro", "род не определяется"],
      answer: "femminile",
      hint: "Casa заканчивается на -a.",
      explain: "la casa — дом, женский род."
    },
    {
      type: "gap",
      question: "Выбери артикль-маркер рода",
      sentence: "___ casa",
      options: ["il", "la", "lo", "l'"],
      answer: "la",
      hint: "Слова на -a обычно женского рода.",
      explain: "la casa — дом."
    },
    {
      type: "match",
      question: "Соедини слово и род",
      pairs: [
        { left: "il libro", right: "мужской род" },
        { left: "la casa", right: "женский род" },
        { left: "il fiore", right: "мужской род на -e" },
        { left: "la chiave", right: "женский род на -e" },
        { left: "la mano", right: "исключение: женский род на -o" }
      ],
      explain: "Артикль и окончание помогают определить род."
    },
    {
      type: "table",
      question: "Определи род слова",
      headers: ["Слово", "Род"],
      rows: [
        ["il ragazzo", ""],
        ["la ragazza", "femminile"],
        ["il fiore", "maschile"]
      ],
      targetRow: 0,
      targetColumn: 1,
      options: ["maschile", "femminile"],
      answer: "maschile",
      hint: "Артикль il показывает мужской род.",
      explain: "il ragazzo — мальчик / молодой человек, мужской род."
    },
    {
      type: "choice",
      question: "Какое слово женского рода, несмотря на окончание -o?",
      options: ["il problema", "la mano", "il libro", "la casa"],
      answer: "la mano",
      hint: "Это классическое исключение.",
      explain: "la mano — рука, женский род."
    },
    {
      type: "fill",
      question: "Напиши артикль для слова mano",
      answer: "la",
      accept: ["la", "La"],
      placeholder: "la / il",
      hint: "Mano — исключение: женский род.",
      explain: "la mano — рука."
    },
    {
      type: "build",
      question: "Собери фразу: «Это дом»",
      words: ["È", "la", "casa"],
      answer: "È la casa",
      hint: "Casa женского рода, поэтому la.",
      explain: "È la casa — это дом."
    },
    {
      type: "fill",
      question: "Укажи род слова studente: maschile или femminile?",
      answer: "maschile",
      accept: ["maschile", "Maschile"],
      placeholder: "maschile / femminile",
      hint: "Студент-мужчина: lo studente. Женский вариант был бы studentessa.",
      explain: "studente — мужской род."
    }
  ]
};
