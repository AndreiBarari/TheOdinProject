const container = document.querySelector("#container");
const reset = document.getElementById("reset");
let nrCells = 10;

function generateGrid(size) {
  for (let i = 0; i < size * size; i++) {
    let div = document.createElement("div");
    div.classList.add("cell");
    container.appendChild(div);

    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  }
}

generateGrid(nrCells);

function randColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let rgb = `rgb(${r}, ${g}, ${b})`;
  return rgb;
}

function color() {
  let cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.addEventListener("mouseover", () => {
      cell.style.backgroundColor = randColor();
    });
  });
}

color();

reset.addEventListener("click", () => {
  let cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.style.backgroundColor = "white";
  });
});

const resize = document.getElementById("resize");

resize.addEventListener("click", () => {
  let cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    container.removeChild(cell);
  });
  nrCells = prompt("Enter a new grid size between 4 and 100");
  if (nrCells >= 4 && nrCells <= 100) {
    container.style.gridTemplateColumns = `repeat(${nrCells}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${nrCells}, 1fr)`;
    generateGrid(nrCells);
    color();
  } else {
    alert("Please enter a valid number");
    generateGrid(16);
    color();
  }
});

document.getElementById("blackColor").addEventListener("click", () => {
  let cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.addEventListener("mouseover", () => {
      cell.style.backgroundColor = "black";
    });
  });
});

document.getElementById("erase").addEventListener("click", () => {
  let cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.addEventListener("mouseover", () => {
      cell.style.backgroundColor = "white";
    });
  });
});
