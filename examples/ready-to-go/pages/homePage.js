// Мы импортируем конструктор селектора как '$', чтобы упростить чтение кода
import { Selector as $, t } from 'testcafe';
import basePage from './basePage';
import search from './searchModule';

const homePage = {
  // указываемый стартовый Url для этой страницы (относительно базового Url из basePage)
  url:               '',
  // добавляем элементы страницы
  search,
  posts:          $('div.post'),
  postTitleLinks: $('h2 a'),
  siteTitle:      $('h1 a'),
  sidebar:        $('div#sidebar'),
  githubLink:     $('a#githubLink'),
  prevPageLink:   $('a').withText('← Older Entries'),

  /**
   * Проверка существует ли титул у поста
   * @param  {string} postTitle - ожидаемый текст заголовка
   * @return {bool}
   */
  async postTitleExists(postTitle) {
    return await $('a').withText(postTitle).exists;
  },

  /**
   * Переходим на предыдущую страницу, пока не найдем пост с нужным заголовком или пока не закончатся страницы с постами
   * @param  {string} postTitle
   * @return {bool}
   */
  async findPostByPaging(postTitle) {
    await t.click(this.prevPageLink);
    await this.postTitleExists(postTitle) ? true : await this.findPostByPaging(postTitle);
  }
}
export default {...basePage, ...homePage}
