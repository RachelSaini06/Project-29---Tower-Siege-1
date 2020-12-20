class Block6{
  constructor(x, y, width, height, angle) {
      var options = {
          'restitution':0.3,
          'friction':0.1,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      //this.x = x;
      //this.y = y;
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }

    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rectMode(CENTER);
      rotate(angle);
      fill("#175ec4");
      rect(0, 0, this.width, this.height);
      pop();
    }
}