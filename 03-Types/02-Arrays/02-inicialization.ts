const arr1: number[] = [1,2,3,4];
console.log(arr1);

const arr2: number[] = new Array(5);
console.log(arr2);

const arr3: number[] = new Array(3).fill(427);
console.log(arr3);

const arr4: number[][] = new Array(4).fill(new Array(5));
console.log(arr4);

const arr5: number[][] = new Array(7).fill(new Array(4).fill(12));
console.log(arr5);

let j = 1;
const arr6: number[][] = new Array(3).fill(new Array(4).fill(j++));
console.log(arr6);

let i = 0;
const arr7: number[][] = Array.from({ length: 3 }, () => new Array(3).fill(i++));
console.log(arr7);
