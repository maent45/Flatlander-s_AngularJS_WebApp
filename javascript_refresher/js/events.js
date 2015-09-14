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
}

function editItem() {
    this.className = "edit";
}