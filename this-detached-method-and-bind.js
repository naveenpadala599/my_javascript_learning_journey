const person = {
    name: "Alice",
    greet: function(){
        console.log(this.name);
    }
};
person.greet();
const greet = person.greet;
greet();
const greet1= person.greet.bind(person);
greet1();
