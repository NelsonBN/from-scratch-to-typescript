const num = 100;

if (num > 100) {
    console.log("Greater than 100");
}
else if (num > 150) {
    console.log("Greater than 150");
}
else {
    console.log("Less than or equal to 100");
}


if (num <= 100) {
    console.log(`The number ${num} is less than or equal to 100`);
}

console.log(`The number ${num} is ${num > 50 ? "greater" : "less"} than 50`);