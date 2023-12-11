export default abstract class Person {
    private name: string;
    private age: number;
    private email: string;

    constructor(name: string, age: number, email: string) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
}
