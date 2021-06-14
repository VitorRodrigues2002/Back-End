function started(){
    console.log("Started Download");
}

function update() {
    for (i = 1; i <= 100; i++) {
      console.log(i + '% of Download');
    }
}


function completed(){
    console.log("Completed Download")
}

function performDownload() {
    started();
    update();
    completed();
}
performDownload(started,update,completed);

var arrayUtils=require("./ArrayUtils1.js");
var array=[20,6,7,77,15,0];
var otherArray=[1,19];

console.log("O array esta vazio? "+arrayUtils.isEmpty(array));
console.log("O maximo do array é: "+arrayUtils.max(array));
console.log("O minimo do array é: "+arrayUtils.min(array));
console.log("A media do array é: "+arrayUtils.average(array));

var value=0;
console.log("O indice do valor "+ value +" é:"+arrayUtils.indexOf(array,value));

var subArray=arrayUtils.subArray(array,3,5);
console.log("O sub array é: "+subArray)

var sameSize= arrayUtils.isSameLength(array,otherArray)
console.log("Os array sao do mesmo tamanho?: "+sameSize);

var invertedArray=arrayUtils.reverse(array);
console.log("O array invertido fica: "+invertedArray)

var swappedArray=arrayUtils.swap(array,0,4);
console.log("O array alterado é: "+swappedArray)

var value=20;
console.log("O array contem o valor "+value+"? "+ arrayUtils.contains(array,value));

var concatArray=arrayUtils.concatenar(array,otherArray);
console.log("O array concatenado é: "+concatArray);