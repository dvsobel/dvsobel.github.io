var socket;

var xPos = 50;
var yPos = 50;
var bSize = 35;
var cSize = 15;

var hX =20;
var hY = 500;

var redColor = {r:232, g:75, b:48};
var yellowColor = {r:255, g:212, b:50};
var greenColor = {r:73, g:232, b:62};
var blueColor = {r:69, g:204, b:255};

var buttons;
var selButton = 0;


var selectedColor= {};
var pickedUp = false;
var pickedUp2 = false;


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  

buttons = new Array(12);
  buttons[0] = loadImage("images/1.png");
  buttons[1] = loadImage("images/drone.png");
  buttons[2] = loadImage("9.png");
  buttons[3] = loadImage("10.png");
  buttons[4] = loadImage("11.png");
  buttons[5] = loadImage("12.png");
  
  buttons[6] = loadImage("1.png");
  buttons[7] = loadImage("2.png");
  buttons[8] = loadImage("3.png");
  buttons[9] = loadImage("4.png");
  buttons[10] = loadImage("5.png");
  buttons[11] = loadImage("6.png");



  //shape free
  noStroke();
  fill(255);
  rect(200, 0, windowWidth,windowHeight);

  //color button
  fill(232, 75, 48);
  rect(xPos, yPos, bSize, bSize);
  fill(255, 212, 50);
  rect(xPos*2+cSize, yPos, bSize, bSize);

  fill(73, 232, 62);
  rect(xPos, yPos*2+cSize, bSize, bSize);
  fill(69, 204, 255);
  rect(xPos*2+cSize, yPos*2+cSize, bSize, bSize);


  //eraser
  fill(255);
  rect(xPos*2+cSize, yPos*7+cSize*4, bSize, bSize);



  //stroke weight
  stroke(255);
  fill(0);
  strokeWeight(1);
  rect(xPos, yPos*4+cSize*2, bSize, bSize);
  strokeWeight(3);
  rect(xPos*2+cSize, yPos*4+cSize*2, bSize, bSize);
  strokeWeight(5);
  rect(xPos, yPos*5+cSize*3, bSize, bSize);
  strokeWeight(7);
  rect(xPos*2+cSize, yPos*5+cSize*3, bSize, bSize);
  

  //do the socket thing here :) to make them talk to eachother
socket = io.connect();
  // We make a named event called 'mouse' and write an
  // anonymous callback function
  socket.on('mouse',
    // When we receive data
    function(data) {
      console.log("Got: " + data.x + " " + data.y + "color"+data.color);
      stroke(data.color.r, data.color.g, data.color.b);
      line(data.px, data.py, data.x, data.y);


    }
  );

}




