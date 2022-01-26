class Game{

    constructor(){
    this.cannonAngle = 0;
    this.cannonPower = 10;
    this.shots = [];
}
play(){
    //called once per frame (acts like draw)
    imageMode(CORNER);
    image(backImage,0,0);

    imageMode(CENTER);

    // process and draw every cannonball
    for(let i = 0; i< this.shots.length; i++){
        let b = this.shots[i];
        b.move();
        b.display();
        b.checkGroundCollision();
        if(b.getAlive() === false){
            if(b.getCollisionType()===1){
                // ground collision case
                // create spawn a bunch of smoke particles
                this.shots.splice(i,1);
                i--;
                for(let i = 1 ; i < 8; i++){
                    imageMode(CENTER);
                    push();
                    image(smokeImage[i],250,250);
                    pop();
                }
            }
        }
    }
    // process and draw every smoke particle 

    // process and draw every explostion that is active 

    // process and draw every smoke particle 
    print(this.cannonPower);
    // draw the cannon
    this.displayCannon();
    this.displayPower();

}
createShot(){
    print('1');
    let v = createVector(this.cannonPower * cos(radians(this.cannonAngle)),
    this.cannonPower * sin(radians(this.cannonAngle)*-1));
    this.shots.push(new Ball(v));
}
displayCannon(){
    imageMode(CENTER);
    push();
    translate(73,525);
    push();
    rotate(radians(360 - this.cannonAngle));
    image(barrelImage,0,0);
    pop();
    image(baseImage,0,0);
    pop();

}
displayPower(){
    rectMode(CORNER);
    fill(0);
    rect(0,50,this.cannonPower * 15 - 50,45);
}
changePower(increase){
    // IF INCREASE IS TRUE - GETTING LARGER POWER
    if(increase){
        if(this.cannonAngle < 90) this.cannonPower += 0.15;
    }
    else {
        if(this.cannonAngle > 0) this.cannonPower -= 0.15;

    }
}

changeAngle(increase){
    // IF INCREASE IS TRUE - GETTING LAGER ANGLE
    if(increase){
        if(this.cannonAngle < 90) this.cannonAngle += 2;
    }
    else {
        if(this.cannonAngle > 0) this.cannonAngle -=2;

    }
  }
}