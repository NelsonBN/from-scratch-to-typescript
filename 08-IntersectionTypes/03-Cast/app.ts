const value1: unknown = "nelson";

const value1_1: string = (value1 as string);

console.log(value1_1.toUpperCase());
console.log(typeof value1_1);

console.log("--------------------------------------------------");

const value2: unknown = "Nelson Nobre"
console.log(value2);

const value2_1: string = (<string>value2);