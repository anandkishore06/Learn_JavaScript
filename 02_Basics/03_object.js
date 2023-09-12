//An object is a collection of properties, and a property is an association between a name (or key) and a value. A property's value can be a function, in which case the property is known as a method.

// object declaraion using object literals

const mySym = Symbol("key1");

const JsUser = {
    name : "Anand",
    "full name":"Anand Kishore",
    age : 19,
    [mySym] : "mykey1",
    location : "Kolkata",
    email : "abc@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Mon","Tue"]
}
console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);

JsUser.email = "anand@google.com"
// Object.freeze(JsUser); // freeze the object ,after that nothing will update from the object
JsUser.email = "anand@chatgpt.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User");
}
JsUser.greeting2 = function(){
    console.log(`Hello JS User, ${this.name}`);
}


console.log(JsUser.greeting);
console.log(JsUser.greeting());


console.log(JsUser.greeting2);
console.log(JsUser.greeting2());