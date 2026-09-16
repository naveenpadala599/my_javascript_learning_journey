const numbers = [10, 20, 30];
const result = numbers.map((number, index, array)=>{
   return array.length+index;
});
console.log(result);
