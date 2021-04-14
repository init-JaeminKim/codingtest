let arr = [5, 1, 3, 6, 9, 4, 7, 8, 2, 0];
let temp = 0;

const InsertSort = () => {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j >= 0; j--) {
      if (arr[j] < arr[j - 1]) {
        temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      } else {
        break;
      }
    }
  }
  console.log(...arr);
};

const SelectionSort = () => {
  for (let i = 0; i < arr.length; i++) {
    let min_index = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min_index] > arr[j]) {
        min_index = j;
      }
    }
    temp = arr[i];
    arr[i] = arr[min_index];
    arr[min_index] = temp;
  }

  console.log(arr);
};

const QuickSort = () => {
  
}
