const assert = require('assert');
const LoginPage = require('../pages/login.page');
const IntroPage = require('../pages/intro.page');

describe('Intro Test Suite', () => {
  it('should display correct title', () => {
    browser.url('');

    LoginPage.emailField.setValue('1@2.com');
    LoginPage.passwordField.setValue('password');
    LoginPage.submitButton.click();

    assert.equal(IntroPage.titleText.getText(), 'Superhero Roster', 'Text is not the same');
  });

  it('should display correct image', () => {
    browser.url('');

    LoginPage.emailField.setValue('1@2.com');
    LoginPage.passwordField.setValue('password');
    LoginPage.submitButton.click();

    assert.equal(
      IntroPage.mainImage.getAttribute('src'),
      'http://localhost:8080/images/superhero.png',
      'Src is not the same'
    );

    assert.equal(IntroPage.mainImage.getAttribute('alt'), 'Superhero Image', 'Alt is not the same');
  });
});
