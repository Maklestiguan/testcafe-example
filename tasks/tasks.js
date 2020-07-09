// Задачи
// Используйте команду `npm run tasks` для запуска тестов из этого файла

import * as api from '../examples/ready-to-go/lib/apiModule';

// 1) Исправить ошибку при использовании `npm run tasks`, ошибка содержит всю необходимую информацию 


/* Надо добавить код для исправления по этим комментарием; обратите внимание на файл с примерами (`examples/simple/testsExamples.js`) */
fixture `Задачи`

// 2) Исправить "test(`Категория "${category}" - существует`" таким образом, чтобы ожидаемый результат был 0 записей


const arrayOfCategories = ['Domino', 'Money', 'Does not exist'];

arrayOfCategories.forEach(category => {
  test(`Категория "${category}" - существует`, async t => {
    const response = await api.searchForCategory(category);

    await t.expect(await response.length).eql(1);
  })
});


// 3) 