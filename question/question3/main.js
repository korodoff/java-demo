// Q1.  What is callback hell



// Because we have to call callbacks inside callbacks, we get a deeply nested doOperation() function,
//  which is much harder to read and debug. This is sometimes called "callback hell" or the "pyramid of doom" 
// (because the indentation looks like a pyramid on its side).



// When we nest callbacks like this, it can also get very hard to handle errors: often you have to handle errors at each
//  level of the "pyramid", instead of having error handling once at the top level.

// also when one asynchronous function is cannot be done in callback

function doStep3(init, callback) {
    const result = init + 3;
    callback(result);
  }
  
  function doOperation() {
    doStep1(0, result1 => {
      doStep2(result1, result2 => {
        doStep3(result2, result3 => {
          console.log(`result: ${result3}`);
        });
      });
    });
  
  }
  
  doOperation();


//   q2. what are promise and why we need them

//callbacks can create callback hell leading to unmanageable code. Also it is not easy for any user to handle multiple
//  callbacks at the same time.

// Promises are used to handle asynchronous operations in JavaScript. They are easy to manage when dealing with
//  multiple asynchronous operations
// thus avoiding the undesired callback hell situation

// A Promise is in one of these states:

// 1.pending: initial state, neither fulfilled nor rejected.
// 2.fulfilled: meaning that the operation was completed successfully.
// 3.rejected: meaning that the operation failed.

// if the peomise return is fulflled then it wi be catch by the .then() method
// if the peomise return is reject then it wi be catch by the .catch() method
// also there one other method .fulfiled() method which will always run if either one or bot state are not returning any promise


let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(10);
    }, 3 * 100);
});

p1.then((result) => {
    console.log(result);
});

// ********************************************************************************************************
// Q3. What is promise chaining

// Sometimes, you want to execute two or more related asynchronous operations, where the next operation starts with the 
// result from the previous step this can be done using promise chaining


// this can be done by calling the .then() method multiple in a single promise

let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(10);
    }, 3 * 100);
});

p.then((result) => {
    console.log(result); // 10
    return result * 2;
}).then((result) => {
    console.log(result); // 20
    return result * 3;
}).then((result) => {
    console.log(result); // 60
    return result * 4;
});


//  we want to form multiple handlers for a promise but this is not a promise chaining
let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(10);
    }, 3 * 100);
});

p2.then((result) => {
    console.log(result); // 10
    return result * 2;
})

p2.then((result) => {
    console.log(result); // 10
    return result * 3;
})

p2.then((result) => {
    console.log(result); // 10
    return result * 4;
});



// ***************************************************************************************************************
//Q4 What is the purpose of async/await keywords?

// to avoid the need to configure promise chaining we use async/await

// An async function is a function declared with the async keyword, and the await keyword is permitted within it. 
// The async and await keywords enable asynchronous, promise-based behavior to be written in a cleaner style, avoiding 
// the need to explicitly configure promise chains.


// async when call always return a promise
// await is waiting for a promiseand its always have to be inside an async function


function resolveAfter2Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
  }
  
  async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log(result);
    // expected output: "resolved"
  }
  
  asyncCall();

//   ******************************************************************************************************


// Q5.What is hoisting?


// JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions,
//  variables or classes to the top of their scope
// Function hoisting :One of the advantages of hoisting is that it lets you use a function before you declare it in your code.
catName("Tiger");

function catName(name) {
  console.log("My cat's name is " + name);
}

// Variable hoisting:

// However JavaScript only hoists declarations, not initializations! This means that initialization doesn't happen until
//  the associated line of code is executed, even if the variable was originally initialized then declared, or declared 
// and initialized in the same line.

//  let and const doesn't support hoisting only var

console.log(num); // Returns 'undefined' from hoisted var declaration (not 6)
var num = 6; // Initialization and declaration.
console.log(num); // Returns 6 after the line with initialization is executed.


// *****************************************************************************************************************

// Q6.What is the DOM?


