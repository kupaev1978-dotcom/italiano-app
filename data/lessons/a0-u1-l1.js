window.LESSONS = window.LESSONS || {};

window.LESSONS['a0-u1-l1'] = {
  id: 'a0-u1-l1',
  title: 'Приветствия, прощания и вежливость',
  level: 'A0',
  xp: 25,
  theory: [
    {
      title: 'Три регистра: не одно «привет», а выбор дистанции',
      summary: 'В итальянском приветствие зависит от того, С КЕМ и КОГДА ты говоришь. Есть неформальный, нейтральный и вежливый регистры.',
      rule: [
        'ciao — неформально: друзья, ровесники, дети. Работает и как «привет», и как «пока».',
        'salve — нейтральный безопасный вариант: незнакомый, но не официально.',
        'buongiorno — «добрый день», примерно до 13–14 часов.',
        'buonasera — «добрый вечер», ближе к вечеру (на юге иногда уже после обеда).',
        'buonanotte — «спокойной ночи»: ТОЛЬКО перед сном или расставанием ночью. Это НЕ приветствие.',
        'arrivederci — нейтральное «до свидания». arrivederLa — вежливо, к одному взрослому/официально.'
      ],
      table: {
        headers: ['Ситуация', 'Что говорить'],
        rows: [
          ['друг, знакомый', 'ciao'],
          ['незнакомый, но не официально', 'salve'],
          ['утро/день, уважительно', 'buongiorno'],
          ['вечер, уважительно', 'buonasera'],
          ['перед сном / ночью прощаемся', 'buonanotte'],
          ['прощание нейтрально', 'arrivederci'],
          ['прощание вежливо (к одному)', 'arrivederLa']
        ]
      },
      tips: [
        'Секрет-швейцарский нож: не понимаешь регистр — говори salve. Он не оскорбит и не будет фамильярным. Это самый безопасный выбор для незнакомца.',
        'Региональный нюанс, не догма: на севере buonasera начинают ближе к 17–18, а на юге и Сицилии — уже после 13–14. Ориентируйся на местных, но ошибкой это не будет.'
      ],
      mistakes: [
        'Главная ловушка для русскоязычных: buonanotte НЕ означает «добрый вечер». Так не здороваются. Вечером — buonasera, а buonanotte только на ночь.',
        'Не говори ciao продавцу-незнакомцу, врачу, начальнику в официальном месте — там salve или buongiorno/buonasera.',
        'Не путай arrivederci (нейтр., можно группе) и arrivederLa (вежл., строго к одному человеку).'
      ],
      examples: [
        { it: 'Ciao, Marco!', ru: 'Привет, Марко!' },
        { it: 'Salve!', ru: 'Здравствуйте (нейтрально).' },
        { it: 'Buongiorno, signora.', ru: 'Добрый день, мадам.' },
        { it: 'Buonanotte, dormi bene.', ru: 'Спокойной ночи, спи хорошо.' }
      ]
    },
    {
      title: 'Знакомство: четыре хода базового диалога',
      summary: 'Любое знакомство в итальянском — это четыре реплики: спросить имя, назвать своё, выразить удовольствие, спросить откуда.',
      rule: [
        'Come ti chiami? — как тебя зовут? (неформально)',
        'Come si chiama? — как вас зовут? (вежливо)',
        'Mi chiamo... — меня зовут...',
        'Piacere / Molto piacere / Piacere di conoscerLa — приятно познакомиться',
        'Di dove sei? (неформ.) / Di dov’è? (вежл.) — откуда ты/вы?'
      ],
      table: {
        headers: ['Неформально (tu)', 'Вежливо (Lei)'],
        rows: [
          ['Come ti chiami?', 'Come si chiama?'],
          ['Di dove sei?', 'Di dov’è?'],
          ['Piacere di conoscerti', 'Piacere di conoscerLa']
        ]
      },
      tips: [
        'Секрет вежливой формы, который открывает всю грамматику Lei: вежливость в итальянском строится на местоимении Lei (с большой буквы) и глаголе в 3-м лице единственного числа. Come si chiama? буквально «как зовётся она (= Вы)». Поэтому si, а не ti. Это мостик в A0-U2 — не зубри, просто пойми логику: вежливый = 3-е лицо.',
        'Mi chiamo достаточно. Не нужно добавлять Io в начале: «Io mi chiamo» звучит избыточно, как «я себя зову».'
      ],
      mistakes: [
        'Не путай piacere (существительное «приятно познакомиться / радость») и глагол piacere (нравиться). Корень общий, но в знакомстве мы говорим именно piacere как формулу.',
        'Не отвечай на вежливый вопрос Come si chiama? неформальным ti — держи регистр до конца диалога.'
      ],
      examples: [
        { it: 'Come ti chiami? — Mi chiamo Luca.', ru: 'Как тебя зовут? — Меня зовут Лука.' },
        { it: 'Piacere, Anna.', ru: 'Приятно познакомиться, Анна.' },
        { it: 'Di dove sei? — Sono di Roma.', ru: 'Откуда ты? — Я из Рима.' }
      ],
      dialog: [
        { who: 'Неформально', text: '— Ciao! Come ti chiami? — Mi chiamo Giulia. — Piacere! — Il piacere è mio.', ru: '— Привет! Как тебя зовут? — Меня зовут Джулия. — Приятно! — Взаимно.' },
        { who: 'Вежливо', text: '— Buongiorno. Come si chiama? — Mi chiamo Rossi. — Piacere di conoscerLa.', ru: '— Добрый день. Как вас зовут? — Меня зовут Росси. — Приятно познакомиться.' }
      ]
    },
    {
      title: 'Слова-спасатели: grazie, prego, per favore, scusi, mi dispiace',
      summary: 'Эти шесть слов держат любой бытовой разговор от бара до улицы.',
      rule: [
        'grazie — спасибо; grazie mille / mille grazie — огромное спасибо.',
        'prego — пожалуйста (ответ на grazie), а также «проходите», «садитесь», «не за что», и даже переспрос «что вы сказали?».',
        'per favore / per cortesia — пожалуйста, когда ПРОСИШЬ (cortesia вежливее).',
        'scusa (неформ.) / scusi (вежл.) — извини/извините за действие; mi scusi — вежливо окликнуть/извиниться.',
        'mi dispiace — мне жаль / извините за факт или ситуацию.'
      ],
      table: {
        headers: ['Фраза', 'Когда'],
        rows: [
          ['grazie mille', 'хочешь усилить благодарность'],
          ['prego', 'ответ на grazie; «проходите»; переспрос'],
          ['per favore / per cortesia', 'когда просишь'],
          ['scusa / scusi', 'извиниться за поступок (неформ./вежл.)'],
          ['mi scusi', 'вежливо окликнуть незнакомца'],
          ['mi dispiace', 'выразить сожаление о ситуации']
        ]
      },
      tips: [
        'Секрет про prego, который экономит кучу слов: prego — это одно слово на пять жизней. Ответ на grazie, приглашение сесть/пройти, «не за что», и даже «Prego?» чтобы переспросить. Русские путают, потому что по-русски «пожалуйста» закрывает и просьбу, и ответ. В итальянском это РАЗНЫЕ слова: просишь — per favore, отвечаешь — prego.',
        'scusa/scusi и mi dispiace — не синонимы. Scusi = «простите (меня)» за то, что сделал/скажешь. Mi dispiace = «мне жаль» о том, что случилось. «Mi dispiace per il ritardo» = «жаль из-за опоздания» (сочувствие факту), а «Scusi il ritardo» = «простите за опоздание» (просишь прощения).'
      ],
      mistakes: [
        'Не отвечай на grazie словами per favore — это просьба, а не ответ. Ответ — prego.',
        'Не держи один регистр на всё: scusa другу, scusi/mi scusi незнакомому. Тот же принцип Lei, что и в знакомстве.',
        'Не используй mi dispiace как «извини за мой поступок» в лоб — это скорее сочувствие/сожаление о ситуации.'
      ],
      examples: [
        { it: 'Grazie mille! — Prego.', ru: 'Огромное спасибо! — Пожалуйста.' },
        { it: 'Un caffè, per favore.', ru: 'Кофе, пожалуйста (просьба).' },
        { it: 'Mi scusi, dov’è la stazione?', ru: 'Простите, где вокзал? (оклик).' },
        { it: 'Mi dispiace, non posso.', ru: 'К сожалению, не могу.' }
      ],
      dialog: [
        { who: 'Cameriere', text: 'Buongiorno. Cosa prende?', ru: 'Добрый день. Что будете?' },
        { who: 'Cliente', text: 'Un caffè, per favore.', ru: 'Кофе, пожалуйста.' },
        { who: 'Cameriere', text: 'Prego.', ru: 'Вот, пожалуйста.' },
        { who: 'Cliente', text: 'Grazie mille!', ru: 'Огромное спасибо!' },
        { who: 'Cameriere', text: 'Prego, arrivederci.', ru: 'Не за что, до свидания.' }
      ]
    }
  ],
  exercises: [
    {
      type: 'choice',
      question: 'Заходишь в магазин, продавец незнакомый. Что скажешь?',
      options: ['Ciao!', 'Salve!', 'Buonanotte!', 'Ehi!'],
      answer: 'Salve!',
      explain: 'Salve — безопасный нейтральный регистр для незнакомца. Ciao слишком фамильярно, buonanotte вообще не приветствие.'
    },
    {
      type: 'match',
      question: 'Соедини фразу и ситуацию',
      pairs: [
        { left: 'buonanotte', right: 'перед сном / ночью прощаемся' },
        { left: 'prego', right: 'ответ на grazie' },
        { left: 'per favore', right: 'когда просишь' },
        { left: 'scusi', right: 'вежливое извинение' },
        { left: 'arrivederci', right: 'нейтральное до свидания' }
      ],
      explain: 'Регистр и роль слова важнее буквального перевода.',
      explainWrong: 'Неверная пара. Помни: buonanotte — не приветствие; per favore — просьба; prego — ответ.'
    },
    {
      type: 'choice',
      question: 'Можно сказать Buonanotte, входя в магазин днём?',
      options: ['Да, это вежливо', 'Нет, так не здороваются'],
      answer: 'Нет, так не здороваются',
      explain: 'Buonanotte = «спокойной ночи», только на ночь. Днём — buongiorno, вечером — buonasera.'
    },
    {
      type: 'fill',
      question: 'Как неформально спросить «как тебя зовут?»',
      answer: 'Come ti chiami?',
      accept: ['Come ti chiami?', 'come ti chiami', 'Come ti chiami', 'come ti chiami?'],
      explain: 'Неформально — ti: Come ti chiami?'
    },
    {
      type: 'build',
      question: 'Собери фразу: «Меня зовут Анна»',
      words: ['Mi', 'chiamo', 'Anna'],
      answer: 'Mi chiamo Anna',
      explain: 'Mi chiamo = «я называю себя». Io не нужно.'
    },
    {
      type: 'choice',
      question: 'Как вежливо спросить «как вас зовут?»',
      options: ['Come ti chiami?', 'Come si chiama?', 'Come sei?', 'Chi sei?'],
      answer: 'Come si chiama?',
      explain: 'Вежливость = 3-е лицо + si: Come si chiama? (не ti).'
    },
    {
      type: 'match',
      question: 'Соедини слово и его роль',
      pairs: [
        { left: 'grazie', right: 'спасибо' },
        { left: 'prego', right: 'пожалуйста-ответ / переспрос' },
        { left: 'per cortesia', right: 'пожалуйста-просьба (вежл.)' },
        { left: 'mi dispiace', right: 'мне жаль (о ситуации)' },
        { left: 'mi scusi', right: 'вежливо окликнуть' }
      ],
      explain: 'Prego закрывает и ответ, и переспрос; per cortesia — просьба; mi dispiace — сожаление.',
      explainWrong: 'Неверная пара. Раздели: просьба (per favore/cortesia) против ответа (prego), и scusi против mi dispiace.'
    },
    {
      type: 'choice',
      question: 'Что может означать одно слово Prego?',
      options: [
        'только «пожалуйста» в ответ',
        'и ответ на grazie, и «проходите/садитесь», и переспрос «что?»',
        'только «спасибо»',
        'только «извините»'
      ],
      answer: 'и ответ на grazie, и «проходите/садитесь», и переспрос «что?»',
      explain: 'Секрет универсальности prego: одно слово на несколько жизней.'
    },
    {
      type: 'build',
      question: 'Собери: «Огромное спасибо»',
      words: ['Grazie', 'mille'],
      answer: 'Grazie mille',
      explain: 'grazie mille = огромное спасибо (букв. «спасибо тысяча»).'
    },
    {
      type: 'choice',
      question: 'Как вежливо окликнуть незнакомца на улице?',
      options: ['Scusa!', 'Mi scusi!', 'Ciao!', 'Prego!'],
      answer: 'Mi scusi!',
      explain: 'Mi scusi — вежливый оклик. Scusa — только другу.'
    }
  ]
};
