let clients = [];

let clientInput = document.querySelector(".clients__input")

function addClient(){
    let name = clientInput.value
    let listContainer = document.querySelector(".clients__list__container")
    let newListBox = document.createElement("div")
    newListBox.classList.add("clients__list")
    let newListName = document.createElement("div")
    newListName.classList.add("clients__list__name")

    newListBox.appendChild(newListName)
    listContainer.appendChild(newListBox)
    
    newListName.innerHTML = name
    // console.log("BOLEH")
}