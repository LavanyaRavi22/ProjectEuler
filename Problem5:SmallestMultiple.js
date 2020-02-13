function smallestMult(n) {
  let smallest = 1
  for (let i = 1; i <= n; i++) {
    smallest = smallest * (i / gcd(smallest, i))
  }
  return smallest
}

function gcd(a, b) {
  if (a % b === 0) return b
  return gcd(b, a % b)
}

smallestMult(20)
