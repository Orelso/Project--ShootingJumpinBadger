const character = document.getElementById('character');

let isJumping = false;
let jumpSpeed = 0;
let moveSpeed = 5;
let moveLeft = false;
let moveRight = false;

function jump() {
  if (!isJumping) {
    isJumping = true;
    jumpSpeed = 15;
    character.classList.add('jump');
    setTimeout(() => {
      character.classList.remove('jump');
      isJumping = false;
    }, 500);
  }
}

function applyGravity() {
  const characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'));
  if (characterTop > 300) {
    jumpSpeed = 0;
  } else {
    jumpSpeed -= 1;
  }
  character.style.top = `${characterTop - jumpSpeed}px`;
}

function applyMovement() {
  const characterLeft = parseInt(window.getComputedStyle(character).getPropertyValue('left'));
  if (moveLeft && characterLeft > 0) {
    character.style.left = `${characterLeft - moveSpeed}px`;
  }
  if (moveRight && characterLeft < 3060) {
    character.style.left = `${characterLeft + moveSpeed}px`;
  }
}

document.addEventListener('keydown', event => {
  if (event.code === 'ArrowUp') {
    jump();
  }
  if (event.code === 'ArrowLeft') {
    moveLeft = true;
  }
  if (event.code === 'ArrowRight') {
    moveRight = true;
  }
});

document.addEventListener('keyup', event => {
  if (event.code === 'ArrowLeft') {
    moveLeft = false;
  }
  if (event.code === 'ArrowRight') {
    moveRight = false;
  }
});

function animate() {
  applyGravity();
  applyMovement();
  requestAnimationFrame(animate);
}

animate();
