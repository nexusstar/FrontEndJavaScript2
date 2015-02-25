/**
 * Created by p.nikov on 24.2.2015 г..
 */
var $ = document.querySelectorAll.bind(document);
var $_ = document.querySelector.bind(document);
var form = $_("form");
var input = $_('#yourFile');
var tableHeader = $_("thead");
var tableBody = $_("tbody");
var tableData = [];

form.addEventListener("submit", function(event) {
    console.log("Query value", form.elements.query.value);
    var queryString = form.elements.query.value;
    queryString = queryString.split(' ');
    switch(queryString[0]){
        case 'SHOW':
            showQuery();
            break;
        case 'SUM':
            sumColumn();
            break;
        case 'SELECT':
            selectQuery();
            break;
        case 'FIND':
            findQuery();
            break;
        default:
            errorHandler();
    }
    event.preventDefault();
});

input.addEventListener("change", function(){
    if(input.files.length > 0){
        var file = input.files[0];

        $_('.loadedFile').innerHTML = "File loaded <strong>" + file.name + "</strong>";
        var reader = new FileReader();

        reader.onload = function(){

            // By lines
            tableData = this.result.split('\n');

            //TODO:remove initial table creation
            createTable(tableData, tableData.length, tableData[0].split(',').length);

        };
        reader.readAsText(file);
    }
});

function createTable(_lines, rows, cells){
    for(var line = 0, n = rows; line < n; line++){
        //create Row
        var newRow = tableBody.insertRow(line);
        if(line === 0) newRow = tableHeader.insertRow(line);

        //create Cells
        var rowCells = _lines[line].split(',');
        for(var cell = 0, c = cells; cell < c; cell++){
            var newCell  = newRow.insertCell(cell);
            var newText = document.createTextNode(rowCells[cell]);
            newCell.appendChild(newText);
        }
    }
}

//TODO: this should not use global
function showQuery(){
    createTable(tableData, 1,
        tableData[0].split(',').length);
}
