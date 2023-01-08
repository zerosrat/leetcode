/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 */
var BSTIterator = function(root) {
  this.arr = []
  this.nextObj = null

  this._inorderTraversal(root)
  this.iterator = this.arr[Symbol.iterator]()

  this.nextObj = this.iterator.next()
}

BSTIterator.prototype._inorderTraversal = function(root) {
  helper.call(this, root)
  function helper(node) {
    if (node) {
      if (node.left) {
        helper.call(this, node.left)
      }
      this.arr.push(node.val)
      if (node.right) {
        helper.call(this, node.right)
      }
    }
  }
}

/**
 * @return the next smallest number
 * @return {number}
 */
BSTIterator.prototype.next = function() {
  const value = this.nextObj.value
  this.nextObj = this.iterator.next()
  return value
}

/**
 * @return whether we have a next smallest number
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
  return !this.nextObj.done
}

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
