function TempodeTrabalho() {
 
    var diferencaHoras = 0;
    
    var data1 = new Date ("Março 23, 2021 10:00:00");
    var data2 = new Date ("Março 23, 2021 17:30:00");
    
    var diferencahoras = data2.getHours() - data1.getHours();
    
    var diferenca = Math.floor(diferenca/1000/60/60);
    
    console.log('Trabalhou ' + diferencahoras + ' horas ');
   }
   TempodeTrabalho()