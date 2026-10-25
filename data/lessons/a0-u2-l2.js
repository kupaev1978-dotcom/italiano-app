window.LESSONS = window.LESSONS || {};

window.LESSONS["a0-u2-l2"] = {
  id: "a0-u2-l2",
  title: "Глагол avere: иметь, ощущения и возраст",
  level: "A0",
  xp: 30,
  theory: [
    {
      title: "Avere = иметь; немая h",
      summary: "Второй кит итальянского. Запомни главное: буква h в начале НЕ читается — ho звучит как «о», hai как «ай».",
      rule: [
        "io ho, tu hai, lui/lei ha, noi abbiamo, voi avete, loro hanno.",
        "h в ho / hai / ha / hanno — немая: слово начинается с гласного звука.",
        "hanno (они имеют) — с двойной n, произноси с задержкой."
      ],
      table: {
        headers: ["Лицо", "Форма", "Как звучит"],
        rows: [
          ["io", "ho", "о"],
          ["tu", "hai", "ай"],
          ["lui / lei", "ha", "а"],
          ["noi", "abbiamo", "аб-бья-мо"],
          ["voi", "avete", "а-вэ-те"],
          ["loro", "hanno", "ан-но (двойная n)"]
        ]
      },
      tips: [
        "Секрет произношения: не пытайся «выдохнуть» h. Ho un cane = «о ун кане», hai fame = «ай фаме». h есть только на письме, чтобы отличить от других слов.",
        "Не путай ha (имеет, с h) и a (предлог «в/к», без h): Ha fame (он голоден) vs Vado a Roma (еду в Рим)."
      ],
      mistakes: [
        "Не читай h как русское «х» — она немая.",
        "Не путай hanno (они имеют) e anno (год): разница в двойной n."
      ],
      examples: [
        { it: "Ho un cane.", ru: "У меня есть собака.", note: "h немая: «о ун кане»" },
        { it: "Hai fame?", ru: "Ты голоден?", note: "«ай фаме»" },
        { it: "Lui ha ragione.", ru: "Он прав.", note: "букв. «он имеет причину»" },
        { it: "Loro hanno fretta.", ru: "Они спешат.", note: "двойная n" }
      ]
    },
    {
      title: "Ощущения и возраст через avere (культурный сдвиг)",
      summary: "Главный секрет уровня: итальянец не говорит «мне холодно», он говорит «я имею холод». Это ломает русский шаблон, но освобождает речь.",
      rule: [
        "ho fame = я голоден (букв. имею голод)",
        "ho sete = я хочу пить (имею жажду)",
        "ho freddo = мне холодно (имею холод)",
        "ho caldo = мне жарко",
        "ho sonno = я хочу спать",
        "ho paura = мне страшно",
        "ho fretta = я спешу",
        "Quanti anni hai? — Ho venticinque anni. (Сколько тебе лет? — Мне 25.)"
      ],
      tips: [
        "Секрет-перевод: русское «мне ...» (дативный падеж) → итальянское «io ho ...» (именительный + avere). Выучи 6-7 слов-ощущений (fame, sete, freddo, caldo, sonno, paura, fretta) — и будешь говорить о себе естественно, без зубрёжки целых фраз.",
        "Возраст: не «sono 25 anni», а «HO 25 anni». Ты имеешь столько лет. Это та же логика avere."
      ],
      mistakes: [
        "Не говори «Sono fame» — правильно Ho fame.",
        "Не переводи «мне 25» как «sono 25» — возраст表达 через avere: ho 25 anni."
      ],
      examples: [
        { it: "Ho sete.", ru: "Я хочу пить." },
        { it: "Ho freddo.", ru: "Мне холодно." },
        { it: "Quanti anni hai?", ru: "Сколько тебе лет?" },
        { it: "Ho trent'anni.", ru: "Мне 30 лет.", note: "trenta + anni, h немая" }
      ],
      dialog: [
        { who: "Luca", text: "Hai fame? Io ho molta fame.", ru: "Ты голоден? Я очень голоден." },
        { who: "Anna", text: "Sì, e ho anche sete. Andiamo al bar?", ru: "Да, и я ещё хочу пить. Пойдём в бар?" },
        { who: "Luca", text: "Certo. Ho fretta, però!", ru: "Конечно. Но я спешу!" }
      ]
    }
  ],
  exercises: [
    {
      type: "choice",
      question: "Как сказать «я имею»?",
      options: ["ho", "hai", "ha", "hanno"],
      answer: "ho",
      explain: "Io ho. Произносится просто «о» — h немая."
    },
    {
      type: "match",
      question: "Соедини ощущение с переводом",
      pairs: [
        { left: "ho fame", right: "я голоден" },
        { left: "ho sete", right: "я хочу пить" },
        { left: "ho freddo", right: "мне холодно" },
        { left: "ho sonno", right: "я хочу спать" },
        { left: "ho fretta", right: "я спешу" }
      ],
      explain: "Все ощущения — через avere «имею». Это культурный сдвиг относительно русского.",
      explainWrong: "Неверная пара. Помни: fame=голод, sete=жажда, freddo=холод, sonno=сон, fretta=спешка."
    },
    {
      type: "fill",
      question: "Как спросить «сколько тебе лет?»",
      answer: "Quanti anni hai?",
      accept: ["Quanti anni hai?", "quanti anni hai", "Quanti anni hai", "quanti anni hai?"],
      explain: "Букв. «сколько лет ты имеешь?» — возраст через avere."
    },
    {
      type: "choice",
      question: "«Мне 25 лет» по-итальянски:",
      options: ["Sono 25 anni", "Ho 25 anni", "Ho venticinque anni", "Sono venticinque anni"],
      answer: "Ho venticinque anni",
      explain: "Возраст — через avere (ho) + число + anni. Не sono."
    },
    {
      type: "build",
      question: "Собери: «У нас есть время»",
      words: ["Abbiamo", "tempo"],
      answer: "Abbiamo tempo",
      explain: "Noi abbiamo — мы имеем; tempo — время."
    },
    {
      type: "choice",
      question: "«Lui ___ sete» (Он хочет пить):",
      options: ["ho", "hai", "ha", "hanno"],
      answer: "ha",
      explain: "Lui ha — 3-е лицо, h немая: «а сэтэ»."
    },
    {
      type: "match",
      question: "Соедини лицо с формой avere",
      pairs: [
        { left: "io", right: "ho" },
        { left: "tu", right: "hai" },
        { left: "lui / lei", right: "ha" },
        { left: "noi", right: "abbiamo" },
        { left: "voi", right: "avete" },
        { left: "loro", right: "hanno" }
      ],
      explain: "Все формы уникальны; помни про немую h и двойную n в hanno.",
      explainWrong: "Неверная пара. io-ho, tu-hai, lui-ha, noi-abbiamo, voi-avete, loro-hanno."
    },
    {
      type: "fill",
      question: "«Я хочу спать» (дословно: имею сон)",
      answer: "Ho sonno",
      accept: ["Ho sonno", "ho sonno", "Io ho sonno", "io ho sonno"],
      explain: "Ho sonno — я имею сонливость."
    },
    {
      type: "choice",
      question: "hanno означает:",
      options: ["я имею", "ты имеешь", "они имеют (двойная n)", "мы имеем"],
      answer: "они имеют (двойная n)",
      explain: "Loro hanno — с двойной n, произносится с задержкой."
    }
  ]
};
