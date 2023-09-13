const userEmail  = "abc@io"

if(userEmail){
    console.log("Got user Email");
}
else{
    console.log("Don't have user Email");
}

// falsy Values ------------
// - > false, "", '', 0, -0, BigInt 0n, null, undefined, NaN

// Except falsy values, rest all are truthy Values ------------
// ->Example -> "0", 'false', " ", [], {}, function(){}

//check array

const arr = []
if(arr.length === 0){
    console.log("Array is Empty");
}

// check object

const obj = {}
if(Object.keys(obj).length === 0){
    console.log("Object is Empty");
}

// Note -+++++++++++++++++++++++++++++++++++++

if(false == 0){
    console.log("True"); // True
}
if(false == ''){
    console.log("True");  // True
}
if(0 == ''){
    console.log("True");  // True
}
