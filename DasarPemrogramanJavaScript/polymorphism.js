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

class Android extends SmartPhones {
  // overriding constructor
  constructor(color, brand, model, device) {
    super(color, brand, model);
    this.device = device;
  }

  charging() {
    // super.charging();
    console.log(`Charging ${this.model} on ${this.device}`);
  }

  splitScreen() {
    console.log("Android have a Split Screen");
  }
}

const android = new Android("white", "B", "Galaxy S21", "smart TV");
// android.splitScreen();
android.charging();
