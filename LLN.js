const array = [2, 4, 5, 4, 6];
const m = 8;
const k = 3;

function solution(m, k, array) {
  array = array.sort((a, b) => b - a);

  const first = array[0];
  const next = array[1];
  let result = 0;

  while (m > 0) {
    for (let i = 0; i < k; i++) {
      result += first;
      m -= 1;
    }
    result += next;
    m -= 1;
  }
  console.log(result);
}

solution(m, k, array);
