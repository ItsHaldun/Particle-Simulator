class particle {
  // A single particle.
  constructor(x=width/2, y=height/2, size=16, xV=0, yV=0, g=0) {
    this.x = x;
    this.y = y;
    this.size = size;
    
    // Sideways (xV) and upwards  (yV) velocity
    this.xV = xV;
    this.yV = yV;
    
    // These are the gravitational constants of sorts
    this.g = g;
    this.acc = g;
  }

  update() {
    // xVelocity is unchanged
    this.x = this.x + this.xV;
    
    // yVelocity goes from negative to positive faster and faster
    this.y = this.y - this.yV + this.acc;
    this.acc = this.acc + this.g;
  }
  
  draw(cFill = 255, cStroke = 255) {
    fill(cFill);
    stroke(cStroke);
    circle(this.x, this.y, this.size);
  }
}
