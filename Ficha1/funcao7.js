function mat(num1,num2,ope){
    if(ope=="+"){
        soma=num1+num2
        return soma
    }else if(ope=="-"){
        sub=num1-num2
        return sub
    }else if(ope=="*"){
        mult=num1*num2
        return mult
    }else if(ope=="/"){
        div=num1/num2
        return div
    }else if(ope="^"){
        sob1=num1**num2
        return sob1
    }
}
console.log(mat(2,4,"^"))