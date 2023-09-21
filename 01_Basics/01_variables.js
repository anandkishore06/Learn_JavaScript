/* 
What are Variables ?
- Variables are the name of memory location where we can store data.
*/
// There are four Ways to Declare Variables in JavaScript

// 01. Using var keyword
var x = 20;
console.log(x);

// 02. Using let keyword
let y = 10;
console.log(y);

// 03. Using const keyword, initilization and declaration
const z = 20;
console.log(z);

// 04. without using any keyword (default)
a = 12;
console.log(a);

/*
Note : JavaScript is a dynamically-typed Language that's why data types of variables are known at run-time.
*/

// ------- More About var keyword ---------

/* This keyword is used to declare variables globally. If you used this keyword to declare a variable then the variable can accessible globally and changeable also.
- Can be redeclared
- Can be reassigned a value
- Only have global and function scope
- Variables are hoisted on top and can be used anywhere
- Can be redeclared anywhere in the program
*/

// -------- More About let keyword --------

/*
 This keyword is used to declare variable locally. If you used this keyword to declare a variable then the variable can accessible locally and it is changeable as well. It is good if the code gets huge.
 - Cannot be redeclared
 - Can be reassigned a value
 - Can have a block scope
 - Variables must be initialized before use
 - Can be redeclared inside a block
 */

 // --------- More About const keyword---------

 /*
  This keyword is used to declare variable locally. If you use this keyword to declare a variable then the variable will only be accessible within that block similar to the variable defined by using let and difference between let and const is that the variables declared using const values can’t be reassigned. So we should assign the value while declaring the variable.
  -	Cannot be redeclared
  - Cannot reassign the value
  - Can have a block scope
  - Variables must be initialized before use
  - Can never be redeclared
 */