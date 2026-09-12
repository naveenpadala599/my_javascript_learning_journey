const numbers = [10,15,22,30];
numbers.find((number, index)=>{
   console.log(index);
   return number%2===0;
});
