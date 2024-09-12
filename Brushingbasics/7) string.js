const name = "yash";

const newname = new String('tiwari'); 
// string is a object here with key value pairs not Array
// 0:"y" 1:"a" .. etc

// console.log(newname[2]);

// gamename.length = 4
// .toUpperCase() , .toLowerCase();
// .charAt(3) -> tells the location of a character at the given index in string
// .indexOf('t')

let newName = yash-tiwari
// const newString = newName.substring(0,4) exclusive of last index

const anotherString = newName.slice(-8,4); //--> it will slice from back
// console.log(anotherString);

// WHEN THERE ARE LOT OF SPACES
const newStringg = "    yash  ";
// newStringg.trim() ==> No spaces
// trim - removes starting as well as ending phases


//REPLACE 

const url = "https:yash.com/yash"

let abc = url.replace('yash' , 'tiwari')

console.log(abc); //Output => 'https:tiwari.com/yash'

//includes

url.includes('mohna') // ->false

// Split String
newName.split('-')
// Wherever it finds '-' in string it splits and make that as array values.
// For ex: let a = "gg-hb-asd fd "
a.splice('-') ==> ['gg','hb','asd',' fd'];









