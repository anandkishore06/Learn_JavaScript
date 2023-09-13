// Ternary Operator (condition?true:false)

// find max number between two given Number

let num1 = 20
let num2 = 30

let ans = num1 > num2 ? num1 : num2;

console.log(ans);  // 30



// Nullish Coalescing Operator (??) : null undefined

let val1,val2,val3;
val1 = 5 ?? 10 //5

val2 = null ?? 20  // 20

val3 = undefined ?? 30

val1 = null ?? 10 ?? 20  // 10

console.log(val3);   // 30
console.log(val2);  // 20
console.log(val1);  // 5
