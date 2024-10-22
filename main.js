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
