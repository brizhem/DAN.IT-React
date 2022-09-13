class Employee{
    constructor(name, age, salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }

    getName() {
        return this.name;
    }

    getAge() {
        return this.age;
    }

    getSalary() {
        return this.salary;
    }

    setName(name) {
        this.name = name;
    }

    setAge(age) {
        this.age = age;
    }

    setSalary(salary) {
        this.salary = salary;
    }
}

class Programmer extends Employee {
    constructor(name, age, salary, arrayLang){
        super(name, age, salary);
        this.lang = arrayLang;
    }

    getSalary() {
        return this.salary * 3;
    }
}

programmer1 = new Programmer('Vasya', '21', 1000, ['eng', 'ukr', 'spa']);
programmer2 = new Programmer('John', '24', 1500, ['eng', 'rus', 'deu']);
programmer3 = new Programmer('Vasya', '27', 2000, ['eng', 'ukr']);

console.log(programmer1);
console.log(programmer2);
console.log(programmer3);