// if statement

let num1 = 9

if(num1 < 10) {
    console.log(`Condition True and Value is ${num1}`);
}
if(num1 > 9){
    console.log(`Condition False`);
}

// if and else

let num2 = 30, num3 = 10

if( num2 > num3 ){
    console.log(`Condition True and Value is ${num2}`);
}
else{
    console.log(`Condition True and Value is ${num3}`);
}

// nested if-else

const name = "Anand"
const age = 21

if(name){
    if(age >= 21){
        console.log(`Name is ${name} and Age is ${age}`);
    }
    else{
        console.log(`Name is ${name} and Age is ${age}`);
    }
}


// check even or odd

let number = 7
function checkEvenOdd(num){
    if(num % 2 == 0){
        console.log("Even Number");
    }
    else{
        console.log("Odd Number");
    }
}

checkEvenOdd(number)


// with logical operator

const userLoggedIn = true
const userLoggedOut = false
const userage = 18

if(userLoggedIn && userage >= 18){
    console.log("Allow user to buy something");
}else{
    console.log("Don't Allow");
}

// difference btw == and ===

let val1 = "2"
let val2 = 2

if(val1 == val2){
    console.log(`Only checked the data`);
}
if(val1 ===  val2){
    console.log(`Checked Data as well as Data Type`);
}else{
    console.log("Different Data Types");
}


// Note -++++++++++++++++++++++++++++

if(val1 == val2)console.log("Hello"),console.log("World"); // Hello World