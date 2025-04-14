/**
 * Error Handling
 * Sepandai-pandainya tupai melompat, akan jatuh juga. Sebaik apa pun kita menulis program,
 * suatu saat akan terjadi error. Error yang terjadi bisa berasal dari expected error (error yang terduga)
 * dan unexpected error (error yang tidak terduga).
 *
 * Error yang dibiarkan dan tidak ditangani akan menyebabkan crash pada program yang dibangun.
 * JavaScript memiliki cara untuk menangani error tersebut yang disebut dengan error handling.
 * Error handling dapat mencegah crash pada program ketika terjadi error yang disebabkan oleh kesalahan syntax atau error lainnya.
 *
 *
 *
 * Throwing Error
 * Saat terjadi error, sinyal yang disebut dengan exception akan bangkit.
 * Cara lain untuk membuat exception adalah menggunakan keyword throw untuk generate sebuah error.
 * Sintaks dasarnya adalah seperti berikut.
 */

// throw <objek error>
// const error = new Error("Ini adalah error yang dilemparkan");
// console.log(error.message); // Ini adalah error yang dilemparkan

// const price = 100;
// const paid = 80;

// if (paid < price) {
//   throw new Error("Pembayaran kurang");
// }

/**
 * Catching Error
 * Sebelumnya, Anda sudah tahu cara untuk membangkitkan error.
 * Kini, saatnya Anda mengetahui cara untuk menangkap error yang dihasilkan oleh program JavaScript yang Anda tulis.
 *
 *
 * Try-Catch
 * Try-catch merupakan cara yang dimiliki JavaScript untuk menangani error.
 * Try-catch memiliki dua blok utama yaitu try dan catch.
 * Try merupakan blok kode yang akan menangani error,
 * sedangkan catch merupakan blok kode yang dibangkitkan ketika terjadi error di dalam blok try.
 * Perhatikan struktur dari try-catch berikut.
 */

// try {
//   if (paid < price) {
//     throw new Error("Uang tidak cukup untuk membayar");
//   }
//   console.log("Pembayaran berhasil");
// } catch (error) {
//   console.log("Error:", error.message);
// }

/**
 * Finally
 *
 * Finally adalah blok kode yang berada di akhir try-catch.
 * Bilamana catch dieksekusi hanya ketika ada error di dalam blok try, blok yang ada di finally akan selalu dieksekusi.
 * Simak contoh di bawah ini.
 */

// try {
//   console.log("Try block executed");
//   throw new Error("Error in try block");
// } catch (error) {
//   console.log("Catch block executed:", error.message);
// } finally {
//   console.log("Finally block executed");
// }

// implementasi flow control
function checkGrades(grades) {
  for (let i = 0; i < grades.length; i++) {
    if (typeof grades[i] !== "number") {
      throw new Error("Invalid grades: " + grades[i]);
    }

    let predict;

    if (grades[i] == "90") {
      predict = "Grade A";
    } else if (grades[i] >= 80 && grades[i] < 90) {
      predict = "Grade B";
    } else if (grades[i] >= 70 && grades[i] < 80) {
      predict = "Grade C";
    } else if (grades[i] >= 60 && grades[i] < 70) {
      predict = "Grade D";
    } else {
      predict = "Grade F";
    }

    console.log(`Prediksi grade untuk ${grades[i]} adalah ${predict}`);
  }
}

try {
  const grades = [70, 90, 89, 78, 88];
  checkGrades(grades);
} catch (error) {
  console.error("Error:", error.message);
}
