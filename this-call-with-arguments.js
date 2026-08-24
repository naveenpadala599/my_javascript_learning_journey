function greet(greet){
    console.log(greet, this.name);
}
const person={
     name: "Alice"
};
greet.call(person,"hello");
