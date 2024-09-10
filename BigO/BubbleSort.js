// O(n2) Bubble Sort

function bubbleSort(array) {
  let n = array.length;
  
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}

let array = [64, 34, 25, 12, 22, 11, 90];
console.log("Unsorted array: ", array);

let sortedArr = bubbleSort(array);
console.log("Sorted array: ", sortedArr);
