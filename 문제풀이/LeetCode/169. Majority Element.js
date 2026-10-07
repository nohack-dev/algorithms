/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const map = new Map();

  for (const n of nums) {
    const count = (map.get(n) ?? 0) + 1;

    map.set(n, count);

    // 개수가 배열 길이의 절반을 넘는 경우
    if (count > nums.length / 2) {
      return n;
    }
  }
};

console.log(majorityElement([3, 2, 3]));
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
