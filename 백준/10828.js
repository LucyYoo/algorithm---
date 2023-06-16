const fs = require("fs");

const input = fs
  .readFileSync(
    "/dev/stdin"
  )
  .toString()
  .split("\n");

const N = input.shift();
const stack = [];
const result = [];

for (let i = 0; i < N; i++) {
  const command = input[i].split(" ");
  switch (command[0].trim()) {
    case "pop":
      result.push(stack.pop() || -1);
      break;
    case "size":
      result.push(stack.length);
      break;
    case "empty":
      result.push(stack.length ? 0 : 1);
      break;
    case "top":
      result.push(
        stack[stack.length - 1] ? stack[stack.length - 1].trim() : -1
      );
      break;
    default:
      stack.push(command[1].trim());
      break;
  }
}

console.log(result.join("\n"));
