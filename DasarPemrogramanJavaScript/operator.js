/**
 * Secara umum, operator dalam JavaScript terbagi menjadi tiga kelompok: unary, binary, dan ternary.
 * Pengelompokan ini berdasarkan jumlah operan yang diperlukan untuk menggunakan suatu operator.
 *
 * Operator aritmetika, seperti + termasuk dalam kelompok operator binary karena membutuhkan dua operan.
 * Sementara itu, operator tipe data, seperti typeof adalah operator unary karena hanya memerlukan satu operan.
 * Adapun operator ternary tentu saja membutuhkan tiga operan.
 */

let age = 25;

// Unary operator
console.log(typeof age);

// Binary operator
5 + 4;
10 / 2;
age = 30;

// Ternary operator (conditional operator)
age < 18 ? "You are too young!" : "Welcome onboard!";
console.log(age);

// Assignment Operator
/**
 * Operator penugasan atau assignment operator adalah operator yang digunakan untuk memberikan nilai kepada sebuah variabel,
 * baik inisiasi nilai baru maupun mengubah nilai yang sudah ada. Operator ini ditulis dengan simbol sama dengan (=).
 * Operator penugasan termasuk dalam kategori binary operator karena membutuhkan dua operan,
 * yaitu variabel di sisi kiri dan nilai yang akan diberikan di sisi kanan. Operator ini ditulis di antara kedua operan.
 * Digunakan untuk menginisiasi nilai
 */
const name = "Dicoding";
let location = "Bandung";

// Arithmetic Operator
/**
 * Operator aritmetika adalah operator standar yang digunakan untuk proses aritmetika,
 * seperti penambahan (+), pengurangan (-), pengalian (*), ataupun pembagian (/). Selain operasi standar yang kami sebutkan,
 * JavaScript juga mendukung beberapa operasi aritmetik yang bisa Anda lihat pada tabel di bawah ini.
 */

// modulus
const a = 10;
const b = 2;
console.log(a % b);

// Increment dan Decrement Operator
let x = 10;
console.log(++x);
console.log(x--);
// console.log(x++);
console.log(x);

// Eksponensial Operator
console.log(2 ** 3);

// 6 + 5; --> mengembalikan 11
// 7 - 2; --> mengembalikan 5
// 8 * 5; --> mengembalikan 40
// 10 / 3; --> mengembalikan 3.33
// 10 % 2; --> mengembalikan 0
// 2(10 + 2); --> mengembalikan 24

// Operator Perbandingan
/**
 * Operator perbandingan adalah operator yang digunakan untuk membandingkan dua nilai
 * dan mengembalikan nilai boolean (true atau false) sebagai hasil perbandingan.
 * Salah satu penggunaan operator perbandingan adalah ketika
 * kita berhadapan dengan skenario “Apakah x lebih besar dari y?” dan mendapatkan hasil dalam bentuk “Ya” atau “Tidak”.
 */

// sama
console.log(5 == 5); // true

// tidak sama
console.log(5 != 5); // false

// lebih besar
console.log(5 > 5); // false

// lebih kecil
console.log(5 < 5); // false

// lebih besar sama dengan
console.log(5 >= 5); // true

// lebih kecil sama dengan
console.log(5 <= 5); // true

// indentitas
console.log(5 === 5); // true

// tidak identitas
console.log(5 !== 5); // false

// Operator Logika
/**
 * Operator logika digunakan untuk menetapkan logika dari dua nilai operan boolean.
 * Dengan operator logika, kita bisa melakukan operasi gerbang logika, seperti AND dan OR.
 * Operator logika dapat digunakan untuk menetapkan logika yang lebih kompleks.
 */

// AND
console.log(true && true); // true
console.log(true && false); // false

// OR
console.log(true || true); // true
console.log(true || false); // true

// NOT
console.log(!true); // false
console.log(!false); // true

// String Operator
/**
 * Operator string adalah operator yang digunakan untuk menggabungkan dua atau lebih string.
 * Operator ini ditulis dengan simbol tambah (+). Operator ini juga dikenal dengan istilah concatenation.
 */

const first = "bekerja ";
const second = "sama";
const merged = first + second;

console.log(merged); // Output: bekerjasama

// Operator Bitwise
/**
 * Operator bitwise adalah operator yang digunakan untuk melakukan operasi pada level bit.
 * Operator ini akan mengubah operand-operandnya menjadi bilangan biner,
 * lalu melakukan operasi pada setiap bit dari operand tersebut.
 * Operator bitwise sangat jarang digunakan dalam pengembangan web modern,
 * namun sangat berguna dalam pengembangan perangkat lunak yang membutuhkan operasi pada level bit.
 */

// AND
console.log(5 & 3); // 1

// OR
console.log(5 | 3); // 7

// XOR
console.log(5 ^ 3); // 6

// NOT
console.log(~5); // -6

// Left Shift
console.log(5 << 1); // 10

// Signed Right Shift
console.log(5 >> 1); // 2

// Zero Fill Right Shift
console.log(5 >>> 1); // 2
