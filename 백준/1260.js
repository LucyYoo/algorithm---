const fs = require("fs");

const input = fs
  .readFileSync(
    "C:/Users/Happy/OneDrive/바탕 화면/코딩/알고리즘/백준/input.txt"
  )
  .toString()
  .split("\n");

const [N, M, V] = input.shift().split(" ").map(Number);

const graph = Array.from({ length: N + 1 }, () => []);

for (let i = 0; i < M; i++) {
  const [from, to] = input[i].split(" ").map(Number);
  graph[from].push(to);
  graph[to].push(from);
}

graph.forEach((e) => {
  e.sort((a, b) => a - b);
});

const visited = new Array(N + 1).fill(false);
const answerDFS = [];
const answerBFS = [];

const dfs = (v) => {
  if (visited[v]) return;

  visited[v] = true;
  answerDFS.push(v);
  for (let i = 0; i < graph[v].length; i++) {
    const next = graph[v][i];
    if (!visited[next]) dfs(next);
  }
};
dfs(V);
console.log(answerDFS.join(" "));

visited.fill(false);
const bfs = (v) => {
  const queue = [v];

  while (queue.length) {
    const current = queue.shift();
    if (visited[current]) continue;

    visited[current] = true;
    answerBFS.push(current);
    for (let i = 0; i < graph[current].length; i++) {
      const next = graph[current][i];
      if (!visited[next]) queue.push(next);
    }
  }
};

bfs(V);
console.log(answerBFS.join(" "));
