// DOM elements
const board_C = document.querySelector(".board");

const example_array = ["X", "", "", "O", "X", "O", "", "", "X"];

// Render Function
function render(board) {
  // Clear before run
  board_C.innerHTML = "";
  // Render
  board.forEach((item) => {
    let element = document.createElement("div");
    element.textContent = `${item}`;
    element.classList.add("board_entry_piece");
    board_C.appendChild(element);
  });
}

// Click Events



render(example_array);
render(example_array);
