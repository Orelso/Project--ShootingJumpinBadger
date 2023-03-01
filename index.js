const character = document.querySelector('.character');
const block = document.querySelector('.block');

let isJumping = false;
let isMovingLeft = false;
let isMovingRight = false;
let gravity = 0.9;
let velocity = 0;

function jump() {
  let jumpCount = 0;
  isJumping = true;
  velocity = -15;

  let jumpInterval = setInterval(() => {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'));
    if ((characterTop > 6 && isMovingLeft) || (characterTop > 6 && isMovingRight)) {
      character.style.top = `${characterTop + velocity}px`;
      velocity += gravity;
    } else if (jumpCount > 10) {
      clearInterval(jumpInterval);
      isJumping = false;
      jumpCount = 0;
    }
    jumpCount++;
  }, 25);
}

function moveLeft() {
  let characterLeft = parseInt(window.getComputedStyle(character).getPropertyValue('left'));
  character.style.left = `${characterLeft - 5}px`;
  isMovingLeft = true;
}

function moveRight() {
  let characterLeft = parseInt(window.getComputedStyle(character).getPropertyValue('left'));
  character.style.left = `${characterLeft + 5}px`;
  isMovingRight = true;
}

function moveCharacter() {
  if (isJumping) return;
  if (isMovingLeft) {
    moveLeft();
  } else if (isMovingRight) {
    moveRight();
  }
}

document.addEventListener('keydown', event => {
  if (event.code === 'ArrowLeft') {
    isMovingLeft = true;
  } else if (event.code === 'ArrowRight') {
    isMovingRight = true;
  } else if (event.code === 'Space') {
    jump();
  }
});

document.addEventListener('keyup', event => {
  if (event.code === 'ArrowLeft') {
    isMovingLeft = false;
  } else if (event.code === 'ArrowRight') {
    isMovingRight = false;
  }
});

block.addEventListener('click', () => {
  if (isJumping) return;
  jump();
});

setInterval(() => {
  moveCharacter();
}, 25);
