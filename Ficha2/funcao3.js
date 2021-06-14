function vogal(){
    var totalVogal=0;
    var vogais=['a','e','i','o','u'];
    var i;
    var frase="aaeeiiffoouu"

    for(i=0; i<frase.length;i++){
        if(vogais.indexOf(frase[i])!=-1){
            totalVogal++;
        }
    }
    console.log(totalVogal)
}
vogal()