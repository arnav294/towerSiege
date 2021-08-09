class Box3 {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false,
          density:3.0,
          friction:3.8,
          restitution:0.01
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("cement");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };
  