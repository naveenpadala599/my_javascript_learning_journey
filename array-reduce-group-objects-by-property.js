const users = [
  {name: "Alice", role: "admin"},
  {name: "Bob", role: "user"},
  {name: "Charlie", role: "admin"}
];
const grouped = users.reduce((result, user)=>{
  if(!result[user.role]){
    result[user.role]=[];
  }

  result[user.role].push(user);
  return result;
}, {});
console.log(grouped);
