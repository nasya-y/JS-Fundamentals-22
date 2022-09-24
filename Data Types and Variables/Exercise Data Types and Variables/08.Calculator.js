function solve(number,operator,number2){

let sum=0

if(operator==="+"){
    console.log((sum=number+number2).toFixed(2));
}else if(operator==="-"){
    console.log((sum=number-number2).toFixed(2)); 
}else if(operator==="/"){
    console.log((sum=number/number2).toFixed(2)); 
}else if(operator==="*"){
    console.log((sum=number*number2).toFixed(2));
}}

solve(5,'+',10)