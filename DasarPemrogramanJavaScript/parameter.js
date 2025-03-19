// Parameter dan Argument

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

const temperatureInCelsius = 90;
convertCelsiusToFahrenheit(temperatureInCelsius);

// Langsung memasukkan nilai
convertCelsiusToFahrenheit(100);

// Memasukkan nilai dengan variabel
const InCelsius = 90;
convertCelsiusToFahrenheit(InCelsius);

// Default Parameter
/**
 * Tahukah Anda bahwa argument dapat bernilai undefined jika kita tidak beri nilai apa pun dalam parentheses saat function dipanggil?
 * Lalu, apa yang akan terjadi jika function body tetap dijalankan dalam keadaan seperti itu? Mari kita lihat bersama.
 */
function convertCelsiusToFahrenheit(temperature) {
  const temperatureInFahrenheit = (9 / 5) * temperature + 32;
  console.log("Hasil konversi:", temperatureInFahrenheit);
}

convertCelsiusToFahrenheit();

/* Output:
  Hasil konversi: NaN
  */

function convertCelsiusToFahrenheit(temperature = 50) {
  const temperatureInFahrenheit = (9 / 5) * temperature + 32;

  console.log("Hasil konversi:", temperatureInFahrenheit);
}

// Menggunakan default value
convertCelsiusToFahrenheit(); // output: Hasil konversi: 122

// Menggantikan default value

// Return Value
/**
 * Function dapat menerima input dan mengembalikan output.
 * Function didefinisikan dengan kata kunci function diikuti oleh nama fungsi dan tanda kurung ().
 */

function convertCelsiusToFahrenheit(temperature) {
  const temperatureInFahrenheit = (9 / 5) * temperature + 32;
  return temperatureInFahrenheit;
}

const celsius = 95;
const result = convertCelsiusToFahrenheit(celsius);
console.log("Hasil konversi:", result);
