"use strict"
var input=document.getElementById('input'),
number=document.querySelectorAll('.numbers div'),
operator=document.querySelectorAll('.operator div'),
result=document.getElementById('result'),
clear=document.getElementById('clear'),
display=false

for(var i=0;i<number.length;i++){
    number[i].addEventListener('click',function(e){
        var currString=input.innerHTML
        var lastChar=currString[currString.length-1]
        if(display===false){
            input.innerHTML+=e.target.innerHTML
        }
        else if(display===true&&lastChar==="+"||lastChar==="-"||lastChar==="x"||lastChar==="÷"){
            display===false
            input.innerHTML+=e.target.innerHTML
        }
        else{
            display=false
            input.innerHTML=""
            input.innerHTML+=e.target.innerHTML
        }
    })
}

for(var i=0;i<operator.length;i++){
    operator[i].addEventListener("click",function(e){
        var currString=input.innerHTML
        var lastChar=currString[currString.length-1]
        if(lastChar==="+"||lastChar==="-"||lastChar==="x"||lastChar==="÷"){
            var newString=currString.substring(0,currString.length-1)+e.target.innerHTML
            input.innerHTML=newString
        }
        else if(currString.length==0){
        }
        else{
            input.innerHTML+=e.target.innerHTML
        }
    })
}

result.addEventListener("click",function(){
    var inputString=input.innerHTML
    var numbers=inputString.split(/\+|\-|×|\÷/g)
    var operator=inputString.replace(/[0-9]|\./g,"").split("")


    var div=operator.indexOf("÷")
    while(div!=-1){
        numbers.splice(div,2,numbers[div]/numbers[div+1])
        operator.splice(div,1)
        div=operator.indexOf("÷")
    }
    var mul=operator.indexOf("×")
    while(mul!=-1){
        numbers.splice(mul,2,numbers[mul]*numbers[mul+1])
        operator.splice(mul,1)
        mul=operator.indexOf("×")
    }
    var sub=operator.indexOf("-")
    while(sub!=-1){
        numbers.splice(sub,2,numbers[sub]-numbers[sub+1])
        operator.splice(sub,1)
        sub=operator.indexOf("-")
    }
    var add=operator.indexOf("+")
    while(add!=-1){
        numbers.splice(add,2,parseFloat(numbers[add])+parseFloat(numbers[add+1]))
        operator.splice(add,1)
        add=operator.indexOf("+")
    }
    input.innerHTML=numbers[0]
    display=true
})

clear.addEventListener("click",function(){
    input.innerHTML=""
})


