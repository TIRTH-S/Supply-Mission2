class box {
    constructor(x,y,width,height){
        var options={
            isStatic:true
            //friction:1,
        }
        this.body=Bodies.rectangle(x,y,width,height);
        this.width=width;
        this.height=height;
        World.add(world,this.body);
    }
  display(){
       var  pos=this.body.position;
        push();
        rectMode(CENTER);
        translate(pos.x,pos.y);
        fill("red");
        rect(0,25,this.width,this.height);
            pop();
}
}