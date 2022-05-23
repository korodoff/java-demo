console.log("promises")

// promise : promises are used to handle asynchronous operation in javascript. they are easy to manage when
// dealing with multiple asynchronous where multiple callbacks can create callback hells leading to
// unimaginable code

// this dosen't means that Promises are only use for avoiding callback hells, insted are often use for
// handeling asynchronous operations

// promises have two executer function as paraneters namely resolve and reject.if the data is fetch correctly
// then the control is passed to resolve method which inturn calls the .then()method.but id the data
// isn't fetched for some reason i.e there is an error,then the reject method is called which call the .catch() method.

// there are threee stages in promises
// 1. promise-when the promise is still executing i.e not yet resolved or rejected are called in pending stage.
// 2. resolve/fulfilled- when the promise is resolved or have fetched the data correctly,it end up into reloved stage.
// 3. rejected- when the promise fails in fetching the result, it ends up being into rejected state.

// promise creation
const getEmployeID = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let id = [1,2,3,4];
        resolve(id);
        reject("the data isn't found")
    },5000)
// promise comsuming- use for consumption of promise
});
getEmployeID
    .then((id)=>{
    console.log(id);
})
    .catch((err)=>{
    console.log("Error message",err)
})
//  .finally(()=>{
//      console.log("end of program")// this dosen't care if the condition it then or catch it will print or manipulat anyway(somthing that needed to add at the end)
//  });


//   promise chaining


const getEmployeDetails = (data) => {
    return new Promise((resolve,reject)=>{
        setTimeout((data)=>{
    let EmployeDetails = {
        name: "arun bhai",
        age: 34,
    }
    console.log("printing inside promise",data);
        resolve(`the name of the employe is ${EmployeDetails.name} an the age is ${EmployeDetails.age}`);
        reject("data not found")
    },6000,data)
    
    })
}

getEmployeID
    .then((id)=>{
    console.log(id);
    getEmployeDetails("hello").then((data)=>{// this is what is called as promise chaining
        console.log("then method:",data);
    })
})
    .catch((err)=>{
    console.log("Error message",err)
})
 .finally(()=>{
     console.log("end of program")// this dosen't care if the condition it then or catch it will print or manipulat anyway(somthing that needed to add at the end)
 });

// promise chaining eg and error also have to resolve them

let promise = new Promise((resolve,reject)=>{
    resolve();
})
promise.then(()=>{// we can use .then multiple time
   setTimeout(()=>{
    console.log("first call")
   },1000)
    
}).then(()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        
            console.log("second call")
            resolve();
           },3000)
           
    })
    
}).then(()=>{
    setTimeout(()=>{
        console.log("third call")
       },2000)
})