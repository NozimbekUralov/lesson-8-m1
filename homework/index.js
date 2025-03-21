// 1-misol
const obj = { a: 2, b: 5, c: 8, d: 3 };

function powerUp(obj) {
    for (let key in obj) obj[key] *= obj[key];
    return obj
}
console.log(powerUp(obj));

// 2-misol
const obj1 = { name: "John", age: "30", city: "Paris" };

function reverse(obj) {
    let newObj = {};
    for (let key in obj) newObj[obj[key]] = key;
    return newObj
}
// console.log(reverse(obj1));

// 3-misol
const obj2 = { a: 1, b: true, c: null, d: 45 };

function conString(obj) {
    for (let key in obj) obj[key] = String(obj[key]);
    return obj
}
// console.log(conString(obj2));

// 4-misol
const obj3 = { name: "Alice", age: 25, city: "London", active: true };

function strs(obj) {
    let newObj = {}
    for (let key in obj) if (typeof obj[key] == "string") newObj[key] = obj[key];

    return newObj
}
// console.log(strs(obj3));

// 5-misol
const obj4 = { a: true, b: false, c: 10, d: "yes", e: true };

function findBool(obj) {
    return Object.values(obj).filter(value => typeof value == "boolean").length
}
// console.log(findBool(obj4));

// 6-misol
const obj5 = { short: 10, longer: 20, longestKey: 30 };

function findLongest(obj) {
    let arr = Object.keys(obj);
    let max = arr[0]
    arr.forEach((word) => {
        if (word.length > max.length) max = word;
    })
    return max
}
// console.log(findLongest(obj4));

// 7-misol
const obj6 = { apple: 10, banana: 20, apricot: 15, cherry: 25 };

function sortKeys(obj) {
    let newObj = {};
    Object.keys(obj).filter(key => key.startsWith("a")).forEach(key => newObj[key] = obj[key]);
    return newObj
}
// console.log(sortKeys(obj6));

// 8-misol
const obj7 = { name: "john", city: "london", country: "uk" };

function toUpper(obj) {
    for (let key in obj) obj[key] = obj[key].toUpperCase();
    return obj
}
// console.log(toUpper(obj7));