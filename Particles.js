class Particles {
  
  /*
    This class contains a list of particle classes.
    It has the ability to remove old particles to create new ones,
      which means it doesn't keep eating memory.
  */
  constructor (quantity = 100) {
    this.quantity = quantity;
    this.particleArray = [];
  }
  
  // Creates particles if there is a "space" for them.
  createParticles(x = width/2, y = height/2, size = 16, xV = 0, yV = 0, g = 1) {
    if (this.particleArray.length < this.quantity) {
      this.particleArray.push(new particle(x, y, size, xV, yV, g));
    }
  }

  draw(fillColor=255, strokeColor=255) {
    for (let i = 0; i < this.particleArray.length; i++) {
      this.particleArray[i].update();
      this.particleArray[i].draw(fillColor, strokeColor);
    }
  }
  
  // Removes particles once they reach the maximum quantity.
  removeExcess() {
    if (this.particleArray.length == this.quantity) {
      this.particleArray.splice(0, 1);
    }
  }
}
