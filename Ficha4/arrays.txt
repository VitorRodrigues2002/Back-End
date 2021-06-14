var array=[];

array.push(function(){
    console.log("Hello world 1");
});

array.push(function(){
    console.log("Hello world 2");
});

array.push(function(){
    console.log("Hello world 3");
});


//for
for(var i=0; i<array.length; i++){
    array[i]();
};


//forEach
array.forEach(element =>{
    element();
})