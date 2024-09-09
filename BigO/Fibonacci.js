// O(n) fibonacci algorithm

function fibonacci(n) {
  let a = 0, b = 1, temp;
  let fibSq = [a];
  
  for (let i = 1; i <= n; i++) {
    fibSq.push(b);
    temp = a + b;
    a = b;
    b = temp;
  }
  
  return fibSq;
}

const count = 100;
const square = fibonacci(count);
console.log(square.join(", "));