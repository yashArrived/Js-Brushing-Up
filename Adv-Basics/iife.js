// immediately invoked function expression

// function op(){
//     console.log("hi");
    
// }
// op();

// Sometimes we have a pollution from global scope , so to remove that we use iife 

// named iife 
// (function op(){
//      console.log("hi");
    
//  })()

 (() =>(
    console.log("connected")
))();
//to write 2 iife in a single file use a semicolon after one iife because iife don't know when to stop invoking

((name) =>(
    console.log("connected with" , name )
))("yash");