let myHeros = ['thor', 'spiderman']

let heroPower = {
    thor : 'hammer',
    spiderman : 'sling',
    getSpiderPower: function (){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}
Object.prototype.anand = function(){
    console.log(`Anand is present in all Objects`);
}

Array.prototype.heyAnand = function(){
    console.log(`Anand Says Hello!`);
}

heroPower.anand()
myHeros.anand()
myHeros.heyAnand()

//inheritance
const User = {
    name:'chai'
}
const Teacher = {
    makeVideo : true
}
const TeachingSupport = {
    isAvaiable : false
}
const TASupport = {
    fullTime:true,
    makeAssignment:'JS',
    __proto__ : TeachingSupport
}
Teacher.__proto__=User

// modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)

// make library fn using prototype

const name1 = "Anand        "

String.prototype.trueLength = function(){
    console.log(this);
    console.log(`True length is ${this.trim().length}`);
}

name1.trueLength()
"hello      World    ".trueLength()

