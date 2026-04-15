import { clients } from "./state.js";
import { renderClient } from "./state.js";

export function filter() {
  const filterInput = document.querySelector(".clients__filter-input");
  const filterBtn = document.querySelector(".clients__filter-btn");

  function filterClient() {
    const keyword = filterInput.value.trim().toLowerCase();

    if (!keyword) {
      renderClient(); //render all clients
      return;
    } else {
      const filtered = clients.filter((client) =>
        client.name.toLowerCase().includes(keyword),
      );

      renderClient(filtered);
    }
    console.log("filter test");
  }

  filterBtn.addEventListener("click", filterClient);

  
}
