/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 *
 * 원본 배열을 수정하는 형태로 해결
 */
var moveZeroes = function (nums) {
  let write = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[write++] = nums[i];
    }
  }

  for (; write < nums.length; write++) {
    nums[write] = 0;
  }
};

console.log(moveZeroes([0, 1, 0, 3, 12]));
console.log(moveZeroes([0]));
