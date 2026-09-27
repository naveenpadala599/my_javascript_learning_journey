const products = [
   {name: "Laptop", price: 50000},
   {name: "Phone", price: 20000}, 
   {name: "Tablet", price: 30000}
];
const result = products.some(product=>product.price>=40000);
console.log(result);
