const graph = [
  [1, 1, 0],
  [0, 1, 0],
  [0, 1, 1],
];

const arr = [];
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

const Maze = (x, y) => {
  arr.push([x, y]);

  while (arr.length) {
    x = arr[0][0];
    y = arr[0][1];

    arr.shift()

    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];

      if (nx < 0 || nx >= 3 || ny < 0 || ny >= 3) {
        continue;
      }
      if (graph[nx][ny] === 0) {
        continue;
      }
      if (graph[nx][ny] === 1) {
        graph[nx][ny] = graph[x][y] + 1;
        arr.push([nx, ny]);
      }
    }
    console.log(graph);

  }
};

Maze(0, 0);
