const marvelHeros = ["Thor", "IronMan", "SpiderMan"]
const dcHeros = ["SuperMan", "Flash", "BatMan"]

// marvelHeros.push(dcHeros) // return new length of array

// console.log(marvelHeros);
// console.log(marvelHeros[3]);

// const allHeros = marvelHeros.concat(dcHeros)
// console.log(allHeros); // returns new array

const allNewHeros = [...marvelHeros,...dcHeros]
console.log(allNewHeros);

const another_arr = [1, 2, 3, [4, 5, 6],7, [6, 7, [4, 5]]]

const real_another_arr = another_arr.flat(Infinity)
console.log(real_another_arr); // flat arr in one single array

// string to array

const str = "anand";
console.log(Array.isArray(str)); // false
console.log(Array.from(str)); // [ 'a', 'n', 'a', 'n', 'd' ]

console.log(Array.from({name : 'Anand'})); // [] empty array

// make array from differents variables -----------------

let score1 = 200
let score2 = 300
let score3 = 400

console.log(Array.of(score1,score2,score3));  //[ 200, 300, 400 ]


