// function generateArray(n) {
//   const result = [];
//   for (let counter = 0; counter <= n; counter += 1) {
//     result.push(counter);
//   }
//   return result;
// }

// console.log(generateArray(5)); // Output: [0, 1, 2, 3, 4, 5]

function bil(n) {
  if (n < 0) {
    return [];
  }
  return [...bil(n - 1), n];
}

console.log(bil(5)); // Output: [0, 1, 2, 3, 4, 5]
