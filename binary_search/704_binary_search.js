/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  var low = 0;
  var high = nums.length - 1;

  while (low <= high) {
    var mid = Math.floor(low + (high - low) / 2);
    if (target < nums[mid]) high = mid - 1;
    else if (nums[mid] < target) low = mid + 1;
    else return mid;
  }

  return -1;
};
