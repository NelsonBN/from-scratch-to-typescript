import { sum, sub, mult, div } from './math-lib';

console.log(sum(1, 2));
console.log(sub(1, 2));
console.log(mult(1, 2));
console.log(div(1, 2));


console.log("--------------------------------------------------");


import MyPerson from './Person';

class User extends MyPerson {
    constructor(name: string, age: number, email: string) {
        super(name, age, email);
    }
}

const user = new User("Max", 26, "max@fake.fk");
console.log(user);


console.log("--------------------------------------------------");


import { IAddress as Address, ICountry } from './Address';

const address: Address = {
    country: "Germany",
    street: "Fake Street",
    city: "Fake City"
}
console.log(address);

const country: ICountry = {
    country: "Spain"
}
console.log(country);


console.log("--------------------------------------------------");

import * as Utils from './Utils';

console.log("Utils: ", Utils);
console.log("Utils typeof: ", typeof Utils);
console.log("---");
console.log("Utils.PI: ", Utils.PI);
console.log("Utils.PI typeof: ", typeof Utils.PI);
console.log("---");
console.log("Utils.calculateCircumference: ", Utils.calculateCircumference);
console.log("Utils.calculateCircumference typeof: ", typeof Utils.calculateCircumference);
console.log("Utils.calculateCircumference -> result: ", Utils.calculateCircumference(5));
