import { t } from "testcafe";
import minimist from "minimist";

// get env from cli or use default
const args = minimist(process.argv.slice(2));
const env = args.env || "https://qualityshepherd.com/";
const baseUrl = env.endsWith('/') ? env : `${env}/`; // делаем так, чтобы ссылка всегда заканчивалась на слэш

const basePage = {
  baseUrl,

  /**
   * обертка для метода navigateTo с ее помощью мы сможем добавлять относительные пути, без указания базового URL
   * @param  {string} relativeUrl
   */
  async goto(relativeUrl = '') {
    await t.navigateTo(`${this.baseUrl}${this.url}${relativeUrl}`);
  }
}
export default basePage