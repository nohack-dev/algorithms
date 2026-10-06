/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const seen = new Set();

  for (const n of nums) {
    if (seen.has(n)) {
      return true;
    }

    seen.add(n);
  }

  // 한 줄로 해결하고 싶은 경우
  // return new Set(nums).size !== nums.length;
};

console.log(containsDuplicate([1, 2, 3, 1]));
console.log(containsDuplicate([1, 1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
