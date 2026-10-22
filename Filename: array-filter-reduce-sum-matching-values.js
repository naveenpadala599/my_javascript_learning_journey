const prices = [100,250,50,400,150];
const total= prices.filter(price=>price>=150).reduce((sum,price)=>sum+price, 0);
console.log(total);
