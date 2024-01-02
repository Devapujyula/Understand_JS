// var is globally scope while let and const are block scope
// var can be redeclared and updated values with in the scope
// let can be updated but not redeclared
// const neither be updated nor redeclared
// var variables are intialized with undefined whereas let and const variables are not intialized
// const must be intialized during declaration unlike let and const

console.log("JS Var, Let, Const Variables");

const _s = undefined;
console.log(_s);

let nameS = undefined;
console.log(nameS);

var a = 45;
let b = "Prasanna";
var c = null;
var d = undefined;

{
  let b = "this";
  console.log(b);
}

let data = [1, 2, 4, 6, 9];
data = [4, 6, 8, 10];
console.log(data);

const name = "Prakash";
// name = "Prasanna";
console.log(name);
