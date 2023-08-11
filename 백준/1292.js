const fs = require("fs");

const [A, B] = fs
  .readFileSync(
    "dev/stdin"
  )
  .toString()
  .trim()
  .split(" ");

const result = [];
let answer = 0;
let i = 1;
outer: while (true) {
  for (let j = 1; j <= i; j++) {
    result.push(i);

    if (result[B]) break outer;
  }
  i++;
}

for (let i = A - 1; i < B; i++) {
  answer += result[i];
}

console.log(answer);
