window.LESSONS = window.LESSONS || {};

window.LESSONS['a0-u1-l2'] = {
  id: 'a0-u1-l2',
  title: 'Числа 0–20 и секреты чтения',
  level: 'A0',
  xp: 25,
  theory: [
    {
      html: `
        <h2>Главный секрет итальянского чтения</h2>
        <p>В итальянском языке чтение очень простое: <b>как пишется, так и слышится</b>. Но есть две буквы-хамелеона: <b>C</b> и <b>G</b>.</p>
        <p>Запомни золотое правило:</p>
        <p>Если после <b>C</b> или <b>G</b> стоят гласные <b>E</b> или <b>I</b>, они смягчаются.</p>
        <ul>
          <li><b>C + E / I</b> читается как <b>Ч</b> (например, <i>Ciao</i> = Чао).</li>
          <li><b>G + E / I</b> читается как <b>Дж</b> (например, <i>Gelato</i> = Джелато).</li>
        </ul>
        <div class="tip">
          💡 Фишка: Чтобы заставить C и G звучать твёрдо (как К и Г) перед E и I, итальянцы добавляют немую букву <b>H</b>. <br>
          <b>Ch</b> = К (Chianti = Кианти). <br>
          <b>Gh</b> = Г (Ghetto = Гетто).
        </div>
      `
    },
    {
      html: `
        <h2>Числа от 0 до 10</h2>
        <p>Давай выучим первую десятку. Обрати внимание на ударения!</p>
        <ul>
          <li><b>0</b> — zero (дзэро)</li>
          <li><b>1</b> — uno (уно)</li>
          <li><b>2</b> — due (дуэ)</li>
          <li><b>3</b> — tre (трэ)</li>
          <li><b>4</b> — quattro (куаттро) — <i>двойная T читается с лёгкой задержкой!</i></li>
          <li><b>5</b> — cinque (чинкуэ)</li>
          <li><b>6</b> — sei (сэй)</li>
          <li><b>7</b> — sette (сэттэ)</li>
          <li><b>8</b> — otto (отто)</li>
          <li><b>9</b> — nove (новэ)</li>
          <li><b>10</b> — dieci (дьечи)</li>
        </ul>
        <div class="tip">
          💡 Нюанс: В слове <b>cinque</b> (5) буква "q" читается как "к", а "ue" на конце даёт звук "уэ". Получается "чин-ку-э".
        </div>
      `
    },
    {
      html: `
        <h2>Числа от 11 до 20</h2>
        <p>Здесь включается итальянская логика. До числа 16 все числа заканчиваются на <b>-dici</b> (что похоже на наш корень "-дцать").</p>
        <ul>
          <li><b>11</b> — undici (ундичи)</li>
          <li><b>12</b> — dodici (додичи)</li>
          <li><b>13</b> — tredici (трэдичи)</li>
          <li><b>14</b> — quattordici (куаттордичи)</li>
          <li><b>15</b> — quindici (куиндичи)</li>
          <li><b>16</b> — sedici (сэдичи)</li>
        </ul>
        <p>А вот дальше хвост <b>-dici</b> отпадает, и числа становятся короче:</p>
        <ul>
          <li><b>17</b> — diciassette (дичассэттэ)</li>
          <li><b>18</b> — diciotto (дичотто)</li>
          <li><b>19</b> — diciannove (дичанновэ)</li>
          <li><b>20</b> — venti (вэнти)</li>
        </ul>
      `
    }
  ],
  exercises: [
    {
      type: 'choice',
      question: 'Как читается "C" в слове "Ciao"?',
      options: ['Как К', 'Как Ч', 'Как С', 'Как Ц'],
      answer: 'Как Ч',
      explain: 'C перед I читается мягко, как Ч. Поэтому Ciao = Чао.'
    },
    {
      type: 'choice',
      question: 'Выбери итальянский вариант числа 8',
      options: ['otto', 'zero', 'sette', 'nove'],
      answer: 'otto',
      explain: '8 — это otto. Помни про двойную T!'
    },
    {
      type: 'fill',
      question: 'Напиши число 5 по-итальянски',
      answer: 'cinque',
      accept: ['cinque', 'Cinque'],
      explain: '5 — это cinque (чинкуэ).'
    },
    {
      type: 'choice',
      question: 'Как прочитать "G" в слове "Gelato" (мороженое)?',
      options: ['Как Г', 'Как Ж', 'Как Дж', 'Как Х'],
      answer: 'Как Дж',
      explain: 'G перед E читается как Дж. Gelato = Джелато.'
    },
    {
      type: 'build',
      question: 'Собери фразу: "Пять евро"',
      words: ['Cinque', 'euro'],
      answer: 'Cinque euro',
      explain: 'Cinque (5) + euro (евро).'
    },
    {
      type: 'choice',
      question: 'Какое число означает "dodici"?',
      options: ['10', '11', '12', '20'],
      answer: '12',
      explain: 'dodici — это 12. Корень -dici указывает на второй десяток.'
    },
    {
      type: 'fill',
      question: 'Напиши число 20 по-итальянски',
      answer: 'venti',
      accept: ['venti', 'Venti'],
      explain: '20 — это venti.'
    },
    {
      type: 'choice',
      question: 'Что означает слово "quattro"?',
      options: ['14', '4', '40', '24'],
      answer: '4',
      explain: 'quattro — это 4. (14 было бы quattordici).'
    },
    {
      type: 'choice',
      question: 'Как прочитать "Ch" в названии вина "Chianti"?',
      options: ['Как К', 'Как Ч', 'Как Ш', 'Как Х'],
      answer: 'Как К',
      explain: 'Буква H спасает букву C от смягчения! Ch = К. Chianti = Кианти.'
    }
  ]
};
