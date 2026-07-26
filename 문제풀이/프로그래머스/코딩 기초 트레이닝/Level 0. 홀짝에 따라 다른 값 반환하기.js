function solution(n) {
  return Array.from({ length: n }, (_, v) => v + 1)
    .filter((v) => (n % 2 ? v % 2 : !(v % 2)))
    .map((v) => (n % 2 ? v : v ** 2))
    .reduce((a, b) => a + b);
}
