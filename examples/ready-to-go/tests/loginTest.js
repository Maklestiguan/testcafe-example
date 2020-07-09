import loginPage from '../pages/loginPage';
import homePage from '../pages/homePage';
import { validUser, loginPageUrl } from '../data/roles';

fixture `Авторизация`;

// Для демонстрации используется функция `useRole`, подробнее:
// https://devexpress.github.io/testcafe/documentation/test-api/authentication/user-roles.html
test('Успешная авторизация на QualityShepherd.com', async t => {
  await t
    .useRole(validUser)
    .expect(homePage.siteTitle.exists).ok();
});


// В данном случае мы не используем `useRole`, т.к. после входа TestCafe обновляет страницу, сохраняя полученные после входа данные,
// например токен авторизации
// Чтобы увидеть сообщение об ошибке, нам необходимо попробовать войти с невалидными данными и не обновлять страницу
test
  .page(loginPageUrl)
  ('При вводе неправильных данных для входа отображается ошибка', async t => {
  await loginPage.login("invalid", 'user'); // пробуем войти
  await t.expect(loginPage.errorMsg.visible).ok(); // ожидаем, что ошибка отображается
});
