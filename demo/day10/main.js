console.log("object")
// map1 preserve the order of insertion of key value pairs
//  maps also preserve the data of keys i.e it doesnot convert the keys to string as object does
// it can store of any data types
let map1 = new Map();
// value can be set by using .set
map1.set("name","krut");
map1.set("age",23);
map1.set("phone",8745115631);
map1.set(1,"one")
map1.set(true,"true")



console.log(map1);
console.log(map1.size);

// how to get the value in map1 we use map1.get
console.log(map1.get("name"));
console.log(map1.get(1));


//  if we want to check if the key in the Map we use map1.has
console.log(map1.has("phone"));// o/p: true
console.log(map1.has("Email"));//o/p: false


// map1.delete is use for deleting the value of the map1
map1.delete(1)
console.log(map1);

// map.clear is use to clear all the value of the map
// map1.clear();
// console.log(map1);


// let map1 = new Map();
// // value can be set by using .set
// map1.set("name","krut");
// map1.set("age",23);
// map1.set("phone",8745115631);
// map1.set(1,"one")
// map1.set(true,"true")

// .key allow us to get the key of the map
for(let key of map1.keys()){
    console.log(key);
}
for(let value of map1.values()){
    console.log(value);
}
for(let entry of map1.entries()){
    console.log(entry);
}
map1.forEach((value,key)=>console.log(key,value));
map1.forEach(function(value,key){
    console.log(key,value);
})

// sets has no keys but store unique values
// set dosent act like an array
// keys and value are non existent
let set1 = new Set();
// to add value we use .add in set
set1.add("Apple")
set1.add("Banana")
set1.add("Mangoes")
set1.add("Litchi")


console.log(set1)

// to get the value set use .values
console.log(set1.values());// here .values iterate
console.log(set1.keys());
console.log(set1.entries());

console.log(set1.has("Banana"));

set1.delete("Banana")
console.log(set1)

for(let key of set1.keys()){
    console.log(key);
}
for(let value of set1.values()){
    console.log(value);
}
for(let entry of Student1.entries()){
    console.log(entry);
}