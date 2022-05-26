const handleSubmit = () =>{
    const username = document.getElementById("name").value
    const username1 = document.getElementById("age").value
    const username2 = document.getElementById("class").value
    const username3 = document.getElementById("email").value
    console.log(username)
    console.log(username1)
    console.log(username2)
    console.log(username3)
    localStorage.setItem("name",username)
    localStorage.setItem("age",username1)
    localStorage.setItem("class",username2)
    localStorage.setItem("email",username3)

    sessionStorage.setItem("name",username)
    sessionStorage.setItem("age",username1)
    sessionStorage.setItem("class",username2)
    sessionStorage.setItem("email",username3)
}
const showDetails=()=>{
    const data =  localStorage.getItem("name")
    document.getElementById("nameof").innerText = data;


    


}


// type error /syntaxError/ refferenceError



// const value = ()=>{

// }

// const a 3;

// refferenceError


// console.log(david)


// console.log(a())



// type error
const b=20;
// console.log(a());

// const c = 10
// c=20;


// Symbol
//symbol are always guranteed to be unique
let sym1 = Symbol("football")
let sym2 = Symbol("football")
console.log(sym1===sym2)// here false sis symbol are always unique



// TDZ - Its a place where the let and const variables reside as long as they are not declared. It also has a default value of undefined only but if we try to access them, then will get ReferenceError.


//IIFE - Immediately Invoked Function Expressions - 
(()=>{
    const david = "David";

})();

const david = "David";
