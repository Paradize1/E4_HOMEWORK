function task2(str, obj) {
    return str in obj;
}

const obj1 = {a:1, b:2};
const obj2 =  Object.create(obj1);
obj2.c = 8;
obj2.d = 10;

console.log(task2('a', obj2));
console.log(task2('b', obj2));
console.log(task2('c', obj2));
console.log(task2('d', obj2));
console.log(task2('e', obj2));
console.log(task2('f', obj2));