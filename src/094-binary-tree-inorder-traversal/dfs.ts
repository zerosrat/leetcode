const inorderTraversal = function (root) {
  const rtn = [];
  inorder(root, rtn);
  return rtn;
};

const inorder = (root, rtn) => {
  if (!root) {
    return;
  }
  inorder(root.left, rtn);
  rtn.push(root.val);
  inorder(root.right, rtn);
};

// 前序
// vec.push_back(cur->val);    // 中
// traversal(cur->left, vec);  // 左
// traversal(cur->right, vec); // 右

// 中序
// traversal(cur->left, vec);  // 左
// vec.push_back(cur->val);    // 中
// traversal(cur->right, vec); // 右

// 后序
// traversal(cur->left, vec);  // 左
// traversal(cur->right, vec); // 右
// vec.push_back(cur->val);    // 中
