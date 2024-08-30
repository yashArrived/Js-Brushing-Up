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
In /function inside() we can have the name variable
but we cannot use lastname outside the inside variable 


all the functions inside can have values of the functions outside it




CLOSURE:
 
When we return a whole function from a function then not only the function get returned but its whole lexical scope gets returned.

Practical Explanation :
*/
// 1) example
function createGreeter(name) {
        let abc = "yash"
        function greet() {  // Named inner function
            console.log("Hello, " + name + "!");
        }
        
        return greet;
    }
    
    const greetJohn = createGreeter("John");
    const greetJane = createGreeter("Jane");
    
    greetJohn(); // Output: Hello, John!
    greetJane(); // Output: Hello, Jane!


// 2) 
const abcc= ()=>{
        let a = 6;
        let b = "yas";

        function yt(){
                        let name = "yash";
                        return a;
        }
        return yt;
}
const returnedFunction = abcc()(); // returns yt


// 3) Most Suitable

function createCounter() {
        let count = 0;  // This is a variable in the outer function's scope
    
        return function() {  // The inner function forms a closure
            count++;  // It has access to 'count'
            console.log(count);
        }
    }
    
    const counter = createCounter();
     // 'counter' now references the inner function -> we store inner func in counter
//      if multiple returns , counter becomes an object
    counter(); // Output: 1
    counter(); // Output: 2
    counter();


//     4) Most Practical

//     function createColorChanger(color) {
//         return function() {
//             document.body.style.backgroundColor = color;
//         }
//     }
    
//     document.getElementById("orange").onclick = createColorChanger('orange');
//     document.getElementById("green").onclick = createColorChanger('green');
//     document.getElementById("blue").onclick = createColorChanger('blue'); // Assuming there's a "blue" element
    

// 5) easy peasy : 
const outer = () => {
        let count = 3;
    
        const inc = () => {
            count++;
            console.log(count);  // Optionally log the updated count
        }
    
        const dec = () => {
            count--;
            console.log(count);  // Optionally log the updated count
        }
    
        return { inc, dec };  // Return an object containing the inc and dec functions
    }
    
    const cousnter = outer();
    cousnter.inc();  // Output: 4
    cousnter.dec();  // Output: 3
    