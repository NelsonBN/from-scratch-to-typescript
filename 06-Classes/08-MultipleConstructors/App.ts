class User {
    name: string;
    age: number;

    // signature overload
    constructor(name: string);
    constructor(name: string, age: number);

    // Constructor
    constructor(name: string, age?: number) {
        this.name = name;
        this.age = age ?? 20;
    }
}

const user1 = new User("Alice");
const user2 = new User("Bob", 30);

console.log(user1.name, user1.age); // Alice 20
console.log(user2.name, user2.age); // Bob 30
