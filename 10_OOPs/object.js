function multBy5(num){
    return num*5;
}
multBy5.power = 2

console.log(multBy5(5));
console.log(multBy5.power);
console.log(multBy5.prototype);

function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increament = function(){
    this.score++
}
createUser.prototype.printMe = function (){
    console.log(`Price is ${this.score}`);
}
const chai = new createUser('chai',25)
const tea = new createUser('tea',250)

chai.printMe()