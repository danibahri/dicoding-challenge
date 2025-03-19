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
