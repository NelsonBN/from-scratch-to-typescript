// Named function
function sum(a: number, b: number): number {
    return a + b;
}
console.log(sum(2, 3));


console.log("--------------------");


function subtract(a: number, b: number)
{
    return a - b;
}
console.log(subtract(2, 3));


console.log("--------------------");

// Arrow functions expression
const multiply = (a: number, b: number): number => {
    return a * b;
}
console.log(multiply(2, 3));


console.log("--------------------");


const divide = (a: number, b: number) => a / b;
console.log(divide(2, 3));


console.log("--------------------");

// Function constructor
const myFunction = new Function("a", "b", "return a * b");
console.log(myFunction(5, 9));

const yourFunction = new Function("message", "return `Hello ${message}!`");
console.log(yourFunction("World"));