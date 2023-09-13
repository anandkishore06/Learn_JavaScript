// for of loop

// with arrays
const arr = [1,2,3,4,5]

for(const num of arr){
    console.log(num);
}

// with string
const greetings = "Hello World !"

for(const greet of greetings){
    console.log(greet);
}

// Map - The Map object holds key-value pairs and remembers the original insertion order of the keys. 
// Map objects are collections of key-value pairs. A key in the Map may only occur once; it is unique in the Map's collection.

const map = new Map()

map.set('A', 1)
map.set('B',2)
map.set('C',3)

console.log(map);

for(const [key,value] of map){
    console.log(key,':',value);
}

// with object - for-in loop

// Note : for -of loop will not work with object

const myObj = {
    js : 'javascript',
    cpp : 'c++',
    rb : 'ruby'
}

// for-in loop

for (const key in myObj) {
    console.log(`${key} : ${myObj[key]}`);
}

const progs = ['java','c++','python']

for (const index in progs) {
    console.log(`${index} : ${progs[index]}`);
}


// -+++++++++++++++++++++++++ forEach Loop ++++++++++++++++++++++++

const coding = ['java', 'python', 'ruby', 'cpp']

coding.forEach((items, index, arr) => {
    console.log(items);
    console.log(index);
    console.log(arr);

})

function greet(items){
    console.log(items);
}

coding.forEach(greet)


// ----------------------------------------------------------------------

const movies = [
    {
        movieName : 'Jawan',
        actor : 'SRK'
    },
    {
        movieName : 'The Family Man',
        actor : 'Manoj B'
    },
    {
        movieName : '3 Idiots',
        actor : 'Amir'
    }
]

movies.forEach( (items) => {
    console.log(items.movieName);
})