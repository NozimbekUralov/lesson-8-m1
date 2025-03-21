// 1-misol
const user = {
    name: "Aziz",
    age: 30,
    country: "Uzbekistan",
    isMarried: false
};

function getStrings(obj) {
    const arr = [];
    for (let key in obj) {
        if (typeof obj[key] == "string") {
            arr.push(obj[key]);
        }
    }
    return arr;
}

console.log(getStrings(user))

// 2-misol
const data = {
    a: 10,
    b: 20,
    c: "Hello",
    d: 15
};

function sumNums(obj) {
    let sum = 0;
    Object.values(obj).filter(value => typeof value == "number").forEach(value => sum += value)

    return sum;
}

// console.log(sumNums(data))

// 3-misol
const numbers = {
    x: 45,
    y: 78,
    z: 22,
    k: 91
};

function findMax(obj) {
    let max = -Infinity

    Object.values(obj).filter(value => typeof value == "number").forEach(value => {
        if (value > max) {
            max = value;
        }
    });

    return max;
}

// console.log(findMax(numbers))

// 4-misol
const obj = {
    name: "Anvar",
    isAdmin: true,
    age: 25,
    isOnline: false
};

function delBool(obj) {
    for (let key in obj) {
        if (typeof obj[key] == "boolean") delete obj[key];
    }
    return obj;
}

// console.log(delBool(obj))

// 5-misol
const user1 = {
    name: "Ali",
    age: "25",
    country: "Uzbekistan"
};

function sortObj(obj) {
    const newObj = {};

    const keys = Object.keys(obj).reverse();
    for (let key of keys) newObj[key] = obj[key];

    return newObj;
}

// console.log(sortObj(user1))

// 6-misol
const data1 = {
    name: "Dilshod",
    age: 30,
    password: "123456",
    email: "test@example.com"
};

function delKeys(obj, keys) {
    for (let key of keys) delete obj[key];
    return obj;
}

// console.log(delKeys(data1, ["password", "email"]))

// 7-misol
const data2 = {
    name: "Alice",
    age: "unknown",
    country: "unknown",
    city: "Paris"
};

function changeVal(obj) {
    for (let key in obj) {
        if (obj[key] == "unknown") obj[key] = "N/A";
    }
    return obj;
}

// console.log(changeVal(data2))

// 8-misol
const data3 = {
    fruit: "banana",
    color: "yellow",
    country: "uzbekistan"
};

function capitalize(obj) {
    for (let key in obj) if (typeof obj[key] == "string") obj[key] = obj[key][0].toUpperCase() + obj[key].slice(1);
    return obj;
}

// console.log(capitalize(data3))