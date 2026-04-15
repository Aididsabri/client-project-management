import {modalContent} from "./state.js"

export function modal() {

  // Get the button that opens the modal
  var btn = document.getElementById("modalBtn");
//   var addClientBtn = document.querySelector(".client__add");

  // Get the <span> element that closes the modal
  var span = document.querySelector(".modal-content .close");

  // When the user clicks on the button, open the modal
  btn.onclick = function () {
    modalContent.style.display = "block";
  };

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modalContent.style.display = "none";
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modalContent.style.display = "none";
    }
  };
}
