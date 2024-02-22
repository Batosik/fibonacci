const sumFibonacci = (n) => {
  if (n === 2) {
    return 1
  }
  if (isNaN(n) || n <= 1) {
    return 0
  }
  const iter = (previous, currant, index, acc) => {
    if (index === n) {
      return acc + currant
    }
    return iter(currant, previous + currant, index + 1, acc + currant)
  }
  return iter(1, 1, 3, 1)
}

console.log(sumFibonacci(1)); // 0 (только первое число Фибоначчи)
console.log(sumFibonacci(2)); // 1 (0 + 1)
console.log(sumFibonacci(3)); // 2 (0 + 1 + 1)
console.log(sumFibonacci(4)); // 4 (0 + 1 + 1 + 2)
console.log(sumFibonacci(5)); // 7 (0 + 1 + 1 + 2 + 3)
console.log(sumFibonacci(-1)); // 0
console.log(sumFibonacci('abc')); // 0