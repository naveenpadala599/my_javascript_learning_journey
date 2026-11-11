const numbers = [1,2,3];
const result = numbers.flatMap(number=>[number, number*10]);
console.log(result);
