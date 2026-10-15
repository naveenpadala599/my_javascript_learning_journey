const numbers = [10, 15, 20, 25, 30];
const result =numbers.reduce((counts, number)=>{
  if (number>20){
    counts.above++;
  }else{
    counts.belowOrEqual++;
  }
  return counts;
}, {above: 0, belowOrEqual: 0});
console.log(result);
