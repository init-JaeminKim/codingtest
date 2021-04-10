let N = 17;
const K = 4;

function solution(N, K) {
    let count = 0;
  while (N > 1) {
    if (N % K === 0) {
      N = N / K;
    } else {
      N -= 1;
    }
    count++
  }

  console.log(count)
}

solution(N, K);
