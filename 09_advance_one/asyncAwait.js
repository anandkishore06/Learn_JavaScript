/*
    * What is async ?
     -The async function declaration creates a binding of a new async function to a given name.

*/

//Always returns a promise

async function getData(){
    return 'chai'
}
const data = getData();
console.log(data);