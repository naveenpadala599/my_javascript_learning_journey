const numbers = [10, 20, 30, 40];

const result = [...numbers.slice(0,2), 25, ...numbers.slice(2)];

console.log(result);
// Expected: [10, 20, 25, 30, 40]

console.log(numbers);
// Expected: [10, 20, 30, 40]
