/**
 * Created by 21103436 on 15/09/2015.
 */

//get checklist
var checklist = document.getElementById("checklist");

//select all li's
var items = checklist.querySelectorAll("li");
//select all inputs
var inputs = checklist.querySelectorAll("input");

//loop through all items to add eventListeners
for (var i = 0; i < items.length; i++) {
    items[i].addEventListener("click", editItem);
    inputs[i].addEventListener("blur", updateItem);
    inputs[i].addEventListener("keypress", itemKeypress);
}

function editItem() {
    this.className = "edit";
    var input = this.querySelector("input");
    input.focus();
    input.setSelectionRange(0, input.value.length);
}

function updateItem() {
    this.previousElementSibling.innerHTML = this.value;
    this.parentNode.className = "";
}

//function to call updateItem on pressing 'Enter' key
function itemKeypress() {
    //'13' represents the enter key
    if (event.which === 13) {
        updateItem.call(this);
    }
}

//function to add new tasks
$("#btnAddTask").click(function() {
    $("ul").append("<li><span>Apples</span></li>")
});


//access the task to prioritise
var priTask = document.getElementById("testApple");

//function to prioritise task
function prioritiseTask() {
    addEventListener()
}