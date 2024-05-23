/*
https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
*/
let name = 'Jonas';
const age = 99;
const isMarried = true;
let name2 = 'Jonas';
const age2 = 99;
const isMarried2 = true;
const marks = [10, 2];
const mixList = [10, 2, 'a', 'b'];
const listNumbers = [1, 2];
const listStrings = ['a', 'b'];
const listFixedPositions = [10, 2, 'a', 'b'];
const listNumbersOrStrings = ['a', 'b'];
const listNumbers2 = [1, 2];
const listStrings2 = ['a', 'b'];
const listmix2 = ['a', 'b', 5];
let notSure;
notSure = true;
notSure = 'asd';
function sum(a, b) {
    if (a > 5) {
        return 'Daugiau';
    }
    if (b < 5) {
        return 'Maziau';
    }
    if (a === 5 && b === 5) {
        return `${a} ir ${b} kabejo palubej`;
    }
    return '' + (a + b);
}
function connectStrings(a, b) {
    return a + b;
}
sum(7, 5);
sum('asd', 5);
sum('5456', 5);
function gautiDuomenu() {
    return [1, 2, 3];
}
function gautiDuomenu2() {
    return [1, 2, 3];
}
function gautiDuomenu3() {
    return [1, 2, 3];
}
async function gautiDuomenu4() {
    return [1, 2, 3];
}
async function gautiDuomenu5() {
    return [1, 2, 3];
}
async function random() {
    // Youtube: event loop
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.5) {
                resolve('Daugiau');
            }
            else {
                reject('Ne daugiau');
            }
        }, 200);
    });
}
console.log('Random: start');
try {
    const a = await random();
    console.log('Random:', a);
}
catch (error) {
    console.log('Random:', error);
}
let s = Math.random() < 0.5 ? 'Labas' : 123;
if (typeof s === 'string') {
    s = s.toLowerCase();
}
else {
    s = s.toFixed(2);
}
console.log(s);
console.clear();
function diff(a, b) {
    return a - b;
}
console.log(diff(7, 5));
function printCoord(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });
// Hi, my name is Vardenis.
// Hi, my name is Vardenis Pavardenis.
function printName(obj) {
    const { first, last } = obj;
    return `Hi, my name is ${first}${last ? ' ' + last : ''}.`;
    // if (last) {
    //     return `Hi, my name is ${first} ${last}.`;
    // } else {
    //     return `Hi, my name is ${first}.`;
    // }
}
// Both OK
const pn1 = printName({ first: "Bob" });
const pn2 = printName({ first: "Alice", last: "Alisson" });
console.log(pn1);
console.log(pn2);
const obj = {
    a: 'a',
};
console.log(obj.a?.toUpperCase());
console.log(obj.b?.toUpperCase());
console.clear();
function addition(a, b) {
    if (isNaN(+a)) {
        return {
            status: 'error',
            message: 'Neteisingas pirmas parametras',
        };
    }
    if (isNaN(+b)) {
        return {
            status: 'error',
            message: 'Neteisingas antras parametras',
        };
    }
    return {
        status: 'ok',
        value: +a + +b,
    };
}
const add1 = addition(7, 5);
if (add1.status === 'error') {
    console.log(add1.message);
}
else {
    console.log(add1.value);
}
console.clear();
// type BuySuccessResult = {
//     status: 'success';
//     item: Product;
// } & BuyResult;
// type BuySuccessWithChangeResult = {
//     hasChange: true;
//     change: number;
// } & BuySuccessResult;
// type BuySuccessWithNoChangeResult = {
//     hasChange: false;
// } & BuySuccessResult;
function buy(price, money) {
    if (money === undefined) {
        return {
            status: 'info',
            message: `Sios prekes kaina yra ${price} EUR.`,
            timestamp: Date.now(),
            sellerName: 'John',
        };
    }
    if (money < 0) {
        return {
            status: 'warning',
            message: `Tu man dar skolingas ${money} EUR!`,
            timestamp: Date.now(),
            sellerName: 'John',
        };
    }
    if (money < price) {
        return {
            status: 'info',
            message: `Davei per mazai pinigu!`,
            timestamp: Date.now(),
            sellerName: 'John',
        };
    }
    if (money === price) {
        return {
            status: 'success',
            message: `Stai jusu preke!`,
            item: {
                name: 'Cepelinai',
                count: 2,
            },
            hasChange: false,
            timestamp: Date.now(),
            sellerName: 'John',
        };
    }
    return {
        status: 'success',
        message: `Stai jusu preke ir graza!`,
        item: {
            name: 'Cepelinai',
            count: 2,
        },
        hasChange: true,
        change: money - price,
        timestamp: Date.now(),
        sellerName: 'John',
    };
}
const item1 = buy(5);
const item2 = buy(5, -3);
const item3 = buy(5, 3);
const item4 = buy(5, 5);
const item5 = buy(5, 10);
switch (item3.status) {
    case 'info':
        item3.message;
        item3.sellerName;
        item3.timestamp;
        break;
    case 'warning':
        item3.message;
        item3.sellerName;
        item3.timestamp;
        break;
    case 'success':
        item3.message;
        item3.sellerName;
        item3.timestamp;
        item3.item;
        if (item3.change !== undefined) {
            item3.change;
        }
        // if (item3.hasChange) {
        //     item3.change;
        // }
        break;
    default:
        break;
}
const jonas = {
    name: 'Jonas',
    age: 99,
    isMarried: true,
};
const jonasJSON = JSON.stringify(jonas);
try {
    // const jonasData = JSON.parse(jonasJSON) as Student;
    // const studName = jonasData.name!;
    const jonasData = JSON.parse(jonasJSON);
    const studName = jonasData.isMarried;
    console.log(studName);
}
catch (error) {
    console.error(error);
}
function compare(a, b) {
    return a === b ? 0 : a > b ? 1 : -1;
}
// declare function handleRequest(url: string, method: "GET" | "POST"): void;
// const req = { url: "https://example.com", method: "GET" };
// handleRequest(req.url, req.method);
function printAll(strs) {
    if (strs === null) {
    }
    else if (typeof strs === 'string') {
    }
    else if (Array.isArray(strs)) {
    }
    else {
    }
}
function multiplyAll(values, factor) { }
multiplyAll([1, 2, 3], 4);
multiplyAll(undefined, 4);
multiplyAll(4);
const data = {
    name: 'Data name',
    age: 99,
    isMarried: true,
};
if ('name' in data) {
    console.log(data.name);
}
else {
    console.log(data.name);
}
if (Object.keys(data).includes('name')) {
    console.log(data.name);
}
else {
    console.log(data.name);
}
export {};
