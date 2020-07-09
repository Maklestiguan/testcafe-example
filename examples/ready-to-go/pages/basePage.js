import { t } from "testcafe";
import minimist from "minimist";

// Получаем Url страницы из переменных процесса или используем стандартное значение ("https://qualityshepherd.com/")
const args = minimist(process.argv.slice(2));
const env = args.env || "https://qualityshepherd.com/";

// делаем так, чтобы указанная при запуске ссылка точно была корректной (заканчивалась на слэш)
const baseUrl = env.endsWith('/') ? env : `${env}/`;

// Определяем объект "базовая страница" со стартовым url и функцией навигации
const basePage = {
  baseUrl,
  /**
   * @summary обертка для метода navigateTo с ее помощью мы сможем переходить по страницам с помощью "объектСтраницы.goto()"
   * @param  {String} relativeUrl - относительный Url, если не указан - пустая строка
   */
  async goto(relativeUrl = '') {
    await t.navigateTo(`${this.baseUrl}${this.url}${relativeUrl}`);
  }
}

// экспортируем объект для дальнейшего использования в других файлах
export default basePage
