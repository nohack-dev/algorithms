/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);

  let child = 0;
  let cookie = 0;

  while (child < g.length && cookie < s.length) {
    // 현재 쿠키가 현재 아이를 만족시키면 child++
    if (s[cookie] >= g[child]) {
      child++;
    }

    cookie++;
  }

  return child;
};

findContentChildren([1, 2, 3], [1, 1]);
