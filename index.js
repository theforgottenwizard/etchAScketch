const container = document.querySelector(".container")
let numberOfSquares = 100;
let widthOfContainer = 660;

let isMouseDown = false;

function createSquare(){
    
    let totalNumberOfSquares = numberOfSquares**2;

    for(let i = 0; i<totalNumberOfSquares; i++){
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.width = `${widthOfContainer/numberOfSquares}px`;
        square.style.height = `${widthOfContainer/numberOfSquares}px`;
        container.appendChild(square)
    }
}   

function changeBackgroundColor(e){
    if(isMouseDown){
        e.target.style.backgroundColor = "black";
    }
}

createSquare();

const squares = document.querySelectorAll(".square");


squares.forEach(square=>square.addEventListener("mousedown", (e)=>{
    e.target.style.backgroundColor = "black";
    isMouseDown = true;
}))
squares.forEach(square=>square.addEventListener("mouseup", ()=>{
    isMouseDown = false;
}))
squares.forEach(square=>square.addEventListener("mouseover", changeBackgroundColor))

