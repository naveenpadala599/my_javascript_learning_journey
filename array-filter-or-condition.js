const users = [
    { name: "Alice", age: 17, role: "admin" },
    { name: "Bob", age: 25, role: "user" },
    { name: "Charlie", age: 16, role: "user" },
    { name: "David", age: 30, role: "user" }
];
const selected = users.filter(user=>user.age>=18||user.role==="admin");
console.log(selected);
