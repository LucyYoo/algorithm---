const fs = require("fs");

const input = fs
  .readFileSync(
    "/dev/stdin"
  )
  .toString()
  .trim()
  .split("\n");

const [M, numberM, N, numberN] = input;
const arrM = numberM.split(" ").map(Number);
const arrN = numberN.split(" ").map(Number);
const setN = new Set();
arrM.forEach((e) => setN.add(e));

const result = [];

arrN.forEach((e) => (setN.has(e) ? result.push(1) : result.push(0)));

console.log(result.join(" "));
