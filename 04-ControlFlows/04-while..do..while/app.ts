let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

console.log('-------------------');

let j =6
do
{
    console.log(j);
    j++;
} while (j < 2);

console.log('-------------------');

let k = 0;
while (k < 5) {
    console.log(k);
    k++;
    if (k == 3) {
        break;
    }
}


console.log('-------------------');


const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
let weekOfday = 0;
while(weekDays[weekOfday]) {
    console.log(weekDays[weekOfday]);
    weekOfday++;
}