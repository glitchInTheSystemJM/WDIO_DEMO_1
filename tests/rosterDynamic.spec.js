const assert = require('assert');
const LoginPage = require('../pages/login.page');
const RosterPage = require('../pages/roster.page');

describe('Dynamic roster item suite', () => {
  it('should create single item', () => {
    browser.url('');

    LoginPage.login('1@2.com', 'password');

    // RosterPage.addHeroField.setValue('Spongebob');
    // RosterPage.submitButton.click();
    RosterPage.addHero('Spongebob');

    assert.equal(RosterPage.rosterItems[5].getText(), 'Spongebob', 'Hero text is not the same');
  });

  it.skip('should have defaul list of heros', () => {
    let heros = ['Wolverine', 'Iron Man', 'Deadpool', 'Thor', 'Spider-Man'];

    browser.url('');

    LoginPage.login('1@2.com', 'password');

    for (let i = 0; i < heros.length; i++) {
      assert.equal(RosterPage.rosterItems[i].getText(), heros[i], 'Hero text is not the same');
    }
  });

  it('should create multiple items', () => {
    let heros = ['Bob', 'Joe', 'Steve', 'Sally'];
    browser.url('');

    LoginPage.login('1@2.com', 'password');

    for (let i = 0; i < heros.length; i++) {
      //   RosterPage.addHeroField.setValue(heros[i]);
      //   RosterPage.submitButton.click();
      RosterPage.addHero(heros[i]);
      browser.pause(2000);
    }

    for (let i = 0; i < heros.length; i++) {
      assert.equal(RosterPage.rosterItems[i + 5].getText(), heros[i], 'Hero text is not the same');
    }
  });
});
