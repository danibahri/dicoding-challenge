// class Character {
//   constructor(name, health, position) {
//     this.name = name;
//     this.health = health;
//     this.position = position;
//   }

//   canMove() {
//     console.log(`${this.name} moves to ${this.position}!`);
//   }
// }

// class Monster extends Character {
//   canAttack() {
//     console.log(`${this.name} attacks with a weapon!`);
//   }
// }

// class Guardian extends Character {
//   canDefend() {
//     console.log(`${this.name} defends with a shield!`);
//   }
// }

// class Wizard extends Character {
//   canCastSpell() {
//     console.log(`${this.name} casts a magic spell!`);
//   }
// }

// class Warior extends Character {
//   canAttack() {
//     console.log(`${this.name} attacks with a sword!`);
//   }

//   canDefend() {
//     console.log(`${this.name} defends with a shield!`);
//   }
// }

// const monster = new Monster("Goblin", 100, "cave");
// const guardian = new Guardian("Knight", 150, "castle");
// const wizard = new Wizard("Sorcerer", 80, "tower");
// const warior = new Warior("Samurai", 120, "dojo");

// monster.canMove();
// monster.canAttack();
// guardian.canMove();
// guardian.canDefend();
// wizard.canMove();
// wizard.canCastSpell();
// warior.canMove();
// warior.canAttack();
// warior.canDefend();

class Character {
  constructor(name, health, position) {
    this.name = name;
    this.health = health;
    this.position = position;
  }

  canMove() {
    console.log(`${this.name} moves to another position!`);
  }
}

function canAttack(Character) {
  return {
    attack: () => {
      console.log(`${Character.name} attacks with a weapon!`);
    },
  };
}

function canDefend(Character) {
  return {
    defend: () => {
      console.log(`${Character.name} defends with a shield!`);
    },
  };
}

function castSpell(Character) {
  return {
    castSpell: () => {
      console.log(`${Character.name} casts a magic spell!`);
    },
  };
}

function createCharacter(name, health, position) {
  if (name === "monster") {
    const monster = new Character(name, health, position);
    return Object.assign(monster, canAttack(monster));
  } else if (name === "guardian") {
    const guardian = new Character(name, health, position);
    return Object.assign(guardian, canDefend(guardian));
  } else if (name === "wizard") {
    const wizard = new Character(name, health, position);
    return Object.assign(wizard, castSpell(wizard));
  }
}

const monster = createCharacter("monster", 100, "cave");
const guardian = createCharacter("guardian", 150, "castle");
const wizard = createCharacter("wizard", 80, "tower");

monster.canMove();
monster.attack();

guardian.canMove();
guardian.defend();

wizard.canMove();
wizard.castSpell();
