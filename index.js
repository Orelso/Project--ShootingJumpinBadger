const character = document.getElementById('character');
const blocks = Array.from(document.getElementsByClassName('block'));

let isJumping = false;
let jumpSpeed = 0;

function jump() {
  isJumping = true;
  jumpSpeed = 15;
  character.classList.add('jump');
  setTimeout(() => {
    character.classList.remove('jump');
  }, 300);
}

function applyGravity() {
    const characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'));
    const characterLeft = parseInt(window.getComputedStyle(character).getPropertyValue('left'));
    let isOnBlock = false;
  
    blocks.forEach(block => {
      const blockTop = parseInt(window.getComputedStyle(block).getPropertyValue('top'));
      const blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'));
  
      // check if character is intersecting with the block from above
      if (blockLeft <= characterLeft && characterLeft <= blockLeft + 60 && characterTop + 60 >= blockTop && characterTop < blockTop) {
        character.style.top = `${blockTop - 60}px`;
        isJumping = false;
        isOnBlock = true;
      }
    });
  
    if (characterTop > 300 && !isOnBlock) {
      jumpSpeed = 0;
      isJumping = false;
    } else {
      jumpSpeed -= 1;
    }
    character.style.top = `${characterTop - jumpSpeed}px`;
  }
  

document.addEventListener('keydown', event => {
  if (event.code === 'ArrowUp' && !isJumping) {
    jump();
  }
  if (event.code === 'ArrowRight') {
    character.style.left = `${parseInt(window.getComputedStyle(character).getPropertyValue('left')) + 10}px`;
  }
  if (event.code === 'ArrowLeft') {
    character.style.left = `${parseInt(window.getComputedStyle(character).getPropertyValue('left')) - 10}px`;
  }
});

setInterval(applyGravity, 10);
