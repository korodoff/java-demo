console.log("hello")

let studentRecords = [ {name: 'John', id: 123, marks : 98 },
          {name: 'Baba', id: 101, marks : 23 },
          {name: 'yaga', id: 200, marks : 45 },
          {name: 'Wick', id: 115, marks : 75 } ] ;


// 1.  We are interested in retrieving only the name of the students and all the names should be in caps
let sname = studentRecords.map(x => x.name.toUpperCase());
console.log(sname);

// 2. Suppose we have the same dataset as above but this time we want to get the details of students who scored more than 50 marks

let sname1 = studentRecords.filter(mark => mark.marks >50);
          console.log(sname1);


// 3.  Retrieve the details of students who scored more than 50 marks and have id greater than 120


let sname2 = studentRecords.filter(res => res.marks >50 && res.id >120);
          console.log(sname2);



// 4.   Consider the same scenario we have discussed above, but this time we would like to know the sum total of the marks of the students

let sname3 = studentRecords.reduce((acc,cur) => acc+cur.marks,0);
        console.log(sname3);


// 5.   This time we want to get only the names of the students who scored more than 50 marks from the same dataset used above

let sname4 =  studentRecords.filter(mark => mark.marks >50);
        console.log(sname4.map(a => a.name));



// 6.   This time we are required to print the sum of marks of the students with id > 120
let sname5 = studentRecords.filter(id => id.id>120);
sname5.reduce((acc,cur) => acc+cur.marks,0)
console.log(sname5)


// or
let sname6 = studentRecords.filter(id => id.id > 120).reduce((acc,cur) => acc+cur.marks,0);

// 7. This time we are required to print the total marks of the students with marks greater than 50 after a grace of 15 marks has been added to those students who scored less than 50 
// let sname7 = studentRecords.map((ssg)=>{
//     if(ssg.marks < 50){
//         ssg.marks+=15;
//     };
//     return ssg;
// }).filter(ssg => ssg.marks >50).reduce((acc,cur)=> acc+cur.ssg,0)
// console.log(sname7);
let sname7 = studentRecords.map ((mark)=>{
    if(mark.marks < 50){
        mark.marks +=15
    };
    return mark;
}).filter(mark => mark.marks > 50).reduce((acc,cur) => acc+cur.marks,0);
console.log(sname7);


// 8. Create 6 objects , each object will have name, class, roll no as properties. Store these objects in an array of objects.

function StudentsRecc(name1,class1,rollno1){
    this.name1 = name1;
    this.class1 = class1;
    this.rollno1 = rollno1;
}
let thoi = new StudentsRecc("thoi",12,2021);
let manso = new StudentsRecc("manso",10,2341);
let donal = new StudentsRecc("donal",9,2061);
let vandame = new StudentsRecc("vandame",11,2031);

let arr1 = [];
arr1.push(thoi);
arr1.push(manso);
arr1.push(donal);
arr1.push(vandame);

console.log(arr1);

