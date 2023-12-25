const { NotImplementedError } = require("../extensions/index.js")

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  arrChain: [],
  getLength() {
    return this.arrChain.length
  },
  addLink(value) {
    value === undefined
      ? this.arrChain.push("")
      : this.arrChain.push(value + "")
    return this
  },
  removeLink(position) {
    if (
      typeof position !== "number" ||
      position % 1 > 0 ||
      position < 1 ||
      position > this.arrChain.length
    ) {
      this.arrChain = []
      throw new Error("You can't remove incorrect link!")
    }
    this.arrChain.splice(position - 1, 1)
    return this
  },
  reverseChain() {
    this.arrChain.reverse()
    return this
  },
  finishChain() {
    let newStr = `( ${this.arrChain.join(" )~~( ")} )`
    this.arrChain = []
    return newStr
  },
}

module.exports = {
  chainMaker,
}
