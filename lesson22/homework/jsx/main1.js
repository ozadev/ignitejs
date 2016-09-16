
class Person {
    constructor(firstName = 'John', lastName = 'Doe', age = 0, gender = 'Male') {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
    }

    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    sayHi() {
        alert(`Hello, my  name is ${this.fullName()}`);
    }
}

let someone = new Person();

someone.sayHi();
alert(`${someone.fullName()}, age = ${someone.age}; gender = ${someone.gender};`);
