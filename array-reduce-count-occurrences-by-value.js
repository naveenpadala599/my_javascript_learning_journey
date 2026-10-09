const colors = ["red", "blue", "red", "green", "blue", "red"];
const counts = colors.reduce((result, color)=>{
  result[color]=(result[color]||0)+1;
  return result;
},{});
console.log(counts);
