// var,let,const
// declaration and initialization
var a = 12;
// ye apne ap ko window m add krta h
// function scoped hota h
// declare kr skte ho same name se and error nhi ayega(redeclaration allowed)
var a = 15;
// var block ko bhi respect nhi krta
let b = 20;
// block scoped hota h
// apne ap ko window m nhi add krta
// redeclaration nhi kr skte same name se
// let b = 25; // error ayega
b = 25; // re-assignment kr skte ho

// TDZ - Temporal Dead Zone
// tdz is the area jhape javascript ko pta h ki variable exist krta h but uska initialization nhi hua
// console.log(c); // error ayega
let c = 30;
console.log(c);

// hoisting impact per type
// hoisting -> jb ek variable ko js m bnate h to wo do part m divide ho jata h
// 1. declaration var a = undefined;
// 2. initialization a = 12;

console.error(a); // undefined
console.warn(b); // error ayega
