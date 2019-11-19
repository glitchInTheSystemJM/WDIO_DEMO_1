const assert = require('assert');
const LoginPage = require('../pages/login.page');
const RosterPage = require('../pages/roster.page');

describe('Roster Test Suite', () => {
  it('should have default values', () => {
    browser.url('');

    LoginPage.emailField.setValue('1@2.com');
    LoginPage.passwordField.setValue('password');
    LoginPage.submitButton.click();

    var instructions =
      'Imagine that you are tasked with building a team of Superheros to save the world. We have given you a few heroes to start with. Add as many heroes as you would like to round out your dream team.';

    var title = 'Build Your Superhero Roster:';

    assert.equal(RosterPage.instructionText.getText(), instructions, 'Instruction text is not the same');

    assert.equal(RosterPage.listTitle.getText(), title, 'Title is not the same');

    assert.equal(RosterPage.wolverineItem.getText(), 'Wolverine', 'Wolverine text not the same');
    assert.equal(RosterPage.ironManItem.getText(), 'Iron Man', 'Iron Man text not the same');
    assert.equal(RosterPage.deadpoolItem.getText(), 'Deadpool', 'Deadpool text not the same');
    assert.equal(RosterPage.thorItem.getText(), 'Thor', 'Thor text not the same');
    assert.equal(RosterPage.spidermanItem.getText(), 'Spider-Man', 'Spider-Man text not the same');

    assert.equal(RosterPage.addHeroLabel.getText(), 'ADD A SUPERHERO', 'Add hero label text is not the same');
    assert.equal(RosterPage.addHeroField.getAttribute('placeholder'), 'Enter Hero', 'Placeholder is not the same');
  });

  it('should test something else', () => {
    browser.url('');

    LoginPage.emailField.setValue('1@2.com');
    LoginPage.passwordField.setValue('password');
    LoginPage.submitButton.click();

    var newItem = 'Bob';

    RosterPage.addHeroField.setValue(newItem);
    RosterPage.submitButton.click();

    assert.equal(RosterPage.newItem.getText(), newItem, 'New item text is not the same');
  });
});
