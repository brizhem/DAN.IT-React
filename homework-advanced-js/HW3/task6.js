const employee = {
  name: "Vitalii",
  surname: "Klichko",
};

const newEmployee = { ...employee, age : 50, salary : 60000 };

console.log(employee);
console.log(newEmployee);
