const numbers = [10,20,30];
numbers.find((number, index, array)=>{
   console.log(array===numbers);
   return number > 15;
});
