let score = "33";
// datatype of score = string

let valueInNumber = Number(score); //now score becomes number!always


//Edge case:
let NewScore  ="22aa"

let valueinnumber = Number(NewScore);
console.log(valueinnumber);
console.log(typeof(valueinnumber));
//it still gives it a number but is really a NAN , therefore we now get 
// into conclusion that NaN is also a number so we need to check whether the coming number is 
// NaN or not , Pay attention.


let num = null;
//Now Number(num) will give us 0 (The temp thing);
// -------------------------------------------------------------
let isLoggedIn = 1;
let boolLoggedIn = Boolean(isLoggedIn);
console.log(boolLoggedIn);// --> true

// 1-> true0=> false

// empty string " " -> false
// "yash" => true

//********Operations  ************/
 let val = 3;
 let neg = -val;


//  2**3 => power : ans : 8 : (it says 2 to the power 3)

console.log("1"+2+2); //-->122
//the first value is taken as preferred value.
// +true : output 1
// +"" -> 0
