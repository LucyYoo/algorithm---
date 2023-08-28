const fs = require("fs");

const input = fs
  .readFileSync(
    "dev/stdin"
  )
  .toString()
  .split("\n")
  .map((e) => e.trim().split("").map(Number));
const N = input.shift();
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];
const result = [];

const bfs = (x, y) => {
  let count = 0;

  const queue = [];
  queue.push([x, y]);
  input[x][y] = 0;

  while (queue.length) {
    const [curX, curY] = queue.shift();
    count += 1;

    for (let i = 0; i < 4; i++) {
      const moveX = curX + dx[i];
      const moveY = curY + dy[i];

      if (
        moveX >= 0 &&
        moveX < N &&
        moveY >= 0 &&
        moveY < N &&
        input[moveX][moveY] === 1
      ) {
        queue.push([moveX, moveY]);
        input[moveX][moveY] = 0;
      }
    }
  }

  return count;
};

for (let x = 0; x < N; x++) {
  for (let y = 0; y < N; y++) {
    if (input[x][y] === 1) result.push(bfs(x, y));
  }
}

console.log(result.length);
console.log(result.sort((a, b) => a - b).join("\n"));
