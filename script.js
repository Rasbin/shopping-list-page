

function handler(e) {
    var td = e.target.parentElement;
    var box = td.parentElement;

    /* Moving the row to the Done List */
    var secondTable = document.getElementById('done-list');
    secondTable.appendChild(box);
    box.style.textDecoration = "line-through";
    undoList()

}

function addHandler(e) {

    var addForm = e.target.parentElement;
    var item = addForm.firstElementChild.value;
    var quantity = addForm.firstElementChild.nextElementSibling.value;
    //Creating a tr
    var tr = document.createElement("tr");
    var td0 = document.createElement("td");
    var check = document.createElement("input");
    check.type="checkbox";
    td0.appendChild(check);
    var td1 = document.createElement("td");
    td1.innerHTML = item;
    var td2 = document.createElement("td");
    td2.innerHTML = quantity;
    var td3 = document.createElement("td");
    var span = document.createElement("span");
    span.textContent = "X";
    td3.appendChild(span);
    tr.appendChild(td0);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);

    /* Moving the row to the Done List */
    var firstTable = document.getElementById('to-do-list');
    firstTable.appendChild(tr);

    check.addEventListener('click', handler)
    span.addEventListener('click', (e)=> {
        let deleteicon = e.target.parentElement;
        let box = deleteicon.parentElement;

        box.parentElement.removeChild(box);
    })

}

var moveList = function() {
    var checkmark = document.querySelectorAll('#to-do-list input[type="checkbox"]');

    Array.from(checkmark).forEach((element) => {
        element.addEventListener('click', handler)
    });
} ;
moveList();

var addButton = document.querySelector('#addItem input[type="button"]');

addButton.addEventListener('click', addHandler);



var undoList = function() {
    var checkmark = document.querySelectorAll('#done-list input[type="checkbox"]');

    Array.from(checkmark).forEach((element) => {
        element.addEventListener('click', function foo(e) {

            var td = e.target.parentElement;
            var boxToMove = td.parentElement;
            boxToMove.style.textDecoration = "none";
            console.log(boxToMove);
            /* Moving the row to the First table */
            var firstTable = document.getElementById('to-do-list');
            firstTable.appendChild(boxToMove);
            moveList();
        })
    });
} ;

undoList();

var deleteList = function() {
    var cross = document.querySelectorAll('#to-do-list span');

    Array.from(cross).forEach((element) => {
        element.addEventListener('click', (e)=> {
            let deleteicon = e.target.parentElement;
            let box = deleteicon.parentElement;

            box.parentElement.removeChild(box);
        })
    });
} ;

deleteList();
