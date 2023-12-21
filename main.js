function mergeObjects(...objects){
    const hwobj = {};

    objects.forEach(obj => {
        Object.entries(obj).forEach(([key, value]) =>{
            if(!hwobj[key]){
                hwobj[key] = value;
            }
        });
    });
    return hwobj;
}

let obj1 = {name: "Andy", age: 25}
let obj2 = {gender: "M", age: 30}
let obj3 = {name: "Bobby", age: 35}

console.log(mergeObjects(obj1, obj2, obj3));
console.log(mergeObjects(obj2, obj3, obj1));
