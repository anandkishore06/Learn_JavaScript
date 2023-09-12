// Object Using Constructor
const obj1 = new Object()

// Object Chaining

const tinder = {
    userId : "anc45",
    userage : 45,
    email : 'abd@gmail.com',
    fullName : {
        userfullName : {
            firstName : "Anand",
            lastName : "Kishore"
        }
    }
}

console.log(tinder.fullName.userfullName.firstName);

// Merge two or more object in a single object using Object.assign(target,source)

const obj2 = {1:"one", 2:"two"}
const obj3 = {3:"three",4:"four"}

// Object.assign()- Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object.

const obj4 = Object.assign({},obj2,obj3)

// console.log(obj4);
// console.log(obj2);

// // Merge two or more object in a single object using spread opeartor

const obj5 = {...tinder,...obj2,...obj3}
console.log(obj5);

// Access keys 

console.log(Object.keys(tinder)); // returns array of keys
console.log(Object.values(tinder)); //  returns array of values

console.log(tinder.hasOwnProperty('age'));

console.log(tinder.hasOwnProperty('userage'));