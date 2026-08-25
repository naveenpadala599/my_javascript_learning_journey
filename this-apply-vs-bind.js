function introduce(greeting, punctuation){
    console.log(greeting, this.name+punctuation);
}
const person={
   name: "Alice"
};
introduce.apply(person, ["Hello", "!"]);
const introducePerson=introduce.bind(person);
introducePerson("Hi", "!");
