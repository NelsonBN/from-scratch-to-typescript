let currency: [string, number] = ['USD', 3.14];
console.log(currency);
console.log(currency[0]);
console.log(currency[1]);

console.log('------------------');

currency[0] = 'EUR';
currency[1] = 4.14;
console.log(...currency);

console.log('------------------');

// Spread Operator
let post: [string, ...string[]] = ['Title post', 'post content', 'I am the author'];
console.log(post);

console.log('------------------');

// Labeled Tuple
let customer: [name: string, age: number, country: string] = ['John', 30, 'USA'];
console.log(customer);

let user: [id: number, name: string, age: number, country: string] = [4234, ...customer];
console.log(user);

console.log('------------------');

function showUsers(names: string[], ages: number[], countries: string[]) {
    return [...names, ...ages, ...countries];
}

console.log(showUsers(
    ['John', 'Mary'],
    [30, 25],
    ['USA', 'UK']));

console.log('------------------');

type CustomName =
    | [firstName: string, lastName: string]
    | [firstName: string, middleName: string, lastName: string];

function getFullName(name: CustomName) {
    return [...name];
}

console.log(getFullName(['John', 'Doe']));
console.log(getFullName(['John', 'Doe', 'Smith']));