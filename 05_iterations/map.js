// The map() method of Array instances creates a new array populated with the results of calling a provided function on every element in the calling array.

const myNumbers = [1,2,3,4,5,6,7,8,9,10]

const newNum = myNumbers.map( (num) => num + 10)

console.log(newNum);

// chaining of map
// Note : we can chain map ,filter together

const newNums = myNumbers
                .map( (num) => num * 10)
                .map( (num) => num + 1)
                .filter( (num) => num >= 40 )

console.log(newNums);