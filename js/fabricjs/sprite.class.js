var Asset = {
  character: null,
  characterDirSP: [],
  defaultSPOption: {},
  createSprite: function(img, spriteOption) {
    var createFun = !!spriteOption
      ? fabric.util.createClass(fabric.Image, spriteOption)
      : fabric.util.createClass(fabric.Image, this.defaultSPOption);
    return new createFun(img);
  },

  loadSP: function(img) {
    var direcionArray = { up: 0, down: 1, right: 2, left: 3 };
    console.log(this.createSprite);
    for (var key in direcionArray) {
      var tmpFabricObject = this.createSprite(img, {
        direction: direcionArray[key],
        ...this.defaultSPOption
      });
      console.log(tmpFabricObject.spriteImages);
      this.characterDirSP[key] = tmpFabricObject.spriteImages;
    }
    this.character = this.createSprite(img, {
      direction: direcionArray["down"],
      ...this.defaultSPOption
    });
    console.log(this.character);
  },
  load: function() {
    fabric.util.loadImage("img/child.png", this.loadSP);
  }
};
