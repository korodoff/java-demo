console.log("yayayyayay");
// array
let nameBe = ["krut","thoi","rasut"];
console.log(nameBe);//print the  array

// creating array and assigning value to them as per the index value
let nameBe1 = [];
nameBe1[1] = "rudoff";// 0 is an empty set
nameBe1[2] = "waisanaki";
nameBe1[3] = "Mary";
console.log(nameBe1);

// third way to add an array
let nameBe2 = new Array("fasna","kuldeep","sidhant")
console.log(nameBe2);
let nameBe3 = ["array",10,9,8,true];
console.log(nameBe3);

// push,pop,shift,unshift,length,indexof,lastindexof
// push: add value to the last index of an Array
nameBe1.push("Stunga");
nameBe1.push(2)
console.log(nameBe1);

// pop remove the value of the last position of the array
nameBe1.pop();
console.log(nameBe1);

// shift: remove value from the first position
// unshift add value to the first position
nameBe1.shift();
console.log(nameBe1)
nameBe1.unshift("Rudoff")
console.log(nameBe1);

// length
console.log("length of the array is:" + nameBe1.length)
// indexof, last indexof, join, reverse, sort,slice,splice, toString
let number = [1,2,3,4,5,6,7,5];
let number1 = [9,8,7,2,1,3];
console.log(number.indexOf(3));
console.log("last index = " + number.lastIndexOf(5));
// concatination
let r = number.concat(number1);
console.log(r);
// or
console.log(number.concat(number1));
// join this dosent change the index of the array
let s = number.join("*");
console.log(s);
// or
console.log(number.join("+"));

// reverse: to print value in reverse direction in decending order
console.log(number.reverse());
// sort: use to sort value
let num1 = [1,8,7,6,5,44]//here 44 is printed before 5 because it only check the first digit
console.log(num1.sort());
console.log(nameBe1.sort())//capital are sort the small alphabet
console.log(nameBe1.sort().reverse());


// splice: use to remove value from a provided index
let num2 = [55,66,77,88,99,12,25,30,75];
num2.splice(2,3); //first value is the index and second value is to remove depend on the given no
console.log(num2);
num2.splice(3,1,3,4,5)// value after the second is use to add value to the array depend upond the give first index value which is provided
console.log(num2);

// slice: help to print from the given index to the value before the given index cause start index is inclusive and end index is exclusive i.e not included
let num3 = [2,6,4,8,9,8,7,2];
console.log(num3.slice(2,6))