// The reduce() method of Array instances executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.

const myNums = [1, 2, 3]

const sum = myNums.reduce( (acc, currVal) => {

    console.log(`acc : ${acc} and currVal : ${currVal}`);

    return acc + currVal;

}, 0)

const add = myNums.reduce( (acc,num) => acc + num, 0)
console.log(sum);
console.log(add);

const shoppingCart = [
    {
        itemName : "js course",
        price : 2999
    },
    {
        itemName : "python course",
        price : 999
    },
    {
        itemName : "webdev course",
        price : 2999
    },
    {
        itemName : "mobDev course",
        price : 2999
    }

]

const sumOfPrice = shoppingCart.reduce( (acc, item) => acc +(item.price), 0 )

console.log(sumOfPrice);