export { }

declare global {
    interface Array<T> {
        last(): T|undefined;
    }
}
Array.prototype.last = function () {
    if (this.length === 0) return undefined;
    return this[this.length - 1];
}

const arr1 = [1, 2, 3];
console.log(arr1.last());

const arr2 = [];
console.log(arr2.last());
