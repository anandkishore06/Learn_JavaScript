// array - In javascript, elements of an array is similar or differents
// array is an object and resizable

const arr = [0, 1, 2, 3, 4, 5]

const myHeros = ["SRK", "Anand"]

const arr2 = new Array(1,2,3,4,5)
console.log(arr2[3]); // 3
console.log(arr[1]); // 1
console.log(arr.length); // 6

// Array Methods

arr.push(6); // add elements in array using push() method
console.log(arr);
arr.pop(); // remove elements from last
console.log(arr);

arr.unshift(8); // add elements from start index
console.log(arr);
arr.shift(); // remove elements from start index
console.log(arr);

console.log(arr.indexOf(8)); // -1 because 8 not present in arr
console.log(arr.indexOf(3)); // 3
console.log(arr.includes(3)); // true

// arr to string using join() 

const newArr = arr.join()
console.log(arr);  //[ 0, 1, 2, 3, 4, 5 ]

console.log(newArr);  // 0,1,2,3,4,5 (string format)

// slice - copy elements from arr,orginal array-  not changes 
// splice - change the array or remove the elements from array,
//          orginal array changes.

console.log("A1 ",arr);
const myn1 = arr.slice(1,3)
console.log(myn1);
console.log("A2 ",arr);

const myn2 = arr.splice(1,3)
console.log("B ",arr);
console.log(myn2);