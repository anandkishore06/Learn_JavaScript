// this keyword

const user = {
    username : "Anand",
    age : 23,
    welcomeMessage : function (){
        console.log(`${this.username}, welcome to website`);
        console.log(this); // this refers to current context
    }
}

user.welcomeMessage()
user.username = "Sam"
user.welcomeMessage()

console.log(this); // {} - in node environment this refers to empty object here at line no 16.

// Note - global object in browser is window object and this refers th window object in browser

function chai(){
    let username = "Anand"
    console.log(this.username); // undefined
    console.log(this); // here this is not empty
}
chai()

// function expression

const tea = function (){
    let username = "Anand"
    console.log(this.username); // undefined
}

tea()

// arrow function

const add = (num1, num2) => {
    let username = "Anand"
    console.log(this.username); // undefined
    console.log(this);  // {}
    return (num1 + num2);  // explicit return - here in this case, if we want to return something then have to write return statement.
}

add(3,2)

const addTwo = (num1, num2) => (num1 + num2)  // no need to write return statement here. - implicit return

console.log(addTwo(4,8));  // 12



// if we want to return object

const obj = () => ({username : "Anand"})
console.log(obj().username);  // Anand
