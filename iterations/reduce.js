// reduce also returns a value

// reduce is basically used to calculate sum of all elements in array
// it brings 2 values n parameter , the accumulator and the curr value

// we need to pass a initial value to give it to the accumulator so that 
// for 1st render , after first teration , the accumulator then takes prev accumulator + currvalue as new acc value

const arr= [1,2,3,4,5,6,7,8];

const s = arr.reduce((acc,item)=>acc+item,0);
// console.log(s);

const arrayOfObj = [
    {
            courseName:"Js",
            price : 1000
    },
    {
        courseName:"py",
        price : 3040
},
{
    courseName:"ruby",
    price : 2000
},
{
    courseName:"sql",
    price : 3000
},
]

const tot = arrayOfObj.reduce((acc,{price})=> acc+price , 0);

console.log(tot);
