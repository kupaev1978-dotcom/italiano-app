window.LESSONS = window.LESSONS || {};

window.LESSONS['a0-u1-l1'] = {
  id: 'a0-u1-l1',
  title: 'Приветствия и знакомство',
  level: 'A0',
  xp: 20,
  theory: [
    {
      html: `
        <h2>Приветствия: не только «ciao»</h2>
        <p><b>Ciao</b> — неформальное «привет» и «пока». Так говорят друзьям, ровесникам, детям и в неформальной обстановке.</p>
        <p><b>Buongiorno</b> — «добрый день». Обычно используется до второй половины дня.</p>
        <p><b>Buonasera</b> — «добрый вечер». Обычно используется ближе к вечеру, в некоторых регионах — уже после обеда.</p>
        <p><b>Arrivederci</b> — нейтральное «до свидания». <b>ArrivederLa</b> — более официальная и вежливая форма.</p>
        <div class="tip">
          💡 Фишка: если не уверен, как поздороваться с незнакомым человеком, используй <b>Salve</b>. Это безопасный средний вариант между «Ciao» и «Buongiorno».
        </div>
      `
    },
    {
      html: `
        <h2>Знакомство: как сказать «меня зовут»</h2>
        <p><b>Mi chiamo...</b> — «меня зовут...». Дословно: «я называю себя».</p>
        <p><b>Come ti chiami?</b> — «как тебя зовут?» в неформальной форме.</p>
        <p><b>Piacere</b> — «приятно познакомиться». Можно усилить: <b>Molto piacere</b>.</p>
        <div class="tip">
          💡 Нюанс: не нужно переводить «приятно познакомиться» дословно. Итальянцы в этом месте обычно говорят коротко: <b>Piacere</b>.
        </div>
      `
    },
    {
      html: `
        <h2>Вежливые слова-спасатели</h2>
        <p><b>Grazie</b> — спасибо.</p>
        <p><b>Prego</b> — пожалуйста, в ответ на спасибо. Также может означать «проходите», «садитесь», «чем могу помочь».</p>
        <p><b>Per favore</b> — пожалуйста, когда просишь.</p>
        <p><b>Scusa</b> — извини, неформально. <b>Scusi</b> — извините, вежливо.</p>
        <div class="tip">
          💡 Фишка: <b>Prego</b> — очень универсальное слово. После «Grazie» почти всегда достаточно сказать именно <b>Prego</b>.
        </div>
      `
    }
  ],
  exercises: [
    {
      type: 'choice',
      question: 'Выбери неформальное «Привет»',
      options: [
        'Ciao',
        'Grazie',
        'Prego',
        'Arrivederci'
      ],
      answer: 'Ciao',
      explain: 'Ciao — неформально. С незнакомыми лучше использовать Salve или Buongiorno.'
    },
    {
      type: 'choice',
      question: 'Как сказать «Добрый день»?',
      options: [
        'Buonanotte',
        'Buongiorno',
        'Ciao',
        'Prego'
      ],
      answer: 'Buongiorno',
      explain: 'Buonanotte — это пожелание спокойной ночи перед сном.'
    },
    {
      type: 'choice',
      question: 'Как вежливо попрощаться?',
      options: [
        'Arrivederci',
        'Ciao',
        'Scusa',
        'Prego'
      ],
      answer: 'Arrivederci',
      explain: 'Ciao допустимо с друзьями, а Arrivederci — нейтрально-вежливо.'
    },
    {
      type: 'fill',
      question: 'Вставь слово: «____, Luca!» — привет другу',
      answer: 'Ciao',
      accept: [
        'Ciao',
        'ciao'
      ],
      explain: 'С другом уместно неформальное Ciao.'
    },
    {
      type: 'choice',
      question: 'Что сказать после «Grazie»?',
      options: [
        'Prego',
        'Scusi',
        'Arrivederci',
        'Buonasera'
      ],
      answer: 'Prego',
      explain: 'Prego — стандартный ответ на grazie.'
    },
    {
      type: 'build',
      question: 'Собери фразу: «Меня зовут Анна»',
      words: [
        'Mi',
        'chiamo',
        'Anna'
      ],
      answer: 'Mi chiamo Anna',
      explain: 'Mi chiamo — дословно «я называю себя».'
    },
    {
      type: 'fill',
      question: 'Напиши по-итальянски: «Приятно познакомиться»',
      answer: 'Piacere',
      accept: [
        'Piacere',
        'piacere',
        'Molto piacere',
        'molto piacere'
      ],
      explain: 'Самый естественный короткий вариант — Piacere.'
    },
    {
      type: 'choice',
      question: 'Как вежливо извиниться перед незнакомым человеком?',
      options: [
        'Scusi',
        'Scusa',
        'Prego',
        'Ciao'
      ],
      answer: 'Scusi',
      explain: 'Scusa — неформально, Scusi — вежливо.'
    },
    {
      type: 'choice',
      question: 'Как спросить «Как дела?» у друга?',
      options: [
        'Come stai?',
        'Come sta?',
        'Mi chiamo?',
        'Prego?'
      ],
      answer: 'Come stai?',
      explain: 'Come stai? — неформально. С незнакомым человеком лучше использовать Come sta? или нейтральное Come va?'
    }
  ]
};
