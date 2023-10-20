const person = {
    personName: "Anand",
    age: 20,
    
    set setName(name){
        this.personName = name
    },
    get getName(){
       return this.personName.toUpperCase()
    }
}

person.setName = "aman";
console.log(person.getName);