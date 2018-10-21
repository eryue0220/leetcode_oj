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
var middleNode = function(head) {
  var start = head;
  var result = [];

  while (start) {
    result.push(start);
    start = start.next;
  }

  return result[Math.trunc(result.length / 2)];
}

/**
 * Solution 2
 */
var middleNode = function(head) {
  var start = [head];

  while (start[start.length - 1].next != null)
    start.push(start[start.length - 1].next);

  return start[Math.trunc(start.length - 1) / 2];
}
