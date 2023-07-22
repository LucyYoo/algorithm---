const fs = require("fs");

const [N, K] = fs
  .readFileSync(
    "dev/stdin"
  )
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const queue = [];
const result = [];
let count = 1;

for (let i = 0; i < N; i++) {
  queue.push(i + 1);
}

while (queue.length) {
  const current = queue.shift();
  if (count === K) {
    result.push(current);
    count = 0;
  } else {
    queue.push(current);
  }

  count++;
}

console.log(`<${result.join(", ")}>`);
