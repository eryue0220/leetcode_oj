/**
 * @param {number[]} A
 * @return {number[]}
 * @see https://leetcode.com/problems/sort-array-by-parity/
 * Input: [3, 2, 4, 1, 5, 6]
 * Output: [2, 4, 6, 3, 1 5]
 */
var sortArrayByParity = function(A) {
  var isEven = num => num % 2 === 0;
  var evens = A.filter(num => isEven(num));
  var odds = A.filter(num => !isEven(num));
  
  return evens.concat(odds);
};
