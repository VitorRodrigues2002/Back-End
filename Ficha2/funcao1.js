function imc(){
    var peso=90
    var altura=1.7
    var imc=peso/(altura*altura)

    if(imc<18.5){
        console.log('abaixo do peso')
    }else if(imc>=18.5 && imc<=25){
        console.log('no peso normal')
    }else if(imc>25 && imc<=30){
        console.log('acima do peso')
    }else if(imc>30){
        console.log('obeso')
    }
}
imc();