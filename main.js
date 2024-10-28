let contactId = 0;

document.getElementById("newContact").addEventListener("submit", function(){ 
    event.preventDefault();
    let name = document.querySelector("input[name='name']").value;
    let phone = document.querySelector("input[name='phone']").value;
    let error = document.getElementById("createError");

    if(name == "" || phone == ""){
        error.innerHTML = "Både namn och telefonnummer måsta fyllas i!";
    } else {
        error.innerHTML = "";
        addNewContact(name, phone);
    }
    
});

function addNewContact(name,phone){
    contactId++;
    let str = ``;

    str += `<tr id="contact${contactId}">`;
    str += `<td class="inputCol">`;
    str += `<input type="text" class="form-control" name="name${contactId}" value="${name}" disabled>`;
    str += `</td>`;
    str += `<td class="inputCol">`;
    str += `<input type="tel" class="form-control" name="phone${contactId}" value="${phone}" disabled>`;
    str += `</td>`;
    str += `<td class="btnCol">`;
    str += `<button id="edit${contactId}" class="edit btn btn-warning" onclick="editContact(${contactId})">Redigera</button>`;
    str += `<button id="save${contactId}" class="save btn btn-success" onclick="saveChanges(${contactId})">Spara</button>`;
    str += `</td>`;
    str += `<td class="btnCol">`;
    str += `<button id="delete${contactId}" class="delete btn btn-danger" onclick="removeContact(${contactId})">Ta bort</button>`;
    str += `</td>`;

    document.getElementById("contacts").innerHTML += str;
    document.getElementById("newContact").reset();
}

function editContact(id){
    //Enable textfields relating to chosen contact
    document.querySelector("input[name='name" + id + "']").disabled = false;
    document.querySelector("input[name='phone" + id + "']").disabled = false;

    //Switch visible button for editing
    document.getElementById("edit"+id).style.display = "none";
    document.getElementById("save"+id) .style.display = "block";
}

function saveChanges(id){
    let name = document.querySelector("input[name='name" + id + "']");
    let phone = document.querySelector("input[name='phone" + id + "']");
    let error =  document.getElementById("editError");

    if(name.value == "" || phone.value == ""){
        error.innerHTML = "Kontakten måste ha både namn och telefonnummer!"
    } else {
        error.innerHTML = "";
        
        //Disable textfields relating to chosen contact
        name.disabled = true;
        phone.disabled = true;

        //Switch visible button for editing
        document.getElementById("edit" + id).style.display = "block";
        document.getElementById("save" + id) .style.display = "none";
    }
}

function removeContact(id){
    document.getElementById("contact" + id).remove();
}

function deleteList(){
    document.getElementById("contacts").innerHTML = "";
}
