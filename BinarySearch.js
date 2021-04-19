const arr = [0, 2, 4, 6, 8, 10, 12];

const binarySearch = (arr, target, start, end) => {
  if (start > end) {
    return false;
  }
  let mid = Math.floor((start + end) / 2);

  if (arr[mid] === target) {
    return true;
  }
  if (arr[mid] > target) {
    return binarySearch(arr, target, start, mid - 1);
  }
  if (arr[mid] < target) {
    return binarySearch(arr, target, mid + 1, end);
  }
};

console.log(binarySearch(arr, 4, 0, arr.length-1));
