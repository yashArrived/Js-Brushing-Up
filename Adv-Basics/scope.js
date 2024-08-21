let a = 160;
const b = 4;
var c = 50;

{
    //this is scope
}
 {
    let a =10;
    const b = 100;
    var c = 111;
    console.log("inner:", c);
    console.log("inner:", a);
    
 }
 console.log("outer" , a);
 
 console.log(c);

 //both the ouputs remain same for c , this is the problem with var.

//  use let and const only

// INTERESTING **************88
console.log(addone(5)); //does not throw error
function addone(val){
    return val+1;
}



addTwo(5); //throws error
const addTwo = function(num){
    return num+2;
}
