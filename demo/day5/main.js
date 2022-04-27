// loops
// 1.For loop
for(let i=0; i<10; i++){
    console.log(i);
}
// while loops
let a=10;
while(a>0){
    console.log(a);
    a--;
}
// using for loop print multiple of 2
for(let i=0; i<=20; i++){
    r=2*i;
    console.log(r);
}
let c=1;
while(c<=20){
    e=2*c;
    console.log(e);
    c++;
}
// do while loop
let s=2;
do{
    console.log("hello",s)
    s=s+2;
}while(s<=10);
// array for in loop take index value
let tourist = ["italy","india","nepal"]
for(let i in tourist){
    console.log(i);
}
// op the value
let tourist2 = ["italy","india","nepal"]
for(let val of tourist2){
    console.log(val);
}
// we want more than 1 array
let tourist3 = ["italy","india","nepal"]
tourist3.forEach((values,index)=>{//the first parameter accepts the value of the array
    //and the second parameter accepts the indexs of the array
    console.log(index,values);
})//op will show both index and values

function ress(n,m){
    return n,m;
}
ress(2,3);
console.log(ress);