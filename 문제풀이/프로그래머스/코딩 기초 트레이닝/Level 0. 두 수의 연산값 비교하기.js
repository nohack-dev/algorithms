const solution = (a, b) => {
  const n1 = Number(`${a}${b}`);
  const n2 = 2 * a * b;

  return n1 === n2 ? n1 : Math.max(n1, n2);
};
