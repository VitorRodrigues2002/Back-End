var ArrayUtils={
    isEmpty: function(array){
        if(array!=undefined && array!=null){
            return  array.length==0;
        }
    },


    max: function(array){
        var ma=array[0];
        for (var i = 1; i < array.length; i++) {
            if(array[i]>ma){
                ma=array[i];
            }
        }
        return ma;
    },


    min: function(array){
        var mi=array[0];
        for (var i = 1; i < array.length; i++) {
            if(array[i]<mi){
                mi=array[i];
            }
        }
        return mi;
    },


    average: function(array){
        var soma=0
        for (var i = 0; i < array.length; i++) {
            soma+=array[i];
        }
        var media=soma/array.length;
        return media;
    },


    indexOf: function(array,value){
       
        for (var i = 0; i < array.length; i++) {
            if(value==array[i]){
                return i;
            }
        }
     
        return -1;
    },


    subArray: function(array,startIndex,endIndex){
        var a=[];
        for (var i = startIndex; i <= endIndex; i++) {
            a.push(array[i]);
        }
        return a;
    },


    isSameLength: function(array,otherArray){
        return array.length==otherArray.length
    },


    reverse: function(array){
        var r=[];
        for (var i = array.length-1; i >= 0; i--) {
            r.push(array[i]);
        }
        return r;
    },


    swap: function(array,v1,v2){
        var val1=array[v1];
        var val2=array[v2];
        array[v1]=val2;
        array[v2]=val1;

        return array;
    },


    contains: function(array,value){
        return this.indexOf(array,value)!=-1
    },


    concatenar: function(array,otherArray){
        var concatenar=array;
        for (var i = 0; i < otherArray.length; i++){
            concatenar.push(otherArray[i])  
        }
        return concatenar;
    },
};

module.exports=ArrayUtils;