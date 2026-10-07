/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  const set2 = new Set(nums2);

  return [...new Set(nums1)].filter((n) => set2.has(n));
};

intersection([1, 2, 2, 1], [2, 2]);
intersection([4, 9, 5], [9, 4, 9, 8, 4]);
