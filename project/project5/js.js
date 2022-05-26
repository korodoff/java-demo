let sss = document.getElementsByClassName("lala")


function less(){
    var res = `const noteItem = document.createElement("div");
noteItem.setAttribute("class","note-item")
noteItem.setAttribute("id",note.id);
noteItem.innerText = "helloss"
`
sss.innerHTML = res;
}

less()