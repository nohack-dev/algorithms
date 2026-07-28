const solution = (nums) => {
  const squaredSum = nums.reduce((acc, cur) => acc + cur) ** 2;
  const mul = nums.reduce((acc, cur) => acc * cur);

  return squaredSum > mul ? 1 : 0;
};
