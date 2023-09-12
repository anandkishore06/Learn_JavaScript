// Spread syntax "expands" an array into its elements, while rest syntax collects multiple elements and "condenses" them into a single element.

const arr = [5, 8]
function sumOne(a, b){
    return a + b;
}
console.log(sumOne(9, 5));
console.log(sumOne(...arr)); // Here ...arr acts as a spread operator, and expands [5, 8] into 5, 8 and passed into the sumOne fn.

function sumTwo(a,b,...args){ // here ...args acts as rest opeartor 6, 7 are changes to an array [6, 7]
    console.log(args);
    let mult = a * b;
    let sum = 0;
    for (const arg of args) {
        sum += arg
    }
    return [sum,mult]
}

console.log(sumTwo(9,8,6,7));


// We can use to merge two or more objects using spread opeartor

const user1 = {
    name : "Anand"
}
const user2 = {
    tname : "Aman"
}

const user3 = { // Shallow-cloning (excluding prototype) or merging of objects is possible
    ...user1,
    ...user2,
}

console.log(user3);

// unpacking of properties of an object using rest opeartor

const user = {
    firstname : "anand",
    city : "Kolkata",
    state : "WB"
};

const {firstname:fname, ...add} = user;

console.log(fname,add);