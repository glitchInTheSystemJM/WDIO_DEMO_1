const assert = require('assert');
const LoginPage = require('../pages/login.page');
const HeaderPage = require('../pages/header.page');
const IntroPage = require('../pages/intro.page');
const RosterPage = require('../pages/roster.page');

describe('Smoke Test Suite 1', () => {
  it('should verify static elements are present', () => {
    browser.url('');

    // Verify the Login
    assert.equal(LoginPage.headingText.isDisplayed(), true, 'LoginPage.headingText');
    assert.equal(LoginPage.emailLabel.isDisplayed(), true, 'LoginPage.emailLabel');
    assert.equal(LoginPage.emailField.isDisplayed(), true, 'LoginPage.emailField');
    assert.equal(LoginPage.passwordLabel.isDisplayed(), true, 'LoginPage.passwordLabel');
    assert.equal(LoginPage.passwordField.isDisplayed(), true, 'LoginPage.passwordField');
    assert.equal(LoginPage.rememberLoginCheckbox.isDisplayed(), true, 'LoginPage.rememberLoginCheckbox');
    assert.equal(LoginPage.rememberLoginLabel.isDisplayed(), true, 'LoginPage.rememberLoginLabel');
    assert.equal(LoginPage.submitButton.isDisplayed(), true, 'LoginPage.submitButton');

    // Login to app
    LoginPage.emailField.setValue('1@2.com');
    LoginPage.passwordField.setValue('password');
    LoginPage.submitButton.click();

    // Verify the Header
    assert.equal(HeaderPage.logoutLink.isDisplayed(), true, 'HeaderPage.logoutLink');
    assert.equal(HeaderPage.linkLink.isDisplayed(), true, 'HeaderPage.linkLink');
    assert.equal(HeaderPage.heroFactsLink.isDisplayed(), true, 'HeaderPage.heroFactsLink');

    // HeaderPage.heroFactsLink.click();
    // assert.equal(HeaderPage.wolverineOption.isDisplayed(), true, 'HeaderPage.wolverineOption');
    // assert.equal(HeaderPage.spidermanOption.isDisplayed(), true, 'HeaderPage.spidermanOption');
    assert.equal(HeaderPage.searchField.isDisplayed(), true, 'HeaderPage.searchField');
    assert.equal(HeaderPage.searchButton.isDisplayed(), true, 'HeaderPage.searchButton');

    // Verify Intro
    assert.equal(IntroPage.titleText.isDisplayed(), true, 'IntroPage.titleText');
    assert.equal(IntroPage.mainImage.isDisplayed(), true, 'IntroPage.mainImage');

    // Verify Roster
    assert.equal(RosterPage.instructionText.isDisplayed(), true, 'RosterPage.instructionText');
    assert.equal(RosterPage.listTitle.isDisplayed(), true, 'RosterPage.listTitle');
    assert.equal(RosterPage.wolverineItem.isDisplayed(), true, 'RosterPage.wolverineItem');
    assert.equal(RosterPage.ironManItem.isDisplayed(), true, 'RosterPage.ironManItem');
    assert.equal(RosterPage.deadpoolItem.isDisplayed(), true, 'RosterPage.deadpoolItem');
    assert.equal(RosterPage.thorItem.isDisplayed(), true, 'RosterPage.thorItem');
    assert.equal(RosterPage.spidermanItem.isDisplayed(), true, 'RosterPage.spidermanItem');
    assert.equal(RosterPage.addHeroLabel.isDisplayed(), true, 'RosterPage.addHeroLabel');
    assert.equal(RosterPage.addHeroField.isDisplayed(), true, 'RosterPage.addHeroField');
    assert.equal(RosterPage.submitButton.isDisplayed(), true, 'RosterPage.submitButton');
  });
});
