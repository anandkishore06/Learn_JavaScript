class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log("LoggedIn");
    }
    
}
class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email= email
        this.password = password
    }
    addCourse(){
        console.log(`A new course is added by ${this.username}`);
    }
}

const chai = new Teacher("chai",".com","123")
chai.logMe()
const tea = new User("Tea")
tea.logMe()

console.log(chai instanceof Teacher);
