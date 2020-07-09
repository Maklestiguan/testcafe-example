// Мы импортируем конструктор селектора как '$', чтобы упростить чтение кода
import { Selector as $ } from 'testcafe';
import basePage from './basePage';

const githubPage = {
    url:      'https://github.com/qualityshepherd/',
    username: $('.vcard-names')
}
export default {...basePage, ...githubPage}
