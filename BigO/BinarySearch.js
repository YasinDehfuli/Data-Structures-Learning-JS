// O(log n) Binary Search

function binarySearch(array, target) {
  let left = 0;
  let right = array.length - 1;
  
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    
    if (array[mid] === target) {
      return mid;
    } else if (array[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  
  return -1;
}

let array = [1, 18, 23, 24, 31, 33, 38, 40, 140, 142];
let target = 7;

let result = binarySearch(array, target);

if (result !== -1) {
  console.log("result ===> " + result);
} else {
  console.log("not found");
}
