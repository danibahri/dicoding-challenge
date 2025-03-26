/**
 * Menstrukturkan Data dengan Set
 * Terakhir, struktur data yang kita bahas adalah set.
 * Set adalah struktur data yang spesial dibandingkan dengan map, array, dan object. Kenapa dikatakan spesial?
 *
 * Jawabannya adalah karena set tidak memiliki key dan indeks ketika menyimpan data.
 * Selain itu, data yang disimpan di dalam set akan bernilai unik artinya tidak akan ada data yang duplikat. Spesial, bukan?
 */

// Membuat Set
const set = new Set();
console.log("Tipe dari set :", typeof set); // object

// Contoh penggunaan Set
const numberSet = new Set([1, 4, 6, 4, 1]);
console.log(numberSet); // Set { 1, 4, 6 }

// Menambah data ke dalam set
const letterSet = new Set();
letterSet.add("a");
letterSet.add("b");
letterSet.add("a");
console.log(letterSet); // Set { 'a', 'b' }

// Mengakses data di dalam set
console.log(letterSet.has("a")); // true

for (const item of letterSet) {
  console.log(item);
}

// Menggunakan foreach di dalam set
letterSet.forEach((item) => console.log(item));

// Menghapus data di dalam set
letterSet.delete("a");
console.log(letterSet); // Set { 'b' }
