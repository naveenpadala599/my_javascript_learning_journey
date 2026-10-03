const numbers = [25,8,42,17,31];
const max = numbers.reduce((largest, number)=>{if(number>largest){return number;}return largest;}, numbers[0]);
console.log(max);
