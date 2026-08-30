function add(a, b, c){
   return a+b+c;
}
const numbers = [10, 20, 30];
console.log(add(...numbers));
function show(...numbers){
    console.log(numbers);
}
show(10, 20, 30);
