function object(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(`${key}: ${obj[key]}`);
        }
    }
}

const obj1 = {a:1, b:2};
const obj2 =  Object.create(obj1);
obj2.c = 8;
obj2.d = 10;

object(obj2);