var todo = document.getElementById('todo');
var btn = document.getElementById('btn');
var ul = document.getElementById('list');
var editItem;


function addTodo() {
    var todoItem = todo.value;
    var todoTextNode = document.createTextNode(todoItem);
    var li = document.createElement('li');
	li.setAttribute('class', 'list-group-item d-flex justify-content-space align-items-center')

    var button = document.createElement('button');
    var btnText = document.createTextNode('delete');
    button.appendChild(btnText);
    button.setAttribute('onClick', 'deleteTodo(this.parentNode)');
	button.setAttribute('class', 'btn btn-danger');
	
    var editBtn = document.createElement('button');
    var editText = document.createTextNode('edit');
    editBtn.appendChild(editText);
    editBtn.setAttribute('onClick', 'editTodo(this.parentNode)');
	editBtn.setAttribute('class', 'btn btn-primary');
	
    li.appendChild(todoTextNode);
    li.appendChild(button);
    li.appendChild(editBtn);

    ul.appendChild(li);
    todo.value = '';
}

function deleteTodo(itemToDel) {
    ul.removeChild(itemToDel);
}

function editTodo(itemToEdit) {
    editItem = itemToEdit.childNodes[0];
    btn.innerHTML = 'save';
    btn.setAttribute('onClick', 'save()');
    todo.value = itemToEdit.childNodes[0].nodeValue;
}

function save() {
    var todoItem = todo.value;
    editItem.nodeValue = todoItem;
    btn.innerHTML = 'add';
    btn.setAttribute('onClick', 'addTodo()');
    todoItem = undefined;
    todo.value = '';
}
