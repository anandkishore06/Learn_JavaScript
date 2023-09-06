/*
There are two types of data types in JavaScript.
01. Primitive data type
02. Non-primitive (reference) data type

Note : JavaScript is a dynamically typed (also called loosely typed) scripting language., means you don't need to specify type of the variable because it is dynamically used by JavaScript engine.

The latest ECMAScript standard defines eight data types Out of which seven data types are Primitive(predefined) and one complex or Non-Primitive.

*/

// Primitive Data Types : 

/*
    01. Number

    The number type in JavaScript contains both integer and floating-point numbers. Besides these numbers, we also have some ‘special-numbers’ in javascript that are: ‘Infinity’, ‘-Infinity’, and ‘NaN’. Infinity basically represents the mathematical ‘?’. The ‘NaN’ denotes a computational error.

    It can only safely store integers in the range -(2^53 − 1) (Number.MIN_SAFE_INTEGER) to 2^53 − 1 (Number.MAX_SAFE_INTEGER).
*/
let num = 2; // Integer 
let num2 = 1.3; // Floating point number
let num3 = 10/0; // Infinity
let num4 = 'something here too'/2; // NaN

console.table([num,num2,num3,num4])

// the typeof operator returns the data type of its operand in the form of a string. The operand can be any object, function, or variable. 

console.log(typeof num); // number

/*
    02. String

    A String in javascript is basically a series of characters that are surrounded by quotes. There are three types of quotes in Javascript, which are: "",'',``
*/

let str1 = "Hello There !";
let str2 = 'Single Quotes works FINE !'
let str3 = `BackTick - Prints str1 ${str1} and str2 ${str2}`

console.table([str1,str2,str3])
console.log(typeof str1); // string

/*
    03. Boolean
    
    The boolean type has only two values: true and false
    Boolean values are usually used for conditional operations, including ternary operators, if...else, while, etc.

*/
let isTrue = true;
let isFalse = false;

console.table([isTrue+" "+isFalse]) 
console.log(typeof isTrue); // boolean

/*
    04. Null
    The special null value does not belong to any of the default data types. It forms a separate type of its own which contains only the null value:
    The ‘null’ data type basically defines a special value that represents ‘nothing’, ’empty’, or ‘value unknown’.

*/
let accountNo = null;
console.log(accountNo);
console.log(typeof accountNo); // object 

/*
    05. undefined
    Conceptually, undefined indicates the absence of a value.

    A return statement with no value (return;) implicitly returns undefined.
    A variable declaration without initialization (let x;) implicitly initializes the variable to undefined.
*/

let x;
console.log(x); // undefined

/*
    06. BigInt

    The BigInt type is a numeric primitive in JavaScript that can represent integers with arbitrary magnitude. With BigInts, you can safely store and operate on large integers even beyond the safe integer limit (Number.MAX_SAFE_INTEGER) for Numbers.

    A BigInt is created by appending n to the end of an integer or by calling the BigInt() function.
*/
const y = BigInt(Number.MAX_SAFE_INTEGER);

console.log(y); // 9007199254740991n

console.log(y + 1n === y + 2n); //  false because 9007199254740992n and 9007199254740993n are unequal

console.log(Number.MAX_SAFE_INTEGER+1);
console.log(Number.MAX_SAFE_INTEGER+2);
console.log(Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER +2); // true because both are 9007199254740992;


/*
    07. Symbol
    Symbols are new primitive built-in object types introduced as part of ES6. Symbols return unique identifiers that can be used to add unique property keys to an object that won’t collide with keys of any other code that might add to the object. They are used as object properties that cannot be recreated. It basically helps us to enable encapsulation or information hiding.

    A Symbol is a unique and immutable primitive value and may be used as the key of an Object property
*/

let symbol1 = Symbol("Geeks")
let symbol2 = Symbol("Geeks")
  
// Each time Symbol() method 
// is used to create new global Symbol
console.log(symbol1 == symbol2); // False

// Non-Primitive Data Types : 
/*
    08. Object
    
    Objects are not primitive in nature .
    Objects are used to store keyed collections of various data and more complex entities.
    Objects are mutable in JavaScript.
    Values can be stored as key value pairs.        
*/
let person = new Object(); // "object constructor" syntax
let user = {
    username : "Anand",
    age : 21
};  // "object literal" syntax 

console.log(user)

// -----------------------------------------------------
/* Note : 
// console.log(+0 === -0) // true
// console.log(-0); // -0
*/