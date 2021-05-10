class Box {
    constructor(x, y, width, height){
      var options={
        isStatic:false,
      restitution:0.04,

      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      World.add(world,this.body);
      this.width = 30;
      this.height = 40;
      this.visiblity=255;

      
      
     
      
    }

    score(){
      if(this.visiblity<8 && this.visiblity>-105){
        score++;
      }
    }
    display(){
      
      var pos = this.body.position;

      if(this.body.speed<3){
        
         push ();
      strokeWeight(2);
      
      rectMode(CENTER);
      rect(pos.x,pos.y,30,40);
      pop ();
      
    }
    else{
      World.remove(world,this.body);
      push();
      this.visiblity=this.visiblity-5;
       tint(255,this.visiblity);
       
       pop();

    }
     

    }
  
  };