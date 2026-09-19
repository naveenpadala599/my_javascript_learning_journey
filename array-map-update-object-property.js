const users = [
  { name: "Alice", age: 25, city: "Eluru" },
  { name: "Bob", age: 30, city: "Hyderabad" }  
];
const updatedUsers = users.map(user=>({
  ...user,
  age: user.age+1
}));
console.log(updatedUsers);
