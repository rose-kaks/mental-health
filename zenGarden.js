let points = 0;

// Function to simulate task completion and garden growth
function completeTask() {
  points += 10;
  document.getElementById('points').textContent = points;

  // Unlock elements based on points
  if (points >= 10) {
    unlockStone();
  }
  if (points >= 20) {
    unlockFlower();
  }
}

// Function to unlock a new stone
function unlockStone() {
  let newStone = document.createElement('a-box');
  newStone.setAttribute('position', '2 0.5 -3');
  newStone.setAttribute('depth', '0.5');
  newStone.setAttribute('height', '0.5');
  newStone.setAttribute('width', '0.5');
  newStone.setAttribute('color', '#666');
  document.querySelector('a-scene').appendChild(newStone);
}

// Function to unlock a flower
function unlockFlower() {
  document.getElementById('zen-flower').setAttribute('visible', 'true');
}

let isRaking = false;

// Add mouse event listeners to the sand plane
document.getElementById('sand').addEventListener('mousedown', startRaking);
document.getElementById('sand').addEventListener('mouseup', stopRaking);

// Start raking (user is interacting with the sand)
function startRaking(event) {
  isRaking = true;
  document.addEventListener('mousemove', rakeSand);
}

// Stop raking
function stopRaking(event) {
  isRaking = false;
  document.removeEventListener('mousemove', rakeSand);
}

// Function to draw on the sand
function rakeSand(event) {
  if (!isRaking) return;

  let x = (event.clientX / window.innerWidth) * 10 - 5;
  let z = (event.clientY / window.innerHeight) * -10 + 5;

  let rakeLine = document.createElement('a-cylinder');
  rakeLine.setAttribute('position', `${x} 0.05 ${z}`);
  rakeLine.setAttribute('radius', '0.02');
  rakeLine.setAttribute('height', '0.01');
  rakeLine.setAttribute('color', '#000');
  document.querySelector('a-scene').appendChild(rakeLine);
}
