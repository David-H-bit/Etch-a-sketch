const container = document.getElementById("container");
container.style.maxWidth = "1000px";
container.style.maxHeight = "1000px";

const button1 = document.createElement("button");
button1.textContent = "Click here to change grid!"
container.appendChild(button1);

let gridNumber = 16;

button1.addEventListener("click", () =>{
    gridNumber = Number(prompt("Enter a grid number (eg 16 will give a 16x16 grid"));
    clearGrid();
    makeGrid(gridNumber);
})

function makeGrid(){
    for(let i = 0; i < gridNumber; i++){
        const gridDivColumn = document.createElement("div");
        gridDivColumn.style.display = "flex";
        gridDivColumn.style.flexDirection = "row";
        gridDivColumn.style.flex = "1 1 auto";
        container.appendChild(gridDivColumn);
    
        for(let j = 0; j < gridNumber; j++){
            const gridDivRow = document.createElement("div");
            gridDivRow.style.backgroundColor = "red";
            gridDivRow.style.width = "50px";
            gridDivRow.style.height = "50px";
            gridDivRow.style.border = "2px solid black";
            gridDivRow.style.flex = "1 1 auto";
    
            gridDivRow.addEventListener("mouseenter", function(){
                gridDivRow.style.backgroundColor = "blue";
            })
            
            gridDivRow.addEventListener("mouseleave", function(){
                gridDivRow.style.backgroundColor = "red";
            })
    
            gridDivColumn.appendChild(gridDivRow);
        }
    }
}

function clearGrid(){
    container.innerHTML = "";
    container.appendChild(button1); 
}

