// let student = {
//     fname: "sid",
//     lname: "Gupta",
//     age: 24,
// }
// let student1 = {
    
// }

// student1__prot0__ = student;
// console.log(student1);



// let emp1 = {
//     fname : "thoi",
//     lname : "sut",
//     id: 23,
//     showDetails: function(para){
//         console.log(this.fname,this.lname,this.id);
//     }
// }

// let emp2 = {
//     fname: "donal",
//     lname: "sutnga",
//     id: 121,
// }
// let emp3 = {
//     fname: "vandame",
//     lname: "suteeea",
//     id: 111,
// }

// it is use to call the constructor function to use it one in other constructor
// call /applly /and bind

// emp1.showDetails.call(emp2);//here we use the emp1 function to print the constructor value of emp2 to avoid writing more than more function
// emp1.showDetails.call(emp3);// passing the argument(23,m)


// emp1.showDetails.apply(emp2);//pasing argument[23,m]
// emp1.showDetails.apply(emp3);

// let res1 = emp1.showDetails.bind(emp2)
// let res2 = emp1.showDetails.bind(emp3)
// res1()
// res2()

// // or
// emp1.showDetails.bind(emp2)()
// emp1.showDetails.bind(emp3)()



// emp1.__proto__ = emp2;

// console.log(emp1);
// console.log(emp2.lname);

// console.log(emp2.__proto__);// 
// console.log(emp2.__proto__.__proto__);// constructor prototype

// arr1 = [1,2,3,4]
// arr2 = [1,2,3,4]
// arr3 = [1,2,3,4]
// console.log(arr2.__proto__);
// console.log(arr2.__proto__.__proto__);
// console.log(arr2.__proto__.__proto__.__proto__);


let employee1 = {

    name : "Rahul",
    designation : "CSE",
    id : 111,
    showDetails: function(age,gender) {
        console.log(this.name, this.id, this.designation);
    }
}

// function showDetails(){
//     console.log()
// }

employee1.showDetails();

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

employee1.showDetails.call(employee2);//passing the arguments(23,M)
employee1.showDetails.call(employee3);

employee1.showDetails.apply(employee2);//[23,"M"]
employee1.showDetails.apply(employee3);



let res1 = employee1.showDetails.bind(employee2);
let res2 = employee1.showDetails.bind(employee3);
res1();//
res2();//

