import HomePage from "../pageobjects/home.page"
import { assert } from "chai"

describe('Verify getTile page is displayed', () => {
  let homePage

  it('Go to webdriverio.', async () => {
    homePage = new HomePage()
    await homePage.open()
  })

  it('Verify if homepage is loaded.', async () => {
    await homePage.isLoaded()
  })

  it('Verify if subtitle text is correct.', async () => {
    let expected = await homePage.getSubtitleText()
    let actual = 'Next-gen browser and mobile automation test framework for Node.js'
    assert.strictEqual(actual, expected, `Actual subtitle ${actual} did not match expected ${expected}`)
  })
})


