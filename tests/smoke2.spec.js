const assert = require('assert');
const LoginPage = require('../pages/login.page');
const VotePage = require('../pages/vote.page');

describe('Smoke Test Suite 2', () => {
  it('should verify static elements are present for vote section', () => {
    browser.url('');

    // Login to app
    LoginPage.emailField.setValue('1@2.com');
    LoginPage.passwordField.setValue('password');
    LoginPage.submitButton.click();

    // Verify Vote
    assert.equal(VotePage.voteTitle.isDisplayed(), true, 'VotePage.voteTitle');
    assert.equal(VotePage.voteItem1.isDisplayed(), true, 'VotePage.voteItem1');
    assert.equal(VotePage.voteItem2.isDisplayed(), true, 'VotePage.voteItem2');
    assert.equal(VotePage.voteItem3.isDisplayed(), true, 'VotePage.voteItem3');
    assert.equal(VotePage.voteItem4.isDisplayed(), true, 'VotePage.voteItem4');
    assert.equal(VotePage.voteItem5.isDisplayed(), true, 'VotePage.voteItem5');
    assert.equal(VotePage.voteItemLabel1.isDisplayed(), true, 'VotePage.voteItemLabel1');
    assert.equal(VotePage.voteItemLabel2.isDisplayed(), true, 'VotePage.voteItemLabel2');
    assert.equal(VotePage.voteItemLabel3.isDisplayed(), true, 'VotePage.voteItemLabel3');
    assert.equal(VotePage.voteItemLabel4.isDisplayed(), true, 'VotePage.voteItemLabel4');
    assert.equal(VotePage.voteItemLabel5.isDisplayed(), true, 'VotePage.voteItemLabel5');
    assert.equal(VotePage.submitButton.isDisplayed(), true, 'VotePage.submitButton');
    assert.equal(VotePage.voteItemText1.isDisplayed(), true, 'VotePage.voteItemText1');
    assert.equal(VotePage.voteItemVal1.isDisplayed(), true, 'VotePage.voteItemVal1');
    assert.equal(VotePage.voteItemText2.isDisplayed(), true, 'VotePage.voteItemText2');
    assert.equal(VotePage.voteItemVal2.isDisplayed(), true, 'VotePage.voteItemVal2');
    assert.equal(VotePage.voteItemText3.isDisplayed(), true, 'VotePage.voteItemText3');
    assert.equal(VotePage.voteItemVal3.isDisplayed(), true, 'VotePage.voteItemVal3');
    assert.equal(VotePage.voteItemText4.isDisplayed(), true, 'VotePage.voteItemText4');
    assert.equal(VotePage.voteItemVal4.isDisplayed(), true, 'VotePage.voteItemVal4');
    assert.equal(VotePage.voteItemText5.isDisplayed(), true, 'VotePage.voteItemText5');
    assert.equal(VotePage.voteItemVal5.isDisplayed(), true, 'VotePage.voteItemVal5');
  });
});
