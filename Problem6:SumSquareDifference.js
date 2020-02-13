function sumSquareDifference(n) {
  let squareOfSum = 0,
    sumOfSquare = 0
  for (let i = 1; i <= n; i++) {
    squareOfSum += i
    sumOfSquare += i * i
  }
  return squareOfSum * squareOfSum - sumOfSquare
}

sumSquareDifference(10)
