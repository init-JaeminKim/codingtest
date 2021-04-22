const arr = [19, 15, 10, 17];
const target = 6;

const Ricecake = (target, arr) => {
  let start = 0;
  let end = Math.max(...arr);
  let result = 0;

  while (start <= end) {
    let total = 0;
    let mid = Math.floor((start + end) / 2);

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > mid) {
        total += arr[i] - mid;
      }
    }
    if (total < target) {
      end = mid - 1;
    } else {
      result = mid;
      start = mid + 1;
    }
  }
  console.log(result)
};

Ricecake(target, arr);
