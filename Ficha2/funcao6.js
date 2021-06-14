function retangulo(lar,alt){

    for (var j = 0; j < alt; j++) {
        var linha="";
        for (var i = 0; i < lar; i++) {
            linha+="*";
        }
        console.log(linha)
    }
}

retangulo(10,10);