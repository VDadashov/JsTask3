let inp = document.getElementById('inp');
let btn = document.getElementById('btn');
let list = document.getElementById('list');
let todo = [];

function add(){
    if ((inp.value != '') && (!todo.includes(`${inp.value}`))) {
        todo.push(inp.value);
    }

    let data = '';
    for(let item of todo){
        data += `<li class="list-group-item"> ${item} </li>` 
    }
    inp.value = '';
    list.innerHTML = data;
}

btn.addEventListener('click', add);