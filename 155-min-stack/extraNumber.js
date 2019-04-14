/**
 * initialize your data structure here.
 */
class MinStack {
  constructor() {
    this.data = []
    this.min
  }

  /**
   * @param {number} x
   * @return {void}
   */
  push(x) {
    if (x <= this.min || this.data.length === 0) {
      this.data.push(this.min)
      this.min = x
    }
    this.data.push(x)
  }

  /**
   * @return {void}
   */
  pop() {
    if (this.data.pop() === this.min) this.min = this.data.pop()
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
    return this.min
  }
}
