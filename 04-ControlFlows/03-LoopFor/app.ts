for(let i = 0; i < 10; i++) {
    console.log(i);
}


console.log('-------------------');


let carModels: string[] = ['Ferrari', 'Porsche', 'Lamborghini'];
carModels.forEach(carModel => console.log(carModel));


console.log('-------------------');


let weekDays: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

for(let weekDay of weekDays) {
    console.log(weekDay);
}


console.log('-------------------');


let months: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
for(let i in months) {
    console.log(months[i]);
}