//completes in future
//obj represents the eventual completeion or failure of an async operation and its resulting value

// Promises is in one of these staes :
/*
1) penidng:initial state; neither fulfilled nor rejected
2) fulfilled : operation was completed successfully
3) rejected : operation failed.



MAKING PROMISES:
*/
const promiseOne = new Promise(function(resolve, reject) {
    // Do an async task: e.g., db calls, cryptography, network calls
    setTimeout(() => {
        console.log('Async task executed');
        resolve('ok done');
    }, 1000);
});
       
