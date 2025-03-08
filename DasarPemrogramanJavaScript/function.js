// Function
/**
 * Function adalah blok kode yang dirancang untuk melakukan tugas tertentu yang dapat digunakan kembali.
 * Function adalah cara yang baik untuk mengorganisir kode Anda dan membuatnya lebih mudah dibaca dan dipahami.
 * Function dapat menerima input dan mengembalikan output.
 * Function didefinisikan dengan kata kunci function diikuti oleh nama fungsi dan tanda kurung ().
 */
function convertCelsiusToFahrenheit(temperature) {
  const temperatureInFahrenheit = (9 / 5) * temperature + 32;
  console.log("Hasil konversi:", temperatureInFahrenheit);
}
convertCelsiusToFahrenheit(100);

function convertCelsiusToFahrenheit(temperature) {
  const temperatureInFahrenheit = (9 / 5) * temperature + 32;
  console.log("Hasil konversi:", temperatureInFahrenheit);
}

const temperatureInCelsius = 90;
// Hanya menampilkan nilai function
console.log(convertCelsiusToFahrenheit);
// Output => [Function: convertCelciusToFahrenheit]
// Akan menjalankan isi function
convertCelsiusToFahrenheit(temperatureInCelsius);
// Output => Hasil konversi: 194

// Hoisting
/**
 * Hoisting adalah perilaku JavaScript yang mengangkat deklarasi variabel dan fungsi ke atas lingkup fungsinya.
 * Ini berarti Anda dapat menggunakan variabel dan fungsi sebelum dideklarasikan.
 * Namun, hanya deklarasi yang diangkat, bukan inisialisasi.
 */
greetWorld();
function greetWorld() {
  console.log("Hoisiting");
}
/* Output:
Hello, world!
*/

// Parameters dan Arguments
/**
 * Sejauh ini, kita sudah belajar membuat dan menjalankan function dengan baik dalam JavaScript.
 * Pada materi sebelumnya, kami sudah memperlihatkan penggunaan parameter function, tetapi kita tidak berkenalan secara resmi.
 * Nah, kita akan mendalami parameter dan argument pada function di sini.
 * Sebagaimana telah dijelaskan pada materi Deklarasi Function,
 * sekumpulan kode dalam function body bisa saja membutuhkan data agar tugas diproses dengan baik.
 * Salah satu contoh nyatanya adalah convertCelsiusToFahrenheit. Perhatikan kembali kode berikut.
 */
function convertCelsiusToFahrenheit(temperature) {
  const temperatureInFahrenheit = (9 / 5) * temperature + 32;

  console.log("Hasil konversi:", temperatureInFahrenheit);
}

// Function Expression
/**Function expression adalah cara lain untuk mendefinisikan fungsi.
 * Fungsi ini didefinisikan dengan menetapkan fungsi ke variabel.
 */
const helloWord = function () {
  console.log("Function Expression");
};
helloWord();
