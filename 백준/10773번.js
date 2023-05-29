const fs = require("fs");

const input = fs
  .readFileSync(
    "dev/stdin"
  )
  .toString()
  .trim()
  .split("\n");

const K = input.shift();
const stack = [];

input.forEach((e) => (e.trim() === "0" ? stack.pop() : stack.push(e)));

const result = stack.reduce((prev, cur) => prev + Number(cur), 0);
console.log(result);
