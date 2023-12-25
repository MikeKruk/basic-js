const { NotImplementedError } = require("../extensions/index.js")

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let arr = []
  let num = 0
  for (let i = 0; i < matrix.length; i++) {
    let temp = []
    arr.push(temp)
    for (let j = 0; j < matrix[i].length; j++) {
      let a = i - 1
      let b = j - 1
      for (let k = a; k <= a + 2; k++) {
        for (let l = b; l <= b + 2; l++) {
          if (matrix[k] && (k !== i || l !== j) && matrix[k][l]) {
            num++
          }
        }
      }

      arr[i][j] = num
      num = 0
    }
  }
  return arr
}

module.exports = {
  minesweeper,
}
