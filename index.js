const tunk = {
  name: "Tunk",
  class: "Melee",
  health: 100,
  strength: 10,
  defense: 8,
  speed: 5,
  ability: "Charge"
};

const mesta = {
  name: "Mesta",
  class: "Ranged",
  health: 90,
  strength: 8,
  defense: 6,
  speed: 7,
  ability: "Critical Strike"
};


const tunkAttackBtn = document.getElementById("tunk-attack");
const mestaAttackBtn = document.getElementById("mesta-attack");

tunkAttackBtn.addEventListener("click", function() {
  attack(tunk, mesta);
});

mestaAttackBtn.addEventListener("click", function() {
  attack(mesta, tunk);
});

function attack(attacker, defender) {
  // Calculate damage based on attacker's strength and defender's defense
  const damage = attacker.strength - defender.defense;
  if (damage > 0) {
    defender.health -= damage;
  }
  
  // Log the attack and the defender's new health
  const message = `${attacker.name} attacks ${defender.name} for ${damage} damage! ${defender.name} has ${defender.health} health left.`;
  logMessage(message);
  
  // Check if the game has ended
  if (defender.health <= 0) {
    endGame(attacker, defender);
  }
}

function endGame(winner, loser) {
  const message = `${winner.name} has defeated ${loser.name}!`;
  logMessage(message);
  
  // Disable attack buttons
  tunkAttackBtn.disabled = true;
  mestaAttackBtn.disabled = true;
}


