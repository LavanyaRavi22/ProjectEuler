function nthPrime(n) {
    let primeArray = [2]
    let i = 3

    while (primeArray.length <= n - 1) {
        let prime = true
        for (let j = 0; j < primeArray.length - 1; j++) {
            if (i % primeArray[j] === 0) {
                prime = false
                break
            }
        }
        if (prime)
            primeArray.push(i)

        i = i + 2
    }

    return primeArray[n - 1];
}

nthPrime(10001);
