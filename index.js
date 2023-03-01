// Define the warrior and mage objects
const warrior = {
  name: 'Warrior',
  health: 100,
  strength: 10,
  defense: 5,
  speed: 5
};

const mage = {
  name: 'Mage',
  health: 100,
  strength: 5,
  defense: 2,
  speed: 10
};

// Define a battle function
function battle(attacker, defender) {
  // Calculate damage
  const damage = attacker.strength - defender.defense;

  // Calculate chance to hit
  const hitChance = attacker.speed / defender.speed;

  // Check if attack hits
  if (Math.random() <= hitChance) {
    // Attack hits
    defender.health -= damage;
    if (defender.health <= 0) {
      // Defender is defeated
      console.log(`${defender.name} has been defeated!`);
    } else {
      // Defender survives attack
      console.log(`${defender.name} takes ${damage} damage!`);
    }
  } else {
    // Attack misses
    console.log(`${attacker.name}'s attack misses!`);
  }
}

// Simulate the battle between warrior and mage
while (warrior.health > 0 && mage.health > 0) {
  // Warrior attacks first
  battle(warrior, mage);

  // Mage attacks second
  if (mage.health > 0) {
    battle(mage, warrior);
  }
}

// Determine the winner
if (warrior.health <= 0) {
  console.log(`${mage.name} wins!`);
} else {
  console.log(`${warrior.name} wins!`);
}
