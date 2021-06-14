var obj1 = {
    name: "Vitor",
    age: 18,
    gender: "Masc",
}

var obj1Json = JSON.stringify(obj1);
console.log(obj1Json);

var obj1 = '{"name":"Vitor","age":18,"gender":"Masc"}';
console.log(JSON.parse(obj1));

var Emitter = require("./emitter");
var eventConstants = require("./config")

var novoEmitter = new Emitter();

novoEmitter.on(eventConstants.events.FILESAVED, function(){
    console.log("A file was saved 1");
});

novoEmitter.on(eventConstants.events.GREET, function(){
    console.log("Hello");
});

novoEmitter.emit(eventConstants.events.FILESAVED);
novoEmitter.emit(eventConstants.events.GREET);