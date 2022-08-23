

// code for basic 4x4 grid:

jQuery.fn.reverse = [].reverse;

var completeData = [4, 2, 3, 1];
var max = 0;
$.each(completeData, function(intIndex, objValue) {
    if (objValue > max) max = objValue;
});
for (var i = 0; i < max; i++) {
    $('#results').append('<tr id="resultRow' + i + '"></tr>');
    $.each(completeData, function(intIndex, objValue) {
        $('#resultRow' + i).append('<td name="column' + intIndex + '" ></td>');
    });
}

$.each(completeData, function(intIndex, objValue) {
    $('td[name=column' + intIndex + ']').reverse().each(function(idx, val) {
        if (idx < objValue) $(this).addClass('complete' + intIndex);
    });
});

function displayResult()
{
    var firstRow=document.getElementById("grid").rows[0];
    var x=firstRow.insertCell(-1);

    var img = document.createElement('img');
    img.src = "#";
    x.appendChild(img);
}