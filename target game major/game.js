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

    // process and draw every cannonball

    // process and draw every smoke particle 

    // draw the cannon
    this.displayCannon();

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
changeAngle(increase){
    if(increase){
        if(this.cannonAngle < 90) this.cannonAngle += 2;
    }
    else {
        if(this.cannonAngle > 0) this.cannonAngle -=2;

    }
}



}