function draw() {

  image(buttons[0], hX, hY);
  image(buttons[1], 20, 745);
  image(buttons[2], 20, 7);  
  image(buttons[3], 140, 140);
  image(buttons[4], 20, 260);
  image(buttons[5], 140, 260); 
  image(buttons[6], 20, 380);
  image(buttons[7], 140, 380);
  image(buttons[8], 20, 500);
  image(buttons[9], 140, 500);
  image(buttons[10], 20, 620);
  image(buttons[11], 140, 620);


// if (mouseIsPressed) {
//     if (mouseX > 20 && mouseY < 500  )  {
//       hX = mouseX;
//       hY = mouseY;
//        //  noStroke();
//        // fill(255);
//        //  rect(200, 0, windowWidth,windowHeight);

//     }









    //   if (20 < mouseX && mouseX < 120 && 450  < mouseY && mouseY < 120)  selButton = 0;
    //   else if (140 < mouseX && mouseX < 240 && 20 < mouseY && mouseY < 120) selButton = 1;
      
      
    //   else if (20 < mouseX &&  mouseX < 120 && 140 < mouseY && mouseY < 240)  selButton = 2;
    //   else if (140 < mouseX && mouseX < 240 && 140 < mouseY && mouseY < 240) selButton = 3;
      
      
    //   else if (20 < mouseX && mouseX < 120 && 260 < mouseY && mouseY < 360) selButton = 4; 
    //   else if (140 < mouseX && mouseX < 240 && 260 < mouseY && mouseY < 360) selButton = 5;
      
      
    //   else if (20 < mouseX && mouseX < 120 && 380 < mouseY && mouseY < 480) selButton = 6; 
    //   else if (140 < mouseX && mouseX < 240 && 380 < mouseY && mouseY < 480) selButton = 7;
      
    //   else if (20 < mouseX && mouseX < 120 && 500 < mouseY && mouseY < 600) selButton = 8; 
    //   else if (140 < mouseX && mouseX < 240 && 500 < mouseY && mouseY < 600) selButton = 9;
      
    //   else if (20 < mouseX && mouseX < 120 && 620 < mouseY && mouseY < 720) selButton = 10; 
    //   else if (140 < mouseX && mouseX < 240 && 620 < mouseY && mouseY < 720) selButton = 11;

      
  //   } else {
     
  //     image(buttons[selButton], mouseX - 50, mouseY - 50);
  //   }
  

  
  // noStroke();
  


 

  // noFill();
  // stroke(120);
  // if (selButton == 0) rect(20, 20, 100, 100);
  // else if (selButton == 1) rect(140, 20, 100, 100);
  // else if (selButton == 2) rect(20, 140, 100, 100);
  // else if (selButton == 3) rect(140, 140, 100, 100);
  // else if (selButton == 4) rect (20, 260, 100, 100);
  // else if (selButton == 5) rect (140, 260, 100, 100);
  // else if (selButton == 6) rect (20, 380, 100, 100);
  // else if (selButton == 7) rect(140, 380, 100, 100);
  // else if (selButton == 8) rect(20, 500, 100, 100);
  // else if (selButton == 9) rect(140, 500, 100, 100);
  // else if (selButton == 10) rect(20, 620, 100, 100);
  // else if (selButton == 11) rect(140, 620, 100, 100);



  //color

  if (mouseIsPressed) { 
    if  (5000 > pmouseX && 5000 > mouseX && pmouseX > 200 && mouseX > 200 &&
      2000 > pmouseY && 1000 > mouseY && pmouseY> 0 && mouseY> 0 == true) {

      line(pmouseX, pmouseY, mouseX, mouseY);
    }

    if ( mouseX >xPos && mouseX < xPos+bSize && mouseY > yPos && mouseY < yPos+bSize) {
      stroke(redColor.r, redColor.g, redColor.b);
      selectedColor = redColor;
    }

    if ( mouseX >xPos*2+cSize && mouseX < xPos*2+cSize+bSize && mouseY > yPos && mouseY < yPos+bSize) {
      stroke(yellowColor.r, yellowColor.g, yellowColor.b);
      selectedColor = yellowColor;
    }

    if ( mouseX >xPos && mouseX < xPos+bSize && mouseY > yPos*2+cSize && mouseY < yPos*2+cSize+bSize) {
      stroke(greenColor.r, greenColor.g, greenColor.b);
      selectedColor = greenColor;
    }

    if ( mouseX >xPos*2+cSize && mouseX < xPos*2+cSize+bSize && mouseY > yPos*2+cSize && mouseY < yPos*2+cSize+bSize) {
      stroke(blueColor.r, blueColor.g, blueColor.b);
      selectedColor = blueColor;
    }

    //stroke Weight

    if (mouseIsPressed) { 
      if  (800 > pmouseX && 800 > mouseX && pmouseX > 200 && mouseX > 200 &&
        600 > pmouseY && 600 > mouseY && pmouseY> 0 && mouseY> 0 == true) {

        line(pmouseX, pmouseY, mouseX, mouseY);
      }

      if ( mouseX >xPos && mouseX < xPos+bSize && mouseY > yPos*4+cSize*2 && mouseY < yPos*4+cSize*2+bSize) {
        strokeWeight(1);
        rect(xPos, yPos*4+cSize*2, bSize, bSize);
      }

      if ( mouseX >xPos*2+cSize && mouseX < xPos*2+cSize+bSize && mouseY > yPos*4+cSize*2 && mouseY < yPos*4+cSize*2+bSize) {
        strokeWeight(3);
        rect(xPos*2+cSize, yPos*4+cSize*2, bSize, bSize);
      }

      if ( mouseX >xPos && mouseX < xPos+bSize && mouseY > yPos*5+cSize*3 && mouseY < yPos*5+cSize*3+bSize) {
        strokeWeight(5);
        rect(xPos, yPos*5+cSize*3, bSize, bSize);
      }

      if ( mouseX >xPos*2+cSize && mouseX < xPos*2+cSize+bSize && mouseY > yPos*5+cSize*3 && mouseY < yPos*5+cSize*3+bSize) {
        strokeWeight(7);
        rect(xPos*2+cSize, yPos*5+cSize*3, bSize, bSize);
      }
    }

    //eraser
    if ( mouseX >xPos*2+cSize && mouseX < xPos*2+cSize+bSize && mouseY >yPos*7+cSize*4 && mouseY < yPos*7+cSize*4+bSize) {
      noStroke();
      fill(255);
      rect(200, 0, windowWidth, windowHeight);
    }

///to pick up the house AHHHH
    if(mouseX<200&&mouseY>500&&mouseY<700){
      pickedUp = true;

    }

    ///to pick up the DRONE AHHHH
    if(mouseX<200&&mouseY>700&&mouseY<900){
      pickedUp2 = true;

    }
  }

}



// Last possible option 

function mousePressed(){
   if (pickedUp==true)  {
      image(buttons[0], mouseX, mouseY);
      // image(buttons[1], mouseX, mouseY);
      pickedUp = false;
  return true;
    }

     if (pickedUp2==true)  {
      image(buttons[1], mouseX, mouseY);
      // image(buttons[1], mouseX, mouseY);
      pickedUp2 = false;
     return true;
    }
}



// function mouseReleased() {
//   image(buttons[0], mouseX, mouseY);
//   // prevent default
//   return false;
// }


function mouseDragged(){

console.log("sendmouse: " + mouseX + " " + mouseY);

  // Store the mouse coordinates
  var data = {
    x: mouseX,
    y: mouseY,
    px: pmouseX,
    py: pmouseY,
    color: selectedColor
  };

  // And send that object to the socket
  socket.emit('mouse',data);
}


  document.getElementById("myButton").onclick = function () {
        location.href = "../index.html";
    };