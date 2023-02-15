let ac;
let aa = 0;

function preload() {
  ac = loadModel('3.obj', true);
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  background(220,29,12);
  rotateY(aa);
  aa+= 0.01;
  scale(1);
  model(ac);
}