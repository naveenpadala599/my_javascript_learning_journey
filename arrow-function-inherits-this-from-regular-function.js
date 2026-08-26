const person = {
   name: "Alice",
   fun: function(){
      const arrow = () => {
         console.log(this.name);
      };
      arrow();
   }
};
person.fun()
