function fibonacci(num) {
  let x = 0;
  let y = 1;
  let fib = y;

  while (fib < num) {
    fib = x + y;
    x = y;
    y = fib;
  }

  return fib === num;
}

console.log(fibonacci(21));
console.log(fibonacci(1));
console.log(fibonacci(3));
console.log(fibonacci(10));
console.log(fibonacci(20));
