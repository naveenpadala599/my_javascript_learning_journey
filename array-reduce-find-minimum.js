const numbers = [18,7,25,3,14];
const min = numbers.reduce((smallest, number)=>{
  if(number<smallest){
    return number;
  }
  return smallest;
},numbers[0]);
console.log(min);
