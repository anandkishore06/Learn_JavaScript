// Maths - Random Number --------------------------------------

console.log(Math.random()); // Output - 0 to <1 [floating Number]

console.log(Math.random()*10); // Output - 0 to <10 [floating Number]

console.log((Math.random()*10) + 1); // Output - 1 to 10 [floating Number]

console.log(Math.floor((Math.random()*10) + 1)); // Output - 1 to 10 [Integer Value]

console.log(Math.floor((Math.random()*100) + 1)); // Output - 1 to 100[Integer Value]

// Random Number between a specific range(min,max)

const min = 10
const max = 100
const randomNumber = Math.floor(Math.random()*(max-min+1)+min)
console.log(randomNumber); // The maximum is inclusive and the minimum is inclusive

// ----------------------------------------------------------------------

// Math.round()
const num = 39.530
console.log(Math.round(num)); // 40

// Math.pow()
console.log(Math.pow(2,3));

// Math.max | Math.min
const arr = [23,45,10]
console.log(Math.min(2,4,1)); // 1
console.log(Math.max(...arr)); // 45
console.log(Math.min(...arr)); // 10

// Math.sqrt

console.log(Math.sqrt(25)); // 5
console.log(Math.sqrt(2)); // 1.4142135623730951

// --------------------------------------------------------------------

// Number

const number1 = 29.3
const number2 = new Number(30.89)
const rupee = 100000000
console.log(number1.toString()); // 29.3 (String)
console.log(number2.toFixed(1)); // 30.9 (string)
console.log(rupee.toLocaleString("en-IN")); // convert to indian INR Style - 10,00,00,000
