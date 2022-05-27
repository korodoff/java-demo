let sss = document.getElementsByClassName("lala")


function less(){
    var res = `const noteItem = document.createElement("div");
noteItem.setAttribute("class","note-item")
noteItem.setAttribute("id",note.id);
noteItem.innerText = "helloss"
`

}
sss.innerHTML = res;
less()




// _______________________________________
// s::

// const tasklist =[];

// const addtask = () =>{
//   const name = document.getElementById('name').value;
//   console.log(name);

//   const tempObj= {
//     id:Date.now(),
//     taskName:name
//   }

//   tasklist.push(tempObj);
//   console.log(tasklist);
    
//    addtaskonscreen()

// }


// function addtaskonscreen (){
//   const element = document.createElement("div");
//   element.setAttribute("class","child");

//   element.innerText = tasklist[tasklist.length-1].taskName;

//   const existingelement = document.getElementById("parent");
//   existingelement.appendChild(element);
// }
