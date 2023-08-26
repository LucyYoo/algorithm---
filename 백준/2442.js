const fs = require("fs");

const input = +fs
  .readFileSync(
    "dev/stdin"
  )
  .toString();

for (let i = 1; i <= input; i++) {
  const max = 2 * input - 1;
  const star = "*".repeat(2 * i - 1);
  const blank = " ".repeat((max - star.length) / 2);

  console.log(blank + star);
}
