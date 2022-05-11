console.log("DOM")
const element1 = document.getElementById("message")
console.log(element1);
console.log(element1.innerHTML)
console.log(element1.innerText)

// ---------------------

const element2 = document.getElementsByClassName("impMessage")
console.log(element2);
console.log(element2.innerHTML);// here value is undefine cause for every class element we have to provide an index value to them
console.log(element2.innerText);//here value is undefine because we need to access the index of the element
console.log(element2[0].innerHTML);//here it will print the first index with all the html tag
console.log(element2[0].innerText);//here it will print the value of the first index of the provided class
console.log(element2[1].innerText);
console.log(element2[2].innerText);

// ------------------------------

const element3 = document.getElementsByTagName("h1");
console.log(element3[0].innerHTML)
console.log(element3[0].innerText);
console.log(element3[1].innerText);
// this change the value of  the first index of the h1 tag 
function changeText(){
    let changeText = document.getElementsByTagName("h1");
    changeText[0].innerText = "hello World";
    changeText[1].innerText = `<i>good by<i>`;
    console.log(changeText[0].innerText);
}
// this function change the color of the txt of the first index of the impMessage class
function changeColor(){
    const changeColor = document.getElementsByClassName("impMessage");
    changeColor[0].style.color = "green";
    changeColor[1].style.color = "red";
    changeColor[2].style.color = "pink";
    console.log(changeText[0].innerText);
}

function changeDirection(){
    const changeDirection = document.getElementsByClassName("flexr");
    changeDirection[0].style.flexDirection = "column";
    changeDirection[0].style.color = "white";
}
function changeColor(){
    const changeItem = document.getElementsByClassName("item");
    changeItem[0].style.backgroundColor = "blue"
    changeItem[1].style.backgroundColor = "blue"
    changeItem[2].style.backgroundColor = "blue"
}

function changeImg(){
    const changeImg = document.getElementsByTagName("img");
    changeImg[0].src = "data:image/png;base64,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";
}

const Image = document.getElementsByTagName("img")
Image[1].src  =  "https://i.pinimg.com/originals/44/9a/ac/449aac65b5c4beaab63c8fdd987ac337.jpg"
// we can also acces with out variable
// document.getElementsByTagName("img")[3].src = "";
// changeColor.innerHTML = `<img src ="./coffe1.jpg"/>`;
// const change = document.getElementsByClassName("change");
// change[0].innerHTML = `<b>hello from the other side</b>`



// let element7 = document.createElement("div");
// element7.className = "newDiv";
// element7.id = "newDIv";
// element7.setAttribute = ("for","value");
// element7.innerText = "Hello i have create new div"
// console.log(element7);
// document.querySelector("p.impMessage").appendChild(element7);


// let element8 = document.createElement("img")
// element8.className = "css";
// element8.setAttribute = ("src","https://i.pinimg.com/originals/44/9a/ac/449aac65b5c4beaab63c8fdd987ac337.jpg")
// console.log(element8);
// document.querySelector("p.impMessage").appendChild(element8);




// function changeColor() {
//     const changeColor = document.getElementsByClassName("impMessage");
//     const changeColor1 = document.getElementById("message");
//     changeColor[0].style.color = "red";
//     changeColor1.style.color = "orange"; 

//     changeColor1.innerHTML = `<img src="./coffee1.jpg" />`;

//     // const image = document.getElementsByTagName("img");
//     // image[0].src= "./coffee2.jpg";
//     document.getElementsByTagName("img")[0].src = "./coffee2.jpg";
// }//if u try to change src of two images in one function, u might get errors, so better to handle them using different functions only.

let element5 = document.createElement("div");
element5.className = "newDIv";
element5.id = "newDiv";
element5.setAttribute("for","value");
element5.innerText = "Hello I have created a new div from JS";
console.log(element5);
document.querySelector("p.impMessage").appendChild(element5);

let createElement = document.createElement("img");
createElement.className = "image";
createElement.setAttribute("src","./d.png")
