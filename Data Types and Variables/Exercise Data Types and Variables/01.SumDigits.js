function solve(n){

    let sum= n.toString().split('').map(Number).reduce(function(a,b)
    {return a+b;},0)

    console.log(sum);

}

solve(245678)