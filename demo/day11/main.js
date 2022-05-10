// object
console.log("hello")
// object are collection of properties and method
// object have keys which are converted to string types, the properties had methods
// that follow insertion order

let mobile = {
    brand : "samsung",
    weight : 200,
    os : "Amroid ",
    11 : "11",
    displayInfo : function(){
        console.log(`the brand of the mobile is ${mobile.brand} and the 
        weight is${mobile.weight} having an os ${mobile.os} and version ${mobile["11"]}`)//we can use this.parameter rather than mobile and this point to the parent object
    },
    displayInfo1 : function(){
        console.log(`the brand of the mobile is ${mobile.brand} and the
        weight is${mobile.weight} having an os ${mobile.os} and version ${mobile["11"]}`)
   }
}
console.log(mobile);
console.log(mobile.displayInfo());
// if we want to add more proprety to the same class
mobile.camera = "32";
console.log(mobile);
console.log(mobile.hasOwnProperty("brand")) //.hasOwnProperty is for checkink value is true or false




// or
let mobile1 = {};
mobile1.brand = "one plus";
mobile1.weight = 19;
mobile1.os = "anroid";
mobile1["camera"] = "13px";
console.log(mobile1);

function Mobile2(brand,weight,camera){ // Mobile2 is a constructor and it always start with a capital letter
    this.brand = brand;
    this.weight = weight;
    this.camera = camera;
}
let apple = new Mobile2("apple",190,"13px")
let vivo = new Mobile2("Vivo",140,"108px")
console.log(apple);
console.log(vivo);
console.log(vivo.brand);

console.log(Object.keys(apple));
console.log(Object.values(apple));
for(const{key,value} of Object.entries(apple)){
    console.log(key,value);
}
// rhis keyword ---
// in an object this refer to the Object
// when we use this keyword alone,then it point to global object


value =23;//always give a keyword like let constant,var otherwise 
// u r creating  a property to the window object
console.log(value);
console.log(this);

let arr1 = [1,23,4];
let arr2 = [1,23,4];
console.log(arr1.concat(arr2));
let arr3 = [...arr1,...arr2];
console.log(arr3);

//Create two students having properties as name, rollno, class, showDetails using Object Constructor.



function Student(name,rollno,classes){
    this.name = name;
    this.rollno = rollno;
    this.classes = classes;

}
let Student1 = new Student("thoi",29,10);
let Student2 = new Student("Rulam",30,12);
console.log(Student1);
console.log(Object.keys(Student2))
for(let entry of Object.entries(Student1)){
    console.log(entry);
}
