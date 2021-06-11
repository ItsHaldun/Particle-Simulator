function setup() {
  createCanvas(720, 480);
  particleLimit = 100;
  
  // Initialize the particle simulator.
  particleSim = new Particles(particleLimit);
  
}

function draw() {
  background(0);
  
  /*
  Creates a simulation that:
  - Follows users mouse (mouseX, mouseY),
  - Has particle size of 32,
  - Has a random horizontal velocity between -5 to 5 pixels,
  - Has a random vertical velocity between 4 to 9 pixels. 
  */
  particleSim.createParticles(mouseX, mouseY, 32, random(-5,5), random(4,9));
  
  particleSim.draw();
  
  particleSim.removeExcess();
  
}
