const container = document.getElementById("container");

// add_list popup
const addList = document.getElementById("add_list"); //popUp 
const addButton = document.getElementById("addbtn");// add btn for notetrip to be
const cancelButton = document.getElementById("cancelbtn");//close popup
const popButton = document.getElementById("pop_list")//popup btn
const inputList = document.getElementById("input_list")

const noteTrip = document.getElementById("note")// here to create all the trip note
noteTrip.style.display = "flex"


var noteSecond = document.getElementById("notesecond")
noteSecond.style.display = "none"




function toggleList(){// toggle the addlist button in the navagation bar
    addList.classList.toggle("add-list-active");// classList use to avoid writing css code in javascript
    // container.style.filter = "blur(16px)";
    // addList.style.zindex = "-1";
}
popButton.addEventListener("click",toggleList);//popbutton the nav add button
cancelButton.addEventListener("click", toggleList);//cancel button in the addList

noteBox = [];// we use array to push the noteList name and fuction so that we can target the specific element to delete or add to that specific listBox

addButton.addEventListener("click",()=>{
    document.getElementById("singletaskvalue").style.display = "none"
    noteSecond.style.display = "none";
    noteTrip.style.display = "flex";
    document.getElementById("task-back").innerText = "Task";
    document.getElementById("lists").innerText = " List";
    document.getElementById("list1").innerText = "Add List";
    toggleList();// toggle addList
    let userData = inputList.value;

    const listBox = {//constructor created to add name and id 
        name : userData,
        id: Math.floor((Math.random() * 100) + 1),// random id generator no
        subtask: []
    }
    console.log(listBox.name);//check 
    console.log(listBox.id);//check
    noteBox.push(listBox);
    console.log(noteBox);
    noteAddList();
    createList();
})
function noteAddList(){
    var ListTag = ""
    noteBox.forEach((note) => {
        ListTag += `
        <div class="note-item" id="${note.id}">
        <h4><span onclick = "displayone(${note.id})">${note.name}</span></h4>
        <div class="task-list">
        <ul class="items-container" id="${"id" +note.id}"></ul>
        </div>
        <div class="list-tools">
        <span onclick="newTask(${note.id})">
        <i class="fa-solid fa-circle-plus fa" aria-hidden="true"></i>
        </span>
        <span onclick="deleteList(${note.id})">
        <i class="fa-solid fa-circle-minus fa" aria-hidden="true"></i>
        </span>
        </div>
        </div>
        
        `
        
    });
    noteTrip.innerHTML = ListTag;
}


function deleteList(id){
    noteSecond.style.display = "none";
    
    noteBox.forEach((note,index)=>{
        if(note.id ===id){
            noteBox.splice(index,1);
        }
    });
    noteAddList();
}


function newTask(id){
    console.log(id)
    noteBox.forEach(note=>{
        if(note.id ===id){
            // const newtaskvar = document.getElementById("add_item");

            // newtaskvar.classList.toggle("add-itemActive");
        document.getElementById("add_item").style.visibility = "visible"
       

     
    const addListButton = document.getElementById("addButton")
    const addItemValue = document.getElementById("taskInput");

    addListButton.onclick = ()=>{
        document.getElementById("add_item").style.visibility = "hidden"
        let itemTitle = addItemValue.value
        noteBox.forEach((note,index)=>{
            if(note.id===id){
                const task = {
                    taskId: Math.floor((Math.random() * 200) + 200),
                    taskname: itemTitle,
                }
                console.log(index)
                console.log(task.name)
                console.log(task.id)
                noteBox[index].subtask.push(task);
                console.log(noteBox[index].subtask)
            }
        })
        // addItemValue.value = "";
        createList();
    }
}
});

//  noteAddList();
    

}


 function createList(){
    
     noteBox.forEach(note=>{
        const parentTask = document.getElementById('id' + note.id)
        let listTitle = "";
        note.subtask.forEach(task=>{
            
                listTitle += `<li class="lidata" id = "${'taskid' + task.taskId}">${task.taskname}<span  id = "${'markid' + task.taskId}" onclick="markid(${task.taskId})">
                <i class="fa-solid fa-check"></i>
                </span>`
            
        });
        parentTask.innerHTML = listTitle;
     });


 };

 function markid(id){
     noteBox.forEach(unit => {
        
        unit.subtask.forEach(task => {
            if(task.taskId === id) {
                document.getElementById('taskid' + task.taskId).style.textDecoration = "line-through 2px black";
                document.getElementById('markid' + task.taskId).style.display = "none";
            }
        })
    });
 }
