console.log("hello")
// prototype/inheritance
const studentPrototype = {
    calcAge(){
        console.log(2022- this.byear)
    },
    initialise(fname,lname,byear){
        this.fname = fname;
        this.lname = lname;
        this.byear = byear;
    }
}
const honey = Object.create(studentPrototype);
console.log(honey);
honey.initialise("honey","sutt",1998);
honey.calcAge();

const personPrototye = Object.create(studentPrototype);
console.log(personPrototye);
personPrototye.initialiseone = function(fname,lname,byear,course){
    studentPrototype.initialise.call(this,fname,lname,byear)//this is written like that because its how call is being define
    // or
    // this.fname = fname;
    // this.lname = lame;
    // this.byear = byear;
    this.course = course;
}
personPrototye.introduce = function(){
    console.log(`my name is ${this.fname},${this.lname}and my course is ${this.course}`);
}
const jay = Object.create(personPrototye);
console.log("jay");
jay.initialiseone("jay","dubey",1995,"CSE")
jay.calcAge();
jay.introduce();
console.log(jay.__proto__);
console.log(jay.__proto__.__proto__);
console.log(jay.__proto__.__proto__.__proto__);
console.log(jay.__proto__.__proto__.__proto__.__proto__);


// closure - closure is not somthing that we create manually or explictly/It happen automatically in certain situation which we need
// to recognize.
// closure make a function remember all the variables that existed at the function birthplace initially
// any function always has access to the variable environment of the execution contex in which the function is created


const ticketBooking = function(){
    let passengerCount = 0;
   return function  (){
        passengerCount++;
        console.log(`the passenger count is ${passengerCount}`);
    };
};
const bookie = ticketBooking();//closure is being implemented when the function is being called
console.log(bookie)
bookie();
bookie();
bookie();
console.dir(bookie);
// in closure even tho the execution contexr is destroyed,the variable encironmrnt somehow keeps living 
// somewhere in the engine


// this is similar to that of the above
let f;
const g  = function(){
    const a =3;
    f = function(){
    console.log(a+2);
    }
}
g();
f();
console.dir(f);//here closure is between variable a
const h = function(){
    const b  = 4;
    f = function(){
        console.log(b+3);
    }
}
h();
f();
console.dir(f);

