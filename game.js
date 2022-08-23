/* columns and rows are 5x5 */
var rows = 5;
var columns = 5;

/* swap tiles on board */
var currTile;
var otherTile;

var turns = 0;


window.onload = function() {
    for (let r = 0; r < rows; r++ ) 
    for (let c = 0; c < columns; c++) {

/* set structure for images on tiles */
        let tile = document.createElement("img");
        

        document.getElementById("block").append(tile);
    }
}