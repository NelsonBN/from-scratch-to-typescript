// Optional Parameters
function printProfile(name: string, age: number, email?: string) {
    console.log(`name: ${name}, age: ${age}`, email ? `, email: ${email}` : '');
}
printProfile('happy', 31);
printProfile('max', 28, 'max@fake.tk');


console.log('--------------------------------------------------');

type User = {
    name: string;
    age?: number;
};

let user: User = {
    name: 'Max',
};
function printUser(user: User) {
    console.log(`name: ${user.name}`, user.age ? `, age: ${user.age}` : '');
}
printUser(user);