// ジャイロセンサーが使用可能だったら
if(window.DeviceOrientationEvent){
  // ユーザーにアクセスの許可を求める関数があったら（iOS13以降の対応）
  if(DeviceOrientationEvent.requestPermission){
    $(".btn").on("click", function(){
      // ジャイロセンサーへのアクセス許可を申請する
      DeviceOrientationEvent.requestPermission().then(function(response){
        // リクエストが許可されたら
        if(response === "granted"){
        　// 回転や傾きの変化を検知する「deviceorientation」を使い、「gyro()」を実行
        　$(window).on("deviceorientation", gyro);
        }
      });
    });
    // アクセスの許可を求める関数がなかったら
  }else{
    // 回転や傾きの変化を検知する「deviceorientation」を使い、「gyro()」を実行
    $(window).on("deviceorientation", gyro);
  }
}
// 値の処理
function gyro(){
  // それぞれの値の小数点以下を切り捨てて格納
  var beta = Math.floor(event.beta);
  var gamma = Math.floor(event.gamma);
  var alpha = Math.floor(event.alpha);
  // 値を表示
  // X軸（-90~270までの値）
  $(".beta span").text(beta);
  // Y軸（-90~90までの値）
  $(".gamma span").text(gamma);
  // Z軸（0~360までの値）
  $(".alpha span").text(alpha);
  // 傾きアニメーション
  $(".img > span").css({transform: 'perspective(1200px) rotateX(' + beta + 'deg) rotateY(' + gamma + 'deg) rotateZ(' + alpha + 'deg)'});
  // スマホの向き
  if(beta < 10) {
    $(".roll span").text("横");
  }else{
    $(".roll span").text("縦");
  }
}

/*let Engine = Matter.Engine,
  World = Matter.World,
  Bodies = Matter.Bodies;

let engine;
let world;
let circles = [];
let boundaries = [];

let ground;




//傾き
//傾き


function setup() {
      request_permission();
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


function draw(): void {
  // draw() に以下を追加
  if (pDeviceOrientation !== undefined && pDeviceOrientation !== deviceOrientation) {
    // 向きが変わったとき
    noCanvas();
    createCanvas(window.innerWidth, windowHeight);
  }
  pDeviceOrientation = deviceOrientation;
}*/

