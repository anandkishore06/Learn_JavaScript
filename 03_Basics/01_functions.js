// functions are the block of code or a set of statement that performs certain task.

// function declaration using function keyword

function greet(){
    console.log("Hello Coders !");
}
greet()    // calling a function

// How to pass a data to the function

function addOne(num1){
    console.log(++num1);
}
addOne(9)     //10

// function with return statement

function addTwo(num1, num2){
    let num3 = num1 + num2
    return num3
}
console.log(addTwo(7,8));   // 15

function multiplyTwoNumber(num1, num2) {
    return num1 * num2
}
console.log(multiplyTwoNumber(8,9));    // 72

// function with rest opeartor and spread opeartor

function findMax(...args){       
    let max = Math.max(...args)
    return max
}
console.log(findMax(9,2,3,10,4));

function findMin(num1,num2,...args){
    let divide = num1/num2
    let min = Math.min(...args)
    return [divide,min]
}
console.log(findMin(23,4,6,7,8,90,12,34,56));

// function with if and else

function checkEvenOdd(num1){
    if(num1 % 2 == 0){
        console.log("Even NUmber!");
    }
    else{
        console.log("Odd NUmber!");
    }
}

checkEvenOdd(7);

// if we don't pass anything to the function then by default it will be undefined

function loginUser(username){
    if(username === undefined){
        console.log("Please Enter a UserName");
    }
    return `${username} just Logged In`
}

console.log(loginUser()); // undefined just Logged In
console.log(loginUser("Anand")); // Anand just Logged In


