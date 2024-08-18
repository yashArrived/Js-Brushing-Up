/*
Memory is of 2 types : Stack & Heap

Primitive datatypes uses Stack     | Non primitive -> heap
We get a copy of variable declared | We get the reference of original val
ex. let name = "Yash"                ex. let user = {
   let anothername = name;                  name : "yash",
   anothername = "new"                       }
Here we get the copy


   now output :                         let user2 = user;
   anothername = new                    here we get the reference not copy
   name = yash                              user2.name = "tiwari";
                                            output:
                                            user.email =>tiwari
                                            user2.email =>tiwarif

*/