const solution = (a, d, included) => {
  return included
    .map((v, i) => (v ? a + d * i : v))
    .filter((v) => v)
    .reduce((a, b) => a + b);
};
