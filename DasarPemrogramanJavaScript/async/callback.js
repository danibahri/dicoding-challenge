// export function makeCoffee(name, callback) {
//   const estimationTime = 5000;
//   let isSuccess = false;

//   const inSecond = Math.ceil(estimationTime / 1000);
//   console.log(
//     `Mohon menunggu. Pramusaji sedang membuatkan kopi dalam ${inSecond} detik.`
//   );

//   setTimeout(() => {
//     // Penentuan hasil dari proses asinkron
//     const number = Math.random();
//     if (number > 0.3) {
//       isSuccess = true;
//     }

//     if (!isSuccess) {
//       callback(new Error(`Gagal membuatkan ${name}.`), null);
//       return;
//     }

//     console.log(`Pramusaji selesai membuat ${name}.`);
//     callback(null, name);
//   }, estimationTime);
// }

// export function sendCoffee(name, callback) {
//   const estimationTime = 2000;
//   let isSuccess = false;

//   console.log(`Pramusaji sedang mengantarkan ${name} pesanan`);

//   setTimeout(() => {
//     // Penentuan hasil dari proses asinkron
//     const number = Math.random();
//     if (number > 0.3) {
//       isSuccess = true;
//     }

//     if (!isSuccess) {
//       callback(new Error(`Gagal mengantarkan ${name}.`), null);
//       return;
//     }

//     console.log(`Pramusaji sudah sampai ke meja.`);
//     callback(null, name);
//   }, estimationTime);
// }

export function buyJuice(order, money, callback) {
  const estimationTime = 3000;
  let isSuccess = false;

  setTimeout(() => {
    console.log(
      `Pramusaji sedang memproses pesanan ${order} dengan uang sejumlah Rp${money}.`
    );

    if (money < 5000) {
      callback(new Error(`Uang tidak cukup untuk membeli ${order}.`), null);
      return;
    }

    isSuccess = true;
    callback(null, { order, money });
  }, estimationTime);
}

export function makeJuice(data, callback) {
  const estimationTime = 2000;
  const number = Math.random();
  let isSuccess = false;

  console.log(
    `Pramusaji sedang membuat pesanan ${data.order} dalam ${
      estimationTime / 1000
    } detik.`
  );

  if (number > 0.3) {
    isSuccess = true;
  }

  if (!isSuccess) {
    callback(new Error(`Gagal membuat pesanan ${data.order}.`), null);
    return;
  }

  setTimeout(() => {
    if (number > 0.3) {
      console.log(`Pramusaji selesai membuat pesanan ${data.order}.`);
      callback(null, { order: data.order, money: data.money });
    }
  }, estimationTime);
}

export function sendJuice(data, callback) {
  const estimationTime = 1000;
  let isSuccess = false;
  const number = Math.random();

  console.log(`Pramusaji sedang mengantarkan pesanan ${data.order}.`);

  if (number > 0.3) {
    isSuccess = true;
  }

  if (!isSuccess) {
    callback(new Error(`Gagal mengantarkan pesanan ${data.order}.`), null);
    return;
  }

  setTimeout(() => {
    console.log(`Pramusaji sudah sampai ke meja dengan pesanan ${data.order}.`);
    callback(null, data);
  }, estimationTime);
}
