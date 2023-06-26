/**1. 최댓값을 저장하는 변수, 전체 사람 수를 저장하는 변수를 만든다.
 * 2. 반복문을 돌면서
 * - 각 줄을 split 해서 내린 사람의 수가 [0], 탄 사람의 수가 [1]이 되게 한다.
 * - 전체 사람 수에 내린 사람을 빼고 탄 사람을 추가한다.
 * - 저장된 최댓값과 비교하여 최댓값을 변경한다.
 */

const fs = require("fs");

const input = fs
  .readFileSync(
    "/dev/stdin"
  )
  .toString()
  .trim()
  .split("\n");

let max = 0;
let total = 0;

for (let i = 0; i < input.length; i++) {
  const [minus, plus] = input[i].split(" ").map(Number);

  total = total - minus + plus;
  max = Math.max(total, max);
}

console.log(max);
