// object and function

const user = {
    username : "Anand",
    age : 23
}

function userLoggedIn(anyobject){
    console.log(`Welcome to Code - ${anyobject.username} and Your age is ${anyobject.age}`);
}

userLoggedIn(user)
userLoggedIn({
    username : "Sam",
    age : 23
})

// passing an array

const arr = [100,200,300,400,500]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(arr));

console.log(returnSecondValue([20,29,40]));