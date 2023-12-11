export {};

type Gender = 'Male' | 'Female' | 'Other'; // Union Type

let gender: Gender = 'Male';
console.log(gender);


console.log('------------------');


type Id = number | string; // Union Type

let userId: Id = 5;
console.log(userId);
console.log(typeof userId);

let personId = '5';
console.log(userId);
console.log(typeof personId);


console.log('------------------');

type Country = {
    countryCode: string;
};

type City = {
    cityName: string;
};


type Address = Country & City; // Intersection Type or Marged Type

let address: Address = {
    countryCode: 'US',
    cityName: 'New York'
};
console.log(address);
console.log(typeof address);


console.log('------------------');


type Person = {
    firstName: string;
    lastName: string;
};

let persons: Person[] = [
    { firstName: 'John', lastName: 'Doe' },
    { firstName: 'Jane', lastName: 'Doe' },
    { firstName: 'John', lastName: 'Smith' }
];
console.log(persons);

console.log('------------------');

let cars: { model: string, year: number }[] = [
    { model: 'Mustang', year: 1967 },
    { model: 'Camaro', year: 1970 },
    { model: 'Challenger', year: 1971 }
];
console.log(cars);