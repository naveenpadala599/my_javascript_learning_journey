const products = [
    { name: "Tablet", price: 30000 },
    { name: "Laptop", price: 50000 },
    { name: "Phone", price: 20000 }
];

products.sort((a,b)=>a.name.localeCompare(b.name));
console.log(products);
