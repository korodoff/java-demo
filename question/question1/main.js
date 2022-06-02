//1.Difference b/n "==" and "===" operator
//==--- it compare the value of 2 variables,not data type
//===- it compares the value and data type of the two varaible variables
// it check the value and return weather the op is true or false
// thisbelong to the comparosion operator

console.log(2==2);//true
console.log("Hi"==="Hi");//true

// ******************************************************************************************
//2.what is spread operator?
// Spread syntax (...) allows an iterable such as an array expression or string to be expanded 
// in places where zero or more arguments (for function calls) or elements (for array literals)
//  are expected, or an object expression to be expanded in places where zero or more key-value 
// pairs (for object literals) are expected.
let Name =['A', 'L', 'T', 'H', 'A', 'F']
let spread = [...Name]
console.log(spread);


//For function calls:

//myFunction(...iterableObj); // pass all elements of iterableObj as arguments to function myFunction

// ******************************************************************************************
//3.Difference between var let and const
// Var declaration are globally scoped or ftn scoped,while let and const are block scoped
// Var variables can be updated & redeclared with in its scope
// Let variables can be updated,but not redeclared 
// Const variables can neither be updated nor redeclared
// Var are hoisted
// While var and let can be declared without being initialised,const must be initialized during declaration


// ******************************************************************************************



//4.What is execution context

// The Execution Context contains the code that's currently running, and everything that aids in its execution.

///During the Execution Context
//xt run-time, the specific code gets parsed by a parser, the variables and functions are stored in memory, 
// executable byte-code gets generated, and the code gets executed.

//There are two kinds of Execution Context in JavaScript:

//Global Execution Context (GEC)
//Function Execution Context (FEC)


//Global Execution Context (GEC):
//Whenever the JavaScript engine receives a script file, it first creates a default Execution Context known as the
//  Global Execution Context (GEC).

//The GEC is the base/default Execution Context where all JavaScript code that is not inside of a function gets 
// executed.



//Function Execution Context (FEC)
//Whenever a function is called, the JavaScript engine creates a different type of Execution Context known
//  as a Function Execution Context (FEC) within the GEC to evaluate and execute the code within that function.



// ******************************************************************************************


//5.What is meant by First class functions
//Function which gets treated as a variable.It can be passed as an argument to other functions,can be returned by another function and can be assigned as a value to a variable.
//Always we use arrow ftn


// Pass a function as an Argument
JavaScript
function sayHello() {
  return "Hello, ";
}
function greeting(helloMessage, name) {
 console.log(helloMessage() + name);
}
// Pass `sayHello` as an argument to `greeting` function
greeting(sayHello, "JavaScript!");
// Hello, JavaScript!


// We are passing our sayHello() function as an argument to the greeting() function, this explains how we are
//  treating the function as a value.


//6.what are closures?
//Closures: When a fun is running , there is a another variable , we may access the local variable .........
//It is a combination of inner function and outer
//the lexical environment that was created by the inner function.
//We are able to access the variable inside the function becoz of closures.

function outer(){
  let a =10;
  function inner() {
     console.log(a);
  }
  inner();
}
outer();



