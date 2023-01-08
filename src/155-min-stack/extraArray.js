/**
 * initialize your data structure here.
 */
class MinStack {
  constructor() {
    this.data = []
    this.minData = []
  }

  /**
   * @param {number} x
   * @return {void}
   */
  push(x) {
    this.data.push(x)
    if (this.minData.length === 0 || x <= this.minData[this.minData.length - 1]) {
      this.minData.push(x)
    }
  }

  /**
   * @return {void}
   */
  pop() {
    const x = this.data.pop()
    if (x === this.getMin()) {
      this.minData.pop()
    }
  }

  /**
   * @return {number}
   */
  top() {
    return this.data[this.data.length - 1]
  }

  /**
   * @return {number}
   */
  getMin() {
    return this.minData[this.minData.length - 1]
  }
}
