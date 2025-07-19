// function promiseExecutor(resolve, reject) {
//   setTimeout(() => {
//     console.log("Melakukan sesuatu sebelum Promise diselesaikan.");

//     // Penentuan hasil dari proses asinkron
//     const number = Math.random();

//     // Nilai fulfillment dari Promise
//     if (number > 0.5) {
//       resolve("You did it!");
//     }
//     // Nilai rejection dari Promise
//     else {
//       reject("Sorry, something went wrong!");
//     }
//   }, 2000);
// }

// export function doSomething() {
//   return new Promise(promiseExecutor);
// }

// export function makeCoffee(name) {
//   return new Promise((resolve, reject) => {
//     const estimationTime = 2000;
//     let isSuccess = false;

//     const inSecond = Math.ceil(estimationTime / 1000);
//     console.log(
//       `Mohon menunggu. Pramusaji sedang membuatkan kopi dalam ${inSecond} detik`
//     );

//     setTimeout(() => {
//       const number = Math.random();
//       if (number > 0.3) {
//         isSuccess = true;
//       }

//       if (!isSuccess) {
//         reject(new Error("Maaf, kopi gagal dibuatkan."));
//         return;
//       }

//       console.log("Pramusaji selesai membuat kopi.");
//       resolve(name);
//     }, estimationTime);
//   });
// }

// export function sendCoffee(name) {
//   return new Promise((resolve, reject) => {
//     const estimationTime = 1000;
//     let isSuccess = false;

//     console.log("Pramusaji sedang mengantarkan kopi pesanan");

//     setTimeout(() => {
//       const number = Math.random();
//       if (number > 0.1) {
//         isSuccess = true;
//       }

//       if (!isSuccess) {
//         reject(new Error("Maaf, kopi gagal diantarkan."));
//         return;
//       }

//       console.log("Pramusaji sudah sampai ke meja.");
//       resolve(name);
//     }, estimationTime);
//   });
// }

export function orderJuice(name, money) {
  return new Promise((resolve, reject) => {
    const estimationTime = 2000;
    let isSuccess = false;

    console.log(
      `Pramusaji sedang memproses pesanan ${name} dalam ${
        estimationTime / 1000
      } detik.`
    );

    if (money < 5000) {
      reject(new Error("Uang tidak cukup untuk memesan jus."));
      return;
    }

    setTimeout(() => {
      isSuccess = true;
      if (isSuccess) {
        console.log(
          "Pramusaji selesai memproses pesanan jus dengan uang Rp" + money + "."
        );
        resolve({ name, money });
      } else {
        reject(new Error("Maaf, pesanan jus gagal."));
      }
    }, estimationTime);
  });
}

export function makeJuice(order) {
  return new Promise((resolve, reject) => {
    const estimationTime = 3000;
    let isSuccess = false;

    console.log(
      `Pramusaji sedang membuat ${order.name} dalam ${
        estimationTime / 1000
      } detik.`
    );

    console.log(
      `Uang yang digunakan untuk membuat jus adalah Rp${order.money}.`
    );

    setTimeout(() => {
      isSuccess = true;
      if (isSuccess) {
        console.log("Pramusaji selesai membuat jus.");
        resolve(order);
      } else {
        reject(new Error("Maaf, jus gagal dibuat."));
      }
    }, estimationTime);
  });
}

export function sendJuice(order) {
  return new Promise((resolve, reject) => {
    const estimationTime = 1000;
    let isSuccess = false;

    console.log(
      `Pramusaji sedang mengantarkan jus pesanan dalam ${
        estimationTime / 1000
      } detik.`
    );

    setTimeout(() => {
      isSuccess = true;
      if (isSuccess) {
        console.log(
          `Pramusaji sudah sampai ke meja dengan pesanan ${order.name} dan uang Rp${order.money}.`
        );
        resolve(order);
      } else {
        reject(new Error("Maaf, jus gagal diantarkan."));
      }
    }, estimationTime);
  });
}
