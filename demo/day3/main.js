// operators
// arithematic operators: +,-,*,/,%
console.log(2+3);
console.log(2-3);
console.log(2*3);
console.log(2/3);
console.log(2%3);
// comparision operator: >,< <=,>=,==,===,
console.log(2>3);
console.log(2<3);
console.log(2>=3);
console.log(2<=3);
console.log(2==3);
console.log(2==2);
console.log(2=="2");//check only value but not data types hence value true
console.log(2===3);
console.log(2===2);
console.log(2==="2");//check both value and data types hence value false
console.log("space")
// logical operator: //,||,&&,!
console.log(2!=3);
console.log(2!==2);//value and data type checking
console.log(4&&3);
console.log(4&&0);
console.log(0&&3);
console.log(2||3);// pint value 2 since its the first value
console.log(0||3);// pint value 3 since n should be greater than 0
console.log(!0);//true
console.log(!1);//false
console.log(!2);//false
// increment operator: ++,--
let a = 2;
a++;//increment a+a
console.log(a);//value=3
a--; //decrement a-a
console.log(a);//value=2
console.log(a++);//value=2 cause of post increment operator value will be effect in the next line
console.log(a);//value=3 because of post increment above
console.log(++a);//value=4 since the value is pre incremnted 
let b = 3;
b/=2;// this is similar to b=b/2
b*=5;//this is similar to b=b*5
// bit operator
console.log(1|2); // OR operator
console.log(1&2); //AND operator
console.log(1^2); //XOR operator
console.log(4>>3);//shift from left to right 3 bit 
console.log(1<<2);//shifter from right to left 1 bit
// ternary operator
// condition1:condition2
// if the first condition is true then its executed else second condition will be excute
let agee = 15;
let resultt =
    (agee >= 18) ? "You are eligible to vote." : "You are not eligible to vote yet";
console.log(resultt);
let x=2;
let y=3;
x>y ? x++:x--;
console.log(x);