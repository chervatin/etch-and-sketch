let gridSize = 16;
buildFunction(gridSize);


function myFunction() {
    var gridSize = prompt ('Enter new grid size (2-100):');
    while (gridSize > 100 || gridSize < 2){
    var gridSize = prompt ('Enter new grid size (Please, I said 2-100)');
    }
    deleteElements();
    buildFunction(gridSize);
}

// Funcion constructora de grid //

function buildFunction(gridSize){
    let size = 432/gridSize;
    for(var i = 0; i < gridSize; i++) {
    var row = document.createElement("div");
    row.classList.add("row");
    for(var j = 0; j < gridSize; j++) {
        var cell = document.createElement("div");
        cell.id = "cell";
        cell.style.width = `${size}px`;
        cell.style.height = `${size}px`;
        cell.addEventListener('mouseover', function(e){
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        e.target.style.backgroundColor = "#" + randomColor;
        })
        row.appendChild(cell);
    }
    document.getElementById("container").appendChild(row);
}
}

// Funcion eliminadora de grid anterior //

function deleteElements() {
    var e = document.querySelector("#container")
    var child = e.lastElementChild; 
        while (child) {
            e.removeChild(child);
            child = e.lastElementChild;
    }
}

