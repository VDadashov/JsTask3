let inp = document.getElementById('inp');
let addBtn = document.getElementById('btn-add');
let removeBtn = document.getElementById('btn-remove')
let list = document.getElementById('list');
let todo = [];

function additems(){
    if ((inp.value != '') && (!todo.includes(`${inp.value}`))) {
        todo.push(inp.value);
    }

    let data = '';
    for(let item of todo){
        list.style =
        data += `<li class="list-group-item"> ${item} </li>` 
    }   
    inp.value = '';
    list.innerHTML = data;
}

function removeItems(){
    if (todo.length > 0) {
        todo.pop(todo[0]);
      }
    
    if (list.children.length > 0) {
        list.removeChild(list.lastChild);
      }
    
}

addBtn.addEventListener('click', additems);
removeBtn.addEventListener('click', removeItems);
inp.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
      additems();
    }
  });