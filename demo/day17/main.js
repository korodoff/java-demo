console.log("hello")



// set Timeout and setinterval
setTimeout((fruit1,fruit2)=>{
    console.log(fruit1,fruit2);
},5000, "banana","tomato");


const fruits = ["mango","orange"];
const timer = setTimeout((fruit1,fruit2)=>{//setTimeout is use to update the value on given second
    console.log(fruit1,fruit2);
},5000,
 ...fruits
 );
 
if(fruits.includes("mango")){
    clearTimeout(timer)//clearTimeout is use to stop the setTimeout function try commentin and un commenting the code

}

setInterval
setInterval(()=>{
    console.log("hi");
},2000)


const bordingPassenger = (n,wait)=>{
    const peoplePerGroup = n/3;
    setTimeout(()=>{
        console.log(`Bording ${n} number of passenger`)
        console.log(`Bording ${peoplePerGroup} number of passenger`)
        console.log("bording is secs",wait);

    },wait*2000);
}

bordingPassenger(20,3);