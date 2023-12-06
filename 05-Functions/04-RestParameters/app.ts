// Rest Parameters
function addNumbers(...nums: number[]) {
    return nums.reduce((total, num) => total + num, 0);
}

console.log(addNumbers(1, 2, 3));
console.log(addNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));