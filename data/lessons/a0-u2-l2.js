window.LESSONS = window.LESSONS || {};

window.LESSONS['a0-u2-l2'] = {
  id: 'a0-u2-l2',
  title: 'Глагол avere: иметь и ощущения',
  level: 'A0',
  xp: 30,
  theory: [
    {
      html: `
        <h2>Глагол Avere: Владение и Чувства</h2>
        <p><b>Avere</b> означает «иметь». Это второй кит итальянского языка.</p>
        <ul>
          <li><b>Io ho</b> — Я имею</li>
          <li><b>Tu hai</b> — Ты имеешь</li>
          <li><b>Lui / Lei ha</b> — Он / Она имеет</li>
          <li><b>Noi abbiamo</b> — Мы имеем</li>
          <li><b>Voi avete</b> — Вы имеете</li>
          <li><b>Loro hanno</b> — Они имеют</li>
        </ul>
        <div class="tip">
          💡 Секрет: Буква <b>H</b> в начале — НЕМЫЯ. Она не читается! <br>
          <b>Ho</b> читается просто как «О». <br>
          <b>Hai</b> читается как «Ай». <br>
          H нужна только на письме, чтобы отличать эти слова от других.
        </div>
      `
    },
    {
      html: `
        <h2>Итальянская логика чувств</h2>
        <p>В русском мы говорим «Я голодный» или «Мне холодно». В итальянском мы <b>ИМЕЕМ</b> эти ощущения.</p>
        <ul>
          <li><b>Ho fame</b> — Я имею голод (Я голодный).</li>
          <li><b>Ho sete</b> — Я имею жажду (Я хочу пить).</li>
          <li><b>Ho freddo</b> — Я имею холод (Мне холодно).</li>
          <li><b>Ho sonno</b> — Я имею сонливость (Я хочу спать).</li>
        </ul>
        <div class="tip">
          💡 Фишка: Запомни это как игру «У меня есть». У тебя есть голод? <b>Ho fame</b>. У тебя есть страх? <b>Ho paura</b>.
        </div>
      `
    }
  ],
  exercises: [
    {
      type: 'choice',
      question: 'Как сказать "Я имею"?',
      options: ['ho', 'hai', 'ha', 'hanno'],
      answer: 'ho',
      explain: 'Io ho — Я имею. Помни, что произносится просто "О".'
    },
    {
      type: 'choice',
      question: 'Выбери форму для "Ты имеешь"',
      options: ['ho', 'hai', 'ha', 'avete'],
      answer: 'hai',
      explain: 'Tu hai — Ты имеешь.'
    },
    {
      type: 'fill',
      question: 'Напиши "Я хочу пить" (дословно: Я имею жажду)',
      answer: 'Ho sete',
      accept: ['Ho sete', 'ho sete'],
      explain: 'Ho sete = Я имею жажду.'
    },
    {
      type: 'choice',
      question: 'Как правильно сказать "Мне холодно"?',
      options: ['Sono freddo', 'Ho freddo', 'Ho caldo', 'Sei freddo'],
      answer: 'Ho freddo',
      explain: 'Ho freddo — Я имею холод.'
    },
    {
      type: 'build',
      question: 'Собери фразу: "Мы имеем кота"',
      words: ['Noi', 'abbiamo', 'un', 'gatto'],
      answer: 'Noi abbiamo un gatto',
      explain: 'Noi abbiamo — Мы имеем.'
    },
    {
      type: 'choice',
      question: 'Что означает "Ho sonno"?',
      options: ['Я голоден', 'Я хочу спать', 'Я устал', 'Мне жарко'],
      answer: 'Я хочу спать',
      explain: 'Sonno — это сонливость.'
    }
  ]
};
