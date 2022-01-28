let balls = [];

class Ball{
    constructor(v_){
        this.radius = 50
        this.pos = createVector(73,525);
        this.velocity = v_;
        this.gravity = createVector(0,0.2);
        this.alive = true;
        this.collisionType = 0; // 1 - GROUND     2- TARGET 
                                //0 - NO COLLISION


    }

    move(){
        this.pos.add(this.velocity);
        this.velocity.add(this.gravity);
    }
    display(){
        push();
        translate(this.pos.x,this.pos.y);
        image(cannonballImage,0,0);
        pop();
    }


    getAlive(){
        return this.alive;
    }
    getCollisionType(){
        return  this.collisionType;
    }

    checkGroundCollision(){
        if(this.pos.y > 546){
            this.alive = false;
            this.collisionType = 1;
        }
    }

}