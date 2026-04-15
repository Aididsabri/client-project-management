export let clients = [];

export let modalContent = document.querySelector(".modal");

export let selectedClientId = null;

export function renderClient(data = clients) {
    let clientList = document.querySelector(".clients__list");
    clientList.innerHTML = "";

    data.forEach((client) => {
      const list = document.createElement("li");
      list.textContent = client.name;
      list.className = "w-full my-3 px-2 text-black py-4 bg-purple-200 rounded";
      clientList.appendChild(list);
    });

    if (data.length === 0) {
    clientList.innerHTML = '<p class="pt-5">Filter betul betul la!</p>';
    return;
  }

    console.log(clients)
    console.log("total number of clients is "+clients.length)
  }