// Fungsi yang Mengubah Data (Mutator Function)
// Secara umum, perubahan data secara tidak sadar terjadi karena penggunaan beberapa fungsi bawaan JavaScript yang bersifat mengubah atau biasa disebut mutator function. Berikut adalah beberapa fungsi yang sering kita gunakan dan harus diperhatikan kembali ketika menerapkan prinsip immutability.

// Array.push: menambahkan elemen di akhir dari sebuah array.
// Array.pop: menghapus elemen terakhir dari sebuah array.
// Array.shift: menghapus elemen pertama dari sebuah array.
// Array.unshift: menambahkan elemen di awal dari sebuah array.
// Array.splice: menambahkan atau menghapus elemen di posisi tertentu dari sebuah array.
// Array.reverse: membalikkan urutan elemen dari sebuah array.
// Array.sort: mengurutkan elemen dari sebuah array.
// Object.assign: memodifikasi properti dari object.
// Daftar fungsi di atas bersifat mutate, alias mengubah langsung data array asli. Tentu penggunaan method tersebut di dalam fungsi akan membuat fungsi menghasilkan efek samping.

const arr = [1, 2, 3, 4, 5];

arr.unshift(99);
console.log(arr);

arr.splice(2, 1, 100);
console.log(arr);
