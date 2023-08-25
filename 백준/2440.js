const fs = require("fs");

const input = Number(
  fs
    .readFileSync(
      "dev/stdin"
    )
    .toString()
);

for (let i = input; i > 0; i--) {
  let start = "*";
  for (let j = 1; j < i; j++) {
    start += "*";
  }
  console.log(start);
}
