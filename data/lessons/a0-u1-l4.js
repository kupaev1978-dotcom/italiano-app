window.LESSONS = window.LESSONS || {};

window.LESSONS['a0-u1-l4'] = {
  id: 'a0-u1-l4',
  title: 'Checkpoint: звуки, числа и первые фразы',
  level: 'A0',
  xp: 50,
  theory: [
    {
      title: 'Большой тест первого блока 🎯',
      summary: 'Здесь смешаны фонетика, ударение, числа и приветствия. Цель — проверить, что ты не просто запомнил слова, а понял логику чтения и регистра.',
      rule: [
        'Сначала думай о ЧТЕНИИ (c/g, h-щит, gli/gn/sc, ударение), потом о смысле.',
        'В приветствиях всегда спрашивай себя: какой регистр? неформальный, нейтральный или вежливый?',
        'В числах помни секрет: sei = и 6, и «ты есть»; десятки склеиваются с потерей гласной и удвоением перед 8.'
      ],
      tips: [
        'Это checkpoint, а не урок: ошибки здесь стоят сердечек, но они показывают, какую тему стоит перечитать. Не гонись за скоростью — гонись за точностью.',
        'Если сомневаешься в чтении слова — примени правило хамелеона: смотрим на букву ПОСЛЕ c или g.'
      ],
      note: 'Удачи! После checkpoint откроется следующий блок про essere, avere и вопросы.'
    }
  ],
  exercises: [
    {
      type: 'choice',
      question: 'Как читается ciao?',
      options: ['«кЯо»', '«чао»', '«сао»', '«кяо»'],
      answer: '«чао»',
      explain: 'c перед i мягкое = ч. Ciao = «ча-о».'
    },
    {
      type: 'choice',
      question: 'Как читается gelato?',
      options: ['«гелато»', '«джелато»', '«желато»', '«хелато»'],
      answer: '«джелато»',
      explain: 'g перед e мягкое = дж. Gelato = «дже-ла-то».'
    },
    {
      type: 'match',
      question: 'Соедини сочетание со звуком (фонетика)',
      pairs: [
        { left: 'gli', right: 'мягкое «льй»' },
        { left: 'gn', right: 'мягкое «нь»' },
        { left: 'ch + e/i', right: 'твёрдое «к»' },
        { left: 'gh + e/i', right: 'твёрдое «г»' },
        { left: 'sc + e/i', right: '«ш»' }
      ],
      explain: 'h — щит (твёрдый звук); gli/gn — один слитный звук; sc мягкое только перед e/i.',
      explainWrong: 'Неверная пара. Помни: h = щит, sc переключается как c и g.'
    },
    {
      type: 'choice',
      question: 'На какой слог ударение в città?',
      options: ['на первый: ЧИТ-та', 'на второй: чит-ТА', 'плавающее'],
      answer: 'на второй: чит-ТА',
      explain: 'Акцент = ударение на последний слог. Città = «чит-ТА».'
    },
    {
      type: 'match',
      question: 'Соедини слово со значением (акценты меняют смысл!)',
      pairs: [
        { left: 'e', right: 'союз «и»' },
        { left: 'è', right: 'глагол «есть»' },
        { left: 'sì', right: 'ответ «да»' },
        { left: 'si', right: 'частица «себя»' },
        { left: 'là', right: '«там»' }
      ],
      explain: 'Без акцента — служебное, с акцентом — самостоятельное ударное слово.',
      explainWrong: 'Неверная пара. e/è, sì/si, là/la — разница именно в акценте.'
    },
    {
      type: 'choice',
      question: 'Какое число — quindici?',
      options: ['5', '12', '15', '50'],
      answer: '15',
      explain: 'quindici = 15. Не путай с cinque (5).'
    },
    {
      type: 'fill',
      question: 'Напиши 21 по-итальянски (секрет десятков)',
      answer: 'ventuno',
      accept: ['ventuno', 'Ventuno'],
      explain: 'venti + uno = ventuno: десяток теряет гласную при склейке.'
    },
    {
      type: 'choice',
      question: 'Слово sei может означать:',
      options: ['только 6', 'только «ты есть»', 'и 6, и «ты есть»', 'только 16'],
      answer: 'и 6, и «ты есть»',
      explain: 'Ловушка-секрет: sei = 6 и sei = 2-е лицо essere. Решает контекст.'
    },
    {
      type: 'choice',
      question: 'Утро, заходишь в аптеку, фармацевт незнакомый. Что скажешь?',
      options: ['Ciao!', 'Buongiorno!', 'Buonanotte!', 'Arrivederci!'],
      answer: 'Buongiorno!',
      explain: 'Утро + незнакомец = buongiorno. Ciao фамильярно, buonanotte не приветствие.'
    },
    {
      type: 'fill',
      question: 'Что ответить на «Grazie»?',
      answer: 'Prego',
      accept: ['Prego', 'prego'],
      explain: 'Prego — стандартный ответ на thanks. Per favore было бы просьбой.'
    },
    {
      type: 'build',
      question: 'Собери вежливый диалог: «Добрый вечер, как вас зовут?»',
      words: ['Buonasera', 'come', 'si', 'chiama'],
      answer: 'Buonasera come si chiama',
      explain: 'Вечер = buonasera; вежливый вопрос = come si chiama (3-е лицо, не ti).'
    },
    {
      type: 'match',
      question: 'Соедини фразу и ситуацию (приветствия/вежливость)',
      pairs: [
        { left: 'arrivederLa', right: 'вежливое прощание к одному' },
        { left: 'mi dispiace', right: 'сочувствие/сожаление о факте' },
        { left: 'per favore', right: 'просьба' },
        { left: 'molto piacere', right: 'усиленное «приятно познакомиться»' },
        { left: 'buonanotte', right: 'перед сном' }
      ],
      explain: 'Регистр и роль важнее буквального перевода.',
      explainWrong: 'Неверная пара. Раздели просьбу (per favore), сожаление (mi dispiace) и прощание (arrivederLa).'
    },
    {
      type: 'choice',
      question: 'Какое слово НЕ является приветствием?',
      options: ['Buongiorno', 'Salve', 'Buonanotte', 'Ciao'],
      answer: 'Buonanotte',
      explain: 'Buonanotte = «спокойной ночи», это прощание/пожелание на ночь, не приветствие.'
    }
  ]
};
