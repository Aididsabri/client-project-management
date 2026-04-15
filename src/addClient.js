import {clients} from "./state.js";
import {modalContent} from "./state.js";
import {renderClient} from "./state.js";

export function addClient() {
  let clientInput = document.querySelector(".clients__input");
  let clientAdd = document.querySelector(".clients__add");

  //Press Enter to key in input fields
  clientInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      e.preventDefault();
      clientAdd.click();
    }
  });

  clientAdd.addEventListener("click", () => {
    const name = clientInput.value.trim();

    if (!name) {
      alert("Client name cannot be empty");
      return;
    }

    //check duplicated client name
    const isDuplicate = clients.some(
      (client) => client.name.toLowerCase() === name.toLowerCase(),
    );

    if (isDuplicate) {
      console.log("duplicated client blocked");
      alert("Client already Exist!");
      return;
    }

    const newClient = {
      id: Date.now(),
      name: name,
      tasks: [],
    };

    clients.push(newClient);

    clientInput.value = "";
    modalContent.style.display = "none";
    renderClient(); //call function from state.js
  });
}
