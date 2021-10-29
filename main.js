var fabricCanvas=new fabric.Canvas("myCanvas");
var blockW= 99;
var blockH= 99;
var alexX= 500;
var alexY= 400;
var alex="";


function updateAlex(){
    fabric.Image.fromURL("Alex_SSBL.png", function(Img){
      alex=Img;
      alex.scaleToWidth(150);
      alex.scaleToHeight(350);
      alex.set({
          top:alexY, left:alexX

      });
      fabricCanvas.add(alex);
    });
    
}

function updateBlock(getBlock){
    fabric.Image.fromURL(getBlock, function(Img){
         chosenblock =Img;
        chosenblock.scaleToHeight(blockH);
        chosenblock.scaleToWidth(blockW);
        chosenblock.set({
            top:alexY, left:alexX
        });
        fabricCanvas.add(chosenblock);
    });

}
window.addEventListener("keydown", keyDownF);

function keyDownF(e){
pressKeyCode=e.keyCode;
console.log(pressKeyCode);


if  (pressKeyCode=="38") {
    up();
    console.log("up");

}

if  (pressKeyCode=="40") {
    down();
    console.log("down");

}

if  (pressKeyCode=="39") {
    right();
    console.log("right");

}

if  (pressKeyCode=="37") {
    left();
    console.log("left");

}

if  (pressKeyCode=="81") {
    updateBlock("cloud.jpg")
    console.log("Q pressed");

}

if  (pressKeyCode=="87") {
    updateBlock("dark_green.png")
    console.log("W pressed");

}

if  (pressKeyCode=="65") {
    updateBlock("ground.png")
    console.log("A pressed");

}

if  (pressKeyCode=="83") {
    updateBlock("light_green.png")
    console.log("S pressed");

}

if  (pressKeyCode=="68") {
    updateBlock("roof.jpg")
    console.log("D pressed");

}

if  (pressKeyCode=="90") {
    updateBlock("trunk.jpg")
    console.log("Z pressed");

}

if  (pressKeyCode=="88") {
    updateBlock("unique.png")
    console.log("X pressed");

}

if  (pressKeyCode=="67") {
    updateBlock("wall.jpg")
    console.log("C pressed");

}

if  (pressKeyCode=="86") {
    updateBlock("yellow_wall.png")
    console.log("V pressed");

}


}

function up(){
    if (alexY > 0){
        alexY=alexY-10;
        console.log("up arrow pressed, Y: " + alexY);
        fabricCanvas.remove(alex);
        updateAlex();
    }
}

function left(){
    if (alexX > 0){
        alexX=alexX-10;
        console.log("left arrow pressed, x: " + alexX);
        fabricCanvas.remove(alex);
        updateAlex();
    }
}


function down(){
    if (alexY < 799){
        alexY=alexY+10;
        console.log("down arrow pressed, Y: " + alexY);
        fabricCanvas.remove(alex);
        updateAlex();
    }
}

function right(){
    if (alexX < 1000){
        alexX=alexX+10;
        console.log("right arrow pressed, x: " + alexX);
        fabricCanvas.remove(alex);
        updateAlex();
    }
}




