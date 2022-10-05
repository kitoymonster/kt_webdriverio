

import Page from './page';

/**
 * this area is for page elements
 */
const USERNAME_FIELD = '#username'
const PASSWORD_FIELD = '#password'
const SUBMIT_BUTTON = 'button[type="submit"]'
/**
 * sub page containing specific selectors and methods for a specific page
 */
export default class LoginPage extends Page {

  /**
   * define selectors using getter methods
   */
  async inputUsername (value) {
    await this.setText(USERNAME_FIELD, value)
  }

  async inputPassword (value) {
    await this.setText(PASSWORD_FIELD, value)
  }

  async clickSubmit () {
    await this.click(SUBMIT_BUTTON)
  }

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */
  async login (username, password) {
    await this.inputUsername(username)
    await this.inputPassword(password)
    await this.clickSubmit()
  }

  /**
   * overwrite specific options to adapt it to page object
   */
  open () {
    return super.open()
  }
}
