// Immediately Invoked Function Expression (IIFE)

// why do we need iife ? -IIFE in javascript is one of the good ways to hide data from the global scope as it creates its own scope.

(function chai(){   // named IIFE
    console.log("DB Connected");  // DB Connected
})();  // In this case ; is mandatory, without ; it will exceute but after this function there will be an error occurs in another function like fun() or chaiOr Code.

const fun = () =>{
    console.log("Hello World!");
}

fun();

(function chaiOrCode(){
    console.log("DB Connected");  // DB Connected
})();

// pass an arguments to function in IIFE

( (name) =>{  // Anonymous IIFE

    console.log(`DB Connected Two ${name}`);

})("Anand");