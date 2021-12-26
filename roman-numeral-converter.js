function convertToRoman(num) {
  let romNumber = ''
  // Set an object with all Roman symbols
  const romNums = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  }

  // Iterate over Roman symbols
  for (const key in romNums) {
    const counter = Math.floor(num / romNums[key])

    if (counter !== 0) {
      romNumber += key.repeat(counter)
    }

    num %= romNums[key]

    if (num === 0) return romNumber
  }
  num = num.toString().replace(num, romNumber)
  return num
}

convertToRoman(36)
