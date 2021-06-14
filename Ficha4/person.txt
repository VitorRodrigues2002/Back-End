class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName, 
        this.lastName = lastName
    }
}

Person.prototype.greet=function(){
    console.log(" Hello " + this.firstName+" "+this.lastName + ", Age: " + this.age);
}

var vitor=new Person("Vitor","Rodrigues");
vitor.age=18;
vitor.greet();

var zeca=new Person("Zeca","Afonso");
zeca.age=99;
zeca.greet();

console.log(vitor.__proto__);
console.log(zeca.__proto__);
console.log(vitor.__proto__ == zeca.__proto__);