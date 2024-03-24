// set reusable constants
const GRID_CLASS_NAME = "grid";
const BASE_GRID_LENGTH = 16; // 16 x 16 boxes grid
const BASE_SQUARE_DIV_SIDE_LENGTH = 50; // 50 X 50 pixels square div
const BASE_GRID_SIZE = BASE_GRID_LENGTH * BASE_GRID_LENGTH; // no.of square divs forming the grid
const CONTAINER_SQUARE_SIDE_LENGTH = BASE_GRID_LENGTH * BASE_SQUARE_DIV_SIDE_LENGTH; // square side length = 16 squares * 50px (size of inner square div)

let container = document.querySelector(".container");
container.style.width = CONTAINER_SQUARE_SIDE_LENGTH.toString() + "px";
container.style.height = CONTAINER_SQUARE_SIDE_LENGTH.toString() + "px";
container.style.margin = "25px";
container.style.borderColor = "black";
container.style.borderStyle = "inset";

let drawGrid = (size = BASE_GRID_LENGTH) => {
    let gridItemSide = `${CONTAINER_SQUARE_SIDE_LENGTH/size}px`;
    console.log("Grid item side length", gridItemSide);
    for (let i = 1; i<=size*size; i++) {
        let gridItem = document.createElement("div");
        gridItem.setAttribute("class", GRID_CLASS_NAME);
        gridItem.style.backgroundColor = "peach";
        gridItem.style.flexShrink = 0;
        gridItem.style.width = gridItemSide;
        gridItem.style.height = gridItemSide;
        gridItem.style.gap = "0px";
        gridItem.addEventListener("mouseover", (event) => {
            event.target.style.backgroundColor = "purple";
        })
        container.appendChild(gridItem);
    }
    console.log(`grid setup complete for size: ${size} boxes`);
}

let destroyGrid = () => {
    let gridItems = document.querySelectorAll(".grid");
    for (item of gridItems)
        container.removeChild(item);
    console.log("grid destroyed");
}

let resetGrid = () => {
    destroyGrid();
    drawGrid();
}

let resizeGrid = () => {
    let userSize = prompt("Enter no.of boxes you wish to see per side (Max: 100; Default: 16)", "16");
    userSize = parseInt(userSize.trim());
    console.log("User choice input is", userSize);
    userSize = (userSize < 100) ? userSize : 100;
    console.log("User choice is set to", userSize);
    destroyGrid();
    drawGrid(userSize);
}

// setup reset functionality
let resetButton = document.querySelector(".reset");
resetButton.addEventListener("click", resetGrid);

// setup resize functionality
let resizeButton = document.querySelector(".resize");
resizeButton.addEventListener("click", resizeGrid);

// drawGrid
drawGrid();