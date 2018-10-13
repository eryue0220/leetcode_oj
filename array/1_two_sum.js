/**
 * @Date 2017-06-17
 * @File 1_two_sum.js
 * @Author cinchen
 */

// url: https://leetcode.com/problems/two-sum/#/description

var twoSum = function(nums, target) {
	var i = 0;
	var length = nums.length;

	for (; i < length; i++) {
		for (var j = i + 1; j <= length; j++) {
			if (nums[i] + nums[j] === target) {
				return [i, j]
			}
		}
	}
};

var result = twoSum([2, 7, 11, 15], 9);
console.log(result);