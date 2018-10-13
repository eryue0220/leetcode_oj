/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  var length = numbers.length;

  for (var i = 0; i < length - 1; i++) {
    for (var j = i + 1; j < length; j++) {
      if (numbers[i] + numbers[j] === target) return [i + 1, j + 1];
    }
  }
};
