const fs = require("fs");

const input = fs
  .readFileSync(
    "dev/stdin"
  )
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const total = input.reduce((prev, cur) => prev + cur, 0);
let result = [];

for (let i = 0; i < input.length - 1; i++) {
  for (let j = input.length - 1; j >= 0; j--) {
    if (total - input[i] - input[j] === 100) {
      result = input.filter((e) => e !== input[i] && e !== input[j]);
      break;
    }
  }
}

console.log(result.sort((a, b) => a - b).join("\n"));
