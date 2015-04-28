/**
 * Created by nexusstar on 15-4-28.
 */


/**
 * Created by nexusstar on 17.04.15.
 */
var Students = (function() {
    // private vars
    var _students = [];

    function studentExist(id){
        return (_students[id]);
    }

    var addStudent = function(student) {
        _students.push(student);
    };

    var removeStudent = function(id){
        var studentExist = false;
        var studentID = -1;
        _students.forEach(function(student){
            if (student.id === id){
                studentExist = true;
                studentID = _students.indexOf(student);
            }
        });
        if(studentExist){
            _students = _students.splice(taskID, 1);
        }
    };

    var displayStudent = function(id){
        if(studentExist(id)){
            return _students[id];
        }
    };

    // public api
    return {
        createStudent: addStudent,
        deleteStudent: removeStudent,
        getStudent: displayStudent
    };
})();

