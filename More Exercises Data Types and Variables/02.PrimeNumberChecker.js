function primeNumberChecker(num) {
    let result = "";

    for (let i = 2; i <= Math.sqrt(num); i++) {
        isNotPrime = false;

        if (num % i === 0) {
            result = isNotPrime;
            break;
        } else {
            isNotPrime = true;
            result = isNotPrime;
        }
    }
    console.log(result);
}

primeNumberChecker(7)
primeNumberChecker(8)
primeNumberChecker(81)