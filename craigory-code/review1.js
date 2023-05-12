"use strict";
//greeting takes a name parameter
function greeting (first, last){
return `Hello ${first} ${last}`
}


let firstName = "Zyaire";
let lastName= "Walker";
// calling/involing greeting function and passing the first name argument
//catching/assigning the return value of thr function into the message variable
let message = greeting(firstName, lastName);
console.log(message);

let number = 5;
function test() {
 let number = 6;
 console.log("++ " + number);
}
console.log("** " + number);
test();
console.log("** " + number)