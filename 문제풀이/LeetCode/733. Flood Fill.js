/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {
  const oldColor = image[sr][sc];
  const rows = image.length;
  const cols = image[0].length;

  if (oldColor === color) return image;

  function dfs(r, c) {
    // 범위 체크
    if (r < 0 || r >= rows || c < 0 || c >= cols) {
      return;
    }

    if (image[r][c] !== oldColor) {
      return;
    }

    image[r][c] = color;

    dfs(r - 1, c);
    dfs(r + 1, c);
    dfs(r, c - 1);
    dfs(r, c + 1);
  }

  dfs(sr, sc);

  return image;
};

console.log(
  floodFill(
    [
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 1],
    ],
    1,
    1,
    2,
  ),
);
