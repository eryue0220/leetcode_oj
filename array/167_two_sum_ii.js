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

var twoSumBetter = function(numbers, target) {
  var result = {};

  for (var i = 0; i < numbers.length; i++) {
    var diff = target - numbers[i];
    if (result[diff] != null) return [result[diff] + 1, i + 1];
    result[numbers[i]] = i;
  }
};

var result = twoSumBetter([2,7,11,15], 9);
console.log(result);
