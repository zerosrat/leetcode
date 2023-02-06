const levelOrderBottom = function (root): number[][] {
  const rtn = [];
  if (!root) return rtn;

  const queue = [];
  queue.unshift(root);

  while (queue.length) {
    const level = [];
    const len = queue.length;

    for (let i = 0; i < len; i++) {
      const node = queue.pop();
      level.push(node.val);
      node.left && queue.unshift(node.left);
      node.right && queue.unshift(node.right);
    }

    if (level.length) {
      rtn.unshift(level);
    }
  }

  return rtn;
};
