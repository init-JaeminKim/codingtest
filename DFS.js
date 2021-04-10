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

const DFS = (graph, v, visited) => {
  visited[v] = true;
  console.log(v, " ");

  for(let i = 0; i<graph[v].length; i++){
      if(visited[graph[v][i]] == false){
        DFS(graph, graph[v][i], visited)
      }
  }
};

DFS(graph, 1, visited);
