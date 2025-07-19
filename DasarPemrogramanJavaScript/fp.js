// const names = ["Harry", "Ron", "Jeff", "Thomas"];

// const newNamesWithExcMark = names.map((name) => `${name}!`);

// console.log(newNamesWithExcMark); // output: [ 'Harry!', 'Ron!', 'Jeff!', 'Thomas!' ]

function apply(operation, ...args) {
  // kita bisa menambahkan kode lain sebelum operation dijalankan.

  return operation(...args);
}

function sum(a, b, c) {
  return a + b + c;
}

function discount(disc, value) {
  return value - (disc / 100) * value;
}

const productPrice = apply(sum, 100, 100, 200);
const withDiscount = apply(discount, 25, productPrice);

console.log("Product price:", productPrice); // Output: Product price: 400
console.log("With discount 25%:", withDiscount); // Output: With discount 25%: 300
