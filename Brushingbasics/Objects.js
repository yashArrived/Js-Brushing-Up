//singleton is made using constructor


// Making objects: 1) Object.create
// 2)
const user = {
    name : "yash",
    age:18,
    "lastname" : "tiwari",
    isLoggedin: false,
};
//Accessing Objects
// 1) user.name --> you cannot access string property of onj here
// 2) user["lastname"] or user["name"] ; all entry should be given in string here


// declaring symbol
const sym = Symbol("key1");
// if you want to use symbol as a key use [] inside the object
//  if we freeze object then the change will not be reflected in obj
// Object.freeze(user)

// merge two or more Object
// Object.assign({}, obj1,obj2,obj3);
// or  {...obj1,...obj2}

// we can have objects of array then we do obj.mapp

//Fetch all keys of obj
// Object.keys(objname)
