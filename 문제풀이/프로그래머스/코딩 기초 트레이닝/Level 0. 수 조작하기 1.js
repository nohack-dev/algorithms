function solution(n, control) {
  const o = {
    w: 1,
    s: -1,
    d: 10,
    a: -10,
  };
  return (
    n +
    control
      .split('')
      .map((v) => o[v])
      .reduce((a, b) => a + b)
  );
}
