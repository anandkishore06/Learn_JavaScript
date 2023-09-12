const tinderUser = new Object()
console.log(tinderUser);

//The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

// Destructuring of object

const course  = {
    courseName :"Chai Or Code",
    price : 9999,
    courseInstructor : "Anand"
}

const {courseInstructor: instructor,price} = course

console.log(instructor);
console.log(price);