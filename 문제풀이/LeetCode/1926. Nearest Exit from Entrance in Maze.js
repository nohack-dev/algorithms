/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
var nearestExit = function (maze, entrance) {
  const rows = maze.length;
  const cols = maze[0].length;

  // 좌표, 거리 저장
  const queue = [[entrance[0], entrance[1], 0]];
  let head = 0;

  // 시작점 방문 처리
  maze[entrance[0]][entrance[1]] = '+';

  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  // BFS
  while (head < queue.length) {
    const [r, c, distance] = queue[head++];

    // 시작점이 아니면서 출구인 경우
    const isExit = distance > 0 && (r === 0 || r === rows - 1 || c === 0 || c === cols - 1);

    if (isExit) {
      return distance;
    }

    for (const [dr, dc] of directions) {
      const nr = r + dr;
      const nc = c + dc;

      // 범위 체크
      if (nr < 0 || nr >= rows || nc < 0 || nc >= cols) {
        continue;
      }

      if (maze[nr][nc] !== '.') {
        continue;
      }

      maze[nr][nc] = '+';

      queue.push([nr, nc, distance + 1]);
    }
  }

  return -1;
};

nearestExit(
  [
    ['+', '+', '.', '+'],
    ['.', '.', '.', '+'],
    ['+', '+', '+', '.'],
  ],
  [1, 2],
);
