// variable: boolean strings number
// rule to assign variable
// 1: keyword variablename=value(value are boolean strings etc)
// 2: keyword should mainly be declarative and use camel case
// 3: keyword are let,var,const
// 4: names are case sensitive

// let:can be declared in a line and the initialized with a value in other line
// also declared and initialized in same line but cannot be redeclared
// variable cannot have similar name

let fName = "krut"; //declared and initialize in same line
let sName; //declared but initialized in a different line
sName = "krut";
console.log(sName);

// const: declared and initialized in same line only
// cannot be redeclared and also cannot be reinitialized
// variable cannot have similar name
const lName = "Gupta";

// let:can be declared in a line and the initialized with a value in other line
// also declared and initialized in same line and can be redeclared
// variable cannot have similar name
var tName= "lana";
var tname = "baby";
var tName;
tName = "honey";
tName = "bunny";
console.log(tname);
// console.log(dsg); here declare a Error value is not define
// let myHobbies; if value is not declared it will throw an error as undefine
// console.log(myHobbies);
// null: its a default value assign by a user to a variable as long as the variable has not ben assignned its original/update value
let iName = null;
console.log(iName); // o/p null
// Global and Local Scope
let rName = "krut";
const kName = "Rose";
var age = 29;
// the above value are declared as global variable
console.log(rName, kName, age);
{
    console.log(rName, kName, age);
}
// block scope
{
    let dName = "sutnga";
    var qName = "rasut"
    console.log(dName);
}
// console.log(dName); here value will be not define because we cannot access block scope variable
// console.log(qName); //here value will show because var always behave as a global variable
// Hoisting: it support only with var type data bit not with let and const
// let and cont cannot be access before initialization like below
// console.log(game);//refference Error:
let game ="football"
// var key word are hoister
console.log(game2);
var game2;
game2 = "hockey";
console.log("game2");
// the above first we get an undefine value but onces the variable is declared we get the given value
// hoisting in function
add(2,3); //2,3 are called argument
function add(a,b, c=10){ //a,b are parameter
    let result = a*b;
    console.log(result);
    console.log(c);
}
// console.log(c); error: since c is not global
//parameter are needed only when we want to manipulate argument
