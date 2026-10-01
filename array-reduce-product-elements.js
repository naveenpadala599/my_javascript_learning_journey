const numbers = [2, 5, 3];
const result = numbers.reduce(
  (product, number) => product*number, 1
);
console.log(result);
