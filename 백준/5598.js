const fs = require("fs");

const input = fs
  .readFileSync(
    "dev/stdin"
  )
  .toString()
  .trim();

let result = "";

for (let i = 0; i < input.length; i++) {
  let ascii = input.charCodeAt(i) - 3;
  if (ascii < 65) ascii = 90 - (65 - ascii - 1);
  result += String.fromCharCode(ascii);
}

console.log(result);
