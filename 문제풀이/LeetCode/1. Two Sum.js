/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    const need = target - current;

    // 필요한 값이 이전에 나왔는지 확인
    if (map.has(need)) {
      return [map.get(need), i];
    }

    // 값과 인덱스 저장
    map.set(current, i);
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
