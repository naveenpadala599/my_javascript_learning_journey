const orders = [
    { item: "Book", price: 500, paid: true },
    { item: "Laptop", price: 50000, paid: false },
    { item: "Bag", price: 1000, paid: true },
    { item: "Phone", price: 20000, paid: true }
];

const total = orders.filter(order=>order.paid).reduce((sum, order)=>sum+order.price, 0);
console.log(total);
