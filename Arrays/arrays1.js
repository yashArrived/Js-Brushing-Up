// 3 declarations of araay : 

const myArr = [1,2,3,4]
const newArr = [abc,yas,hb]
const array = new Array(1,2,3,4)

// Array copy operations create shallow copying
//shallow copy share same refernce point
//deep not share same ref point


// ARRAY METHODS

myArr.push(6);
// console.log(myArr);
myArr.pop() //-> last element gets deleted
myArr.unshift(5) // numberw will be added in forward
myArr.includes(4); //true or false
const newArer = myArr.join() //-->Elements joined and converted to string!
/*
  Ex:
Default Usage (Comma-Separated)
const arr = ['apple', 'banana', 'cherry'];
const result = arr.join();

console.log(result);  // Output: "apple,banana,cherry"
const arr = ['apple', 'banana', 'cherry'];
const result = arr.join(' ');

console.log(result);  // Output: "apple banana cherry"

const arr = ['apple', 'banana', 'cherry'];
const result = arr.join('-');

console.log(result);  // Output: "apple-banana-cherry"

*/


// slice and splice 
console.log("a" , myArr);
const myNewArray1 = myArr.slice(1,3); //3rd will not be included 
// & original array remain unaltered.
const newArray = myArr.splice(1,3);//3rd will be included and
//  all 3 will be removed from the original array


// myNewArray1.push(Array2) -> we will get 2 elemets in a single array for example : [[a,b,c],[r,e,t]];
// for concat all gets merge and new arr is returned also --> const allarr = myarr.concat(arr2)

/* BEST METHOD
const allarray = [...arr1 , ...arr3, ...arr3] -> All elemets get added in a single different array
*/

//for array ke andr array i.e nested array : for ex: [1,3,4,[3,[4,5,6,7] , 8,9,]]
// array.flat(depth)
// const flatarray =  array.flat(Infinity); -> gets all the elemnts into a different array


// COnvert any value to array :
// clg(Array.from("yashutiwari"));
// it will return = [y,a,s,h,u,t,i,w,a,r,i]

// objects to .from me it will return empty array []


// let a = 10;
// b=13;
// c=19

// Array.of(a,b,c) --> converts it to array
