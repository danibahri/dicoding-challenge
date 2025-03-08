// String
/**
 *   String adalah tipe data yang merepresentasikan teks.
 *   Data seperti nama, alamat, atau email adalah contoh data yang dikelola dalam bentuk string.
 *   Dalam JavaScript, nilai string diapit oleh tanda kutip.
 *   Ada tiga jenis tanda kutip yang dapat digunakan untuk membuat nilai string,
 *   yaitu petik tunggal (single quote), petik ganda (double quote), dan backticks (tanda backtick).
 */
var nama = "Dani Bahri";
console.log(nama);

const currentDate = new Date().toDateString();
console.log(`Hari ini tanggal ${currentDate}`);

// Number
/**
 *  Semua data berupa angka direpresentasikan dalam tipe data number,
 *  baik itu bilangan bulat maupun pecahan. Untuk membuat nilai number,
 *  kita cukup menuliskan angkanya secara langsung tanpa menggunakan tanda khusus.
 *  Berikut adalah contoh nilai number dalam JavaScript.
 */
var umur = 19;
console.log(umur);

const hasil = 50 / 0;
console.log(hasil); // output: Infinity

// Boolean
/**
 * Boolean adalah tipe data yang hanya memiliki dua nilai: true dan false.
 * Boolean umumnya digunakan untuk merepresentasikan “ya” atau “tidak”, “ya” adalah true dan “tidak” adalah false.
 * Untuk membuat nilai boolean, kita bisa menuliskan true atau false secara langsung.
 */
var isMarried = false;
console.log(isMarried);

// Null
/**
 * JavaScript memiliki dua nilai spesial yang merepresentasikan nilai kosong, yaitu null dan undefined.
 * Keduanya digunakan untuk menunjukkan ketiadaan nilai (the absence of something).
 * Null banyak diadopsi dalam berbagai bahasa pemrograman sebagai tipe data standar untuk menunjukkan nilai yang tidak ada.
 * Untuk membuat null, kita cukup menulis sintaksis null.
 */
var jenkel = null;
console.log(jenkel);

// Undefined
/**
 * Undefined adalah tipe data yang berarti variabel yang dideklarasikan belum memiliki nilai.
 * Ketika kita mendeklarasikan variabel tanpa memberikan nilai, maka variabel tersebut akan memiliki nilai undefined.
 */
var alamat;
console.log(alamat);

const name1 = { first: "Dicoding", last: null };
const name2 = { first: "Dicoding", last: undefined };

console.log(JSON.stringify(name1)); // output: {"first":"Dicoding","last":null}
console.log(JSON.stringify(name2)); // output: {"first":"Dicoding"}

// Array
/**
 * Array adalah tipe data yang digunakan untuk menampung lebih dari satu nilai dalam satu variabel.
 * Nilai-nilai tersebut disimpan dalam urutan tertentu dan setiap nilai memiliki indeks yang berbeda.
 * Array dideklarasikan dengan menuliskan nilai-nilai yang ingin disimpan dalam kurung siku dan dipisahkan dengan koma.
 */
var hobi = ["Travelling", "Reading"];
console.log(hobi);

// Object
/**
 * Object adalah tipe data yang digunakan untuk menampung nilai dalam bentuk pasangan key dan value.
 * Key adalah nama dari nilai dan value adalah nilai yang dihubungkan dengan key tersebut.
 * Object deklarasikan dengan menuliskan key dan value dalam kurung kurawal dan dipisahkan dengan koma.
 */
var orang = {
  nama: "Jhon Doe",
  umur: 19,
  isMarried: false,
  alamat: "Jakarta",
};

console.log(orang);
console.log(orang.nama);

const result = Number("Dicoding");
console.log(result); // output: NaN

// Mengubah Tipe Data
const number = 123;
const boolean = true;

const strNumber = String(number);
const strBoolean = boolean.toString();

console.log(strNumber); // output: "123"
console.log(strBoolean); // output: "true"

const cm = "20cm";
const px = "64px";

const intFromCM = parseInt(cm);
const intFromPX = parseInt(px);

console.log(intFromCM); // output: 20
console.log(intFromPX); // output: 64

const angka = 123;
const string = "Dicoding";
const empty = null;

const boolFromangka = Boolean(angka);
const boolFromString = Boolean(string);
const boolFromNull = Boolean(empty);

console.log(boolFromangka); // output: true
console.log(boolFromString); // output: true
console.log(boolFromNull); // output: false

// Konversi Implisit
/**
 * Konversi implisit terjadi ketika JavaScript secara otomatis mengubah tipe data tanpa instruksi eksplisit dari programmer.
 * Ini biasanya terjadi dalam konteks tertentu, seperti operasi aritmetika, perbandingan, dan konteks logika.
 * Meskipun konversi implisit bisa sangat berguna dan menghemat penulisan kode,
 * penting untuk memahami alasan hal ini terjadi untuk menghindari bug dan perilaku yang tidak terduga dalam kode.
 */
const age = 20;
const message = "Umurku: " + age;

console.log(message); // output: Umurku: 20
