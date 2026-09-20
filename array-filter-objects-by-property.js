const products = [
  {name: 'Laptop', price: 50000},
  {name: "Phone", pirce: 20000},
  {name: "Tablet", price: 30000},
  {name: "Monitor", price: 10000}
]
const expensive= products.filter(product=>product.price>=30000);
console.log(expensive);
