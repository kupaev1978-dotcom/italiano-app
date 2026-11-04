window.LESSONS = window.LESSONS || {};

window.LESSONS["a1-u8-l2"] = {
  id: "a1-u8-l2",
  title: "Passato prossimo con essere",
  level: "A1",
  xp: 40,
  theory: [
    {
      title: "Когда используется essere",
      summary: "Некоторые глаголы движения, изменения состояния и возвратные глаголы образуют passato prossimo с essere. С essere participio passato согласуется с подлежащим.",
      rule: [
        "Глаголы движения: andare, venire, partire, arrivare, entrare, uscire, tornare, restare.",
        "Глаголы изменения: nascere, morire, cadere, diventare.",
        "Возвратные глаголы: svegliarsi, alzarsi, lavarsi, vestirsi, divertirsi.",
        "Passato prossimo = essere al presente + participio passato.",
        "Participio cambiato: andato / andata / andati / andate."
      ],
      table: {
        headers: ["Лицо", "andare", "partire"],
        rows: [
          ["io", "sono andato / andata", "sono partito / partita"],
          ["tu", "sei andato / andata", "sei partito / partita"],
          ["lui / lei", "è andato / andata", "è partito / partita"],
          ["noi", "siamo andati / andate", "siamo partiti / partite"],
          ["voi", "siete andati / andate", "siete partiti / partite"],
          ["loro", "sono andati / andate", "sono partiti / partite"]
        ]
      },
      tips: [
        "Секрет: если глагол отвечает на вопрос «куда? откуда? что произошло с субъектом?», часто нужен essere.",
        "Согласование: мужчина — -o, женщина — -a, мужчины/смешанная группа — -i, женщины — -e."
      ],
      mistakes: [
        "Не говори *ho andato. Правильно: sono andato.",
        "Не говори Maria è andato. Правильно: Maria è andata.",
        "Не говори *sono andare. Правильно: sono andato."
      ],
      examples: [
        { it: "Sono andato a Roma.", ru: "Я поехал в Рим." },
        { it: "Maria è partita ieri.", ru: "Мария уехала вчера." },
        { it: "Siamo arrivati in orario.", ru: "Мы прибыли вовремя." },
        { it: "Sono rimasta a casa.", ru: "Я осталась дома." }
      ]
    },
    {
      title: "Возвратные глаголы в passato prossimo",
      summary: "Возвратные глаголы всегда требуют essere. Местоимение ставится перед essere, а participio согласуется с подлежащим.",
      rule: [
        "mi sono svegliato / svegliata — я проснулся / проснулась",
        "ti sei alzato / alzata — ты встал / встала",
        "si è lavato / lavata — он умылся / она умылась",
        "ci siamo vestiti / vestite — мы оделись",
        "vi siete divertiti / divertite — вы повеселились",
        "si sono salutati / salutate — они попрощались"
      ],
      table: {
        headers: ["Фраза", "Значение"],
        rows: [
          ["Mi sono svegliato alle sette.", "Я проснулся в семь."],
          ["Ti sei alzata presto?", "Ты встала рано?"],
          ["Si è lavato la faccia.", "Он умыл лицо."],
          ["Ci siamo visti ieri.", "Мы виделись вчера."],
          ["Si sono divertiti molto.", "Они очень повеселились."]
        ]
      },
      tips: [
        "Секрет: возвратное местоимение уже показывает лицо: mi, ti, si, ci, vi, si. Поэтому часто можно опустить io, tu, lui.",
        "Mi sono svegliato — мужчина говорит. Mi sono svegliata — женщина говорит."
      ],
      mistakes: [
        "Не говори *ho svegliato, если имеешь в виду «я проснулся». Правильно: mi sono svegliato.",
        "Не забывай согласование: Maria si è svegliata.",
        "Не ставь местоимение после глагола: не *sono mi svegliato."
      ],
      examples: [
        { it: "Mi sono alzato alle otto.", ru: "Я встал в восемь." },
        { it: "Ci siamo lavati e vestiti.", ru: "Мы умылись и оделись." },
        { it: "Si sono incontrati al bar.", ru: "Они встретились в баре." }
      ],
      dialog: [
        { who: "Anna", text: "A che ora ti sei svegliata?", ru: "Во сколько ты проснулась?" },
        { who: "Marco", text: "Alle sette. E tu?", ru: "В семь. А ты?" },
        { who: "Anna", text: "Sono rimasta a letto fino alle nove.", ru: "Я оставалась в постели до девяти." }
      ]
    }
  ],
  exercises: [
    {
      type: "choice",
      question: "Какой глагол обычно образует passato prossimo с essere?",
      options: ["andare", "mangiare", "bere", "dormire"],
      answer: "andare",
      hint: "Глаголы движения часто требуют essere.",
      explain: "andare -> sono andato."
    },
    {
      type: "gap",
      question: "Вставь правильную форму",
      sentence: "Maria ___ andata a Roma.",
      options: ["è", "ha", "sono", "sei"],
      answer: "è",
      hint: "Lei + essere = è.",
      explain: "Maria è andata a Roma — Мария поехала в Рим."
    },
    {
      type: "table",
      question: "Заполни форму",
      headers: ["Лицо", "Форма"],
      rows: [
        ["io", "sono partito"],
        ["tu", ""],
        ["noi", "siamo partiti"]
      ],
      targetRow: 1,
      targetColumn: 1,
      options: ["sei partito", "sono partito", "è partito", "siete partiti"],
      answer: "sei partito",
      hint: "Tu + essere = sei.",
      explain: "Tu sei partito — ты уехал."
    },
    {
      type: "error-choice",
      question: "Найди ошибку",
      tokens: [
        { text: "Maria", id: "0" },
        { text: "è", id: "1" },
        { text: "andato", id: "wrong" },
        { text: "a", id: "3" },
        { text: "casa", id: "4" }
      ],
      answer: "wrong",
      hint: "Maria — женский род, поэтому andata.",
      explain: "Правильно: Maria è andata a casa."
    },
    {
      type: "dialog-choice",
      question: "Выбери подходящий ответ",
      dialog: [
        { who: "Anna", text: "Dove sei andato?" }
      ],
      options: [
        "Sono andato a Roma.",
        "Ho andato a Roma.",
        "Vado a Roma.",
        "Sono andare a Roma."
      ],
      answer: "Sono andato a Roma.",
      hint: "Вопрос с essere, ответ тоже с essere.",
      explain: "Sono andato a Roma — я поехал в Рим."
    },
    {
      type: "match",
      question: "Соедини глагол и вспомогательный глагол",
      pairs: [
        { left: "andare", right: "essere" },
        { left: "mangiare", right: "avere" },
        { left: "partire", right: "essere" },
        { left: "bere", right: "avere" },
        { left: "svegliarsi", right: "essere" }
      ],
      explain: "Движение, изменение и возвратные глаголы — обычно essere.",
      explainWrong: "Неверная пара. Andare/partire/svegliarsi -> essere; mangiare/bere -> avere."
    },
    {
      type: "fill",
      question: "Напиши «Я проснулся в семь» (говорит мужчина)",
      answer: "Mi sono svegliato alle sette",
      accept: [
        "Mi sono svegliato alle sette",
        "mi sono svegliato alle sette",
        "Io mi sono svegliato alle sette",
        "io mi sono svegliato alle sette"
      ],
      placeholder: "Напиши по-итальянски",
      hint: "Возвратный глагол: mi sono + participio.",
      explain: "Mi sono svegliato alle sette — я проснулся в семь."
    },
    {
      type: "build",
      question: "Собери фразу: «Мы уехали в понедельник»",
      words: ["Siamo", "partiti", "lunedì"],
      answer: "Siamo partiti lunedì",
      hint: "Noi + essere = siamo; partire -> partiti.",
      explain: "Siamo partiti lunedì — мы уехали в понедельник."
    },
    {
      type: "choice",
      question: "Как сказать «Они, женщины, остались дома»?",
      options: [
        "Sono rimaste a casa.",
        "Sono rimasti a casa.",
        "Hanno rimaste a casa.",
        "Sono rimasta a casa."
      ],
      answer: "Sono rimaste a casa.",
      hint: "Женский род множественного числа: -e.",
      explain: "Sono rimaste a casa — они остались дома."
    },
    {
      type: "error-choice",
      question: "Найди ошибку",
      sentence: "Ho andato al cinema.",
      options: ["Ho", "andato", "al", "cinema"],
      answer: "Ho",
      hint: "С andare используется essere.",
      explain: "Правильно: Sono andato al cinema."
    }
  ]
};