// HTML is used to structure the web pages and Javascript is used to add behavior 
// to our web pages. When an HTML file is loaded into the browser, the javascript 
// can not understand the HTML document directly. So, a corresponding document is 
// created(DOM)(Documentary Object Model) DOM is basically the representation of the 
// same HTML document but in a different format with the use of objects. 
// Javascript interprets DOM easily i.e javascript can not understand the tags(<h1>H</h1>)
//  in HTML document but can understand object h1 in DOM. Now, Javascript can access 
// each of the objects (h1, p, etc) by using different functions.


// ***********************************************************************************************

// Q7. Difference between undefined vs not defined vs NaN.


// undefined: variable is defined,but in memorey creation phase, it will take undefined.
//   let marks =50;
// not defined: varibale which is not present in either global or local scope.
// NaN: Not a Number,
// let marks ="50"


// ********************************************************************************************


// Q8.How many operators do we have in JS ?

// Comparison Operators
const a = 5, b = 2, c = 'hello';

// equal to operator
console.log(a == 5);     // true
console.log(b == '2');   // true
console.log(c == 'Hello');  // false

// not equal operator
console.log(a != 2); // true
console.log(b != 'Hello'); // 

const aa = 2;

// strict equal operator
console.log(aa === 2); // true
console.log(aa === '2'); // false

// strict not equal operator
console.log(a !== 2); // false
console.log(a !== '2'); // true
console.log(b !== 'Hello'); // true

// greater than operator
console.log(a > 2); // true

// greater than or equal operator
console.log(a >= 3); //true

// less than operator
console.log(a < 2); // false
console.log(b < 3); // true

// less than or equal operator
console.log(a <= 3) // true
console.log(a <= 2); // true

// Logical AND Operator

// logical AND
console.log(a && a); // true
console.log(a && b);  // false

console.log((c > 2) && (c < 2)); // false

// logical OR
console.log(a || b); // true
console.log(b || b); // false
console.log((c>2) || (c<2)); // true

// logical NOT
console.log(!a); // false
console.log(!b); // true

// Increament/Decrement:::a++, ++a, a--, --a,
// Airthmatic: +,-,*,/,% 

// Mathematical Reasoning:
// <failure o/p>
// a>>>b


// ****************************************************************************************************

// Q9.What are pure functions?

// A pure function is a function which:

// Given the same input, always returns the same output.
// Produces no side effects.
// It depends only on its own arguments.
// It wont try to change variables out of its scope.


// Pure functions are completely independent of outside state, and as such,
//  they are immune to entire classes of bugs that have to do with shared mutable state.

function pure(val1) {
    return val1 * 2;
 }
 pure(2)
 pure(2)


//  **********************************************************************************************

// Q10.What are arrow functions?


// Arrow functions were introduced in ES6.

// Arrow functions allow us to write shorter function syntax:
// An arrow function expression  is an  alternative to a traditional function expression
// its compact too

// disadvantage:
// Arrow functions don't have their own bindings to this, arguments or super, and should not be used as methods.
// Arrow functions don't have access to the new.target keyword.
// Arrow functions aren't suitable for call, apply and bind methods, which generally rely on establishing a scope.
// Arrow functions cannot be used as constructors.
// Arrow functions cannot use yield, within its body.
// Traditional Anonymous Function
function (a){
    return a + 100;
  }
  
  // Arrow Function Break Down
  
  // 1. Remove the word "function" and place arrow between the argument and opening body bracket
  (a) => {
    return a + 100;
  }


  // Traditional Anonymous Function
function (a, b){
    return a + b + 100;
  }
  
  // Arrow Function
  (a, b) => a + b + 100;
  
  // Traditional Anonymous Function (no arguments)
  let a = 4;
  let b = 2;
  function (){
    return a + b + 100;
  }
  
  // Arrow Function (no arguments)
  let a = 4;
  let b = 2;
  () => a + b + 100;


//   Q11. Give an example of async/await

function resolveAfter2Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
  }
  
  async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log(result);
    // expected output: "resolved"
  }
  
  asyncCall();
