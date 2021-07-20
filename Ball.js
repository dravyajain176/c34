class Ball{
    constructor(x,y,width,height,angle){
        var options = {
           
           'density': 1,
           'frictionAir':0.005,
        

        }
        this.body = Bodies.rectangle(x,y,width,height,angle,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle; 
        push();
        translate(pos.x,pos.y)
        rotate (angle);
       //..,.,. rectMode(CENTER)
       // strokeWeight(4);
       //./ stroke("orange")
       //././ fill("225")
        ellipse(0,0,this.width, this.height);
        pop();
    }

    

}