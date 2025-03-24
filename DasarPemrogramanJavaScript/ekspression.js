// Function Ekspresi
// Function expression adalah cara lain untuk mendefinisikan fungsi.
const convertCelsiusToFahrenheit = function (temperature) {
  const result = (9 / 5) * temperature + 32;
  return result;
};

const temperatureInFahrenheit = convertCelsiusToFahrenheit(90);
console.log("Hasil konversi:", temperatureInFahrenheit);

/**
 * Output:
 * Hasil konversi: 194
 */

// First-Class Citizen
/**
 * Jika ada bahasa pemrograman yang mengatakan bahwa function dapat diperlakukan layaknya variabel,
 * function tersebut dinyatakan sebagai first-class citizen. Apa maksud dari diperlakukan mirip variabel?
 *
 * Pada JavaScript, function dapat kita jadikan sebagai nilai dan disimpan dalam variabel,
 * nilai argumen function lain, mengembalikan nilai function dari suatu function, dsb. Mari kita lihat contohnya.
 */
function multiply(a, b) {
  return a * b;
}

function calculate(operation, numA, numB) {
  return operation(numA, numB);
}

const result = calculate(multiply, 2, 4);
console.log(result);
// Output: 8

function multiplier(x) {
  return function (num) {
    return x * num;
  };
}

const double = multiplier(2);
const triple = multiplier(3);

console.log(double(10));
console.log(triple(11));

/* Output:
  20
  33
  */

//Arrow function
/**
 * Arrow function adalah cara lain untuk mendefinisikan fungsi.
 * Arrow function diperkenalkan pada ES6.
 * Arrow function lebih ringkas dan tidak memerlukan kata kunci function.
 */
const greet = () => {
  console.log("Halo!");
};

greet();

// Deklarasi Function dengan Arrow Function
const convert = (temperature) => {
  const result = (9 / 5) * temperature + 32;
  return result;
};

InFahrenheit = convert(90);
console.log("Hasil konversi:", InFahrenheit);
// Hasil ==> Hasil konversi: 194

let a = null;

const convertToKelvin = (celsius) => {
  const result = celsius + 273;
  return result;
};

a = convertToKelvin(27);
console.log("Hasil konversi  ke Kelvin:", a);

const convertToReamur = function (celsius) {
  const result = (4 / 5) * celsius;
  return result;
};

a = convertToReamur(27);
console.log("Hasil konversi Reamur:", a);

const greeto = (a = "hallo nama saya dani ") => {
  console.log(a);
};

greeto();

let temperatureToFahrenheit = null;

// Arrow function
// const convertCelsiusToFahrenheit = (temperature) => {
//   const result = (9 / 5) * temperature + 32;
//   return result;
// };

temperatureToFahrenheit = convertCelsiusToFahrenheit(90);
console.log("Hasil konversi:", temperatureToFahrenheit);

// Arrow function versi ringkas
const convertCelsiusToFahrenheitInConciseSyntax = (temperature) =>
  (9 / 5) * temperature + 32;

temperatureToFahrenheit = convertCelsiusToFahrenheitInConciseSyntax(90);
console.log("Hasil konversi:", temperatureToFahrenheit);

const greeter = () => "Halo!";
console.log(greeter());
