const { expect } = require('@playwright/test');

exports.loginPage = class loginPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.email = page.getByRole('input',{id:'login_email'});
    this.loginb = page.getAttribute('src','/new-design/assets/icons/loginIcon.svg')
    this.password = page.getByRole('input',{id:'login_password'});
    this.loginButton = page.getByRole('input',{id:'login_email'});
  }

  async goto() {
    await this.page.goto('https://playwright.dev');
  }

  async getStarted() {
    await this.loginb.click();
    await expect(this.gettingStartedHeader).toBeVisible();
  }

  async pageObjectModel() {
    await this.getStarted();
    await this.pomLink.click();
  }
};