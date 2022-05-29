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

addButton.addEventListener("click",()=>{
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
})

// function newTask(){
//     addListItem.classList.toggle("add-itemActive")
//     noteAddList();
// }


function noteAddList(){
    // create the noteList
const noteItem = document.createElement("div");
noteItem.setAttribute("class","note-item")
noteItem.setAttribute("id",noteBox.id);
noteTrip.appendChild(noteItem);


const header = document.createElement("h4");
header.innerText = noteBox[noteBox.length-1].name;
noteItem.appendChild(header);

const taskList = document.createElement("div");
taskList.setAttribute("class","task-list");
taskList.innerHTML = `
<ul class="items-container" id="${'id' + noteBox.id}"><li>djad</li><li>djad</li><li>djad</li></ul>
`
noteItem.appendChild(taskList);

const taskButton = document.createElement("div");
taskButton.setAttribute("class","list-tools");
taskButton.innerHTML = `
<span onclick="newTask(${noteBox.id})">
<i class="fa-solid fa-circle-plus fa" ></i>
</span>
<span onclick="deleteList(${noteBox.id})">
<i class="fa-solid fa-circle-plus fa" ></i>
</span>
`
noteItem.appendChild(taskButton);

};

// function deleteList(id){
//     noteBox.forEach(element => {
//         const noteItem = document.getElementById("${noteBox.id}").id
//         if(element.id = noteItem.id){
//             noteItem.remove();
//         }
//     });
// }


function deleteList(id){
    noteBox.forEach((noteBox,index)=>{
        if(noteBox.id ===id){
            document.getElementById(noteBox.id)
            .outerHTML = "";
        }
    });
    // noteAddList();
}
