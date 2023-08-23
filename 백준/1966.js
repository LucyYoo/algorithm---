const fs = require("fs");

const input = fs
  .readFileSync(
    "/dev/stdin"
  )
  .toString()
  .trim()
  .split("\n");

const total = input.shift();

for (let i = 0; i < input.length; i += 2) {
  const [N, M] = input[i].split(" ");
  const printList = input[i + 1].trim().split(" ").map(Number);
  let count = Number(M);
  let totalCount = 0;

  let max = Math.max(...printList);

  while (printList.length) {
    const first = printList.shift();
    if (first < max) {
      printList.push(first);
    } else if (first === max) {
      max = Math.max(...printList);
      totalCount++;
      if (count === 0) {
        console.log(totalCount);
        break;
      }
    }

    count--;
    if (count < 0) count = printList.length - 1;
  }
}
