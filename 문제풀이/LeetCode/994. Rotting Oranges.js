/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  const rows = grid.length;
  const cols = grid[0].length;

  // 최소를 구하는 것이기에 BFS로 풀이
  const queue = [];
  let head = 0;
  let fresh = 0;
  let minutes = 0;

  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  // 썩은 오렌지를 기준으로 동시 출발
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 2) {
        queue.push([r, c]);
      } else if (grid[r][c] === 1) {
        fresh++;
      }
    }
  }

  // BFS
  while (head < queue.length && fresh > 0) {
    const levelSize = queue.length - head;

    for (let i = 0; i < levelSize; i++) {
      const [r, c] = queue[head++];

      for (const [dr, dc] of directions) {
        const nr = r + dr;
        const nc = c + dc;

        if (nr < 0 || nr >= rows || nc < 0 || nc >= cols) {
          continue;
        }

        if (grid[nr][nc] !== 1) {
          continue;
        }

        grid[nr][nc] = 2;
        fresh--;

        queue.push([nr, nc]);
      }
    }

    minutes++;
  }

  return fresh === 0 ? minutes : -1;
};

orangesRotting([
  [2, 1, 1],
  [1, 1, 0],
  [0, 1, 1],
]);
