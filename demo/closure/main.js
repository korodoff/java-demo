   function counter(){
    var counter = 0;

    function IncreaseCounter() {
        return counter += 1;
    };

    return IncreaseCounter;
}

var counter = counter();
alert(counter());//OP: popop message " this messahe say 1"
alert(counter());//OP: popop message " this messahe say 2"
alert(counter());//OP: popop message " this messahe say 3"
alert(counter());//OP: popop message " this messahe say 4"

let count = 0;
(function immediate() {
  if (count === 0) {
    let count = 1;
    console.log(count); // What is logged? here log is 1
  }
  console.log(count); // What is logged? here log is 0
})();
for (var i = 0; i < 3; i++) {
  setTimeout(function log() {
    console.log(i); // What is logged? here log is going to be 1,2,3 but each value get updated after 1s hence op is 3
  }, 1000);
}
// Write a code to calculate area of a rectangle using inner function. In this case outer function should accept parameter length and inner function should accept parameter breadth.
let res  = function(length){
    return function(breadth){
        console.log(length*breadth);
    }
}

let a1 = res(9);
a1(8);

// Take a variable in outer function and create an inner function to increase the counter every time it is called
function count1(){
    let counter = 0;
   return function(){
       counter++;
       console.log(counter)
   }
}
let value = count1();
value();
value();
value();


// "Print Output

var a = 12;
(function () {
  alert(a);
})(); // alert "this page say 12"

var a = 10;
var x = (function () {
  var a = 12;
  return function () {
    alert(a);
  };
})();
x();// here alert will be of the value 12

var globalVar = "xyz";

(function outerFunc(outerArg) {
    var outerVar = 'a';
    
    (function innerFunc(innerArg) {
    var innerVar = 'b';
    
    console.log(
        "outerArg = " + outerArg + "\n" +
        "innerArg = " + innerArg + "\n" +
        "outerVar = " + outerVar + "\n" +
        "innerVar = " + innerVar + "\n" +
        "globalVar = " + globalVar);
    
    })(456);
})(123);
// op outerArg = 123
// innerArg = 456
// outerVar = a
// innerVar = b
// globalVar = xyz