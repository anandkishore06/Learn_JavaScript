const user = {
    username : 'Anand',
    loginCount : 8,
    signedIn : true,
    getUserDetails : function(){
        console.log('Got User Details!');
        console.log(`username: ${this.username}`);
        console.log(this);
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this); //{}

function User(username, loginCount, isLoggedIn){

    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
    this.greetings =  function(){
        console.log(`Welcome to ${this.username}`);
    }

    return this
}

const userOne = new User('Anand',20,true)
const userTwo = new User('Chai',10,true)
console.log(userOne);
console.log(userTwo);


