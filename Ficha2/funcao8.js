function quadrado(larg,alt){
    for(var j=0; j<alt;j++){
        var linha="";
        for(var i=0;i<larg;i++){
            if(j==0||j==alt-1||i==0||i==larg-1){
                linha+="*";
            }
            else{
                linha+=" ";
            }
        }
        console.log(linha); 
    }    
}
quadrado(5,5);