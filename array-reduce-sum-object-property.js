const products = [
  {name: "Book", price: 500},
  {name: "Pen", price: 50},
  {name: "Bag", price: 1000}
];
const result=products.reduce(
  (sum, product)=>{
    return sum+product.price
  },0
);
console.log(result);
