const products = [
   {name: "Laptop", price: 50000}, 
   {name: "Phone", price: 20000}
];
const updated = products.map(product=>({
  name: product.name,
  price: product.price+1000
}));
console.log(updated);
