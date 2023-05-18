const fs = require("fs");

const input = fs
  .readFileSync(
    "dev/stdin"
  )
  .toString()
  .trim()
  .split("\n");

const N = input.shift();
const M = input.shift();
const arr = input
  .map((e) => e.split(" ").map(Number))
  .sort((a, b) => a[2] - b[2]);

const parent = [];
let answer = 0;

const getParent = (parent, n) => {
  if (parent[n] === n) return n;
  return getParent(parent, parent[n]);
};

const unionParent = (parent, a, b) => {
  const newA = getParent(parent, a);
  const newB = getParent(parent, b);

  newA < newB ? (parent[newB] = newA) : (parent[newA] = newB);
};

const findParent = (parent, a, b) => {
  const newA = getParent(parent, a);
  const newB = getParent(parent, b);

  return newA === newB ? true : false;
};

for (let i = 0; i < N; i++) {
  parent.push(i);
}

for (const tree of arr) {
  if (!findParent(parent, tree[0], tree[1])) {
    answer += tree[2];
    unionParent(parent, tree[0], tree[1]);
  }
}

console.log(answer);
