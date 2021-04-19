const N = [8, 3, 7, 9, 2];
const M = [5, 7, 9];

const BinSearch = (N, target, start, end) => {
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (N[mid] === target) {
      return mid;
    } else if (N[mid] > target) {
      end = mid - 1;
    } else if (N[mid] < target) {
      start = mid + 1;
    } 
  }
  return false
};

N.sort((a, b) => a - b);

for (let i = 0; i < M.length; i++) {
  let result = BinSearch(N, M[i], 0, N.length - 1);

  if (result != false) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}

/* N.sort()

const result = N.filter((item) => M.includes(item))

console.log(result) */
