class Box{
    constructor(x,y,width,height){
        var options={
            restitution: 0.8,
            friction: 1,
            density: 0.1,
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.w = width;
        this.h = height;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(2);
        stroke("blue");
        fill("red");
        rect(0,0,this.w,this.h);    
        pop(); 
    }
}