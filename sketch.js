

function preload() {
  // put preload code here


}

var img;
var img1;

var xpos = 190;
var ypos = 70;

var rad = 45;

var xspeed = 2.8;
var yspeed = 2.2;

var xdirection = 5;
var ydirection = -10;

var palline = [];

function setup() {
  angleMode(DEGREES);
  createCanvas(windowWidth, windowHeight);

  var pallineNumber = random(1,100);
  for (var i = 0; i < pallineNumber; i++) {
    var myPalline = new Palline(600,350, 10);
    myPalline.diameter = 10;
    myPalline.speed = random(1, 3);
    // myPalline.color = color(random(255), random(255), random(255));
    palline.push(myPalline);
  }

  img = loadImage("wine.png");

  img1 = loadImage("tappo.png");



}

function draw() {
  // put drawing code here
  background(183, 28, 28);


  for (var j = 0; j < palline.length; j++) {

    palline[j].saw();
    // balls[j].color = color(random(255), random(255), random(255));
    // // balls[j].diameter += 1;
    if (mouseIsPressed) {
      palline[j].move();

    }

  }

  image(img, -50, height/3);


  image(img1, xpos , ypos );
  if (mouseIsPressed) {
    Boom();

  }

}

function Boom(){
  xpos = xpos + xspeed * xdirection;
  ypos = ypos + yspeed * ydirection;

  if (xpos > width  || xpos < 0) {
  xdirection *= -1;
}
if (ypos > height  || ypos < 0) {
  ydirection *= -1;
}
}

function Palline(_x, _y, _diameter) {
  this.x = _x;
  this.y = _y;
  this.diameter = _diameter;
  noStroke();
  this.color = 'yellow';
  // this.speed = 12;

  var xDir = random(-1,1);
  var yDir = random(-1,1);


  this.saw = function() {
    fill(this.color);
    ellipse(this.x, this.y, this.diameter);
  }

  this.move = function() {
    this.x += this.speed * xDir;
    this.y += this.speed * yDir;


    if (this.x > width || this.x < 0) {
      xDir = xDir * -1;
    }
    if (this.y > height || this.y < 0) {
      yDir = yDir * -1;
    }
  }
}
