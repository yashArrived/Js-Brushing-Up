// Object Literal

const user = {
  username :"yash",
  lname : "tiwari"  ,


  getuserDetails () {
console.log(this.username);

  }
}

console.log(user.lname);
//this is used for current context
// /this in node is empty obj  

// constructor function:

const promiseOne = new Promise()

// new  is a constructor fnc , used to create a new context

function User(uname , lname){
  this.username = uname
  ,
  this.lname = lname;
  // return this;
}

const userOne =  User("yash" , "tiwar");
const userTwo = User("yt" , "tt");

// using this approach it overrides the previous instance of User i.e userOne , so we need to use new keyword
//As soon as we use new keyword , empty object gets created that is a new instance 
//step 2) constructor fc gets called
//3) value gets initialised