//falsy values :
//false , 0 , -0 , BigInt 0n,"",null,undefined,NaN

//truthy values :
// "0" , 'false' , " ",[],{},
// function(){}


// false=='' (=>true)
// 0 =='' (==> true)


//nullish coalescing operator(??) :null undefuned

val1 = null ?? 10;

console.log(val1);// -> o/p - 10
