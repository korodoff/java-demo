//1. Given an array of 0's and 1's find out number of 0's
const arr = [0,0,1,1,0,1,1]
let count1 = 0;
let count2 = 0;
let res = arr.filter((x)=>{
    if(x===0){
        count1++
    }else{
        count2++
    }
});
console.log("no of 0:",count1);
console.log("no of 1:",count2);





//2. Given an array find out total no. of odd and even nos.
let arr1 = [2,3,4,5,6,7,8,9]
let count3 = 0;
let count4 = 0;
let res1 = arr1.filter((x)=>{
    if(x%2===0){
        count3++
    }else{
        count4++
    }
})
console.log("no of even",count3)
console.log("no of odd",count4)

//3. Given a string find out number of vowels

const string="RUDOFF"
let vowels=0
string.split("").filter((x)=>{
    if(x=="A"||x=="E"||x=="I"||x=="O"||x=="U"){
        vowels++
    }

})
 console.log("No of vowels:",vowels); 