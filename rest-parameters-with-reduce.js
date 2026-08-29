function add(...numbers){
    return numbers.reduce((sum, num)=>{
         return sum+num;
    },0);
}
console.log(add(20, 30));
console.log(add(20, 30, 40, 50));
