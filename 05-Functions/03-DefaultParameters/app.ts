// Default Parameters
function printDetails(name: string, email: string = 'not registered') {
    console.log(`name: ${name}, email: ${email}`);
}
printDetails('happy');
printDetails('happy', 'max@fake.tk');
printDetails('John', undefined); // undefined is a valid value for a parameter with a default value
