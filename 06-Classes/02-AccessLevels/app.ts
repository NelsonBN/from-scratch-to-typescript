class Person
{
    private id: number;
    protected state: string;
    public name: string;

    constructor(id: number, name: string)
    {
        this.id = id;
        this.name = name;
    }

    public getId(): number
    {
        return this.id;
    }
}

class Employee extends Person
{
    constructor(id: number, name: string)
    {
        super(id, name);
        this.state = "active";
    }

    public getState(): string
    {
        return this.state;
    }

    public getFullData(): string
    {
        return `${this.getId()} - ${this.name} - ${this.state}`;
    }
}

let person = new Employee(1432, "John");

console.log(person.getId());
console.log(person.getState());
console.log(person.name);
console.log(person.getFullData());

console.log("------------------------");

class Post
{
    constructor(private title: string, private content: string)
    {
    }

    publish(): void
    {
        console.log(`${this.title} - ${this.content}`);
    }
}
const post = new Post("Hello world", "This is my first post");
//post.title = "Hello world 2"; // Error: Property 'title' is private and only accessible within class 'Post'.
post.publish();