/**
 * Spread Operator
 * Spread, memiliki arti sesuai dengan namanya, yaitu menyebarkan.
 * Spread operator digunakan untuk menyebarkan nilai yang ada pada object dan array.
 * Spread operator yang ditandai dengan sintaks tiga titik  (...) adalah fitur yang menarik dan membantu dalam pengelolaan object dan array.
 * Dengan menggunakan spread operator, nilai object dan array dapat di-iterable menjadi beberapa element.
 */

// Object
const user = {
  firstName: "John",
  lastName: "Doe",
  age: 33,
};
const newUser = {
  address: "Manado",
};

const completeUser = { ...user, ...newUser };
console.log(completeUser);

// Array
const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
const others = ["Cake", "Pie", "Donut"];

const allFavorites = [...favorites, ...others];
console.log(allFavorites);
