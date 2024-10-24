let contactId = 2;

document.getElementById("newContact").addEventListener("submit", function(){ 
    event.preventDefault();
    contactId++;
    let str = ``;
    let name = document.querySelector("input[name='name']").value;
    let phone = document.querySelector("input[name='phone']").value;

    str += `<tr id="contact${contactId}">`;
    str += `<td>`;
    str += `<input type="text" name="name${contactId}" value="${name}" disabled>`;
    str += `</td>`;
    str += `<td>`;
    str += `<input type="tel" name="phone${contactId}" value="${phone}" disabled>`;
    str += `</td>`;
    str += `<td>`;
    str += `<button id="edit${contactId}">Redigera</button>`;
    str += `</td>`;
    str += `<td>`;
    str += `<button id="delete${contactId}">Ta bort</button>`;
    str += `</td>`;

    document.getElementById("contacts").innerHTML += str;
    document.getElementById("newContact").reset();
});

let edits = document.getElementsByClassName("edit");
for (let i = 1; i < edits.length; i++) {
    document.getElementById("edit"+i).addEventListener("click", function(){
        //Enable textfields relating to chosen contact
        document.querySelector("input[name='name"+1+"']").disabled = false;
        document.querySelector("input[name='phone"+1+"']").disabled = false;

        //Switch visible button for editing
        document.getElementById("edit"+i).style.display = "none";
        document.getElementById("save"+i) .style.display = "block";
    });
}

let saveEdits = document.getElementsByClassName("save");
for (let i = 1; i < saveEdits.length; i++) {
    document.getElementById("save"+i).addEventListener("click", function(){
        //Disable textfields relating to chosen contact
        document.querySelector("input[name='name"+1+"']").disabled = true;
        document.querySelector("input[name='phone"+1+"']").disabled = true;

        //Switch visible button for editing
        document.getElementById("edit"+i).style.display = "block";
        document.getElementById("save"+i) .style.display = "none";
    });
}

let deletes = document.getElementsByClassName("delete");
for (let i = 1; i < deletes.length; i++) {
    document.getElementById("delete"+i).addEventListener("click", function(){
        document.getElementById("contact"+i).remove();
    });
}
