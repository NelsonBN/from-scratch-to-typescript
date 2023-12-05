let car = {
    name: "BMW",
    model: "M5",
    year: 2019
};
console.log(car);
console.log(typeof car);


console.log('------------------');


let user: {
    name: string;
    age: number;
    email: string;
};

user = {
    name: "John",
    age: 30,
    email: "john@fake.fk"
};
console.log(user);
console.log(typeof user);


console.log('------------------');


function loginUser(user: { name: string, age: number, email: string }) {
    console.log("Welcome", user.name, user.age, user.email);
}

loginUser({ name: "Max", age: 26, email: "faking@emailing.fk" });


console.log('------------------');

interface Entity {
    id: number;
}

interface Person {
    name: string;
}

interface Teacher extends Person, Entity {
    class: string;
}

function printTeacher(teacher: Teacher) {
    console.log(`Id ${teacher.id} Teacher ${teacher.name} teaches ${teacher.class}`);
}

printTeacher({ id: 12, name: "Max", class: "Math" });


console.log('------------------');


type City = {
    name: string;
    population: number;
};

function printCity(city: City) {
    console.log(`City ${city.name} has population of ${city.population}`);
}

printCity({ name: "New York", population: 20000000 });


console.log('------------------');

interface Animal {
    name: string;
    age?: number;
}

function printAnimal(animal: Animal)
{
    console.log(`Animal ${animal.name} is ${animal.age} years old`);
}
printAnimal({ name: "Dog" });


console.log('------------------');


interface Country {
    readonly countryCode: string;
    name: string;
}
function printCountry(country: Country) {
    // country.countryCode = "UK"; // error
    country.name = "United States";
    console.log(`Country ${country.name} has code ${country.countryCode}`);
}
printCountry({ countryCode: "US", name: "United Kingdom" });


console.log('------------------');


interface Customer {
    rule: string;
}

interface Employee {
    name: string;
    age: number;
}

type ShopUser = Customer & Employee;

const shopUser: ShopUser = {
    name: "Max",
    age: 26,
    rule: "Super Admin"
};
console.log(shopUser);
console.log(typeof shopUser);


console.log('------------------');

type Product = {
    name: string;
    price: number;
};

type Item = {
    name: string;
    quantity: number;
};


function printGeneric<T>(value: T): T {
    return value;
}
const product: Product = {
    name: "Laptop",
    price: 1000
};
console.log(printGeneric<Product>(product));

const item: Item = {
    name: "Mouse",
    quantity: 10
};
console.log(printGeneric<Item>(item));