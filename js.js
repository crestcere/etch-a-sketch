const body = document.querySelector("body");

const button = document.createElement("button");
button.textContent = "Set grid"
let grid = 16;
button.addEventListener("click", () => {
    grid = prompt("Set grid", 64);
    (grid > 100) ? (grid = 64) : (grid);
    if (typeof container_div !== "undefined") {
        container_div.remove();
    }
    createGrid(grid);
    // console.log(typeof square_div_column);
})

body.appendChild(button);

// const container_div = document.createElement("div");
// container_div.classList.add("container_div");
// container_div.style.border = "5px solid black";

// body.appendChild(container_div);

let container_div;

function createGrid(grid) {

    container_div = document.createElement("div");
    container_div.classList.add("container_div");
    container_div.style.border = "5px solid black";

    body.appendChild(container_div);

    let square_div_row;
    let square_div_column;


    for (let x = 0; x < grid; x++) {
        square_div_row = document.createElement("div"); //create
        square_div_row.classList.add("square_div_row");
        container_div.appendChild(square_div_row);
        for (let y = 0; y < grid; y++) {
            square_div_column = document.createElement("div"); //create
            square_div_column.classList.add("square_div_column");
            // square_div_column.classList.add("square_div_column-touch");
            square_div_column.addEventListener('mouseover', (event) => {
                event.target.style.backgroundColor = "pink";
                // event.target.classList.toggle("square_div_row-touch");
                // square_div_row.appendChild(document.getElementsByClassName("square_div_row-touch"));
            });
            square_div_row.appendChild(square_div_column);
        }
    }
    // console.log(typeof square_div_column);

}

createGrid(grid);
// console.log(typeof square_div_column);

// for (let x = 0; x < grid; x++) {
//     let square_div_row = document.createElement("div");
//     square_div_row.classList.add("square_div_row");
//     container_div.appendChild(square_div_row);
//     for (let y = 0; y < grid; y++) {
//         let square_div_column = document.createElement("div");
//         square_div_column.classList.add("square_div_column");
//         square_div_column.classList.add("square_div_column-touch");
//         square_div_column.addEventListener('mouseover', (event) => {
//             event.target.style.backgroundColor = "pink";
//             // event.target.classList.toggle("square_div_row-touch");
//             // square_div_row.appendChild(document.getElementsByClassName("square_div_row-touch"));
//         });
//         square_div_row.appendChild(square_div_column);
//     }
// }




// const square_div = document.createElement("div");
// square_div.setAttribute("id", "square_div");
// square_div.classList.add("square_div");

// container_div.appendChild(square_div);
