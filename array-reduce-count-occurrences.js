const numbers = [1,2,2,3,2,4];
const count = numbers.reduce(
  (total, number)=>{
    if(number===2){
      return total+1;
    }
    return total;
  }, 0
);
console.log(count);
