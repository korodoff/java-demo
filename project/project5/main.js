const container = document.getElementById("container");

// add_list popup
const addList = document.getElementById("add_list"); //popUp 
const addButton = document.getElementById("addbtn");// add btn for notetrip to be
const cancelButton = document.getElementById("cancelbtn");//close popup
const popButton = document.getElementById("pop_list")//popup btn
const inputList = document.getElementById("input_list")

const noteTrip = document.getElementById("note")// here to create all the trip note




function toggleList(){// toggle the addlist button in the navagation bar
    addList.classList.toggle("add-list-active");// classList use to avoid writing css code in javascript
    // container.style.filter = "blur(16px)";
    // addList.style.zindex = "-1";
}
popButton.addEventListener("click",toggleList);//popbutton the nav add button
cancelButton.addEventListener("click", toggleList);//cancel button in the addList

noteBox = [];// we use array to push the noteList name and fuction so that we can target the specific element to delete or add to that specific listBox

function noteList(){
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
    // createList();
}
function noteAddList(){
    let ListTag = ""
    noteBox.forEach((note) => {
        ListTag += `
        <div class="note-item" id="${note.id}">
        <h4>${note.name}</h4>
        <div class="task-list">
        <ul class="items-container" id="${"id" +note.id}"></ul>
        </div>
        <div class="list-tools">
        <span onclick="newTask(${note.id})">
        <i class="fa-solid fa-circle-plus fa" aria-hidden="true"></i>
        </span>
        <span onclick="deleteList(${note.id})">
        <i class="fa-solid fa-circle-plus fa" aria-hidden="true"></i>
        </span>
        </div>
        </div>
        
        `
        
    });
    noteTrip.innerHTML = ListTag;
}



addButton.addEventListener("click",noteList)

function deleteList(id){
    noteBox.forEach((note,index)=>{
        if(note.id ===id){
            noteBox.splice(index,1);
        }
    });
    noteAddList();
}


function newTask(id){
    console.log(id)
    noteBox.forEach((note)=>{
        if(note.id ===id){
            // const newtaskvar = document.getElementById("add_item");

            // newtaskvar.classList.toggle("add-itemActive");
        document.getElementById("add_item").style.visibility = "visible"
       

        }
    });
    const addListButton = document.getElementById("addButton")
    const addItemValue = document.getElementById("taskInput");

    addListButton.addEventListener("click",()=>{
        document.getElementById("add_item").style.visibility = "hidden"
        let itemTitle = addItemValue.value
        noteBox.forEach((note,index)=>{
            if(note.id===id){
                const task = {
                    id: Math.floor((Math.random() * 200) + 200),
                    name: itemTitle,
                }
                console.log(task.name)
                console.log(task.id)
                noteBox[index].subtask.push(task);
                console.log(noteBox[index].subtask)
            }
        })
        createList();
    })


 noteAddList();
    

}


 function createList(){
    
     noteBox.forEach(note=>{
        const parentTask = document.getElementById('id' + note.id)
        let listTitle = "";
        note.subtask.forEach(task=>{
            
                listTitle += `<li id = "${'taskid' + task.id}">${task.name} <span id = "markasred">markasread</span></li>`
            
        });
        parentTask.innerHTML = listTitle;
     });


 };

// function newTask(){
//     addListItem.classList.toggle("add-itemActive")
//     noteAddList();
// }


// function noteAddList(){
// noteBox.forEach((note)=>{

//     // create the noteList
// const noteItem = document.createElement("div");
// noteItem.setAttribute("class","note-item")
// noteItem.setAttribute("id",note.id);
// noteTrip.appendChild(noteItem);


// const header = document.createElement("h4");
// header.innerText = `${note.name}`;
// noteItem.appendChild(header);

// const taskList = document.createElement("div");
// taskList.setAttribute("class","task-list");
// taskList.innerHTML = `
// <ul class="items-container" id="${'id' + note.id}"><li>djad</li><li>djad</li><li>djad</li></ul>
// `
// noteItem.appendChild(taskList);

// const taskButton = document.createElement("div");
// taskButton.setAttribute("class","list-tools");
// taskButton.innerHTML = `
// <span onclick="newTask(${note.id})">
// <i class="fa-solid fa-circle-plus fa" ></i>
// </span>
// <span onclick="deleteList(${note.id})">
// <i class="fa-solid fa-circle-plus fa" ></i>
// </span>
// `
// noteItem.appendChild(taskButton);

// });
    

// };
// addButton.addEventListener("click",noteList)

// function deleteList(id){
//     noteBox.forEach((note,index) => {
//         if(note.id===id ){
//             noteBox.splice(index,1);
//         }
//     });
//     noteAddList();
// }
