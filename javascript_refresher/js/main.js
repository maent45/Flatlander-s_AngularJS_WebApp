/**
 * Created by 21103436 on 18/09/2015.
 */

var btnAddTask = document.getElementById("btnAddTask");
var btnSelectTask = document.getElementById("btnSelectTask");
var toDoList = document.getElementById("toDoList");
var newTaskText = document.getElementById("newTaskText");

var totalTaskIndicator = document.getElementById("totalTasks");
var totalItems = 0;

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
        var taskCount = totalTaskIndicator.innerHTML++;
        taskCount++;
        if(taskCount > 5){
            alert("You've created more than 5 tasks.");
        }
    }
};

function updateItemStatus() {
    //replace all "cb_" found in id with ""
    var cbId = this.id.replace("cb_", "");
    var itemText = document.getElementById("item_" + cbId);

    if(this.checked) {
        itemText.className = "taskChecked";
    }
    else{
        //if item is not checked then don't apply a css class
        itemText.className = "";
    }
}

//function to add new task
function addNewTask(list, newTaskName) {
    //increment totalItems for unique id count
    totalItems++;
    //create new elements
    var newTask = document.createElement("li");

    var checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.id = "cb_" + totalItems;
    //onclick call updateItemStatus function
    checkBox.onclick = updateItemStatus;

    var span = document.createElement("span");
    span.id = "item_" + totalItems;

    //give the span task name
    span.innerText = newTaskName;

    newTask.appendChild(checkBox);
    newTask.appendChild(span);

    //append the created elements
    list.appendChild(newTask);
    newTaskText.select();
}