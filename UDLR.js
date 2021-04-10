const N = 5;
const Plans = ["R", "R", "R", "U", "D", "D"];

function solution(N, Plans) {
  let x = 1;
  let y = 1;
  let nx = 0;
  let ny = 0;
  const types = ["L", "R", "U", "D"];

  let dx = [0, 0, -1, 1];
  let dy = [-1, 1, 0, 0];

  for (let i = 0; i < Plans.length; i++) {
    for (let j = 0; j < types.length; j++) {
      if (types[j] === Plans[i]) {
        nx = x + dx[j];
        ny = y + dy[j];
      }
    }
    if (nx < 1 || ny < 1 || nx > N || ny > N) {
      continue;
    }
    x = nx;
    y = ny;
  }
  console.log(x, y);
}

solution(N, Plans);
