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
    const changeText = document.getElementsByTagName("h1");
    changeText[0].innerText = "hello World";
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