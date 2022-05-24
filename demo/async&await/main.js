console.log("Async&await");
// Async/Await- they are used to handle the promise more eggiciently. the word async is used before a function
// to make sure that it return a promise.so,we therefore use async before the function to return a promise instead
// of some values/functions


// await is use to wait for the result that is supposed to be returned from the promise 
// so, we can use the keyword await when calling the function which returns a promise.

// async/await is also used for making the API calls



const sayHi = ()=>{
    return "i am function one";
}
const sayHi1 = ()=>{
    return "i am  function two";
}
const sayHi3 = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
           resolve("i am function three") 
        },3000)
    })
    
}
const callFns = async ()=>{//waiting for promise
    let res1 = sayHi();
    console.log(res1);// i am function one
    
    let res2 =  sayHi1();
    console.log(res2);// i am function two
    
    let res3 = await sayHi3();//await use to wait for the function/promise to return
    console.log(res3);// here we get undefine value we have to use await and async also promise
}
// fn1,fn2,fn3
callFns();
// ***********************************************************


async function tryingDataCalling(){
    console.log("inside function")
    const response = await fetch('https://api.github.com/users');

    console.log("before the response was recieve")
    const users = await response.json();
    console.log("user are resolve")
    return users;
}
console.log("before calling function");
let data = tryingDataCalling();
console.log("after calling the function")
console.log(data);
data.then((res)=>{
    console.log("the response is",res)
    res.map((item)=>{
        console.log(item)
    })
})
console.log("end of program")

// here the output is asynchronise because we didn't add promises to the function



