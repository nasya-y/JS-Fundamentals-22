// function solve(n){
//     let sum = 0;
//     let result = '';
//     for (let i = 1; i <= n; i++) {
//         i = i.toString();
//         for (let j = 0; j < i.length; j++) {
//             sum += Number(i[j]);
//         }
//         result =
//             sum === 5 ||
//             sum === 7 ||
//             sum === 11;
//         console.log(result ? `${i} -> True` : `${i} -> False`);
//         sum = 0;
//     }

function solve (n){

let sum=0

for (let i = 1; i <= n; i++){
    let firstDigit=String(i)[0]
    let numFirstDigit=Number(firstDigit)
    let lastDigit=String(i).slice(-1)
    let numLastDigit=Number(lastDigit)

    if(i>=0&&i<=9){
    sum=numFirstDigit}
    else{sum=numFirstDigit+numLastDigit}

    if(sum===5 || sum=== 7|| sum===11){
        console.log(`${i} -> True`);
    }else{
    console.log(`${i} -> False`);
    }
}
}

solve(15)
solve(20)