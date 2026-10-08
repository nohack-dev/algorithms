/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  const sumOfNums = nums.reduce((a, b) => a + b, 0);
  let leftSum = 0;

  for (let i = 0; i < nums.length; i++) {
    const rightSum = sumOfNums - leftSum - nums[i];

    if (leftSum === rightSum) return i;

    leftSum += nums[i];
  }

  return -1;
};

pivotIndex([1, 7, 3, 6, 5, 6]);
