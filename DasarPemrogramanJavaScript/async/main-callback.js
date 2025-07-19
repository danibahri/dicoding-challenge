// import { makeCoffee, sendCoffee } from "./callback.js";

// const order = "Kopi Espresso";

// console.log(`Saya memesan ${order} di kafe.`);

// makeCoffee(order, (makeCoffeeError, makeCoffeeData) => {
//   if (makeCoffeeError) {
//     // Do something with error
//     console.error(makeCoffeeError);
//     return;
//   }

//   sendCoffee(makeCoffeeData, (sendCoffeeError, sendCoffeeData) => {
//     if (sendCoffeeError) {
//       // Do something with error
//       console.error(sendCoffeeError);
//       return;
//     }

//     console.log(`Pramusaji memberikan ${sendCoffeeData} pesanan.`);
//     console.log(`Saya mendapatkan ${sendCoffeeData} dan menghabiskannya.`);
//   });
// });

import { buyJuice, makeJuice, sendJuice } from "./callback.js";

const order = "Jus Jeruk";
const money = 7000;

console.log(`Saya memesan ${order} di kafe dengan uang sejumlah Rp${money}.`);

buyJuice(order, money, (buyJuiceError, buyJuiceData) => {
  if (buyJuiceError) {
    return console.error(buyJuiceError);
  }

  console.log(`Pemesanan ${buyJuiceData.order} berhasil diproses.`);

  makeJuice(buyJuiceData, (makeJuiceError, makeJuiceData) => {
    if (makeJuiceError) {
      return console.error(makeJuiceError);
    }

    sendJuice(makeJuiceData, (sendJuiceError, sendJuiceData) => {
      if (sendJuiceError) {
        return console.error(sendJuiceError);
      }
      console.log(`Pramusaji memberikan ${sendJuiceData.order} pesanan.`);
      console.log(
        `Saya mendapatkan ${sendJuiceData.order} dan menghabiskannya.`
      );
    });
  });
});
