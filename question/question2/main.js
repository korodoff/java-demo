// Q1 function constructor

// The Function constructor creates a new Function object
// the Function constructor creates functions which execute in the global scope only.
// also the defing the constructor finction name will alway in capital for the first alphabet
// "this" refers to the object when the object is created
// parameter can also be added to finction constructor

// constructor function
function Person () {
  this.name = 'John',//this refers to the object when the object is created
  this.age = 23
}

// create an object
const person = new Person(); // new keyword is use to create object from the constructor finction


// *****************************************************************************************************



//Q2. call/bind/apply

// Traditionally in JavaScript, you can have objects that have their own properties and
//  methods. For example, object1 cannot use the methods of object2 and vice versa.

// You can use call(), apply(), and bind() methods to tie a function into an object and call
//  the function as if it belonged to that object.


// call: The call() method invokes a function with a specified context. In other words, you can tie a 
// function into an object as if it belonged to the object.

var obj = { num: 2 };

function add(a){
  return this.num + a;
}

// Now, there’s a problem with add(). It’s trying to return this.num + some value. But there is no property num inside
//  the function. Thus calling this.num fails.

// But as you can see, the object obj has a property num. What if you could call the function add() on that object as 
// if it belonged to the object?

// This is indeed possible. To do this, use the call() method to tie the function add() momentarily to the object obj:
add.call(obj, 3); // accept an argument list


// apply: The apply() method does the exact same as call(). The difference is that call() accepts an argument list,
//  but apply() accepts an array of arguments

// bind:The bind() method is reminiscent of call() and apply(). But instead of executing a function immediately, 
// bind() returns a function that can be executed later on.

var obj = { num: 2 };

function add(a, b){
  return this.num + a + b;
}

const resultCall  = add.call(obj, 3, 5);//accept an argument list
const resultApply = add.apply(obj, [3, 5]);// accept an array argument
const funcBind    = add.bind(obj, 3, 5)// accept argument list and return a functions that can be executed later on
const resultBind  = funcBind();

console.log(resultCall, resultApply, resultBind);


// ********************************************************************************************************

// Q3.callback function

// Callback function


//A callback function is a function passed into another function as an argument, which is then invoked inside the outer
//  function to complete some kind of routine or action.

function greeting(name) {
    console.log('Hello ' + name); // o/p : hello ruth
  }
  
  function processUserInput(callback) { // here "callback" parameter will change to argument "greeting"
    var name = "ruth";
    callback(name);// so here callback(name) will be greeting(name)
  }
  
  processUserInput(greeting); // here we pass first function as argument


  // ***********************************************************************************************************

// Q4. what are callback hell?



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


// ***********************************************************************************************


//   Q5. setTimeout


// setTimeout is use to for delaying or to print or perform function after a certain time its API
//  mainly use in irctc netbanking


function delay(){
    setTimeout(()=>{
        console.log("ruth")
    },5000);
    setTimeout(()=>{
        console.log("rass")
    },4000)
    setTimeout(()=>{
        console.log("manso")
    },0000)
    setTimeout(()=>{
        console.log("thoi")
    },2000)

}

delay();

// *********************************************************************************************************

// Q6.what are prototype?

// Prototypes are the mechanism by which JavaScript objects inherit features from one another.

//The prototype is an object that is associated with every functions and objects by default in JavaScript,
//  where function's prototype property is accessible and modifiable and object's prototype property is not visible

const studentPrototype = {
  calcAge(){
      console.log(2022 -this.bYear);
  },
  initialise(fname,lname,bYear){
      this.fname = fname;
      this.lname = lname;
      this.bYear = bYear;
  }
}

const name1 = Object.create(studentPrototype);
console.log(name1);
name1.initialise("krut","manso",1998);
console.log(name1);
name1.calcAge();

console.log(name1.__proto__);//studentprototype
console.log(name1.__proto__.__proto__);//obj
console.log(name1.__proto__.__proto__.__proto__);//null

// ************************************************************************************


// Q7.what is prototype chain

// Javascript has an interesting inheritance model, which happens to be completely different from most OOP languages. 
// While it is object-oriented, an object doesn’t have a type or a class that it gets its methods from, it has a 
// prototype


// Every object has a prototype, including the prototype object. This “chain” goes all the way back until it reaches
//  an object that has no prototype, usually Object‘s prototype. Prototype’s version of “Inheritance” involves adding 
// another link to the end of this prototype chain


//That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype.

console.log(name1.__proto__);//studentprototype
console.log(name1.__proto__.__proto__);//obj
console.log(name1.__proto__.__proto__.__proto__);//null

// *********************************************************************************************************
// Q8. inheritance using constructor function
function Employee(name, age, gender, id) {
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.id = id;
};

function Developer(name, age, gender, id, 
specialization) {

  // Calling Employee constructor function
  Employee.call(this, name, age, gender, id);

  // Adding a new parameter
  this.specialization = specialization;
}
console.log(Employee.prototype);
console.log(Developer.prototype);



// ***************************************************************************************************************
// Q9.
//  what is execution context


// The Execution Context contains the code that's currently running, and everything that aids in its execution.

///During the Execution Context
//xt run-time, the specific code gets parsed by a parser, the variables and functions are stored in memory, executable byte-code gets generated, and the code gets executed.

//There are two kinds of Execution Context in JavaScript:

//Global Execution Context (GEC)
//Function Execution Context (FEC)


//Global Execution Context (GEC):
//Whenever the JavaScript engine receives a script file, it first creates a default Execution Context known as the Global Execution Context (GEC).

//The GEC is the base/default Execution Context where all JavaScript code that is not inside of a function gets executed.



//Function Execution Context (FEC)
//Whenever a function is called, the JavaScript engine creates a different type of Execution Context known as a Function Execution Context (FEC) within the GEC to evaluate and execute the code within that function.



// ***************************************************************************************************



// Q10. what are creation phase execution phase

// Creation Phase

// Compiler runs through the entire code for 2 time before actually executing the code,

// In the first run, It picks all function declarations and stores them in memory with their reference.
// In the second run, It picks all variables and assign undefined to them. In the event of a conflict between variable and function declaration name then that variable is ignored.


// Execution Phase

// Variables assigned with values
// Functions executed
// With above formula, I’ve arrived at a pictorial representation of the above code execution,



//Q11.What are objects in javascript?

//An object is an unordered collection of key-value pairs. Each key-value pair is called a property.
//its consists of properties and methods.
//object have keys which are converted to string types, the properties and method do not follow the insertion order.
