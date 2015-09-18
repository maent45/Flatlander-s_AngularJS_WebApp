/**
 * Created by 21103436 on 18/09/2015.
 */


//get btnAddTask reference
var btnAddTask = document.getElementById("btnAddTask");
//get toDoList reference
var toDoList = document.getElementById("toDoList");

//reference to Task Name input box
var newTaskText = document.getElementById("newTaskText");
newTaskText.focus();

//
btnAddTask.onclick = function() {
    var newTaskName = newTaskText.value;

    //if task prompt is cancelled or left blank don't create new li element
    if(!newTaskName || newTaskName == ""){
        alert("You must name the task before adding it.");
        newTaskText.focus();
        return false;
    }

    addNewTask(document.getElementById("toDoList"), newTaskName);
};

//function to add new task
function addNewTask(list, newTaskName) {
    //create new elements
    var newTask = document.createElement("li");
    var checkBox = document.createElement("input");
    var span = document.createElement("span");

    checkBox.type = "checkbox";
    //give span default text
    span.innerText = newTaskName;

    newTask.appendChild(checkBox);
    newTask.appendChild(span);

    //append the created elements
    list.appendChild(newTask);

    newTaskText.select();
}