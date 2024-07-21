let Engine = Matter.Engine,
  World = Matter.World,
  Bodies = Matter.Bodies;

let engine;
let world;
let circles = [];
let boundaries = [];

let ground;


function setup() {
      
  createCanvas(windowWidth, windowHeight)
  engine = Engine.create();
  world = engine.world;
//図形を四角形の箱にしたい 済〇
  boundaries.push(new Boundary(200, 160, 320, 5, 0));
  boundaries.push(new Boundary(353, 320, 320, 12, 1.58));
  boundaries.push(new Boundary(44.5 , 320, 320, 12, 1.58));
  boundaries.push(new Boundary(197, 475, 320, 20, 0));

const DIA = 100;
let x = 50;
let cnt = 1; // 10 回数えるための変数
//10~15回繰り返したい
  for (let cnt = 1; cnt <= random(30, 100); cnt += 1) {
  circles.push(new Circle(200, 240, random(5, 10)));
  circle(x, height / 2, DIA);
  x += 100;
}
}

function draw() {
  background(180);
  Engine.update(engine);
  for (let i = 0; i < circles.length; i++) {
    circles[i].show();
  }
  for (let i = 0; i < boundaries.length; i++) {
    boundaries[i].show();
  }
}

function Boundary(x, y, w, h, a) {
  let options = {
    friction: 0,
    restitution: 0.95,
    angle: a,
    isStatic: true,
  };
  this.body = Bodies.rectangle(x, y, w, h, options);
  this.w = w;
  this.h = h;
  World.add(world, this.body);
  console.log(this.body);

  this.show = function () {
    let pos = this.body.position;
    let angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(1);
    noStroke();
    fill(0, 100, 200);
    rect(0, 0, this.w, this.h);
    pop();
  };
}

function Circle(x, y, r) {
  let options = {
    friction: 0,
    restitution: 0.95,
  };
  this.body = Bodies.circle(x, y, r, options);
  this.r = r;
  World.add(world, this.body);

  this.show = function () {
    let pos = this.body.position;
    let angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(1);
    stroke(255);
    fill(0, 0, 80);
    ellipse(0, 0, this.r * 2);
    pop();
  };
}
/*
function draw(): void {
  // draw() に以下を追加
  if (pDeviceOrientation !== undefined && pDeviceOrientation !== deviceOrientation) {
    // 向きが変わったとき
    noCanvas();
    createCanvas(window.innerWidth, windowHeight);
  }
  pDeviceOrientation = deviceOrientation;
}*/

