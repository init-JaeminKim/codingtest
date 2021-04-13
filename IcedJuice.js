const graph = [
  [0, 1, 1],
  [0, 1, 0],
  [1, 0, 1],
];

const IcedJuice = (x, y) => {
  if (x <= -1 || x >= 3 || y <= -1 || y >= 3) {
    return false;
  }

  if (graph[x][y] === 0) {
    graph[x][y] = 1;

    IcedJuice(x - 1, y);
    IcedJuice(x, y - 1);
    IcedJuice(x + 1, y);
    IcedJuice(x, y + 1);

    return true;
  }
  return false;
};

let result = 0;

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (IcedJuice(i, j) === true) {
      result++;
    }
  }
}

console.log(result)
