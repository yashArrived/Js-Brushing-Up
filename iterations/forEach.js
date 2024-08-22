const coding =["js","ruby","c++" , "java", "pyhton"];

// forEach takes in a callback fnc , with a key or item that
//  corresponds to each of the element in array

// coding.forEach( function(item){
// console.log(item);
// })

// coding.forEach((item)=> (console.log(item)
// ))

// for each does not always bring only item , it also has index and whole array :
// coding.forEach((index,item,arr)=> {
//     console.log(index,item,arr);
    
// })


// ARRAY OF OBJECT

const myCOde = [
{
        lang:"js",
        name : "javascript"
},
{
    lang:"py",
    name : "python"
},{
    lang:"cpp",
    name : "c++"
},
{
    lang:"html",
    name : "HTML lang"
},

]

myCOde.forEach(({lang,name})=>{
    console.log(lang,name);
    
})



