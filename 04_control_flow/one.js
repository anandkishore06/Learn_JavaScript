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