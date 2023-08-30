const fs = require("fs");

const input = fs
  .readFileSync(
    "dev/stdin"
  )
  .toString()
  .trim()
  .split("\n");

const T = input.shift();

input.forEach((e) => {
  const arr = e.split(" ").sort((a, b) => a - b);
  console.log(arr[7]);
});
