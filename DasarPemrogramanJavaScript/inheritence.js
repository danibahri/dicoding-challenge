// class cat {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   name_cat() {
//     console.log(`name cat ${this.name}`);
//   }
// }

// class kitten extends cat {
//   name_kitten() {
//     console.log(`name kitten ${this.name}`);
//   }
// }

// const kitten1 = new cat("Mittens", 1);
// kitten1.name_cat();
// kitten1.name_kitten();

class SmartPhones {
  constructor(color, brand, model) {
    this.color = color;
    this.brand = brand;
    this.model = model;
  }

  charging() {
    console.log(`Charging ${this.model}`);
  }
}

class iOS extends SmartPhones {
  airDrop() {
    console.log("iOS have a behavior AirDrop");
  }
}

class Android extends SmartPhones {
  splitScreen() {
    console.log("Android have a Split Screen");
  }
}

const ios = new iOS("black", "A", "12 Pro Max");
const android = new Android("white", "B", "Galaxy S21");

console.log(ios instanceof SmartPhones); // Output: true
console.log(android instanceof SmartPhones); // Output: true
