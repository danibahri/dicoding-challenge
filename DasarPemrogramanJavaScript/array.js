/**
 * Menstrukturkan Data dengan Array
 *
 * Array adalah struktur data spesial yang dapat menyimpan kumpulan data yang terurut.
 * Letak perbedaan array dengan object adalah data yang disimpan di dalam array terurut,
 * sedangkan di object tidak terurut. Di array, kita bisa menambahkan nilai di antara data yang sudah ada.
 * Data yang ada di array dapat diakses menggunakan pola indeks. Nilai yang disimpan di dalam array disebut dengan element.
 *
 * Array dapat menyimpan nilai dengan tipe data apa pun, seperti number, object, dan string.
 * Oleh karena itu, array bersifat dinamis sehingga kita dapat menambahkan element baru di dalam array.
 * Array juga merupakan sebuah object. Anda dapat memanfaatkan method typeof untuk melihat jenis tipe data dari array tersebut seperti berikut.
 */

const array = [];
console.log(typeof array); // object

const user = new Array();
const name = new Array("dani", "iwan", "budi");
console.log("variabel dengan nama 'name' :", name);

const customer = Array.from(name);
customer.push("joko");
console.log("panjang array :", customer.length); // 4
console.log("Setelah di Push dengan Joko :", customer);

// Menghapus element terakhir dengan pop dan element pertama dengan delete
customer.pop();
console.log("Setelah di pop dengan index terakhir :", customer);
delete customer[0];
console.log("Setelah di delete dengan index pertama :", customer);

// Menghapus element pertama dengan shift dan menambahkan element baru dengan  unshift
customer.shift();
console.log("Setelah di shift dengan index pertama :", customer);
customer.unshift("dani");
console.log("Setelah di unshift dengan index pertama :", customer);

// Menghapus element dengan index ke-1 dan 2 element dengan splice dan menambahkan element baru
customer.splice(1, 2);
console.log("Setelah di splice dengan index ke-1 dan 2 element :", customer);
customer.splice(1, 1, "iwan", "budi");
console.log(
  "Setelah di splice dengan index ke-1 dan menambahkan 2 element :",
  customer
);

// Array destructuring
const [first, second, third] = customer;
console.log("Array Destructuring :", first, second);

// Reverse array
const reversed = customer.reverse();
console.log("Array Reverse :", reversed);

// sort array
// Secara default, method sort() akan mengurutkan array berdasarkan abjad dengan ascending order.
// Jika ingin mengurutkan array dengan descending order, kita bisa menggunakan fungsi compare.
const sorted = customer.sort();
console.log("Array Sort :", sorted);
