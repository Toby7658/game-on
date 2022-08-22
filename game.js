/* columns and rows are 5x5 */
var rows = 5;
var columns = 5;

/* swap tiles on board */
var currTile;
var otherTile;

var turns = 0;

window.unload = function() {
    for (let r = 0; rows; r++ )
    for (let c = 0; c < columns; c++) {
        let tile = document.Element("img");
        tile.src = "./images/white.jpg";
    }
}