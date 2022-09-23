function solve(string, char, final){

    let res= string.replace('_',char)
    let finalResult=res === final? "Matched": "Not Matched";
    console.log(finalResult);
}

solve('Str_ng', 'I','Strong')
solve('Str_ng', 'i','String')