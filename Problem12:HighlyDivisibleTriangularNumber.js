function divisibleTriangleNumber(n) {
    // Good luck!
    let loop = true
    let sum = 1 + 2
    let i = 3

    while (loop) {
        // console.log("I:", i)
        sum += i
        // console.log("Sum", sum)
        let factors = getFactors(sum)
        // console.log("Factors:", factors)
        if (factors >= n) {
            loop = false
        } else {
            i++;
        }
    }
    console.log(sum)
    return true;
}

function getFactors(value) {
    if (value === 1)
        return 1
    let count = 2
    for (let i = Math.ceil((value / 2) + 1); i > 1; i--) {
        if (value % i === 0) {
            // console.log(i)
            count++
        }
    }

    return count
}

divisibleTriangleNumber(23);

// Use prime factorization and reduce complexity