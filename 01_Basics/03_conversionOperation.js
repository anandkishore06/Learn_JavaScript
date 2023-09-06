// String to Number
// Method 1

let str = "Anand";
let num = Number(str);
console.log(typeof(num)); // number

// Method 2

let num1 = +"Anand";
console.log(typeof num1); // number

// Method 3

let y = '20';
console.log(typeof parseInt(y)); // number

// numeric string used with - , / , * results number type

let result;

result = '4' + '2';
console.log(result); // 42 - Concatination of string

result = '4' - '2'; 
console.log(result); // 2
console.log(typeof result); // number

result = '4' - 2;
console.log(result); // 2
console.log(typeof result); // number

result = '4' * '2';
console.log(result); // 8
console.log(typeof result); // number

result = '4' / 2;
console.log(result); // 2
console.log(typeof result); // number

// --------------------------------------------------------------------

// Number to String

// Method 1

let a = 20;
let str1 = String(a);
console.log(typeof str1); // string

// Method 2

let str2 = a+"";
console.log(typeof str2); // string

// ------------------------------------------------------------------

// Boolean to Number

let b = true;
let num2 = Number(b);
console.log(typeof num2);

// if boolean is used, true is 1, false is 0
let x;

x = '4' - true;
console.log(x); // 3

x = 4 + true;
console.log(x); // 5

x = 4 + false;
console.log(x); // 4

// ----------------------------------------------------------------

let res;
res = Number('hello');
console.log(res); // NaN

res = Number(undefined);
console.log(res); // NaN

res = Number(NaN);
console.log(res); // NaN

