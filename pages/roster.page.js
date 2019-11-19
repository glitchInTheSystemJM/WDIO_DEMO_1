class RosterPage {
  get instructionText() {
    return $('body > div.container-fluid > div:nth-child(3) > div > p');
  }

  get listTitle() {
    return $('body > div.container-fluid > div:nth-child(4) > h3');
  }

  // Creating each element individually
  get wolverineItem() {
    return $('#hero-list > li:nth-child(1)');
  }
  get ironManItem() {
    return $('#hero-list > li:nth-child(2)');
  }
  get deadpoolItem() {
    return $('#hero-list > li:nth-child(3)');
  }
  get thorItem() {
    return $('#hero-list > li:nth-child(4)');
  }
  get spidermanItem() {
    return $('#hero-list > li:nth-child(5)');
  }

  get newItem() {
    return $('#hero-list > li:nth-child(6)');
  }

  get addHeroLabel() {
    return $('#addHero-form > div > label');
  }
  get addHeroField() {
    return $('#heroInput');
  }
  get submitButton() {
    return $('#addHero-form > button');
  }
}

module.exports = new RosterPage();
