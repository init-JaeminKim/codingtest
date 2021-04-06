const array = [
  [3, 1, 2],
  [4, 1, 4],
  [2, 2, 2],
];

function solution(array) {
  let temp = [];
  let result = 0;

  for (let i = 0; i < array.length; i++) {
    temp.push(Math.min(...array[i]));
  }

  result = Math.max(...temp);

  console.log(result);
}

solution(array);
