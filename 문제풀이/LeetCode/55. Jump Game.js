/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let maxReach = 0;

  for (let i = 0; i < nums.length; i++) {
    // 현재 위치 i까지 올 수 없으면 실패
    if (i > maxReach) {
      return false;
    }

    maxReach = Math.max(maxReach, i + nums[i]);

    if (maxReach >= nums.length - 1) {
      return true;
    }
  }

  return false;
};

canJump([2, 3, 1, 1, 4]); // true
canJump([3, 2, 1, 0, 4]); // false
