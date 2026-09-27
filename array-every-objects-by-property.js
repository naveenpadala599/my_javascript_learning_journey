const users=[

  {name: "Alice", age: 25},

  {name: "Bob", age: 30},

  {name: "Charlie", age: 35}

];

const result = users.every(user=>user.age>=18);

console.log(result);
