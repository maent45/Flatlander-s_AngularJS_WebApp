/**
 * Created by 21103436 on 18/09/2015.
 */


//get btnAddTask reference
var btnAddTask = document.getElementById("btnAddTask");
//get toDoList reference
var toDoList = document.getElementById("toDoList");


//
btnAddTask.onclick = function() {
    //prompt user for new task name
    var newTaskName = prompt("What's your new task?");
    addNewTask(document.getElementById("toDoList"), newTaskName);

};

//function to add new task
function addNewTask(list, newTaskName) {
    var newTask = document.createElement("li");
    newTask.innerText = newTaskName;

    list.appendChild(newTask);
}