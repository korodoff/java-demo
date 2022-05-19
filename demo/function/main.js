// 1.Create one function with zero parameter having a console statement;

let r = function(){
    console.log("hello")
}
r();//OP: hello


//2. Create one function which takes two values as a parameter and print the sum of them as "Sum of 3, 4 is 7"

let sum = function(a,b){
    return a+b;
}
let result = sum(2,4);
console.log(result); //op: 6


// Create one arrow function
let arrow = (a)=> a+100;
let arrowresult = arrow(10);
console.log(arrowresult); //OP 110



// "Print output: 
// var x = 21;
var girl = function () {
    console.log(x);
    var x = 20;
};
let girl1 = girl();
console.log(girl1) //OP undefine



// "Print output: 
var x = 21;
girl ();
console.log(x)
function girl() {
    console.log(x);
    var x = 20;
};//OP 21

// "Print output

// var x = 21;
// a();//a is not define
// b(); //b is not define
// console.log(a);
// a = function() {
    
//    x = 20;
//   console.log(x);
// };
// b = function() {
    
//     x = 40;
//    console.log(x);
// };
// Write a function that accepts parameter n and returns factorial of n


function factorial(n){
    let number = 1;
    if(n===0 || n===1){
    return number;
    }else{
        for(let i=1;i<=n;i++){
            number = number * i
        }
    }console.log(number);
}
factorial(12);