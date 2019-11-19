class IntroPage {
  get titleText() {
    return $('body > div.container-fluid > div:nth-child(1) > h1');
  }
  get mainImage() {
    return $('body > div.container-fluid > div:nth-child(2) > img');
  }
}

module.exports = new IntroPage();
