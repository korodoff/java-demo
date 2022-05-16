console.log("hello")

// 1.

const element1 = document.getElementById("text");
console.log(element1.innerText);

// 2.


var element2 = document.getElementsByTagName("h1")
console.log(element2[0].innerText);
console.log(element2[1].innerText);

// 3.
const element3 = document.getElementsByClassName("class1")
console.log(element3[0].innerText);

// 4.

const element4 = document.getElementsByTagName("h1");
element4[2].innerText = "Hello World";
console.log(element4[2].innerText);

// 5.
function flexChange(){
    const element5 = document.getElementsByClassName("container");
    element5[0].style.flexDirection = "column";
}
// 6. 
var element5 = document.getElementsByTagName("h1");
element5[2].setAttribute('id','h2Tag')
element5[2].style.color = "red";

// 7.
function textChange(){
    const element7 = document.getElementsByClassName("textChange");
    element7[0].innerText = "Welcome to Elevation academy";
}
function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    
    var time = h + ":" + m + ":" + s + " ";
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000);
    
}

showTime();


8. // Create a select drop down for selecting Year 20-21, 21-22 etc. Print the item text selected

function printValue(){
    const element = document.querySelector("#year");
    const element1 = element.value;
    document.querySelector("#printValue").append(element1);
}

// 9.
function form1(){
    var form = document.createElement("form")
    form.setAttribute("method","get")
    form.setAttribute("action","submit")
    var name = document.createElement("input");
    name.setAttribute("type","text");
    name.setAttribute("name","Fullname");
    name.setAttribute("placeholder","Fullname");
    // name.setAttribute("required");

    var email = document.createElement("input");
    email.setAttribute("type","email");
    email.setAttribute("name","email");
    email.setAttribute("placeholder","email@prepbyte.com");
    email.setAttribute("pattern","[a-zA-Z0-9]+@prepbyte.com");
    
    var phoneNo = document.createElement("input");
    phoneNo.setAttribute("type","tel");
    phoneNo.setAttribute("name","phoneNo");
    phoneNo.setAttribute("placeholder","91-87952636");
    phoneNo.setAttribute("pattern","[91]{2}[0-9]{10}");
    // phoneNo.setAttribute("required");

    var DOB = document.createElement("input");
    DOB.setAttribute("type","date");
    DOB.setAttribute("name","DOB");
    DOB.setAttribute("placeholder","DOB");
    DOB.setAttribute("min","1995-01-01");
    // DOB.setAttribute("required");

    var submit = document.createElement("input")
    submit.setAttribute("type","submit")
    submit.setAttribute("value","submit")
    form.appendChild(name);
    form.appendChild(email);
    form.appendChild(phoneNo);
    form.appendChild(DOB);
    form.appendChild(submit);

    document.getElementsByClassName("form")[0]
    .appendChild(form);
   
}
form1();


// var br = document.createElement("br");
//     function GFG_Fun() {
               
//     // Create a form dynamically
//     var form = document.createElement("form");
//     form.setAttribute("method", "post");
//     form.setAttribute("action", "submit");
 
//     // Create an input element for Full Name
//     var FN = document.createElement("input");
//     FN.setAttribute("type", "text");
//     FN.setAttribute("name", "FullName");
//     FN.setAttribute("placeholder", "Full Name");
 
//      // Create an input element for date of birth
//      var DOB = document.createElement("input");
//      DOB.setAttribute("type", "text");
//      DOB.setAttribute("name", "dob");
//      DOB.setAttribute("placeholder", "DOB");
 
//      // Create an input element for emailID
//      var EID = document.createElement("input");
//      EID.setAttribute("type", "text");
//      EID.setAttribute("name", "emailID");
//      EID.setAttribute("placeholder", "E-Mail ID");
 
//       // Create an input element for password
//       var PWD = document.createElement("input");
//       PWD.setAttribute("type", "password");
//       PWD.setAttribute("name", "password");
//       PWD.setAttribute("placeholder", "Password");
 
//        // Create an input element for retype-password
//        var RPWD = document.createElement("input");
//        RPWD.setAttribute("type", "password");
//        RPWD.setAttribute("name", "reTypePassword");
//        RPWD.setAttribute("placeholder", "ReEnter Password");
 
//                 // create a submit button
//                 var s = document.createElement("input");
//                 s.setAttribute("type", "submit");
//                 s.setAttribute("value", "Submit");
                 
//                 // Append the full name input to the form
//                 form.appendChild(FN);
                 
//                 // Inserting a line break
//                 form.appendChild(br.cloneNode());
                 
//                 // Append the DOB to the form
//                 form.appendChild(DOB);
//                 form.appendChild(br.cloneNode());
                 
//                 // Append the emailID to the form
//                 form.appendChild(EID);
//                 form.appendChild(br.cloneNode());
                 
//                 // Append the Password to the form
//                 form.appendChild(PWD);
//                 form.appendChild(br.cloneNode());
                 
//                 // Append the ReEnterPassword to the form
//                 form.appendChild(RPWD);
//                 form.appendChild(br.cloneNode());
                 
//                 // Append the submit button to the form
//                 form.appendChild(s);
 
//                 document.getElementsByClassName("form")[0]
//                .appendChild(form);
//             }
//             GFG_Fun();

