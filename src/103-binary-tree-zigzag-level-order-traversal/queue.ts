/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const zigzagLevelOrder = function (root) {
  const rtn = [];

  if (!root) return rtn;

  const queue = [];
  queue.unshift({
    node: root,
    index: 0,
  });

  while (queue.length) {
    const { node, index } = queue.pop();

    if (!rtn[index]) {
      rtn[index] = [];
    }

    // 正序or倒序
    if (index % 2 === 0) {
      rtn[index].push(node.val);
    } else {
      rtn[index].unshift(node.val);
    }

    if (node.left) {
      queue.unshift({
        node: node.left,
        index: index + 1,
      });
    }

    if (node.right) {
      queue.unshift({
        node: node.right,
        index: index + 1,
      });
    }
  }
  return rtn;
};
