var $ = function (id) {
    "use strict";
    return window.document.getElementById(id);
}

// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
var form = $("addForm");
var table = $("employees");

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
var empCount = 0;

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();

    // GET THE VALUES FROM THE TEXT BOXES
    var employeeId = document.getElementById('id').value;
    var name = document.getElementById('name').value;
    var extension = document.getElementById('extension').value;
    var email = document.getElementById('email').value;
    var department = document.getElementById('department').value;
    
    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    var row = table.insertRow();

    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    var employeeIdCell = row.insertCell();
    var nameCell = row.insertCell();
    var extensionCell = row.insertCell();
    var emailCell = row.insertCell();
    var deptartmentCell = row.insertCell();
    var deleteCell = row.insertCell();

    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    employeeIdCell.appendChild(window.document.createTextNode(employeeId));
    nameCell.appendChild(window.document.createTextNode(name));
    extensionCell.appendChild(window.document.createTextNode(extension));
    emailCell.appendChild(window.document.createTextNode(email));
    deptartmentCell.appendChild(window.document.createTextNode(department));

    // CREATE THE DELETE BUTTON
    var deleteButton = window.document.createElement("button");
    deleteButton.appendChild(window.document.createTextNode("X"));
    deleteCell.appendChild(deleteButton);
    deleteButton.addEventListener("click", deleteEmployee);

    // RESET THE FORM
    form.reset();

    // SET FOCUS BACK TO THE ID TEXT BOX
    $("id").focus();

    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    empCount += 1;
    out = $("empCount");
    out.textContent = "(" + empCount + ")";
});

// DELETE EMPLOYEE
var deleteEmployee = (e) => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
        var index = e.target.parentNode.parentNode.rowIndex;
        $("employees").deleteRow(index);
        --empCount;
        $("empCount").textContent = "(" + empCount + ")";
    }
};