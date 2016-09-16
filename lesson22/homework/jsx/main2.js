
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

class User extends Person {
    constructor(firstName, lastName, age, gender, signUpDate = 0, id) {
        super(firstName, lastName, age, gender);
        this.signUpDate = signUpDate;
        this.id = id;
    }
}

let user1 = new User('Mike', 'Simpson', 33, 'Male', '10/12/2015', 0);
let user2 = new User('Dave', 'Peterson', 41, 'Male', '29/12/2016', 1);
let user3 = new User('Jane', 'Doe', 24, 'Female', '31/10/2016', 2);

let users = [user1, user2, user3];

window.console.log(users);


