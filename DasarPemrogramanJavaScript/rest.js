/**
 * Rest Operator
 * Ketika bekerja dengan function, sering kali function menerima argument yang kemudian menjadi parameter.
 * Ketika argument-nya masih sedikit, seperti satu atau dua belum menimbulkan masalah.
 * Masalah terjadi ketika argument-nya sudah melebihi dua karena terlalu banyak argument pada
 * function membuat kode menjadi tidak bersih (tidak sesuai prinsip clean code) sehingga sulit untuk dibaca dan di-maintenance.
 *
 * Solusinya adalah menggunakan rest operator.
 * Rest operator memungkinkan function untuk menerima argument dalam bentuk array.
 * Rest operator yang digunakan pada parameter fungsi sering disebut sebagai Rest Parameter.
 * Cara menggunakan rest parameter adalah dengan menambahkan tiga titik (...) sebelum parameter terakhir.
 */

// Contoh penggunaan rest parameter
function sum(...numbers) {
  let result = 0;
  for (const number of numbers) {
    result += number;
  }
  return result;
}

console.log(sum(1, 2, 3, 4, 5)); // 15

function myFunc(...manyMoreArgs) {
  console.log("manyMoreArgs", manyMoreArgs);
}

myFunc("one", "two", "three");

const favorites = ["Nasi Goreng", "Mie Goreng", "Ayam Bakar", "Tahu", "Tempe"];

const [first, second, ...rest] = favorites;

console.log(first);
console.log(second);
console.log(rest);

/**
 * output:
 * Nasi Goreng
 * Mie Goreng
 * [ 'Ayam Bakar', 'Tahu', 'Tempe' ]
 */
