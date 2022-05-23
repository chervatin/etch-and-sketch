let gridSize = 16;

function myFunction() {
    var GridSize = prompt ('Enter new grid size:');
    deleteElements();
    for(var i = 0; i < GridSize; i++) {
        var row = document.createElement("div");
        row.classList.add("row");
        for(var j = 0; j < GridSize; j++) {
            var cell = document.createElement("div");
            cell.id = "cell";
            cell.addEventListener('mouseover', function(e){
                e.target.style.backgroundColor = 'black';
            })
            row.appendChild(cell);
        }
        document.getElementById("container").appendChild(row);
    }
    
}

for(var i = 0; i < gridSize; i++) {
    var row = document.createElement("div");
    row.classList.add("row");
    for(var j = 0; j < gridSize; j++) {
        var cell = document.createElement("div");
        cell.id = "cell";
        cell.addEventListener('mouseover', function(e){
            e.target.style.backgroundColor = 'black';
        })
        row.appendChild(cell);
    }
    document.getElementById("container").appendChild(row);
}

function deleteElements() {
    var e = document.querySelector("#container")
    var child = e.lastElementChild; 
        while (child) {
            e.removeChild(child);
            child = e.lastElementChild;
    }
}
