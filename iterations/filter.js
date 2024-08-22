//Filter returns a value unlike forEach

// const num = arr.filter((item)=>(condition));
//the values with satisfies the conditon is returned.

// ex:
const num = [1,2,3,4,5,6,7,8,9,10];

const numMorethan5 = num.filter((nums)=> nums>5);
console.log(numMorethan5);
// when we use {} instead of () ; we open a scope and need to return something using return keyword.

//implement without filter:
const newNumbers =[];

num.forEach((item) => {
    if(item>6){
        newNumbers.push(item);
    }
})
console.log(newNumbers);


