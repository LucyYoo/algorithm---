const fs = require("fs");

const input = fs
  .readFileSync(
    "dev/stdin"
  )
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const T = input.shift();

for (let i = 0; i < T; i++) {
  const binary = input[i].toString(2);
  const binaryArr = [...binary].reverse();

  const result = [];

  for (let j = 0; j < binaryArr.length; j++) {
    if (binaryArr[j] === "1") result.push(j);
  }

  console.log(result.join(" "));
}
