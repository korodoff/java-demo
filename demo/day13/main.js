console.log("hi")

// const element1 = document.getElementsByClassName("text");
// element1[0].innerHTML = "<H1>welcome to my page</H1>"
// element1[1].innerHTML = "<H1>Please inspect the pages</H1>"

// let element2 = document.getElementsByTagName("img");
// element2[0].src = "https://i.pinimg.com/originals/44/9a/ac/449aac65b5c4beaab63c8fdd987ac337.jpg"

// function pic(){
//     let pic1 = document.getElementsByClassName("img");
//     pic[0].src  =  "https://i.pinimg.com/originals/44/9a/ac/449aac65b5c4beaab63c8fdd987ac337.jpg"
// }


// function body is called functon statements/defination
// function statement supports hoistion, i.e calling the function even before declaring

function text(){ // function defination
    console.log("hello boy")
}

// b()   //here we cant call the function of b because hoistiong dosent support because of ananumous function
var b = function(){//this is a function expression/ananymous function
    console.log("function expression ")
}
console.log(b);
b(); // op
//a function expression is a uname fn assigned to the variable, the variable recieve the function defination, 
// which inturn can call the function by calling the variable name. {a();}

// {
//     let d = function(){
//         console.log("huhdahd")
//     }
// }
// d(); // this wont work since d() is call uot side of the scope and d having let data type

// arrow function // declare in ES6

let res = ()=>{
    console.log("hi")
}
res();



// first class function: The function can ve passed as values into another function or can be return from
// another dunction as value. this unique freature of function makes them call as first calss function/First class citizen


let g = function(param){
    console.log("i am fn G");
    console.log(param); //here it will print the whole h() function
    param();
}
let h = function(){
    console.log("i am fn h")
}

g(h); // h is a function passed as an argument 

// higher order funcyion(HDF):  the function which accept the FCF's or return are called higher order Function
let i = function(dss){
    console.log("i am fn i");
    console.log(dss); //here it will print the whole h() function
    dss();
}

let l = function(){
    console.log("i am fn l")
}
i(l);


let a = function(){//HDF
    return function j(){//FCF
        console.log("i am  fn j")
    };
}
let returnVal = a();
console.log(a());//similar to the above line
// op of the value will print the j function


// callback function: java is a synchronous lang so we use calllback fn to acess asynchronous fn

setTimeout(()=>{
    console.log("set time out")
},2000)


const sayHi = (nameOfFriend) => {//callBackFunction FCF(first class function)
    console.log("hello",nameOfFriend);
}
const greeting = (name , callBackFunction)=> { //greeting is a higher order function
    callBackFunction(name);
}
greeting("krut",sayHi);

// function greeting (para1,para2){
    // para1 = "krut"      
    // para2 = sayHi      
    // para2(krut); => sayHi(Bala); calling a function      
// }

// function sayHi(para3){ //para3 = krut
//log("hello",para3)// hello krut
// }

