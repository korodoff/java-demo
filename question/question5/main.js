

function changeText(){
    document.getElementById("MREN").innerText = "MREN STACK";
}


// Write code to get 1st H1 element from a webpage using DOM

element = document.getElementsByTagName("h1")
console.log(element[0].innerText);

// Write code to implement timer clock using JS -- display HH:MM:SS -- the time should keep updating every second


function getDate(){
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let time = h+" Hours "+m+" Minute "+s+" Second"

    document.getElementById("time").innerText = time;

    setTimeout(getDate,1000);

}
getDate();


// Create an HTML page having content as Hello world and a button named Replace Text. When user will click on this button page content should be changed to "Welcome to Elevation academy"

function changedD(){
    document.getElementById("change").innerText = "Welcome to Elevation academy"
}



// Create an HTML page having content as Hello world and a button named "Hide Text." When user will click on this button hide the "Hello World" text


function hideText(){
    document.getElementById("hide").style.display="none"

    
}


// Given an array of 0's and 1's find out number of 0's
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

// Given an array find out total no. of odd and even nos.
const arr1 = [1,2,3,4,5,6,7,8,9]
let res1 = arr1.filter((x)=>{
    if(x%2===0){
        count1++
    }else{
        count2++
    }
})
console.log("no of even:",count1);
console.log("no of odd:",count2);

// Given a string find out number of vowels 

const string="RUDOFF"
let vowels=0
string.split("").filter((x)=>{
    if(x=="A"||x=="E"||x=="I"||x=="O"||x=="U"){
        vowels++
    }

})
 console.log("No of vowels:",vowels); 

