// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value

// A Promise is in one of these states:

// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.

const promiseOne = new Promise((resolve, reject)=>{
    // Do an Async Task
    // DB Calls, Network calls
    
    setTimeout(function(){
        console.log('Async Task is Complete');
        resolve()
    },1000)
})
promiseOne.then(function(){
    console.log("Promise Consumed");
})

//

const promiseTwo = new Promise((resolve, reject)=>{
    setTimeout(function(){
        resolve({username :'Anand', email: 'abc@gmail.com'})
    },1000)
})
promiseTwo.then(function(user){
    console.log(user);
})

const promiseFour = new Promise((resolve, reject)=>{
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: ' Anand ', password : '123'})
        }
        else{
            reject('ERROR: Something went Wrong')
        }
    },2000)
})
promiseFour.then((user)=>{
    return user.username
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(function(){
    console.log('Finally Block');
})

const promiseFive = new Promise((resolve, reject)=>{
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: ' JS ', password : '123'})
        }
        else{
            reject('ERROR: Something went Wrong')
        }
    },2000)  
})

async function consumePromiseFive(){
    try{
    const response = await promiseFive
    console.log(response);
    }catch(error){
        console.log(error);
    }
}
consumePromiseFive()

async function getAllUsers(){
    try{
    const response = await fetch('https://api.github.com/users/anandkishore06')
    const data = await response.json()
    console.log(data);
    }
    catch(error){
        console.log('Error');
    }
}
getAllUsers()

fetch('https://api.github.com/users/anandkishore06')
.then((res)=>{
    return res.json()
})
.then((data)=>{data})
.catch((error)=>{
    console.log('error');
})