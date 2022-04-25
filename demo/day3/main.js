// console.log(dsg); here declare a Error value is not define
// let myHobbies; if value is not declared it will throw an error as undefine
// console.log(myHobbies);
// null: its a default value assign by a user to a variable as long as the variable has not ben assignned its original/update value
let sName = null;
console.log(sName); // o/p null
// Global and Local Scope
let fName = "krut";
const lName = "Rose";
var age = 29;
// the above value are declared as global variable
console.log(fName, lName, age);
{
    console.log(fName, lName, age);
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
