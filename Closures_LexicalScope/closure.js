/*
A closure gives you access to an outer function's scope from an inner function.
Closures are created every time a function is created.



LEXICAL SCOPING:

function in(){

var name = "yash";
        function inside(){
        var lastname = "tiwari";
                console.log(name);
        
        }
                inside();
}
                in();
fucntion inside we can have the name variable
but we cannot use lastname outside the inside variable 

*/

