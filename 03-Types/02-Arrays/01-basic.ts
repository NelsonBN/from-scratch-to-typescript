let fruits: string[] = ['Apple', 'Orange', 'Banana'];
console.log(`fruits: ${fruits} -> typeof ${typeof(fruits)}`);

let cities: Array<string> = ['London', 'Paris', 'New York'];
console.log(`cities: ${cities} -> typeof ${typeof(cities)}`);

console.log(`cities[1]: ${cities[1]}`);

cities[1] = 'Berlin';
console.log(`cities: ${cities}`);
console.log(`cities.length: ${cities.length}`);

fruits.push('Avocado');
console.log(`fruits: ${fruits}`);

let myNumbers: number[] = [1, 2, 3, 4, 5];

// Spread operator
let myNumbers2 = [...myNumbers, 6, 7, 8, 9, 10];
console.log(`myNumbers2: ${myNumbers2}`);

let frameworks: string[] = new Array('Angular', 'React', 'Vue');
console.log(`frameworks: ${frameworks}`);

for (let i = 0; i < frameworks.length; i++) {
    console.log(`frameworks[${i}]: ${frameworks[i]}`);
}

