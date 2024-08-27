//completes in future
//obj represents the eventual completeion or failure of an async operation and its resulting value

// Promises is in one of these staes :
/*
1) penidng:initial state; neither fulfilled nor rejected
2) fulfilled : operation was completed successfully
3) rejected : operation failed.


Promise take two parmeters -- resolve and reject
MAKING PROMISES:
*/
const promiseOne = new Promise(function(resolve, reject) {
    // Do an async task: e.g., db calls, cryptography, network calls
    setTimeout(() => {
        console.log('Async task executed');
        resolve();
    }, 1000);
});
       
//Consume promise
promiseOne.then(()=>{
    console.log("promise consumed");
    
});
//resolve and then is connected under the hood.
new Promise((resolve,reject)=>{
    setTimeout(()=>{
            console.log("inside new promise");
            resolve({username:"Chai",
                email:"yt@yt.com"
            })
    },1000)

}).then((user)=> {
console.log(user); //we get the obj passed in resolve

})

//USING REJECT NOW:
const promise333 = new Promise((resolve,reject)=>{
    let error = false;
    setTimeout(()=>{
        if(error){
            reject("Error: Something Went Wrong");
        }
        else resolve({username:"yash",name:"tiwari"})
    },1000)
   
})
.then((user)=>{
// console.log();
        console.log(user);
        return user.username;
        
}).then((username)=>{
    console.log(username);
    
}).catch((err)=>{
// console.log(err);
console.log(err);


}).finally(()=> console.log("The promise is either resolved or rejected")
)
//finally is always executed,.catch() always catches error that taked err as parameter.
// then is used to potray the return value of a promise


// using ASYNC AWAIT
//use async await inside try catch block to handle errors and exceptions
const  consumingpromise =async()=>{
    try {
        const res =    await promise333
        console.log(res);
    } catch (error) {
        console.log(error);    
    }    
}
consumingpromise(); //we need to comment .then then this will get executed

//fetch data , then make it await .json();


//USING FETCH WTHOUT ASYNC AWAIT (using then then catch): 

fetch("www.url.com").then((res)=>{
return res.json();
}).then((resp)=>{
    console.log(resp);
    
}).catch((err)=>{
console.log(err);

})

//fetch queue i.e microtask queue i.e priority queue has highest priority!!!
 /*
  .
 . . fetch has high priority for execution.
 */
