class Rope{
  constructor(body1,body2,offsetx,offsety){
      this.offsetx=offsetx
      this.offsety=this.offsety
      var options={
          bodyA:body1,
          bodyB:body2
         
      }
      this.rope=Constrain.create(options)
      World.add(world,this.rope)
  }  
  display(){
      var pointA=this.rope.bodyA.position;
      var pointB=this.rope.bodyB.position;
      
      strokeWeight(2);

      var anchor1X=pointA.x
      var anchor1Y=pointB.x

      var anchor2x=pointB.x=this.offsetX
      var anchor2Y=pointB.x=this.offsetY

      Line (anchor1X,anchor1Y,anchor2x,anchor2Y);
  }
}