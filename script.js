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
console.info("meow meow"); 
// kuch kuch browser m console.info ko thode alag tarike se show krte h unke aage i sign a jata h
console.error(a); // laal laal
console.warn(b); // peela ayega
console.table({name: "abc", age: 22}); // table format m show krta h

// prompt and alert 
let name1 = prompt("Enter your name: "); // user se input  lene k liye
console.log("name:", name1);
alert("Hello " + name1); // user ko message dikhane k liye
// hoisting impact per type
// hoisting -> jb ek variable ko js m bnate h to wo do part m divide ho jata h
// 1. declaration var a = undefined;
// 2. initialization a = 12;
// prom[t se jo bhi value milegi wo hamesha string m hi milegi chahe user number dale
// agar number m chahiye to usse hume convert krna padega
let age = prompt("Enter your age: ");
age = Number(age); // string to number conversion
console.log("age:", age);

