const fs = require("fs");

const input = Number(
  fs
    .readFileSync(
      "dev/stdin"
    )
    .toString()
);

for (let i = input; i > 0; i--) {
  let blank = " ".repeat(input - i);
  let start = "*".repeat(i);
  console.log(blank + start);
}
