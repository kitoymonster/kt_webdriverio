

import Page from './page';

/**
 * this area is for page elements
 */
const SUBTITLE_TEXT = '//*[@class="hero__subtitle"]'

/**
 * sub page containing specific selectors and methods for a specific page
 */
export default class HomePage extends Page {
  async isLoaded () {
    await this.waitForDisplayed(SUBTITLE_TEXT)
  }

  async getSubtitleText() {
    return this.getText(SUBTITLE_TEXT)
  }
}
