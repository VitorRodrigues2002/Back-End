function tri(alt){

    for (var j = 1; j <= alt; j++) {
        var linha="";
        for (var i = 0; i < j; i++) {
            linha+="*";
        }
        console.log(linha)
    }
}

tri(5);