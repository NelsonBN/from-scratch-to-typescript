class Person
{
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}

const person = new Person('John', 'Doe');
console.log(person.getFullName());
person.firstName = 'Jane';
console.log(person.getFullName());


console.log('------------------');


class Car
{
    model: string;
    year: number;
}

const car = new Car();
car.model = 'Ford';
car.year = 2020;

console.log(car);


console.log('------------------');


