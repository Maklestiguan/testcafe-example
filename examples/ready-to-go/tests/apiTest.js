import * as api from '../lib/apiModule'; // импортируем все функции из файла, даем модулю название 'api' для обращения к его функциям

 // Обязательно везде указываем фикстуру - это как родительский набор, к нему будут относится все нижеуказанные тесты
 // Например, если у нас есть покупка и продажа, то можно одну fixture назвать `buying`, а вторую `selling`
 // При запуске тестов они будут сгруппированы по fixture и будет сразу понятно какой подсценарий вызывает ошибку
fixture `Запросы к API`;

test('Запрос должен возвращать 10 постов', async t => {
  const response = await api.getPosts();

  await t.expect(await response.length).eql(10);
});

test('Категория "Blather" - существует', async t => {
  const response = await api.searchForCategory('Blather');

  await t.expect(await response.length).eql(1);
});
