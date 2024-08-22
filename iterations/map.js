//map also returns a value
const num = [1,2,3,4,5,6,7,8,9,10];

const add20Num = num.map((nums)=> nums+20)
// console.log(add20Num);
  
// Chaining in different methods
// Problem : We want to add 10 to each num and then add 2 again and then get numbers greater than 15.

const newNums = num.map((nums)=> nums+10).map((numbers)=>numbers+2)
                .filter((numbers)=>numbers>15);

                console.log(newNums);
                