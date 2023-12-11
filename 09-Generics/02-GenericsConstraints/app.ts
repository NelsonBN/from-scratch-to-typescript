function join<T extends object, U extends object>(objA: T, objB: U) {
    return {
        ...objA,
        ...objB
    }
}

const obj1 = { name: 'Max' }
const obj2 = { age: 30 }
const resultObj = join(obj1, obj2)
console.log(resultObj);


console.log('------------------');

function prop<T, K extends keyof T>(obj1: T, key: K) {
    return obj1[key]
}

const personName = prop({ name: 'Max', age: 30 }, 'name');
console.log(personName);

const personAge = prop({ name: 'Max', age: 30 }, 'age');
console.log(personAge);