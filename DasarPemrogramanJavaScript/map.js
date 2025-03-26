/**
 * Menstrukturkan Data dengan Map
 * Map adalah tipe data yang mirip dengan object yaitu menyimpan data dengan key-value.
 * Kalau sama seperti object, lalu apa fungsinya map? Map berfungsi untuk menutupi kekurangan dari object.
 * Map dapat menggunakan key dengan tipe data apa pun, tidak seperti object yang hanya menerima string.
 * Jadi perbedaan mendasarnya terletak pada key yang digunakan.
 */

// Contoh penggunaan Map
const capital = new Map();
console.log("Tipe dari map :", typeof capital); // object

// Contoh penggunaan Map
const productMap = new Map([
  ["shoes", 500],
  ["cap", 350],
  ["jeans", 250],
]);

console.log(productMap);

// Menambahkan data ke dalam map
capital.set("Jakarta", "Indonesia");
capital.set("London", "England");
console.log("isi dari map :", capital);

// Mengakses data di dalam map
console.log(capital.get("Jakarta")); // Indonesia

// Menghapus data di dalam map
capital.delete("Jakarta");
console.log(capital);
