function fiboEvenSum(n) {
  let a = 0,
    b = 1,
    sum = 0
  if (n === 0) return 0
  for (let i = 2; i < n; i++) {
    let c = a + b

    if (c >= n) break

    if (c % 2 === 0) sum += c

    a = b
    b = c
  }

  return sum
}

fiboEvenSum(10)
