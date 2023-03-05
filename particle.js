const particles = [];

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  
  let p = new Particle();
  particles.push(p);
  
  for(let i = 0; i < particles.length; i++) {
    particles[i].show();
    particles[i].update();
    
    if(particles.length > 125) {
      particles.shift();
    }
  }
  
  console.log(particles.length);
}

class Particle {

  constructor() {
    this.x = 300;
    this.y = 380;
    this.vx = random(-1, 1);
    this.vy = random(-5, -1);
    this.alpha = 255;
    
    this.col = createVector(random(255), random(255), random(255));
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.alpha -= 2;
  }

  show() {
    noStroke();
    //stroke(255);
    fill(this.col.x, this.col.y, this.col.z, this.alpha);
    ellipse(this.x, this.y, 16);
  }

}
