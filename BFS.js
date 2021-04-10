const graph = [
  [],
  [2, 3, 8],
  [1, 7],
  [1, 4, 5],
  [3, 5],
  [3, 4],
  [7],
  [2, 6, 8],
  [1, 7],
];

const visited = new Array(9).fill(false);
const queue = [];

let i = 0;
const BFS = (graph, start, visited) => {
  queue.unshift(start);
  visited[start] = 1;

  while (queue.length) {
    let v = queue.shift();
    console.log(v, " ");

    for (let i = 0; i < graph.length; i++) {
      if (visited[graph[v][i]] == false) {
        queue.push(graph[v][i]);
        visited[graph[v][i]] = true;
      }
    }
  }
};

BFS(graph, 1, visited);
