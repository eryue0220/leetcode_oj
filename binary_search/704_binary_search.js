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

const res = search([-1,0,3,5,9,12], 9);
const res1 = search([-1,0,3,5,9,12], 2);
console.log(res);
console.log(res1);
