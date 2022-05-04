// charAt: its use to check the index of string
// .length use to check the length of the string
let str = "rani";
console.log(str.length);
console.log(str.charAt(2));
console.log(str.endsWith("i"));// here endsWith check the value and retur if its true or false


let sentence = "hello world"
console.log(sentence.includes("world"))//includes:
console.log(sentence.indexOf("o"));
console.log(sentence.lastIndexOf("o"));
console.log(sentence.length);//find the length of the string

// replace: is use to replace or modify the given string with another string
console.log(sentence.replace("hello","Bye"));

// search
console.log(sentence.search("hello"))

// substr
console.log(sentence.substr(1,4))//first is the index value and the second is the length of the string
// substring
console.log(sentence.substring(0,7))// here both the value thake the index value but the first index is inclusive and the last index is exclusive
// if the value is lower it take the value as the first index

// split :use to split the string
let email = "sidhant.gupta@prepbytes.com"
let half = email.split("@")
console.log(half)