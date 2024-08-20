// funct_name //-->reference
// func_name() //->execution! ()means execution

function add(a,b){//defintion --> parameters
 console.log(a+b);
 return a+b;
}
const res = add(9,4); //--> arguments
console.log("Result :->", res);

// if the argument is not given then it is undefined not null
// to pass default value when we have passed no value from arguments we can have a 
// default in parameters for ex: function abc(name = yash){...}


// Sometimes we have a large no. of arguments ; ex:cart
// We use rest operators in the parameters
function CalculateCart(...num){
    return num;
}
console.log(CalculateCart(300,300,200,100,0,40,30));

