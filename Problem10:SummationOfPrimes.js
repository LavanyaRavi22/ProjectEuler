// Solution: 1
function primeSummation1(n) {
    // Good luck!
    let sum = 2;
    let prime = [2]

    for (let i = 3; i < n; i = i + 2) {
        let count = 0
        for (let j = 0; j < prime.length; j++) {
            if (i % prime[j] == 0) {
                count++;
                break;
            }
        }
        if (count == 0) {
            prime.push(i)
            sum += i
        }
    }
    console.log("1------")
    console.log(sum)
    return true;
}

primeSummation1(140759);

// solution 3

function primeSummation3(n) {

    // Initializing the array and sum which hold all prime numbers and the total sum, respectively
    let nums = []
    let sum = 0;

    // Upperbound of `n`
    const upperBound = Math.ceil(Math.sqrt(n));

    // Making an array of `n` numbers
    for (let i = 0; i < n; i++) {
        nums.push(i);
    }
    nums[1] = 0;

    // Looping until the upperbound
    for (let i = 2; i <= upperBound; i++) {

        // Skipping if the number is already 0
        if (nums[i] !== 0) {

            // Explcitly marking all multiples of `i` 0 
            for (let j = i * i; j < n; j += i) {
                if (nums[j] % i == 0) {
                    nums[j] = 0;
                }
            }
        }
    }

    // Sum and return all values in the array up to `n`
    for (let i = 0; i < n; i++) {
        sum += nums[i];
    }
    console.log('3------')
    console.log(sum)
    return sum;
}

primeSummation3(140759)


//Solution 2
function primeSummation2(n) {
    let sum = 0
    let numbers = new Array(n - 1).fill(true)
    numbers[0] = false

    const upperLimit = Math.ceil(Math.sqrt(n));

    for (let i = 1; i < upperLimit; i++) {
        if (numbers[i]) {
            for (let j = (i + 1) * (i + 1); j <= n; j = j + i + 1) {
                if (j % (i + 1) == 0) {
                    numbers[j - 1] = false
                }
            }
        }
    }


    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i]) {
            sum += i + 1
        }
    }
    console.log("2-------")
    console.log(sum)
    return sum;
}

primeSummation2(140759);
