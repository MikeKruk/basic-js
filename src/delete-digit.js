const { NotImplementedError } = require("../extensions/index.js")

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let res = 0,
    n_digits = []
  while (n) {
    n_digits.push(n % 10)
    n = Math.floor(n / 10)
  }
  for (let index_n = 0; index_n < n_digits.length; index_n++) {
    let n = 0
    for (let i = n_digits.length - 1; i >= 0; i--) {
      if (i !== index_n) {
        n = n * 10 + n_digits[i]
      }
    }
    res = Math.max(n, res)
  }
  return res
}

module.exports = {
  deleteDigit,
}
