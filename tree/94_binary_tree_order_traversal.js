/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  var result = [];
  if (root == null) return result;
  __inorderTraversal(root, result);
  
  return result;
};

var __inorderTraversal = function(node, result) {
  if (node != null) {
    __inorderTraversal(node.left, result);
    result.push(node.val);
    __inorderTraversal(node.right, result);
  }
};
