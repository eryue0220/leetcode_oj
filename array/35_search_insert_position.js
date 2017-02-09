/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  var result = nums.indexOf(target);

  if (result > 0) return result;
  if (nums[nums.length - 1] < target) return nums.length;
  if (nums[0] > target) return 0;

  for (var i = nums.length - 1; i >= 0; i--) {
    if (nums[i] < target) return i + 1;
    else if (nums[i] === target) return i;
  }
};