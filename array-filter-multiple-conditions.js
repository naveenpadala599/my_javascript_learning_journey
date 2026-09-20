const users = [
  {name: "Alice", age: 25, active: true},
  {name: "Bob", age: 17, active: true},
  {name: "Charlie", age: 30, active: false},
  {name: "David", age: 22, active: true}
]
const eligible = users.filter(user=>user.age>=18&&user.active);
console.log(eligible);
