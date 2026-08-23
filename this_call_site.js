const person={
    name : "Alice",
    sayHello: function(){
          console.log(this.name);
     }
};
person.sayHello();
const fn = person.sayHello;
fn();
