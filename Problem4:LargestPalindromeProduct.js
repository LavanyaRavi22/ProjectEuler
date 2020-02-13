function largestPalindromeProduct(n) {
  let maxNumber = ''

  for (let i = 0; i < n; i++) maxNumber += '9'

  let number = Number(maxNumber)

  return getPalindrome(number, number, 100)
}

// Have to simplify this

function getPalindrome(number, upperlimit, lowerlimit) {
  for (let i = number; i > upperlimit - lowerlimit; i--) {
    for (let j = number - 1; j > upperlimit - lowerlimit; j--) {
      let isPalindrome = checkPalindrome(i * j)
      if (isPalindrome) {
        return i * j
      }
    }
  }
  return getPalindrome(number, lowerlimit, lowerlimit - 100)
}

function checkPalindrome(n) {
  let number = String(n).split('')
  let middle = Math.ceil(number.length / 2)
  let isPalindrome = false

  for (
    let i = 0, j = number.length - 1;
    i <= middle - 1, j >= middle - 1;
    i++, j--
  ) {
    if (number[i] === number[j]) isPalindrome = true
    else {
      isPalindrome = false
      break
    }
  }

  return isPalindrome
}

largestPalindromeProduct(6)
