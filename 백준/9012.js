const fs = require("fs");

const input = fs
  .readFileSync(
    "dev/stdin"
  )
  .toString()
  .trim()
  .split("\n");

const T = input.shift();
const result = [];
const parentheses = input.map((e) => e.trim().split(""));

for (let i = 0; i < parentheses.length; i++) {
  let stack = 0;
  if (parentheses[i].length % 2 || parentheses[i][0] === ")") {
    result.push("NO");
    continue;
  }

  for (let j = 0; j < parentheses[i].length; j++) {
    const current = parentheses[i][j];
    stack += current === "(" ? 1 : -1;
    if (stack < 0) break;
  }
  result.push(stack === 0 ? "YES" : "NO");
}

console.log(result.join("\n"));
