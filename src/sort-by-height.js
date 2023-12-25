const { NotImplementedError } = require("../extensions/index.js")

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const res = arr.slice()
  const pos = []
  let index = -1
  while ((index = arr.indexOf(-1, index + 1)) > -1) {
    pos.push(index)
  }
  let rpos = pos.slice()
  while (rpos.length) {
    res.splice(rpos.pop(), 1)
  }

  res.sort((a, b) => a - b)
  while (pos.length) {
    res.splice(pos.shift(), 0, -1)
  }
  return res
}

module.exports = {
  sortByHeight,
}
