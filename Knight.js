const location = "d7";
const col = Number(location.charAt(1));
const row = location.charCodeAt(0) - "a".charCodeAt(0) + 1;

function solution(location) {
  const plans = [
    [-2, 1],
    [-2, -1],
    [2, 1],
    [2, -1],
    [-1, 2],
    [1, 2],
    [-1, -2],
    [1, -2],
  ];

  let count = 0;

  for (let i = 0; i < plans.length; i++) {
    let next_row = row + plans[i][1];
    let next_col = col + plans[i][0];

    if (next_row <= 8 && next_row > 0 && next_col > 0 && next_col <= 8) {
      count++;
    }
  }

  console.log(count);
}

solution(location);
