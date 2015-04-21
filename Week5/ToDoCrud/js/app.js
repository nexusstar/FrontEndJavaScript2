/**
 * Created by nexusstar on 17.04.15.
 */
var TodoApp = (function() {
    // private vars
    var tasks = [];
    var index = 0;

    // (optional) store the reference with the jQuery selectors here
    var refs = {
        addTask: "input#addTask",
        container: "#taskList"
    };

    // (optional) interface for setting the
    var setSelectorRefs = function(refs){

    };

    var addTask = function(taskName) {
        var task = {};
        task.name = taskName;
        task.id = index++;
        task.finished = false;

        tasks.push(task);

    };

    var finishTask = function(id) {

        tasks[id].finished = !tasks[id].finished;

    };

    var removeTask = function(id){
        var taskExist = false;
        var taskID = 0;
        tasks.forEach(function(task){
            if (task.id === id){
                taskExist = true;
                taskID = tasks.indexOf(task);
            }
        });
        if(taskExist){
            console.log(taskID);
            tasks = tasks.splice(taskID, 1);
        }
    };

    var displayList = function() {

        // clear the contents
        $(refs.container).empty();


        // loop through the tasks
        tasks.forEach(function(task){
            var taskContainer = $('<li></li>')
            var checkBox = $('<input type="checkbox">');
            var removeBtn =$('<button>x</button>');


            taskContainer.append(checkBox);

            taskContainer.append(task.name);
            taskContainer.append(removeBtn);
            $(refs.container).append(taskContainer);

            $(taskContainer)
                .find(':checkbox')
                .bind('click', function(e){
                    finishTask(task.id);
                    $(taskContainer).toggleClass('done');
                });

            $(taskContainer)
                .find('button')
                .bind('click', function(e){
                    removeTask(task.id);
                    $(this).parent().fadeOut('fast');
                });

            if(task.finished) {
                $(taskContainer).toggleClass('done');
                $(taskContainer).find(':checkbox').prop('checked', true);

            }

        });

    };

    // public api
    return {
        createTask: addTask,
        finishTask: finishTask,
        displayList: displayList
    };
})();
