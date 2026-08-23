const person = {
    name: "Alice",
    sayHello: function(){
      console.log(this.name);
  }
};
const person1={
    name: "Bob",
    sayHello: person.sayHello
};
person.sayHello();
person1.sayHello();
