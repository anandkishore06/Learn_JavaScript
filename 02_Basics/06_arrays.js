// //The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

// Destructuring of Arrays

const arr = ["Anand", 21, "Kolkata", "WB"]
const [name , age, city] = arr;

const arr1 = ["Hello", "World"]
const [x, y, z] = arr1;
console.log(x,y,z); // x = Hello, y= World , z = undefined

console.log(name,age,city); // name = Anand, age = 21, city = Kolkata

const user = ["Anand", 22, "Patna", ["Male", 789456]]

const [name1, age1, city1, [gender,salary]] = user;

console.log(name1,gender,salary);