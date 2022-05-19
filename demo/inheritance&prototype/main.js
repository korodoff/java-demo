// Create 2 objects - parent and child. Attach methods to parent and use those methods in child object using parents prototype

let parent = {

    fname : "rahul",
    sname : "krut",
    id : 1293,
    course: "cse",
    showDetails: function(){
        console.log(`firstname: ${this.fname} lastname: ${this.sname} id:${this.id}`)
    }
}
let child = {
    fname : "thoi",
    sname : "sutnga",
    id : 1293,
}
// parent.showDetails.call(child);
child.__proto__ = parent;
// console.log(child.showDetails)
console.log(child.course)

// Write code to explain prototype chaining

console.log(child.__proto__);//parentprototype
console.log(child.__proto__.__proto__);//obj
console.log(child.__proto__.__proto__.__proto__);//null

// Add a method to calculate sum of all elements in Array in array's protype, use that method to calculate sum for multiple arrays
Array.prototype.sum = function(){
    return this.reduce((acc,cur) => acc = acc + cur,0);
}
const arr = [1,2,3,4,5]

let res = arr.sum();
console.log(res);

// or
const arr1 = [1,2,3,4,5];

const arr2 = arr.reduce((acc,cur) => acc = acc + cur,0);
console.log(arr2);

// Write a JavaScript function to retrieve all the names of object's own and inherited properties.
let re1 = function showDetails1(ob){
    console.log(Object.getPrototypeOf(ob));
    console.log(Object.keys(ob));
}
re1(child);