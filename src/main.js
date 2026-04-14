import {modal} from './modal.js';

modal();

let clients = [];
let selectedClientId = null;

let clientInput = document.querySelector(".clients__input")
let clientList = document.querySelector(".clients__list")
let clientAdd = document.querySelector(".clients__add")


//Press Enter to key in input fields
clientInput.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        e.preventDefault()
        clientAdd.click()
    }
})

clientAdd.addEventListener("click",() =>{
const name = clientInput.value.trim();
    
    if (!name){
        alert("Client name cannot be empty")
        return
    }

    //check duplicated client name
    const isDuplicate = clients.some(client =>
        client.name.toLowerCase() === name.toLowerCase()
    )

    if (isDuplicate){
        console.log("duplicated client blocked")
        alert("Client already Exist!")
        return;
    }

    const newClient = {
        id: Date.now(),
        name: name,
        tasks: []
    };
    
    clients.push(newClient);

    clientInput.value = "" 

    renderClient()
})

// add clients into client[] Array
function addClient(){
    
}

//Render clients[] array into HTML
function renderClient(){
    clientList.innerHTML = ""

    clients.forEach(client =>{
        const list = document.createElement("li");
        list.textContent = client.name;
        list.className = "w-full my-3 px-2 text-black py-4 bg-purple-200 rounded"
        clientList.appendChild(list)
    })
    
}
