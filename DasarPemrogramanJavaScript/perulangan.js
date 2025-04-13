// for loop
// kecil ke besar
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

// besar ke kecil
for (let i = 10; i >= 0; i--) {
  console.log(i);
}

// for in
const orang = {
  nama: "John",
  umur: 30,
  pekerjaan: "Programmer",
};
for (let key in orang) {
  console.log(key + ": " + orang[key]);
}

// for of
const buah = ["apel", "jeruk", "mangga", "pisang"];
for (let item of buah) {
  console.log(item);
}

// while loop
let i = 0;
while (i <= 10) {
  console.log(i);
  i++;
}

/**
 * do while loop
 *
 * Sebenarnya, while dan do-while tidak berbeda jauh.
 * Perbedaan mereka terdapat pada urutan pengecekan kondisi.
 * While melakukan evaluasi kondisi di awal, sedangkan do-while melakukannya di akhir.
 * Berikut struktur dari do-while.
 */
let j = 0;
do {
  console.log(j);
  j++;
} while (j <= 10);
// break dan continue

/**
 * Control Statement
 * Ketika melakukan perulangan, ada yang namanya control statement.
 * Control statement berfungsi untuk menghentikan eksekusi kode.
 * Beberapa statement yang masuk ke dalam kategori control statement adalah break dan continue.
 * Pada contoh yang diberikan sebelumnya, mungkin Anda sudah ngeh bahwa kita menggunakan break statement.
 * Untuk lebih detail, ikuti pembahasan berikut ini.
 *
 * Break
 * Break statement adalah cara kita untuk memberitahukan interpreter yang
 * sedang mengeksekusi kode untuk berhenti dan langsung berpindah ke akhir
 * dari percabangan atau perulangan. Perhatikan contoh berikut.
 */
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }

  console.log(i);
}
// Output: 0 1 2 3 4
// Penjelasan: Ketika i bernilai 5, maka break statement akan menghentikan perulangan

// continue
/**
 * Berbeda dengan break, continue statement akan menghentikan perulangan
 * saat ini dan langsung melanjutkan ke perulangan berikutnya.
 * Perhatikan contoh berikut.
 */
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue;
  }

  console.log(i);
}
// Output: 0 1 2 3 4 6 7 8 9
// Penjelasan: Ketika i bernilai 5, maka continue statement akan
// menghentikan perulangan saat ini dan langsung melanjutkan ke perulangan berikutnya
