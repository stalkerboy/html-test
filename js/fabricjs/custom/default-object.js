var defaultObject = {
  x: 0,
  y: 0,
  vx: 0,
  vy: 0,
  direction: -1,
  status: -1,
  sprite: -1,
  isDynamic: false,

  changeDirection: function(pointer) {
    var diffx = pointer.x - this.x;
    var diffy = pointer.y - this.y;
    diffx = diffx > 0 ? diffx : -diffx;
    diffy = diffy > 0 ? diffy : -diffy;
    if (diffx > diffy) {
      this.direction = pointer.x < this.x ? "left" : "right";
    } else {
      this.direction = pointer.y < this.y ? "up" : "down";
    }
    console.log(pointer, this.x, this.y, this.direction);
  }
};
