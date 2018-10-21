/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  var prev = null;
  var current = head;

  while (current != null) {
    var next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
};
