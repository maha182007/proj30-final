class box{
    constructor(x,y,width,height) {
var options = {
    restitution: 0.8,
    friction: 1.0,
    

}
    
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
    this.visiblity = 255;
}
display(){

if(this.body.speed<3)  { 
var pos = this.body.position;
var angle = this.body.angle;
push();
translate(pos.x,pos.y);
rotate(angle);
rectMode(CENTER);
stroke("pink");
strokeWeight(3);
fill("black");
rect(0,0,this.width,this.height);
pop();
}

else{
    World.remove(world,this.body);
    push()
    this.visiblity = this.visiblity - 5
    tint(255,this.visiblity)
    rect(999,999,this.width,this.height)
    pop()

}
}
}