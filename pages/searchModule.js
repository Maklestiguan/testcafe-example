// Мы импортируем конструктор селектора как '$', чтобы упростить чтение кода
import { Selector as $, t } from 'testcafe';

/**
 * Поиск используется на нескольких страницах сайта,
 * поэтому лучше всего сделать его модулем для многоразового использования
 */
const searchModule = {
    box:          $('input#s'),
    searchBtn:    $('#searchbtn'),
    resultsPage:  $('body.search'),
    noResultsMsg: $('h2').withText('No posts found. Please try a different search.'),

  /**
   * Вводит текст в поисковую строку и нажимает кнопку поиска блог постов
   * @param  {string}
   */
  async forText(text) {
    await t
      .typeText(this.box, text)
      .click(this.searchBtn);
  }
}
export default searchModule