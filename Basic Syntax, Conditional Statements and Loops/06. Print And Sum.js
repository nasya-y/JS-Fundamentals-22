function solve(num, num2){
    let output='';
    let sum=0

    for (let currentNumber=num; currentNumber<=num2; currentNumber++){

        if(currentNumber===num2){
            output+=`${currentNumber}`
        }else{
            output+=`${currentNumber} `
        }
         sum+=currentNumber
    }
    console.log(output);
    console.log(`Sum: ${sum}`);
}

solve(5,10)