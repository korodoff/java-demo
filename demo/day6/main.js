// function
function sayHi(){
    console.log("hill")
}
sayHi();
// addition
function add(num1,num2){
    result = num1 + num2;
    console.log(result);
}
add(2,3);
// multiplication
function multiply(a1){
    let a2=1;
    while(a2<=10){
        result1= a1*a2;
        // return result1;
        // a2++;
        console.log(result1);
        a2++;
    }
}
let valresult = multiply(2);
console.log(valresult);
console.log(multiply(2));
// lexical Environment and scope Chain
let i=5;
function one(){
    console.log(i);
    two();
    function two(){
        console.log(i);
    }
}
let m=4;
console.log(m);
{
    let m=5
    console.log(m);
}
console.log(m)