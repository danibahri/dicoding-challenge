// // const user = {};
// const user = {
//   name: "Dicoding",
//   lastName: "Indonesia",
//   age: 9,
// };
// const product = { name: "pen", price: 2.5 };

// console.log(user);
// console.log("Menngunakan dot :", product.name);
// console.log("Menggunakan Bracket :", product["name"]);

// // const { name, lastName } = user;
// // console.log(name, lastName); // Output: Dicoding Indonesia
// const { name, lastName, isMale = false } = user;
// console.log(isMale); // Output: false

const user = {
  id: 24,
  email: "aras@dicoding.com",
  name: "Arsy",
  nickname: "Aras",
  username: "aras123",
  password: "secret",
};

const { id, email, name } = user;

console.log(`ID : ${id}, Email : ${email}, Nama : ${name}`);
