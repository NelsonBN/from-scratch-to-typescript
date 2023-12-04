let value: unknown;

value = true;
console.log(`value: ${value} with type: ${typeof value}`);

value = 1;
console.log(`value: ${value} with type: ${typeof value}`);

value = 'Hello World';
console.log(`value: ${value} with type: ${typeof value}`);

value = [];
console.log(`value: ${value} with type: ${typeof value}`);


let valueAny: any = 34534;
let valueBool: boolean = valueAny;
console.log(`value: ${valueBool} with type: ${typeof valueBool}`);

// Error
// let valueUnknown: unknown = 34534;
// let valueNumber: number = valueUnknown;
// console.log(`value: ${valueNumber} with type: ${typeof valueNumber}`);