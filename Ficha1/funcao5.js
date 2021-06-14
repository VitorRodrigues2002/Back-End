function nota(notaP,notaT){
    var notaPF=notaP*0.6
    var notaTF=notaT*0.4
    var notaFi=notaPF+notaTF
        if(notaFi>=9.5){
            return 'Aprovado'
        }else{
            return 'Reprovado'
        }
}
console.log(nota(10,10));