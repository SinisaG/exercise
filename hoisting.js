"use strict"

//both values are undefined
console.log(typeof setValue);
console.log(typeof setOtherValue);

//bogus condition where we define values
if (true) {
  var setValue = 'It is true!';
  let setOtherValue = 'It is true but not reachable';
}

console.log(typeof setValue);
console.log(typeof setOtherValue);

//setValue will have the value set in the if statement
//setOtherValue will be undefined
//That is because variables var are hoisted to the top to be declared
//and are available through whole scope
//let is not hoisted and is available in block where is declared

console.log(setValue); // It is true!
console.log(setOtherValue); //undefined

console.log(someFunction); //function
console.log(someFunctionVar); //undefined

function someFunction () {
  console.log("Some function called");
}
var someFunctionVar = function () {
    console.log("Some function assigned to variable called");
}
//Similar happens to functions. Declaration is hoisted to the top, but initialization
//will be delayed when using variable. It can be used only after assignment (possible cause of error).
console.log(someFunction); //function
console.log(someFunctionVar); //function
