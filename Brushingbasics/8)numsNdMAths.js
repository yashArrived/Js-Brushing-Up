const balance = new Number(400);
// console.log(balance.toString().length);
// console.log(balance.toFixed(2)) //gives result 400.00 


const num = 323.8966;

// console.log(num.toPrecision(3)); // output - 324
//precision , 3 is the numbers we give priority to , if it was 123
//the answer would have been 124

const thousand = 1000000;
// make it in indian system
// console.log(thousand.toLocaleString('en-IN')); // o/p : 10,00,000

//  console.log(Math.hypot(3,2)); //Output : 3.605 (it finds the square root of the nums)
//  console.log(Math.round(3.5)); // output : 4  (roundoff)


//   console.log(Math.random()*10+1);

  const min = 10;
  const max = 20;
// IMPORTANT fORMULA  to generate any number between given range (from 10 to 20 here) :
  console.log(Math.floor(Math.random() * (max-min+1)+min ))



