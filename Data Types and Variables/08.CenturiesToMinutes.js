function solve(centures){

let years = centures*100
let days= Math.trunc(years*365.2422)
let hours= 24*days
let minute=60*hours

console.log(`${centures} centuries = ${years} years = ${days} days = ${hours} hours = ${minute} minutes`);

}

solve(1)
solve(5)