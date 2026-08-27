const person = {
    name: "Alice",
    greet: function(){
       setTimeout(function(){
           console.log(this.name); 
       }, 1000);
    },
    greet1:function(){
        setTimeout(()=>{
           console.log(this.name);
        }, 1000);
    }
};
person.greet();
person.greet1();
