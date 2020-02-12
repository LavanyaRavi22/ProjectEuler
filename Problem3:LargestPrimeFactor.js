function largestPrimeFactor(number) {
  let largestPrimeFactor
  while (number % 2 === 0) {
    largestPrimeFactor = 2
    number = number / 2
  }

  for (let i = 3; i < number * number; i = i + 2) {
    while (number % i === 0) {
      largestPrimeFactor = i
      number = number / i
    }
  }

  return largestPrimeFactor
}

largestPrimeFactor(13195)
