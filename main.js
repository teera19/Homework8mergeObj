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
const obj1 = { name: 'iPond', age: 22 };
const obj2 = { age: 23};

const mergeobj = mergeObjects(obj1, obj2);
console.log( mergeobj);