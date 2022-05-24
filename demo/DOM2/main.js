//1.Create a button , on click of which new Heading tag h1 should be added with text as "MERN stack" on the screen above button

function stack() {
    document.querySelector("h1.text").innerText="MERN Stack"
    
}
//2.Write code to get 1st H1 element from a webpage using DOM

let r=document.getElementsByTagName("h1")
console.log(r[0]);


//3.Write code to implement timer clock using JS -- display HH:MM:SS -- the time should keep updating every second

function currentTime() {
    let date = new Date(); //Object
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";
  
    if(hh == 0){
        hh = 12;
    }
    if(hh > 12){
        hh = hh - 12;
        session = "PM";
     }
  
     hh = (hh < 10) ? "0" + hh : hh;
     mm = (mm < 10) ? "0" + mm : mm;
     ss = (ss < 10) ? "0" + ss : ss;
      
     let time = hh + ":" + mm + ":" + ss + " " + session;
  
    document.getElementById("clock").innerText = time; 
    let t = setTimeout(function(){ currentTime() }, 1000);
  }
  currentTime()

//4.Create an HTML page having content as Hello world and a button named Replace Text. When user will click on this button page content should be changed to "Welcome to Elevation academy"

function Replace() {
    document.getElementById("text").innerText="Welcome to Elevation academy"
   
}

//5.Create an HTML page having content as Hello world and a button named "Hide Text." When user will click on this button hide the "Hello World" text

$("#Hide").click(function(){
    $(".Text2").hide();
})


