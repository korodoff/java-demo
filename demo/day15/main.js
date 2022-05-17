//call/apply/bind using outer function

let employee1 = {

    name : "Rahul",
    designation : "CSE",
    id : 111,
//     showDetails: function(age,gender) {
//         console.log(this.name, this.id, this.designation);
//     }
}

function showDetails(age,gender){
    console.log(this.name , this.designation, this.id, age, gender);//age and grnder are parameter hence we dont use this.age or this.gender cause it not an object property
}

// employee1.showDetails();

let employee2 = {

    name : "Karan",
    designation : "IT",
    id : 112,

}

let employee3 = {

    name : "Raju",
    designation : "ECE",
    id : 113,
    
}
// call
showDetails.call(employee2,23,"M");//bind is inside the same bracket
showDetails.call(employee1,22,"M");
showDetails.call(employee3,24,"M");


// apply
showDetails.apply(employee2,[23,"M"]);//apply have to be inside an array
showDetails.apply(employee1,[25,"M"]);
showDetails.apply(employee3,[21,"M"]);

// bind
let res1 = showDetails.bind(employee1);
res1(21,"M");
showDetails.bind(employee2)(24,"M");//bind had to be inside () to 
showDetails.bind(employee3)(25,"M");

const studentPrototype = {
    calAge(){
        console.log(2022 - this.byear)// we use this.byear cause byear is an object
    },
    initialise(fname, lname, byear){// initialise is not pre define
        this.fname = fname;
        this.lname = lname;
        this.byear = byear;
    }
}
const ramesh = Object.create(studentPrototype);//studentPrototype is a prototype
ramesh.fname = "Ramesh";
ramesh.lname = "thakur";
ramesh.byear = 1990;
ramesh.calAge();
console.log(ramesh);
console.log(ramesh.__proto__);
console.log(ramesh.__proto__.__proto__);
console.log(ramesh.__proto__.__proto__.__proto__);



const kiran = Object.create(studentPrototype);//studentPrototype is a prototype
kiran.initialise("kiran","kumar",1998);
kiran.calAge();
console.log(kiran); 

// classes
// classes in java are not similar to that of the class in java ,c++
// they are just a syntatic figure of to object prototye, instances that we have read
// they are special kind of functions with some variatuion


// 1.classes are also FCF(first class function)
// 2. classes cannot be hoisted
// classes is not use mostly

const classPrototype = {
    constructor(fname, lname, byear){// constructor is pre define
        this.fname = fname;
        this.lname = lname;
        this.byear = byear;
    },
    calAge(){
        console.log(2022 - this.byear)// we use this.byear cause byear is an object
    },


}

const jarvis = new classPrototype("jarvis","valley",1993);//we create object  as a constructor
console.log(jarvis);
jarvis.calAge();



classPrototype.prototype.greet = function(){
    console.log("hi i am somone");
}

jarvis.log(jarvis.__proto__);


// type casting
console.log(22+"22");
console.log("hi"+22);
console.log(22+"22");
console.log(22/"22");
console.log(22*"22");
console.log(22%"22");
// console.log(22^"22"); this wont work because power is not  typecasting a string to a number like that of a subraaction,division,division,multiplicaton
