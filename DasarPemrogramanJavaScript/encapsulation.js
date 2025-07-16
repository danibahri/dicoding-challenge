// class CoffeMachine {
//   constructor(waterAmount) {
//     this.waterAmount = waterAmount;
//     this.temperature = 90;
//   }

//   makeCoffe() {
//     console.log("Membuat kopi dengan suhu", this.temperature);
//   }
// }

// const coffee = new CoffeMachine(100);
// coffee.temperature = 60;

// coffee.makeCoffe(); // Output: Membuat kopi dengan suhu 60

// class CoffeeMachine {
//   constructor(waterAmount) {
//     this.waterAmount = waterAmount;
//     this._temperature = 90;
//   }

//   set temperature(temperature) {
//     console.log("you are not allowed to change the temperature");
//   }

//   get temperature() {
//     return this._temperature;
//   }

//   makeCoffee() {
//     console.log("Membuat kopi dengan suhu", this._temperature);
//     console.log("Jumlah air:", this.waterAmount);
//     console.log("Kopi sudah siap!");
//   }
// }

// const coffee = new CoffeeMachine(10);
// console.log("Sebelum diubah: ", coffee.temperature);
// coffee.temperature = 100;
// console.log("Setelah diubah: ", coffee.temperature);
// coffee.makeCoffee();

class CoffeeMachine {
  #temperature = 90;

  constructor(waterAmount) {
    this.waterAmount = waterAmount;
    this.#temperature = this.#defaultTemperature();
  }

  set temperature(temperature) {
    console.log("you are not allowed to change the temperature");
  }

  get temperature() {
    return this.#temperature;
  }

  #defaultTemperature() {
    return 90;
  }
}

const coffee = new CoffeeMachine(10);
console.log("Sebelum diubah: ", coffee.temperature);
coffee.temperature = 100;
console.log("Setelah diubah: ", coffee.temperature);
// coffee.makeCoffee();
