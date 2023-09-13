// Hoisting : Hoisting is the default behavior of moving all the declarations(declaration of functions, variables, classes) at the top of the scope before code execution.

// let's see an example with var keyword

console.log(str);  // undefined due to hoisting
var str = "ChaiOrCode"
console.log(str);  // ChaiOrCode

// Note : let and const are also hoisted but they are in temporal deadzone because scope of let and const are not in the global exceution context.

// console.log(num1); //ReferenceError: Cannot access 'num1' before initialization
let num1 = 20;
console.log(num1);   // 20


// Hoisting of function - exact copy of function put into window object that's why we can access function from anywhere in the program

one()  // Anand

function one(){
    let name = "Anand"
    function two(){
        console.log(name);
    }
    two()
}

one() // Anand