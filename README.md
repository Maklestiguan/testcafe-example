## Пример использования [Testcafe](https://github.com/DevExpress/testcafe)
- используют page object pattern без JS классов
- написаны на Javascript es6
- написаны с использованием async/await
- запускаются параллельно
- поддерживают несколько браузеров (используются локально установленные)
- поддерживают headless режим

## Структура
1. `examples/simple/testsExamples.js` - файл с примерами и подробными объяснениями по создание тестов
2. `tasks/tasks.js` - файл с заданиями
3. `examples/ready-to-go/pages` - папка с готовыми файлами page-object model, в которых описываются элементы отдельной страницы
4. `examples/ready-to-go/data` - папка с готовым файлом-примером разделения "ролей" (использование различных данных для авторизации)
5. `examples/ready-to-go/lib` - папка с готовым вспомогательным файлом, куда вынесены функции запроса к API
6. `examples/ready-to-go/tests` - папка с готовыми файлами-тестами, где описаны сценарии

## Подготовка к запуску
1. скачать через HTTPS - `git clone https://github.com/Maklestiguan/testcafe-example.git`
2. установить зависимости - `npm i`

## Запуск
* `npm test` - синхронный запуск тестов из папки `examples/ready-to-go/tests` в Chrome

* `npm run parallel` параллельный запуск (2 окна бразуера) в Chrome

* `npm run headless parallel` параллельный запуск (2 окна 
бразуера) в headless режиме (Chrome)

* `npm run tasks` синхронный запуск тестов из папки `tasks` в Chrome

* `npm run tasks parallel` параллельный запуск (2 окна бразуера) тестов из папки `tasks` в Chrome

* `npm run` для отображения всех возможных команд для запуска

## Дополнительно

Советую рассмотреть файл `examples/simple/testsExamples.js` для получения более подробного понимания относительно работы тестов. После этого можно переходить к файлу `tasks/tasks.js` и пробовать выполнять указанные там задания. Папка `examples/ready-to-go` содержит уже готовые реализации страниц(`pages/`), вспомогательных функций(`lib/`) и тестов(`tests/`); Я постарался оставить в них комментарии для упрощения понимания.

К полезным статьям можно обращаться в любой момент, они содержат всю необходимую для понимания фреймворка информацию. В случае, когда документация не помогла понять как сделать что-либо - обращайтесь за помощью через телеграм или лично.

## Полезные статьи из [документации](https://devexpress.github.io/testcafe/documentation/getting-started/)

### 1. [Модель страницы (page-object model)](https://devexpress.github.io/testcafe/documentation/guides/concepts/page-model.html)

### 1.1 [Пример модели страницы](https://devexpress.github.io/testcafe/documentation/guides/concepts/page-model.html#page-model-example)

### 2. [Селекторы: создание и использование](https://devexpress.github.io/testcafe/documentation/guides/basic-guides/select-page-elements.html)

### 3. [Взаимодействия со страницей и ее элементами](https://devexpress.github.io/testcafe/documentation/guides/basic-guides/interact-with-the-page.html)

### 4.1 [Как работает механизм проверок?](https://devexpress.github.io/testcafe/documentation/guides/basic-guides/assert.html#assertion-structure)

### 4.2 [Виды проверок](https://devexpress.github.io/testcafe/documentation/reference/test-api/testcontroller/expect/)

---

![Test Run Gif](https://qualityshepherd.com/screencasts/testrun.gif)
