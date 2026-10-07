/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  const map = new Map();

  for (const n of nums) {
    map.set(n, (map.get(n) ?? 0) + 1);
  }

  for (const [n, count] of map) {
    if (count === 1) return n;
  }
};
