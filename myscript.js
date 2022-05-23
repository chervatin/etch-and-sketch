for(var i = 0; i < 16; i++) {
    var row = document.createElement("div");
    row.classList.add("row");
    for(var j = 0; j< 16; j++) {
        var cell = document.createElement("div");
        cell.classList.add("cell");
        row.appendChild(cell);
    }
    document.getElementById("container").appendChild(row);
}