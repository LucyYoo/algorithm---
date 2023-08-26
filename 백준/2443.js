const fs = require("fs");

const input = +fs
  .readFileSync(
    "dev/stdin"
  )
  .toString();

const max = 2 * input - 1;

for (let i = input; i > 0; i--) {
  const star = "*".repeat(2 * i - 1);
  const blank = " ".repeat((max - star.length) / 2);

  console.log(blank + star);
}
