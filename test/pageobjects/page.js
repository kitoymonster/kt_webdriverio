/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */
export default class Page {
  /**
   * Opens a sub page of the page
   * @param path path of the sub page (e.g. /path/to/page.html)
   */
  async open () {
    return browser.url('https://webdriver.io')
  }

  async setText (locator, value) {
    await (await $(locator)).setValue(value)
  }

  async click (locator) {
    await (await $(locator)).click()
  }

  async waitForDisplayed (locator) {
    await (await $(locator)).waitForDisplayed({ timeout: 6000 })
  }

  async getText (locator) {
    return (await $(locator)).getText()
  }
}
