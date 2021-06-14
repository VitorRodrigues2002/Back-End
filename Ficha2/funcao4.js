function encontraLetra(){
    var totalletra=0;
    var letra="f"
    var i;
    var frase="aaeeiiffoouu"

    for(i=0; i<frase.length;i++){
        if(letra==frase[i]){
            totalletra++;
        }
    }
    console.log(totalletra)
}
encontraLetra()