window.LESSONS = window.LESSONS || {};

window.LESSONS['a0-u1-l0b'] = {
  id: 'a0-u1-l0b',
  title: 'Главные правила чтения: c, g, ch, gh, gli, gn, sc',
  level: 'A0',
  xp: 30,
  theory: [
    {
      title: 'c и g — хамелеоны, а h — щит',
      summary: 'Буквы c и g меняют звук в зависимости от следующей гласной. Немая h работает как «щит»: она не даёт c и g смягчиться.',
      rule: [
        'c перед a, o, u = твёрдое «к»: casa, cola, cute.',
        'c перед e, i = мягкое «ч»: cena, ciao.',
        'ch перед e, i = твёрдое «к» (щит h не даёт смягчиться): che, chiesa.',
        'g перед a, o, u = твёрдое «г»: gato? нет, gatto; gola, gusto.',
        'g перед e, i = мягкое «дж»: gelato, giro.',
        'gh перед e, i = твёрдое «г» (щит h): che? нет, ghe; spaghetti, funghi.'
      ],
      table: {
        headers: ['Сочетание', 'Звук', 'Пример'],
        rows: [
          ['c + a/o/u', 'к', 'casa = ка-за'],
          ['c + e/i', 'ч', 'ciao = ча-о'],
          ['ch + e/i', 'к', 'che = ке'],
          ['g + a/o/u', 'г', 'gatto = гат-то'],
          ['g + e/i', 'дж', 'gelato = дже-ла-то'],
          ['gh + e/i', 'г', 'spaghetti = спа-гет-ти']
        ]
      },
      tips: [
        'Мнемоника «щит»: представь, что h — это щит, который встаёт между мягкой c/g и e/i, чтобы они остались твёрдыми. Поэтому che = «ке», а не «че»; ghi = «ги», а не «джи».',
        'Якоря для памяти: мягкое c — слово ciao (чао); мягкое g — слово gelato (джелато); твёрдое через щит — che (ке) и spaghetti (спагетти).',
        'Запомни одно правило на всю жизнь: если после c или g стоит e или i WITHOUT h — звук мягкий. С h — твёрдый.'
      ],
      mistakes: [
        'Не читай ciao как «кЯо». Правильно «ЧА-о». C перед i мягкое.',
        'Не читай gelato как «гелато». Правильно «дже-ЛА-то». G перед e мягкое.',
        'Не путай che (ке, союз «что/который») и c’è (чэ, «есть»). Разница именно в щите h и в апострофе.'
      ],
      examples: [
        { it: 'la cena', ru: 'ужин', note: 'c перед e = ч: «че-на»' },
        { it: 'il cibo', ru: 'еда', note: 'c перед i = ч: «чи-бо»' },
        { it: 'le amiche', ru: 'подруги', note: 'ch = к: «а-ми-ке»' },
        { it: 'i funghi', ru: 'грибы', note: 'gh = г: «фун-ги»' }
      ]
    },
    {
      title: 'Особые звуки: gli, gn, sc',
      summary: 'Три сочетания дают звуки, которых нет в русском по отдельности, но которые легко поймать через привычные слова.',
      rule: [
        'gli = мягкий «льй», слитно, как в русском «льёт», но одним звуком: figlio (сын), moglie (жена), gli (им).',
        'gn = мягкое «нь», как в «няня», но слитнее: gnocchi (ньокки), agnello (ягнёнок), bagno (ванна), segno (знак).',
        'sc перед e, i = «ш»: scena (сцена), sciare (кататься на лыжах), pesce (рыба — тут sc даёт «ш»).',
        'sc перед a, o, u = «ск»: scuola (школа), scatola (коробка), disco (диск).'
      ],
      table: {
        headers: ['Сочетание', 'Звук', 'Пример'],
        rows: [
          ['gli', 'мягкое «льй»', 'figlio = филь-йо'],
          ['gn', 'мягкое «нь»', 'bagno = бан-ьо'],
          ['sc + e/i', '«ш»', 'pesce = пэ-ше'],
          ['sc + a/o/u', '«ск»', 'scuola = ску-о-ла']
        ]
      },
      tips: [
        'Gli и gn — это ОДИН звук, а не два. Не произноси «фи-ли-йо», произноси слитно «филь-йо». То же gnocchi = «ньок-ки», а не «ге-нокки».',
        'sc переключается как c и g: мягкое «ш» только перед e и i, твёрдое «ск» перед a, o, u. Логика та же, что с хамелеонами.',
        'Слово gli (им, местоимение) и слово gli (son, редкое) — пишем одинаково, но на A0 просто запомни: gli = мягкий «льй».'
      ],
      mistakes: [
        'Не читай gnocchi как «гокки» или «ге-нокки». Правильно «НЬОК-ки».',
        'Не читайaglio/figlio через раздельное «л» и «и». Gli — один мягкий звук.',
        'Не путай sc в scuola («ск») и sc в pesce («ш»). Смотрим на следующую гласную.'
      ],
      examples: [
        { it: 'il figlio', ru: 'сын', note: 'gli = льй: «филь-йо»' },
        { it: 'la moglie', ru: 'жена', note: 'gli = льй: «мо-лье»' },
        { it: 'il bagno', ru: 'ванна, туалет', note: 'gn = нь: «бан-ьо»' },
        { it: 'il pesce', ru: 'рыба', note: 'sc перед e = ш: «пэ-ше»' },
        { it: 'la scuola', ru: 'школа', note: 'sc перед u = ск: «ску-о-ла»' }
      ],
      dialog: [
        { who: 'Luca', text: 'Hai fratello?', ru: 'У тебя есть брат?' },
        { who: 'Anna', text: 'Sì, ho un figlio di zio? No — ho un fratello.', ru: 'Да, у меня есть брат.' },
        { who: 'Luca', text: 'Mangiamo gli gnocchi?', ru: 'Давай съедим ньокки?' },
        { who: 'Anna', text: 'Sì, e poi il pesce.', ru: 'Да, а потом рыбу.' }
      ]
    }
  ],
  exercises: [
    {
      type: 'choice',
      question: 'Как читается c в слове ciao?',
      options: ['к', 'ч', 'с', 'ц'],
      answer: 'ч',
      explain: 'c перед i мягкое: ciao = «ча-о».'
    },
    {
      type: 'choice',
      question: 'Как читается g в слове gelato?',
      options: ['г', 'дж', 'ж', 'зь'],
      answer: 'дж',
      explain: 'g перед e мягкое: gelato = «дже-ла-то».'
    },
    {
      type: 'choice',
      question: 'Что делает h в сочетании ch перед e?',
      options: ['читается как «х»', 'делает c твёрдым «к»', 'делает c мягким «ч»', 'немая и ничего не меняет'],
      answer: 'делает c твёрдым «к»',
      explain: 'ch = щит: che читается «ке», а не «че».'
    },
    {
      type: 'match',
      question: 'Соедини сочетание со звуком',
      pairs: [
        { left: 'gli', right: 'мягкое «льй»' },
        { left: 'gn', right: 'мягкое «нь»' },
        { left: 'sc + e/i', right: '«ш»' },
        { left: 'sc + a/o/u', right: '«ск»' },
        { left: 'gh + e/i', right: 'твёрдое «г»' },
        { left: 'ch + e/i', right: 'твёрдое «к»' }
      ],
      explain: 'gli и gn — один слитный звук; sc переключается как c и g; h — щит для твёрдости.',
      explainWrong: 'Неверная пара. Помни: h = щит (твёрдый звук), sc мягкое только перед e/i.'
    },
    {
      type: 'fill',
      question: 'Напиши по-итальянски «сын» (подсказка: f-i-?-?-o, звук льй)',
      answer: 'figlio',
      accept: ['figlio', 'Figlio'],
      explain: 'figlio = сын. Gli даёт мягкий «льй».'
    },
    {
      type: 'choice',
      question: 'В каком слове sc читается как «ш»?',
      options: ['scuola', 'pesce', 'scatola', 'disco'],
      answer: 'pesce',
      explain: 'В pesce sc стоит перед e, поэтому «ш». В scuola/scatola/disco — перед a/o/u, поэтому «ск».'
    },
    {
      type: 'build',
      question: 'Собери фразу: «мы едим ньокки»',
      words: ['mangiamo', 'gli', 'gnocchi'],
      answer: 'mangiamo gli gnocchi',
      explain: 'gli = артикль/местоимение с мягким «льй», gnocchi = «ньок-ки».'
    },
    {
      type: 'choice',
      question: 'Как прочитать spaghetti?',
      options: ['спа-джет-ти', 'спа-гет-ти', 'спа-хе-тти', 'спа-кет-ти'],
      answer: 'спа-гет-ти',
      explain: 'gh = щит, поэтому твёрдое «г»: спа-гет-ти.'
    }
  ]
};
