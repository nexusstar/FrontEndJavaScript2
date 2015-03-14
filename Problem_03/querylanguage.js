/** * Created by p.nikov on 24.2.2015 г..
*/

( function( window ) {
    "use strict";

    function queryLanguage (el, options){
        this.el = el;
        this._init();
        this._initEvents();
    }

    queryLanguage.prototype = {

        _init : function(){
            this.fileInput  =    this.el.querySelector('[type="file"]');
            this.infoBox    =    this.el.querySelector('.loadedFile');
            this.table      =    this.el.querySelector('.table');
            this.submitForm =    this.el.querySelector('[type="submit"]');
            this.isFileLoaded = false;
            this.tableData  =    [];
        },

        _initEvents : function(){
            var self = this;

            this.fileInput.addEventListener('change', function(ev){
                self._loadFile();
            });

            this.submitForm.addEventListener('submit',  function(ev){
                self._queryString();
            });


        },

        _loadFile: function(){
            var self = this;

            if(this.fileInput.files.length > 0){
                var file = this.fileInput.files[0];

                this.infoBox.innerHTML = "File loaded <strong>" + file.name + "</strong>";

                var reader = new FileReader();
                reader.onload = function(){
                    var self = this;
                    console.log(self.result.split('\n'));
                // By lines
                 this.tableData = self.result.split('\n');
            };

                reader.readAsText(file);
            }

        },

        _createTable: function(){

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
};

//add to global namespace
window.queryLanguage = queryLanguage;

} )( window );
