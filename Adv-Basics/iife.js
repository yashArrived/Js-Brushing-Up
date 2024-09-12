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
))("yash

  /* Benefits of IIFE
Avoid Global Namespace Pollution: IIFE helps in preventing variable clashes in the global namespace.
Creates Private Scope: All variables inside the IIFE are private to that function scope and not exposed to other parts of the code.
Encapsulation: Useful when building libraries or modules where you want to expose only certain functionality.
Executes Immediately: IIFE runs immediately after it is created, making it useful for initialization tasks.
Drawbacks of IIFE
Readability: Some developers find IIFE syntax harder to read, especially for newcomers to JavaScript.
Debugging: If not named, debugging can be harder since anonymous functions don’t appear in stack traces with a name. */
