window.LESSONS = window.LESSONS || {};

window.LESSONS["a1-u2-l5"] = {
  id: "a1-u2-l5",
  title: "Транспорт и покупка билета",
  level: "A1",
  xp: 40,
  theory: [
    {
      title: "Виды транспорта и базовые глаголы",
      summary: "Чтобы ездить по городу, нужны не только существительные, но и несколько глаголов: prendere, salire, scendere, cambiare, arrivare, partire.",
      rule: [
        "il treno — поезд",
        "l'autobus — автобус",
        "la metropolitana — метро",
        "il tram — трамвай",
        "l'aereo — самолёт",
        "il taxi — такси",
        "la nave — корабль, паром",
        "prendere — брать, садиться на транспорт: prendo l'autobus.",
        "salire — подниматься, садиться: salgo sul treno.",
        "scendere — спускаться, выходить: scendo alla fermata.",
        "cambiare — пересаживаться, менять: cambio alla stazione.",
        "arrivare — прибывать: arriviamo alle dieci.",
        "partire — отправляться: il treno parte alle otto."
      ],
      table: {
        headers: ["Транспорт", "Артикль", "Пример"],
        rows: [
          ["treno", "il", "Prendo il treno."],
          ["autobus", "l'", "Prendo l'autobus."],
          ["metropolitana", "la", "Vado in metropolitana."],
          ["tram", "il", "Il tram è lento."],
          ["aereo", "l'", "Viaggio in aereo."],
          ["taxi", "il", "Prendiamo un taxi."]
        ]
      },
      tips: [
        "Секрет про in: in treno, in autobus, in metropolitana, in aereo — это способ передвижения: «поездом, автобусом, метро, самолётом».",
        "Секрет про sul: sul treno, sull'autobus — уже внутри/на борту: «в поезде, в автобусе»."
      ],
      mistakes: [
        "Не говори vado a treno. Правильно: vado in treno или prendo il treno.",
        "Не путай partire и partire? Partire = отправляться, arrivare = прибывать.",
        "Не забудь, что autobus начинается с гласной: l'autobus, sull'autobus."
      ],
      examples: [
        { it: "Prendo l'autobus per il centro.", ru: "Я сажусь на автобус до центра." },
        { it: "Salgo sul treno.", ru: "Я сажусь в поезд." },
        { it: "Scendo alla prossima fermata.", ru: "Я выхожу на следующей остановке." },
        { it: "Cambio alla stazione.", ru: "Я пересаживаюсь на вокзале." }
      ]
    },
    {
      title: "Билет, расписание и простые вопросы",
      summary: "Эти фразы спасают в кассе, в метро и на вокзале. На A1 можно использовать их как готовые выражения.",
      rule: [
        "il biglietto — билет",
        "la corsa semplice — разовая поездка, в одну сторону",
        "andata — туда, в одну сторону",
        "ritorno — обратно",
        "andata e ritorno — туда и обратно",
        "il binario — платформа, путь",
        "la partenza — отправление",
        "l'arrivo — прибытие",
        "Quanto costa il biglietto? — Сколько стоит билет?",
        "Un biglietto per Roma, per favore. — Один билет до Рима, пожалуйста.",
        "A che ora parte il treno? — Во сколько отправляется поезд?",
        "Da quale binario parte? — С какой платформы отправляется?",
        "Dove prendo l'autobus per il centro? — Где я сажусь на автобус до центра?"
      ],
      table: {
        headers: ["Фраза", "Значение"],
        rows: [
          ["Quanto costa?", "Сколько стоит?"],
          ["Un biglietto per...", "Один билет до..."],
          ["Andata e ritorno", "Туда и обратно"],
          ["A che ora parte?", "Во сколько отправляется?"],
          ["Al binario tre", "На платформе три"]
        ]
      },
      tips: [
        "Секрет про per: un biglietto per Roma = билет до Рима. Per здесь указывает направление/назначение.",
        "Секрет про binario: на вокзале спрашивай Da quale binario parte il treno? — С какого пути/платформы отправляется поезд?"
      ],
      mistakes: [
        "Не говори biglietto di andare. Правильно: biglietto di andata или corsa semplice.",
        "Не путай partenza и arrivo: partenza = отправление, arrivo = прибытие.",
        "Не забывай per favore, иначе просьба звучит резко."
      ],
      examples: [
        { it: "Vorrei un biglietto per Firenze.", ru: "Я хотел бы билет во Флоренцию.", note: "vorrei будет подробно позже, пока как вежливая формула" },
        { it: "Un biglietto di andata e ritorno, per favore.", ru: "Один билет туда и обратно, пожалуйста." },
        { it: "Il treno parte dal binario due.", ru: "Поезд отправляется со второго пути." },
        { it: "Arriviamo alle cinque.", ru: "Мы прибываем в пять." }
      ],
      dialog: [
        { who: "Viaggiatore", text: "Scusi, un biglietto per Milano, per favore.", ru: "Извините, билет до Милана, пожалуйста." },
        { who: "Bigliettaio", text: "Andata e ritorno?", ru: "Туда и обратно?" },
        { who: "Viaggiatore", text: "Sì, andata e ritorno.", ru: "Да, туда и обратно." },
        { who: "Bigliettaio", text: "Sono dodici euro. Il treno parte dal binario tre.", ru: "Двенадцать евро. Поезд отправляется с третьего пути." },
        { who: "Viaggiatore", text: "Grazie!", ru: "Спасибо!" }
      ]
    }
  ],
  exercises: [
    {
      type: "gap",
      question: "Выбери артикль",
      sentence: "Prendo ___ autobus.",
      options: ["l'", "il", "la", "lo"],
      answer: "l'",
      hint: "Autobus начинается с гласной.",
      explain: "Prendo l'autobus — я сажусь на автобус."
    },
    {
      type: "match",
      question: "Соедини транспорт и перевод",
      pairs: [
        { left: "il treno", right: "поезд" },
        { left: "la metropolitana", right: "метро" },
        { left: "il biglietto", right: "билет" },
        { left: "il binario", right: "платформа, путь" },
        { left: "la fermata", right: "остановка" }
      ],
      explain: "Эти слова нужны на вокзале и в городе.",
      explainWrong: "Неверная пара. treno = поезд, metropolitana = метро, biglietto = билет, binario = путь, fermata = остановка."
    },
    {
      type: "table",
      question: "Заполни предлог",
      headers: ["Фраза", "Предлог"],
      rows: [
        ["vado in treno", "in"],
        ["___ autobus", ""]
      ],
      targetRow: 1,
      targetColumn: 1,
      options: ["in", "a", "da", "su"],
      answer: "in",
      hint: "Способ передвижения: in autobus.",
      explain: "vado in autobus — я еду автобусом."
    },
    {
      type: "choice",
      question: "Как спросить «Сколько стоит билет?»",
      options: ["Quanto costa il biglietto?", "Dove è il biglietto?", "Quando costa il biglietto?", "Chi costa il biglietto?"],
      answer: "Quanto costa il biglietto?",
      hint: "Quanto = сколько.",
      explain: "Quanto costa il biglietto? — Сколько стоит билет?"
    },
    {
      type: "fill",
      question: "Напиши «Один билет до Рима, пожалуйста»",
      answer: "Un biglietto per Roma per favore",
      accept: [
        "Un biglietto per Roma per favore",
        "un biglietto per Roma per favore",
        "Un biglietto per Roma, per favore",
        "un biglietto per Roma, per favore"
      ],
      placeholder: "Напиши по-итальянски",
      hint: "biglietto per + город.",
      explain: "Un biglietto per Roma, per favore — один билет до Рима, пожалуйста."
    },
    {
      type: "build",
      question: "Собери фразу: «Где я сажусь на автобус до центра?»",
      words: ["Dove", "prendo", "l'autobus", "per", "il", "centro"],
      answer: "Dove prendo l'autobus per il centro",
      hint: "Dove + prendo + l'autobus + per il centro.",
      explain: "Dove prendo l'autobus per il centro? — Где я сажусь на автобус до центра?"
    },
    {
      type: "gap",
      question: "Вставь слово",
      sentence: "Il treno parte dal ___.",
      options: ["binario", "biglietto", "fermata", "aereo"],
      answer: "binario",
      hint: "Поезд отправляется с платформы/пути.",
      explain: "Il treno parte dal binario — поезд отправляется с пути."
    },
    {
      type: "match",
      question: "Соедини фразу и перевод",
      pairs: [
        { left: "Andata e ritorno.", right: "Туда и обратно." },
        { left: "A che ora parte?", right: "Во сколько отправляется?" },
        { left: "Scendo alla prossima fermata.", right: "Я выхожу на следующей остановке." },
        { left: "Cambio alla stazione.", right: "Я пересаживаюсь на вокзале." },
        { left: "Siamo sul treno.", right: "Мы в поезде." }
      ],
      explain: "Это реальные фразы для транспорта.",
      explainWrong: "Неверная пара. andata e ritorno = туда-обратно, parte = отправляется, scendo = выхожу, cambio = пересаживаюсь, sul treno = в поезде."
    },
    {
      type: "choice",
      question: "Как сказать «Поезд на третьем пути»?",
      options: ["Il treno è al binario tre.", "Il treno è alla fermata tre.", "Il treno è sul biglietto tre.", "Il treno è in aereo tre."],
      answer: "Il treno è al binario tre.",
      hint: "binario = путь, платформа.",
      explain: "Il treno è al binario tre — поезд на третьем пути."
    },
    {
      type: "table",
      question: "Заполни глагол",
      headers: ["Значение", "Глагол"],
      rows: [
        ["отправляться", "partire"],
        ["прибывать", ""]
      ],
      targetRow: 1,
      targetColumn: 1,
      options: ["arrivare", "salire", "scendere", "cambiare"],
      answer: "arrivare",
      hint: "Arriviamo alle cinque — мы прибываем в пять.",
      explain: "arrivare — прибывать."
    }
  ]
};
