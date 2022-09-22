// function triangle(n){

//     for(i=1; i<=n;i++){
        
//         let row= ``

//         for(let j=1; j<=i; j++){
//             row+= `${i} `
//         }
//         console.log(row);
//     }

// }

// triangle(3)

function solve(n){

    for(i=1;i<=n;i++){

        let row=` `

        for(let j=1; j<=i; j++)

            row+=`${j} `
            console.log(row);
    }


}

solve(5)