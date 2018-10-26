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
var levelOrder = function(root) {
  var result = [];
  var queue = [];
  if (root === null) return result;
  queue.push(root);

  while (queue.length > 0) {
    var count = queue.length;
    var list = [];

    for (var i = 0; i < count; i++) {
      var node = queue.shift();

      if (node) {
        list.push(node.val);
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
      }
    }

    result.push(list);
  }

  return result;
};
