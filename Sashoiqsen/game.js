// Creating variables
var death=false
class Rect{
    constructor(x_, y_, sizex_, sizey_){
        this.x = x_;
        this.y = y_;
        this.sizex = sizex_;
        this.sizey = sizey_;
    }

    draw(){
        context.fillStyle = "Pink";
        context.fillRect(this.x, this.y, this.sizex, this.sizey);
    }
    
    move() {
        this.x -= 2;
    }
}

class Rect2{
    constructor(x_, y_, sizex_, sizey_){
        this.x = x_;
        this.y = y_;
        this.sizex = sizex_;
        this.sizey = sizey_;
    }

    draw(){
        context.fillStyle = "Green";
        context.fillRect(this.x, this.y, this.sizex, this.sizey);
    }
    
    move() {
        this.x -= 2;
    }
}


var rects = [];
for (let i=0; i<20; ++i){
    rects[i] = new Rect(Math.random()*5000+800, 30, 30, 30);
}
for (let i=20; i<40; ++i){
    rects[i] = new Rect2(Math.random()*5000+800, 230, 30, 30);
}

var myX = 0, myY = 220,platformX=0,platformY=0,platform2X=0,platform2Y=250,direction=0 ,lives=3
function update() {
    for(let i=0;i<40;i=i+1){
        rects[i].move()
    }
    for(let i=0;i<40;i=i+1){
       if(areColliding(myX, myY, 30, 30,rects[i].x, rects[i].y, rects[i].sizex, rects[i].sizey)){
        lives=0
           death=true
     }
        if(death==true){
        rects[i].x=1000
        rects[i].y=1000
        }
        if(death==true && isKeyPressed[82]){
            death=false
        }
    
    }
    
   if(lives==0){
       myX=10000
   }
if(direction==1){
    myY=myY-7
}
    if(areColliding(myX, myY, 30, 30,platformX, platformY, 1000, 40)){
        myY=platformY+40
    }
    if(direction==0){
    myY=myY+7
    }
if(areColliding(myX, myY, 30, 30,platform2X, platform2Y, 1000, 40)){
        myY=platform2Y-30
    }
   
}

function draw() {
    // This is how you draw a rectangle
   for (let i=0; i<40; ++i){
        rects[i].draw();
    }
    if(death==true){
        platform2X=10000
        platformX=10000
       
        context.fillStlye="green"
        context.font="1000px Comic Sans MS";
        context.fillText("Press r to try again ",100,250);
    }
    context.fillStyle="blue"
    context.fillRect(myX, myY, 30, 30);
    context.fillStyle="gray"
    context.fillRect(platformX, platformY, 1000, 40);
    context.fillRect(platform2X, platform2Y, 1000, 40);
};

function keyup(key) {
    if(key==87 && direction==0 && myY==platform2Y-30){
        direction=1
    }
    if(key==83 && direction==1 && myY==platformY+40){
        direction=0
    }
    // Show the pressed keycode in the console
    console.log("Pressed", key);
};

function mouseup() {
    // Show coordinates of mouse on click
    console.log("Mouse clicked at", mouseX, mouseY);
};
