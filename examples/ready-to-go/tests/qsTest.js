import homePage from '../pages/homePage';
import githubPage from '../pages/githubPage';

fixture `Общий функционал блога Quality Shepherd`
  // Перед запуском каждого теста переходим на главную страницу блога
  .beforeEach(async t => {
    await homePage.goto();
});

test('количество постов на странице должно быть равно 5', async t => {
  await t.expect(homePage.posts.count).eql(5);
});

test('Для поиска по категории "testcafe" должен вернуться хотя бы 1 результат', async t =>  {
  await homePage.search.forText('testcafe')

  await t
    .expect(homePage.search.resultsPage.exists).ok()
    .expect(homePage.posts.count).gt(0);// хотя бы 1 = больше 0
});

test('Для несуществующей категории не должно возвращаться ни одного результата', async t =>  {
  await homePage.search.forText('sfdslkjsfkjslkdf');

  // дополнительно проверяем, что элемент виден пользователю, а не просто существует в DOM
  await t.expect(homePage.search.noResultsMsg.with({ visibilityCheck: true })).ok();
});

// switching windows is coming... testcafe currently opens new windows in _self
// https://github.com/DevExpress/testcafe/issues/912
test('При нажатии на иконку GitHub должен открываться профиль на сайте', async t =>  {
  await t
    .click(homePage.githubLink)
    .expect(githubPage.username.visible).ok();
});

test('У элемента "sidebar" должна быть статичная ширина в 280 пикселей', async t =>  {
  await t.expect(homePage.sidebar.clientWidth).eql(280);
});

test('Старая статья с заголовком "Protractor: How To Page Object" должна найтись на одной из страниц блога', async t =>  {
  const postTitle = 'Protractor: How To Page Object';
  await homePage.findPostByPaging(postTitle);

  await t.expect(await homePage.postTitleExists(postTitle)).ok();
});
