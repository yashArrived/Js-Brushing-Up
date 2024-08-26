// function yash() {
//     setTimeout(() => {
//         console.log("Yash");
//     }, 2000);
// }

const a = setInterval(()=>(console.log("yash here")
), 1000);
// button.onclick(clearTimeout(a)) //to stop setTimeout
const stopped = () => {
    clearInterval(a);
}
setTimeout(stopped, 6000);

//GENERATE RANDOM NUMBER


const randColor = function(){
    const hex = '0123456789ABCDEF';
    let color = '#';
    for(let i = 0 ; i < 6 ; i++){
        color +=hex[Math.round(Math.ramdom()*16)];
    }
    return color;
};
console.log( randColor());

