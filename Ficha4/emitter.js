//a
function Emitter(){
    //b
    this.events = {};
}
//c
Emitter.prototype.on=function(type,listener){
    //d
    if(this.events[type]== undefined){
        this.events[type] = [];
    }
    this.events[type].push(listener);
}

//e
Emitter.prototype.emit=function(type){
    if(this.events[type] != undefined){
        this.events[type].forEach(function(listener){
            listener();
        });
    }
}

//f
module.exports = Emitter;