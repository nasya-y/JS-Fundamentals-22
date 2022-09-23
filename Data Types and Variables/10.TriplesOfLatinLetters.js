function solve(n){

   
    for(let f=0; f<n; f++){
        let letter=String.fromCharCode(97+f)
        for(let s=0; s<n; s++){
        let secondLetter=String.fromCharCode(97+s)
        for(let t=0;t<n;t++){
          let  tirdLetter=String.fromCharCode(97+t)
        
        console.log(`${letter}${secondLetter}${tirdLetter}`);
    }}}
}

solve(3)
solve(2)