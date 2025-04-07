/**
 * Pengantar Sang Pengatur Program
 * “Make it work, make it right, make it fast.” - Kent Beck, penulis buku Extreme Programming.
 *
 * Selain membuat program yang dapat berjalan, kita juga harus bisa membuat ia berjalan dengan cepat.
 * Nah, untuk membuat program berjalan dengan cepat, pahamilah bagaimana suatu program mengeksekusi kode yang ditulis.
 * Oleh karena itu, kita perlu untuk memahami cara program mengeksekusi kode.
 *
 * Berikut adalah objektif pembelajaran yang akan dicapai pada modul ini.
 *
 * Mendefinisikan istilah "Flow Controls" dan peran penting dalam pemrograman.
 * Mengidentifikasi jenis-jenis flow controls yang umum di pemrograman.
 * Menjelaskan kasus yang tepat untuk menggunakan switch alih-alih if.
 * Menjelaskan pentingnya penanganan error dan exception.
 * Menggunakan if, else if, dan switch untuk melakukan kondisional di JavaScript.
 * Menggunakan for dan while untuk melakukan perulangan di JavaScript.
 * Menggunakan try, catch, dan finally untuk menangani exception.
 */

// if statement
const gajian = true;
if (gajian) {
  console.log("Saya akan makan di mall");
} else {
  console.log("Saya akan menabung");
}
// Output: Saya akan bayar hutang

const gaji = 1000000;
const hutang = 500000;
if (gaji > hutang) {
  console.log("Saya akan bayar hutang");
} else {
  console.log("Saya akan menabung");
}

// ternari operator
const hasil = gaji > hutang ? "Saya akan bayar hutang" : "Saya akan menabung";
console.log(hasil);
