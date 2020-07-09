import fetch from 'node-fetch';

const baseUrl = 'https://qualityshepherd.com';


/**
 * Делает запрос к API
 * @param  {string} url - путь до эндпоинта API
 * @return {obj} - ответ сервера
 */
async function get(url) {
  return await fetch(`${baseUrl}${url}`, { method: 'GET'})
    .then(res => res.json())
    .catch(error => console.error(error));
}

/**
 * получить последние 10 постов на сайте (default)
 * @return {obj} json
 */
export function getPosts() {
  return get(`/wp-json/wp/v2/posts`);
}

/**
 * Ищет категории по указанной строчке
 * @param  {string} searchTearm - строка для поиска категорий
 * @return {obj} json
 */
export function searchForCategory(searchTearm) {
  return get(`/wp-json/wp/v2/categories?search=${searchTearm}`);
}
