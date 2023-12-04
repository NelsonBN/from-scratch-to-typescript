let myFirstName: string = 'Nelson';
console.log(`myName: ${myFirstName} -> typeof ${typeof(myFirstName)}`);

let myLastName: string = "Nobre";
console.log(`myName: ${myLastName} -> typeof ${typeof(myLastName)}`);

let fruits: string[] = ['Apple', 'Orange', 'Banana'];
console.log(`fruits: ${fruits} -> typeof ${typeof(fruits)}`);


// Boolean != boolean
// Boolean is a wrapper object
// boolean is a primitive type
let isAdult: boolean = true;
console.log(`isAdult: ${isAdult} -> typeof ${typeof(isAdult)}`);


// number != Number
// Number is a wrapper object
// number is a primitive type
let myAge: number = 25;
console.log(`myAge: ${myAge} -> typeof ${typeof(myAge)}`);

let binary: number = 0b1010;
console.log(`binary: ${binary} -> typeof ${typeof(binary)}`);

let octal: number = 0o744;
console.log(`octal: ${octal} -> typeof ${typeof(octal)}`);

let hex: number = 0xf00d;
console.log(`hex: ${hex} -> typeof ${typeof(hex)}`);


let amount: number = 122.154;
console.log(`amount: ${amount} -> typeof ${typeof(amount)}`);


// bigint is only available with ES2020 or esnext
let bigNumber: bigint = 10000000111110000111111110000001n;
console.log(`bigNumber: ${bigNumber} -> typeof ${typeof(bigNumber)}`);