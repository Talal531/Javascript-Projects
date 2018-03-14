var myInput = document.getElementById('myInput');
var unorderList = document.getElementById('unorderList');
var addBtn = document.getElementById('addBtn');
var deleteBtn = document.getElementById('deleteBtn');
var editItem;

function validate() {
    if (myInput.value == "") {
        alert("please write something");
        myInput.focus();
    } else {
        addItem();
    }
}


function addItem() {
    myInput.focus();
    //create and append input in list
    var newLiEl = document.createElement('li');
    var newLiTxt = document.createTextNode(myInput.value);
    newLiEl.appendChild(newLiTxt);

    // console.log(newLiEl);
    //================================================
    //===============================================
    var editBtn = document.createElement('button');
    var editBtnTxt = document.createTextNode('Edit');
    editBtn.appendChild(editBtnTxt);

    // console.log(editBtn)
    //===============================================
    //===========================================
    var removeBtn = document.createElement('button');
    var removeBtnTxt = document.createTextNode('Remove');
    removeBtn.appendChild(removeBtnTxt);

    // console.log(removeBtn);
    //==============================================
    //=========================================

    newLiEl.appendChild(editBtn);
    newLiEl.appendChild(removeBtn);
    ////////////////////////
    unorderList.appendChild(newLiEl);


    // console.log(unorderList);
    // unorderList.appendChild(editBtn);
    // unorderList.appendChild(removeBtn);

    //========================================
    // add bootstrap classes
    ///////////////////////////////////////
    newLiEl.className = "list-group-item";
    ///////////////////////////////////////
    editBtn.className = "btn";
    editBtn.className += " btn-info";
    editBtn.className += " btninfo";
    editBtn.setAttribute('onClick', 'edit(this.parentNode)');
    //////////////////////////////////////
    removeBtn.className = "btn";
    removeBtn.className += " btn-danger";
    removeBtn.className += " btndanger";
    removeBtn.setAttribute('onclick', 'remove(this.parentNode)');
    //////////////////////////////////////
    myInput.value = "";
    /////////////////////////////////////

}

// console.log(unorderList.children.length)

function deleteAll() {
    if (unorderList.children.length == 0) {
        alert("you have nothing to delete");
        myInput.focus();
    } else {
        var confm = confirm("Do you really want to delete all list?");
        if (confm) {
            unorderList.innerHTML = "";
            myInput.focus();
            return;
        } else {
            myInput.focus();
        }
    }
    // console.log(unorderList)

}
//////////////////////////////////////

function remove(itemToDelete) {
    unorderList.removeChild(itemToDelete);
    myInput.focus();
}

function edit(itemToEdit) {
    editItem = itemToEdit.childNodes[0];
    myInput.value = itemToEdit.childNodes[0].nodeValue;
    addBtn.innerHTML = 'Save';
    myInput.focus();
    addBtn.setAttribute('onClick', 'save()');
}

function save() {
    var todoItem = myInput.value;
    editItem.nodeValue = todoItem;

    addBtn.innerHTML = "Add";
    addBtn.setAttribute('onClick', 'validate()');
    myInput.focus();
    todoItem = undefined;
    myInput.value = "";
}

function finishTask() {

}