var defaultSprite = {
  type: "sprite",

  spriteWidth: 32,
  spriteHeight: 64,
  spriteIndex: 0,
  frameTime: 100,
  // direction: 1,

  initialize: function(element, options) {
    options || (options = {});

    options.width = this.spriteWidth;
    options.height = this.spriteHeight;

    this.callSuper("initialize", element, options);

    this.createTmpCanvas();
    this.createSpriteImages();
  },

  createTmpCanvas: function() {
    this.tmpCanvasEl = fabric.util.createCanvasElement();
    this.tmpCanvasEl.width = this.spriteWidth || this.width;
    this.tmpCanvasEl.height = this.spriteHeight || this.height;
  },

  createSpriteImages: function() {
    this.spriteImages = [];
    direction = this.direction;

    var steps = this._element.width / this.spriteWidth;
    for (var i = 0; i < steps; i++) {
      this.createSpriteImage(i, direction);
    }
  },

  createSpriteImage: function(i, direction) {
    var tmpCtx = this.tmpCanvasEl.getContext("2d");
    tmpCtx.clearRect(0, 0, this.tmpCanvasEl.width, this.tmpCanvasEl.height);
    tmpCtx.drawImage(
      this._element,
      -i * this.spriteWidth,
      -direction * this.spriteHeight
    );

    var dataURL = this.tmpCanvasEl.toDataURL("image/png");
    var tmpImg = fabric.util.createImage();

    tmpImg.src = dataURL;

    this.spriteImages.push(tmpImg);
  },

  _render: function(ctx) {
    ctx.drawImage(
      this.spriteImages[this.spriteIndex],
      -this.width / 2,
      -this.height / 2
    );
  },

  play: function() {
    var _this = this;
    this.animInterval = setInterval(function() {
      _this.onPlay && _this.onPlay();
      _this.dirty = true;
      _this.spriteIndex++;
      if (_this.spriteIndex === _this.spriteImages.length) {
        _this.spriteIndex = 0;
      }
    }, this.frameTime);
  },

  stop: function() {
    clearInterval(this.animInterval);
  }
};
