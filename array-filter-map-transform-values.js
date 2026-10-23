const prices = [100,250,50,400,150];
const result = prices.filter(price=>price>=150).map(price=>price*2);
console.log(result);