const singledisplay = document.getElementById("container2")
const singledisplayvalue = document.getElementById("singletaskvalue")
function togglecontainer(){
    container.classList.toggle("containerActive")
    singledisplay.classList.toggle("container2")
}



function displayone(id){
    noteBox.forEach((note,index)=>{
        noteSecond.style.display = "flex";
        
        noteTrip.style.display = "none";
        // console.log(displayid)
        // document
        if(note.id ===id ){
        //    document.getElementById("container2").style.visibility = "visible";
        //    document.getElementById("container").style.visibility = "hidden";
        document.getElementById("singletaskvalue").style.display = "inline"
           document.getElementById("singletaskvalue").innerText = note.name
           document.getElementById("task-back").innerText = "Back";
           document.getElementById("lists").innerText = "";
           document.getElementById("list1").innerText = "";
        //    document.getElementById("singletaskdisplay").innerHTML =
        // document.getElementById(note.id).innerText = "ya fux"
        noteSecond.innerHTML = `
        <div class="note-item" id="${note.id}">
        <h4><span onclick = "displayone(${note.id})">${note.name}</span></h4>
        <div class="task-list">
        <ul class="items-container" id="${"id" +note.id}"></ul>
        </div>
        <div class="list-tools">
        <span onclick="newTask(${note.id})">
        <i class="fa-solid fa-circle-plus fa" aria-hidden="true"></i>
        </span>
        <span onclick="deleteList(${note.id})">
        <i class="fa-solid fa-circle-minus fa" aria-hidden="true"></i>
        </span>
        </div>
        </div>
        `

        }
    });
    noteAddList()
}

function displaysingle(){
    
}


// function toggleList(){// toggle the addlist button in the navagation bar
//     addList.classList.toggle("add-list-active");// classList use to avoid writing css code in javascript
//     // container.style.filter = "blur(16px)";
//     // addList.style.zindex = "-1";
// }
// popButton.addEventListener("click",toggleList);//popbutton the nav add button
// cancelButton.addEventListener("click", toggleList);//cancel button in the addList

// noteBox = [];// we use array to push the noteList name and fuction so that we can target the specific element to delete or add to that specific listBox

// addButton.addEventListener("click",()=>{
//     toggleList();// toggle addList
//     let userData = inputList.value;

//     const listBox = {//constructor created to add name and id 
//         name : userData,
//         id: Math.floor((Math.random() * 100) + 1),// random id generator no
//         subtask: []
//     }
//     console.log(listBox.name);//check 
//     console.log(listBox.id);//check
//     noteBox.push(listBox);
//     console.log(noteBox);
//     noteAddList();
//     // createList();
// })

// // function newTask(){
// //     addListItem.classList.toggle("add-itemActive")
// //     noteAddList();
// // }


// function noteAddList(){
//     // create the noteList
// const noteItem = document.createElement("div");
// noteItem.setAttribute("class","note-item")
// noteItem.setAttribute("id",noteBox.id);
// noteTrip.appendChild(noteItem);


// const header = document.createElement("h4");
// header.innerText = noteBox[noteBox.length-1].name;
// noteItem.appendChild(header);

// const taskList = document.createElement("div");
// taskList.setAttribute("class","task-list");
// taskList.innerHTML = `
// <ul class="items-container" id="${'id' + noteBox.id}"><li>djad</li><li>djad</li><li>djad</li></ul>
// `
// noteItem.appendChild(taskList);

// const taskButton = document.createElement("div");
// taskButton.setAttribute("class","list-tools");
// taskButton.innerHTML = `
// <span onclick="newTask(${noteBox.id})">
// <i class="fa-solid fa-circle-plus fa" ></i>
// </span>
// <span onclick="deleteList(${noteBox.id})">
// <i class="fa-solid fa-circle-plus fa" ></i>
// </span>
// `
// noteItem.appendChild(taskButton);

// };

// function deleteList(id){
//     noteBox.forEach(element => {
//         const noteItem = document.getElementById("${noteBox.id}").id
//         if(element.id = noteItem.id){
//             noteItem.remove();
//         }
//     });
// }
