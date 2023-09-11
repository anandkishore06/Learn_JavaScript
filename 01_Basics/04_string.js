const str = "ChaiOrCode";

// Methods/functions of String :

// To find Length : 
console.log(str.length)

// to find index of character
console.log(str.indexOf('r'));

// to find character at index
console.log(str.charAt(2));

// to find substring from starting position
console.log(str.substring(1,5));

//The slice() method of String values extracts a section of this string and returns it as a new string, without modifying the original string.
console.log(str.slice(4,-5));

//to upperCase
console.log(str.toUpperCase());

// to lowerCase
console.log(str.toLowerCase());

const str1 = " Hello World!    ";

// trim() function is used to remove white spaces from start and end

console.log(str1.trim());

//split() function is used to split the string 

const str2 = "Apna Coding and Chai"
console.log(str2.split(' '));

// replace() is used to replace a character in a string

const str3 = "Code or Relax   ,totally     depends on You!"
// replace multiple space with single space using regax
console.log(str3.replace(/\s+/g,' '));

// includes() method checks the character and return true/false

console.log(str3.includes('or'));