window.LESSONS = window.LESSONS || {};

window.LESSONS["a0-u2-l7"] = {
  id: "a0-u2-l7",
  title: "Checkpoint: essere, avere, вопросы и знакомство",
  level: "A0",
  xp: 50,
  theory: [
    {
      title: "Большой тест второго блока 🎯",
      summary: "Здесь смешаны местоимения и Lei, essere, avere, национальности и вопросительные слова. Цель — проверить, что ты понял логику, а не зазубрил формы.",
      rule: [
        "Вспомни секрет essere: sono = и «я», и «они»; è с акцентом = глагол, e без = союз.",
        "Вспомни секрет avere: ощущения и возраст — через «имею» (ho fame, ho 25 anni); h немая.",
        "Вспомни регистр: неформально = ti / sei / conoscerti; вежливо = si / è / Lei / conoscerLa.",
        "Вопросы: chi, che, dove, quando, come, perché, quanto — порядок слов не меняется."
      ],
      tips: [
        "Это checkpoint: ошибки стоят сердечек, но показывают, какую тему перечитать. Не гонись за скоростью — гонись за точностью.",
        "Если сомневаешься в регистре — смотри на глагол: 2-е лицо (sei/ti) = неформально, 3-е лицо (è/si/Lei) = вежливо."
      ],
      note: "После checkpoint откроется блок про род, число и артикли (A0-U3)."
    }
  ],
  exercises: [
    {
      type: "match",
      question: "Соедини местоимение/регистр с ролью",
      pairs: [
        { left: "io (ударное)", right: "подчеркнуть себя / контраст" },
        { left: "Lei", right: "вежливо одному человеку" },
        { left: "voi", right: "вы — несколько человек" },
        { left: "si (в глаголе)", right: "вежливый глагол 3-го лица" }
      ],
      explain: "Местоимения опускают без контраста; вежливость = Lei + 3-е лицо (si).",
      explainWrong: "Неверная пара. io-ударное, Lei-вежл. ед., voi-мн., si-вежл. глагол."
    },
    {
      type: "choice",
      question: "В обычной речи «я говорю» лучше сказать:",
      options: ["Io parlo", "Parlo", "Parlo io", "Io parlo io"],
      answer: "Parlo",
      explain: "Окончание -o уже значит «я»; io только для контраста."
    },
    {
      type: "fill",
      question: "Вежливо «как вас зовут?»",
      answer: "Come si chiama?",
      accept: ["Come si chiama?", "come si chiama", "Come si chiama", "come si chiama?"],
      explain: "Вежливость = si (3-е лицо)."
    },
    {
      type: "match",
      question: "Соедини лицо с формой essere",
      pairs: [
        { left: "tu", right: "sei" },
        { left: "noi", right: "siamo" },
        { left: "loro", right: "sono" },
        { left: "Lei (вежл.)", right: "è" }
      ],
      explain: "tu-sei, noi-siamo, loro-sono, вежливое Lei-è (3-е лицо).",
      explainWrong: "Неверная пара. Помни: с Lei глагол è, не sei."
    },
    {
      type: "choice",
      question: "«Мне холодно» по-итальянски:",
      options: ["Sono freddo", "Ho freddo", "Ho caldo", "Sei freddo"],
      answer: "Ho freddo",
      explain: "Ощущения — через avere: ho freddo = «имею холод»."
    },
    {
      type: "fill",
      question: "«Сколько тебе лет?»",
      answer: "Quanti anni hai?",
      accept: ["Quanti anni hai?", "quanti anni hai", "Quanti anni hai", "quanti anni hai?"],
      explain: "Возраст через avere: Quanti anni hai?"
    },
    {
      type: "choice",
      question: "«Я итальянка» (женщина):",
      options: ["Sono italiano", "Sono italiana", "Sono Italia", "Sono italiani"],
      answer: "Sono italiana",
      explain: "Национальность-прилагательное в женском роде: italiana."
    },
    {
      type: "match",
      question: "Соедини вопросительное слово со значением",
      pairs: [
        { left: "chi", right: "кто" },
        { left: "dove", right: "где" },
        { left: "quando", right: "когда" },
        { left: "perché", right: "почему / потому что" }
      ],
      explain: "Perché — слово с двумя лицами: вопрос «почему» и ответ «потому что».",
      explainWrong: "Неверная пара. chi=кто, dove=где, quando=когда, perché=почему/потому что."
    },
    {
      type: "build",
      question: "Собери: «я хочу пить» (дословно имею жажду)",
      words: ["Ho", "sete"],
      answer: "Ho sete",
      explain: "Ho sete = имею жажду."
    },
    {
      type: "choice",
      question: "«Англичанка» (женщина) — как скажешь?",
      options: ["inglesa", "inglese", "inglesi", "inglico"],
      answer: "inglese",
      explain: "Слова на -e не меняются по роду:inglese и для мужчины, и для женщины."
    },
    {
      type: "fill",
      question: "Вставь глагол: «Lui ___ a casa» (Он дома)",
      answer: "è",
      accept: ["è", "e"],
      explain: "Lui è — 3-е лицо essere; помни про акцент (è = есть, e = и)."
    },
    {
      type: "match",
      question: "Соедини ощущение avere с переводом",
      pairs: [
        { left: "ho fame", right: "я голоден" },
        { left: "ho sonno", right: "я хочу спать" },
        { left: "ho fretta", right: "я спешу" },
        { left: "ho ragione", right: "я прав" }
      ],
      explain: "Все — через «имею»: fame, sonno, fretta, ragione.",
      explainWrong: "Неверная пара. fame=голод, sonno=сон, fretta=спешка, ragione=прав(ота)."
    },
    {
      type: "choice",
      question: "Начал диалог с «Come ti chiami?». Как продолжить в том же регистре?",
      options: ["Piacere di conoscerLa", "Piacere di conoscerti", "Di dov'è?", "Come si chiama?"],
      answer: "Piacere di conoscerti",
      explain: "Регистр держат целиком: ti → conoscerti, не смешивать с La/Lei."
    },
    {
      type: "build",
      question: "Собери: «Приятно, я Мария»",
      words: ["Piacere", "sono", "Maria"],
      answer: "Piacere sono Maria",
      explain: "Формула: Piacere + sono + имя (essere, не avere)."
    }
  ]
};
