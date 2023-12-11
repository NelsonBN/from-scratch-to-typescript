export {}

function randomValues<T>(values: T[]): T {
    let randomItem = Math.floor(Math.random() * values.length);
    return values[randomItem];
}

function printRandomValues<T>(values: T[]): void {
    values.forEach(element => {
        console.log(element);
    });
}

let colors: string[] = ['red', 'green', 'blue'];
console.log(randomValues(colors));
printRandomValues(colors);

let numbers: number[] = [1, 2, 3, 4, 5];
console.log(randomValues(numbers));
printRandomValues(numbers);