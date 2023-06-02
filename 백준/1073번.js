const fs = require("fs");

const input = fs
  .readFileSync(
    "dev/stdin"
  )
  .toString()
  .trim()
  .split("\n");

const N = input.shift();
const divisor = input[0]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
const first = divisor[0];
const last = divisor[divisor.length - 1];
console.log(first * last);
