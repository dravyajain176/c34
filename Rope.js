class Rope{
    constructor(bodyA,pointB){
        var options = {
           'bodyA' : bodyA,
           'pointB' :pointB,
           'stiffness':1.20,
           'length':249,
           

        }

        this.pointB = pointB
        this.rope = Constraint.create(options);



        World.add(world,this.rope);
    }

    attach(){

        this.rope.bodyA = body;
    }

    fly(){

        this.rope.bodyA = null;
        
    }

    display(){
       if(this.rope.bodyA){

        var pointA = this.rope.bodyA.position;
        var pointB = this.pointB;


        push();
        
       // translate(pos.x,pos.y)
        //rotate (angle);
       // rectMode(CENTER)
        strokeWeight(3);
        stroke(48,22,8);
      //  fill("225")
        line(pointB.x,pointB.y,pointA.x,pointA.y);
        pop();

       }
      
    }

    

}