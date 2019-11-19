const assert = require('assert');
const LoginPage = require('../pages/login.page');
const VotePage = require('../pages/vote.page');

describe('Vote Section Test Suite', () => {
  it('should increment vote', () => {
    browser.url('');

    LoginPage.emailField.setValue('1@2.com');
    LoginPage.passwordField.setValue('password');
    LoginPage.submitButton.click();

    let originalValue = Number(VotePage.voteItemVal1.getText());

    // Using the default x-men selection
    VotePage.submitButton.click();

    assert.equal(VotePage.voteItemVal1.getText(), originalValue + 1, 'Values are not the same');
    assert.equal(VotePage.thanksAlert.isDisplayed(), true, 'Alert is not displayed');
    assert.equal(VotePage.thanksAlert.getText(), 'Thanks for voting!', 'Text is not the same for alert');
  });
});
