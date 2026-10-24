const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 17 },
    { name: "Charlie", age: 30 },
    { name: "David", age: 16 }
];

const result = users.filter(user=>user.age>=18).map(user=>user.name);
console.log(result);
