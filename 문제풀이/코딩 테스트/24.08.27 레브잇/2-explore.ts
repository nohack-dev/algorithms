// const solution = (n: number, water: number[][]) => {
//   // 탐험 지역 초기화
//   const map: ('W' | 'G')[][] = Array.from({ length: n }, () => new Array(n).fill('G'));
//   for (const [y, x] of water) {
//     map[y][x] = 'W';
//   }

//   // 방문 확인을 위한 배열
//   const visited: boolean[][] = Array.from({ length: n }, () => new Array(n).fill(false));

//   // DFS를 통해 모든 지역 방문
//   const dfs = (x: number, y: number) => {
//     // 탐원 대원이 이동할 방향
//     const directions = [
//       [-1, 0],
//       [1, 0],
//       [0, -1],
//       [0, 1],
//     ];
//     visited[x][y] = true;

//     for (const [dx, dy] of directions) {
//       const [nx, ny] = [x + dx, y + dy];

//       if (0 <= nx && nx < n && 0 <= ny && ny < n && map[nx][ny] === 'G' && !visited[nx][ny]) {
//         dfs(nx, ny);
//       }
//     }
//   };

//   let answer = 0;
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       if (map[i][j] === 'G' && !visited[i][j]) {
//         dfs(i, j);
//         answer++;
//       }
//     }
//   }

//   console.log(answer);
// };

// solution(3, [
//   [0, 2],
//   [1, 1],
//   [1, 2],
// ]);
// solution(3, []);
// solution(4, [
//   [0, 1],
//   [1, 0],
//   [2, 3],
//   [3, 2],
// ]);
// solution(4, [
//   [1, 2],
//   [2, 1],
// ]);
function createMap(n: number, water: number[][]): string[][] {
  // n x n 크기의 맵을 'G'로 초기화
  const gameMap: string[][] = Array.from({ length: n }, () => Array(n).fill('G'));

  // water 위치에 'W' 삽입
  for (const [x, y] of water) {
    gameMap[x][y] = 'W';
  }

  return gameMap;
}

function dfs(x: number, y: number, n: number, gameMap: string[][], visited: boolean[][]): void {
  // 현재 위치를 방문 처리
  visited[x][y] = true;

  // 상하좌우 네 방향 탐색
  const directions = [
    [-1, 0], // 위쪽
    [1, 0], // 아래쪽
    [0, -1], // 왼쪽
    [0, 1], // 오른쪽
  ];

  for (const [dx, dy] of directions) {
    const nx = x + dx;
    const ny = y + dy;

    // 맵 내에 위치하고, 방문하지 않았으며, 평지인 경우에만 탐색
    if (nx >= 0 && nx < n && ny >= 0 && ny < n && !visited[nx][ny] && gameMap[nx][ny] === 'G') {
      dfs(nx, ny, n, gameMap, visited);
    }
  }
}

function countExplorers(n: number, water: number[][]): number {
  const gameMap = createMap(n, water);
  const visited: boolean[][] = Array.from({ length: n }, () => Array(n).fill(false));
  let explorers = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (gameMap[i][j] === 'G' && !visited[i][j]) {
        // 새로운 평지 영역 발견, DFS 수행
        dfs(i, j, n, gameMap, visited);
        explorers += 1;
      }
    }
  }

  return explorers;
}

// 테스트 케이스
const n = 3;
const water = [
  [0, 2],
  [1, 1],
  [1, 2],
];
console.log(countExplorers(n, water)); // 2

// 추가 테스트 케이스
const n2 = 3;
const water2: number[][] = [];
console.log(countExplorers(n2, water2)); // 1

const n3 = 4;
const water3 = [
  [0, 1],
  [1, 0],
  [2, 3],
  [3, 2],
];
console.log(countExplorers(n3, water3)); // 4

const n4 = 4;
const water4 = [
  [1, 2],
  [2, 1],
];
console.log(countExplorers(n4, water4)); // 2
