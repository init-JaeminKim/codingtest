const maps = [
  [1, 1, 1, 1],
  [1, 0, 0, 1],
  [1, 1, 0, 1],
  [1, 1, 1, 1],
];
let x = 1;
let y = 1;

function solution(x, y, maps) {
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  let visit = 1;
  let turn = 0;
  let direction = 0;
  let nx = 0;
  let ny = 0;

  maps[x][y] = 1;

  while (true) {
    direction -= 1;
    if (direction < 0) {
      direction = 3;
    }

    nx = x + dx[direction];
    ny = y + dy[direction];

    console.log(x, y)


    if (maps[nx][ny] === 0) {

      maps[nx][ny] = 1;

      x = nx;
      y = ny;

      visit++;
      turn = 0;
      continue;
    }
    else{
      turn++
    }
    if(turn === 4){
      nx = x - dx[direction]
      ny = y - dy[direction]

      if(maps[nx][ny] === 0){
        x = nx
        y = ny
      }
      else{
        break
      }
      turn = 0;
    }
  }
  console.log(visit)
}

solution(x, y, maps);
