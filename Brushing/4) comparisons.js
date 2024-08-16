// 2>1

console.log("2">1); 
console.log("02" > 1); 
//Output is true for both

//Comparing Null is tricky


console.log(null > 0); //F
console.log(null == 0);//F
console.log(null >= 0);//TRUE!!!!

/*
It gives true because the equality check == and comparisons
> < >= <= work differently.
Comparisons convert null to a number treating it as a 0;
*/

// Note: comparison and equal to have different approach.

// === checks datatype also with value.