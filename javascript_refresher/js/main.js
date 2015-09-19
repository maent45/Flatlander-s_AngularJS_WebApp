/**
 * Created by 21103436 on 18/09/2015.
 */


var btnAddTask = document.getElementById("btnAddTask");
var toDoList = document.getElementById("toDoList");
var newTaskText = document.getElementById("newTaskText");

var totalTaskIndicator = document.getElementById("totalTasks");
var numOfTasks = 0;

newTaskText.focus();

//
btnAddTask.onclick = function() {
    var newTaskName = newTaskText.value;

    if(newTaskName == ""){
        alert("You must name the task before adding it.");
        newTaskText.focus();
        return false;
    }
    else{
        addNewTask(document.getElementById("toDoList"), newTaskName);
        totalTaskIndicator.innerHTML++;
    }
};

function updateItemStatus() {
    var cbId = this.id.replace("cb_", "");
    var taskText = document.getElementById("task_", cbId);

    taskText.innerText = "sdf";
}

//function to add new task
function addNewTask(list, newTaskName) {
    numOfTasks++;
    //create new elements
    var newTask = document.createElement("li");

    var checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.id = "cb_" + numOfTasks;
    checkBox.onclick = updateItemStatus;

    var span = document.createElement("span");
    span.id = "task_" + numOfTasks;

    //give span default text
    span.innerText = newTaskName;

    newTask.appendChild(checkBox);
    newTask.appendChild(span);

    //append the created elements
    list.appendChild(newTask);

    newTaskText.select();
}