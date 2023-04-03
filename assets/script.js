let inp = document.getElementById('inp');
let addBtn = document.getElementById('btn-add');
let removeBtn = document.getElementById('btn-remove');
// let deleteBtn = document.getElementById("deleteBtn");
let list = document.getElementById('list');
let todo = [];

function additems() {
  if ((inp.value != '') && (!todo.includes(`${inp.value}`))) {
    todo.push(inp.value);
  }

  let data = '';
  for (let item of todo) {
    data += `<li class="list-group-item d-flex justify-content-between"> ${item} <button class="btn btn-sm btn-danger deleteBtn">Delete</button></li>`
  }
  inp.value = '';
  list.innerHTML = data;
}

function removeItems() {
  if (todo.length > 0) {
    todo.pop(todo[0]);
  }

  if (list.children.length > 0) {
    list.removeChild(list.lastChild);
  }
}


// deleteBtn.addEventListener('click', function(event) {
//   var parentElement = event.target.parentNode;
//   var siblings = Array.from(parentElement.children);
//   var index = siblings.indexOf(event.target);
  
// });


var current_tasks = document.querySelectorAll(".deleteBtn");
for(var i= 0;i<current_tasks.length;i++ ){
  
}

addBtn.addEventListener('click', additems);
removeBtn.addEventListener('click', removeItems);
// inp.addEventListener("keyup", (event) => {
//   if (event.key == "Enter") {
//     additems();
//   }
//   else if (event.key == "Backspace") {
//     removeItems();
//   }
// });
