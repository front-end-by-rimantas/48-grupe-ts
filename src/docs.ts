/*
https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
*/

let name: string = 'Jonas';
const age: number = 99;
const isMarried: boolean = true;

let name2 = 'Jonas';
const age2 = 99;
const isMarried2 = true;

const marks: number[] = [10, 2];
const mixList: (string | number)[] = [10, 2, 'a', 'b'];

const listNumbers = [1, 2];
const listStrings = ['a', 'b'];
const listFixedPositions: [number, number, string, string] = [10, 2, 'a', 'b'];
const listNumbersOrStrings: number[] | string[] = ['a', 'b'];

const listNumbers2: Array<number> = [1, 2];
const listStrings2: Array<string> = ['a', 'b'];
const listmix2: Array<string | number> = ['a', 'b', 5];

let notSure;
notSure = true;
notSure = 'asd';

function sum(a: number, b: number): string {
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

function connectStrings(a: string, b: string) {
    return a + b;
}

sum(7, 5);
sum('asd', 5);
sum('5456', 5);

function gautiDuomenu() {
    return [1, 2, 3];
}

function gautiDuomenu2(): number[] {
    return [1, 2, 3];
}

function gautiDuomenu3(): Array<number> {
    return [1, 2, 3];
}

async function gautiDuomenu4(): Promise<number[]> {
    return [1, 2, 3];
}

async function gautiDuomenu5(): Promise<Array<number>> {
    return [1, 2, 3];
}

async function random(): Promise<string> {
    // Youtube: event loop
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.5) {
                resolve('Daugiau');
            } else {
                reject('Ne daugiau');
            }
        }, 200);
    });
}

console.log('Random: start');

try {
    const a = await random();
    console.log('Random:', a);
} catch (error) {
    console.log('Random:', error);
}

let s = Math.random() < 0.5 ? 'Labas' : 123;

if (typeof s === 'string') {
    s = s.toLowerCase();
} else {
    s = s.toFixed(2);
}
console.log(s);
console.clear();

function diff(a: number, b: number) {
    return a - b;
}
console.log(diff(7, 5));

type Point = {
    x: number;
    y: number;
};

function printCoord(pt: Point) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });

type PersonName = {
    first: string;
    last?: string;
}

// Hi, my name is Vardenis.
// Hi, my name is Vardenis Pavardenis.
function printName(obj: PersonName) {
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

const obj: {
    a: string;
    b?: string;
} = {
    a: 'a',
};
console.log(obj.a?.toUpperCase());
console.log(obj.b?.toUpperCase());

console.clear();

type UserInput = number | string;
type ErrorResult = {
    status: 'error';
    message: string;
}
type SuccessResult = {
    status: 'ok';
    value: number;
}

function addition(a: UserInput, b: UserInput): ErrorResult | SuccessResult {
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
} else {
    console.log(add1.value);
}

console.clear();

type Product = {
    name: string;
    count: number;
}

type BuyResult = {
    message: string;
    timestamp: number;
    sellerName: string;
}

type BuyInfoResult = {
    status: 'info';
} & BuyResult;

type BuyWarningResult = {
    status: 'warning';
} & BuyResult;

type BuySuccessResult = {
    status: 'success';
    item: Product;
    change?: number;
} & BuyResult;

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

function buy(price: number, money?: number): BuyInfoResult | BuyWarningResult | BuySuccessResult {
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


type Student = {
    name: string;
    age: number;
    isMarried: boolean;
}

const jonas: Student = {
    name: 'Jonas',
    age: 99,
    isMarried: true,
};

const jonasJSON = JSON.stringify(jonas);

try {
    // const jonasData = JSON.parse(jonasJSON) as Student;
    // const studName = jonasData.name!;

    const jonasData = <Student>JSON.parse(jonasJSON);
    const studName = jonasData.isMarried;
    console.log(studName);
} catch (error) {
    console.error(error);
}

function compare(a: string, b: string) {
    return a === b ? 0 : a > b ? 1 : -1;
}

// declare function handleRequest(url: string, method: "GET" | "POST"): void;

// const req = { url: "https://example.com", method: "GET" };
// handleRequest(req.url, req.method);


function printAll(strs: string | string[] | null) {
    if (strs === null) {

    } else if (typeof strs === 'string') {

    } else if (Array.isArray(strs)) {

    } else {

    }
}


function multiplyAll(values: number[] | undefined, factor: number) { }

multiplyAll([1, 2, 3], 4)
multiplyAll(undefined, 4)
multiplyAll(4)


const data = {
    name: 'Data name',
    age: 99,
    isMarried: true,
}

if ('name' in data) {
    console.log(data.name);
} else {
    console.log(data.name);
}

if (Object.keys(data).includes('name')) {
    console.log(data.name);
} else {
    console.log(data.name);
}





let float: 'left' | 'right' | 'none' = 'left';

let display: 'block' | 'flex' | 'grid' = 'block';
display = 'flex';
display = 'grid';


function firstElement<T>(arr: T[]): T | undefined {
    return arr[0];
}


const t1 = firstElement<number>([]);
const t2 = firstElement<string>([]);

function map<Input, Output>(
    arr: Input[],
    func: (arg: Input) => Output
): Output[] {
    return arr.map(func);
}

// Parameter 'n' is of type 'string'
// 'parsed' is of type 'number[]'
const parsed = map<string, number>(["1", "2", "3"], (n) => parseInt(n));


function sum2(a: number, b: number): number {
    return a + b;
}

function sum3(a: string, b: string): string {
    return a + b;
}

function sum4<T>(a: T, b: T): string {
    return '' + a + b;
}
