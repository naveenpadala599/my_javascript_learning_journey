const person = {
    name: "Alice",
    regular: function(){
          console.log(this.name);
    },
    arrow: ()=>{
           console.log(this.name);
    }
};
person.regular();
person.arrow();
