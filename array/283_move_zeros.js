/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  var length = nums.length;
  var i = 0;
  while (length && i < nums.length) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      nums.push(0);
    } else {
      i += 1;
    }

    length -= 1;
  }

  console.log(nums);
};
