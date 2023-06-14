const fs = require("fs");

const input = fs.readFileSync(
  "dev/stdin"
);

const N = Number(input);
for (let i = 1; i < N; i++) {
  const blank = " ".repeat(N - i);
  const star = "*".repeat(i + (i - 1));
  console.log(blank + star);
}

for (let j = N; j > 0; j--) {
  const blank = " ".repeat(N - j);
  const star = "*".repeat(j + (j - 1));
  console.log(blank + star);
}
