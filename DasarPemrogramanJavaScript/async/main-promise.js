// import { doSomething } from "./promise.js";

// function onFulfilled(doSomethingData) {
//   // Do your jobs when "fulfilled" happens…
//   console.log(doSomethingData);
// }

// function onRejected(doSomethingError) {
//   // Do your jobs when "rejected" happens…
//   console.log(doSomethingError);
// }

// doSomething().then(onFulfilled, onRejected);

// chaining method
// import { makeCoffee, sendCoffee } from "./promise.js";

// const order = "Kopi Espresso";

// console.log(`Saya memesan ${order} di kafe.`);

// makeCoffee(order)
//   .then(
//     (value) => {
//       return sendCoffee(value);
//     },
//     (error) => {
//       console.error(error.message);
//       throw error;
//     }
//   )
//   .then(
//     (value) => {
//       console.log(`Pramusaji memberikan ${value} pesanan.`);
//       console.log(`Saya mendapatkan ${value} dan menghabiskannya.`);
//     },
//     (error) => {
//       console.error(error.message);
//       throw error;
//     }
//   );

import { orderJuice, makeJuice, sendJuice } from "./promise.js";

const order = "Jus Jeruk";
const money = 10000;

console.log(`Saya memesan ${order} di kafe dan uang saya adalah Rp${money}.`);

orderJuice(order, money)
  .then((value) => {
    return makeJuice(value);
  })
  .then((value) => {
    return sendJuice(value);
  });
