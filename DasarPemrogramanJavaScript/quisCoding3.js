const employees = [
  {
    name: "Fulan",
    email: "fulan@dicoding.com",
    joinYear: 2020,
  },
];

console.log(employees);

function addEmployee(name, email, joinYear) {
  /**
   * @TODO
   * lengkapi fungsi ini agar dapat menambahkan objek employee baru
   * berdasarkan nilai argumen fungsi dan simpan ke dalam array `employees`
   */
  employees.push({ name, email, joinYear });
}

addEmployee("dani", "danibahri@gmail.com", 2021);
console.log(employees);
