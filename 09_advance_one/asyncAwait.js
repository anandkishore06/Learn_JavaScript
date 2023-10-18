/*
    * What is async ?
     -The async function declaration creates a binding of a new async function to a given name.
    * What is await ??
     -The await operator is used to wait for a Promise and get its fulfillment value. It can only be used inside an async function.

     Note :  write await keyword infront of a promise

*/

//async - Always returns a promise

const p  = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('Promise Resolved Value!')
    },3000)
    
})
// async function getData(){
//     return p;
// }
// const data = getData();
// data.then((res)=>{
//     console.log(res);
// })
  
// console.log(data);
// handle promise using async await

async function handlePromise(){
    console.log('Hello WOrld!'); // it will print quickly or firstly then at line no 33 ,it will wait for resolve for promise
    // JS engine is waiting for promise to resolve 
    const val = await p;
    console.log(val);
    console.log('JS');

    const val2 = await p;
    console.log(val2);
    console.log('Java');
}
handlePromise();

// handle promise using .then and .catch

// function getData1(){
//     p.then((res)=> console.log(res))
//     console.log('Chai Or Code'); // JS ENgine will not wait for promise to resolved and print it first.
// }
// getData1()


