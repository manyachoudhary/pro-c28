class roof {
    constructor(x,y,width,height){
        var options={
            isStatic:true
        }
        this.x=y;
        this.y=y;
        this.width=width;
        this.height=height;
        this.body= Bodies.rectangle(x,y,width,height.options);
        world.add(world,this.body);
    }

    display(){
    this.ground=this.body.position;

   Push()    
   translate (ground.x, ground.y);
   rectMode(CENTER)
   rect(128,128,128)
   pop ()
    }
}