/** * Created by p.nikov on 24.2.2015 г..
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
            sumColumn(queryString[1]);
            break;
        case 'SELECT':
            selectQuery(queryString);
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
            //createTable(tableData, tableData.length, tableData[0].split(',').length);

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


function showQuery(){
    $_("#formTable thead").innerHTML = "";
    createTable(tableData, 1,
        tableData[0].split(',').length);
}

function sumColumn(col){
    var colIndex;
    var sum = NaN;
    var hasNumber = false;

    if (tableData.length > 0){
        colIndex = tableData[0].indexOf(col);
        if(colIndex === -1){
            $_(".infoBox").innerHTML = '<p class="lead">There is no column "' + col + '" in data</p>';
            return;
        }
        sum = 0;
        for(var i = 1; i < tableData.length; i++){
            if(!isNaN(tableData[i][colIndex])){
                sum += parseInt(tableData[i][colIndex]);
                hasNumber = true;
            }
        }
    } else{
        $_(".infoBox").innerHTML = '<p class="lead">No data loaded!</p>';
        return;
    }

    if(hasNumber){
        $_(".infoBox").innerHTML = '<p class="lead">The sum of column "' + col + '" is ' + sum + '</p>';
        return sum;
    }
    $_(".infoBox").innerHTML = '<p class="lead">Nothing to sum in column "' + col + '"!</p>';
    return NaN;
}

function selectQuery(query){

    if(query.length === 2){
        query[1].split(',');
        console.log(query[1].split(','));
    }

}