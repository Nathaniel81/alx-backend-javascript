var student1 = {
    firstName: "John",
    lastName: "Doe",
    age: 21,
    location: "New York",
};
var student2 = {
    firstName: "Jane",
    lastName: "Smith",
    age: 19,
    location: "Los Angeles",
};
var studentsList = [student1, student2];
var table = document.createElement("table");
document.body.appendChild(table);
studentsList.forEach(function (student) {
    var row = document.createElement("tr");
    var firstNameCell = document.createElement("td");
    firstNameCell.textContent = student.firstName;
    row.appendChild(firstNameCell);
    var locationCell = document.createElement("td");
    locationCell.textContent = student.location;
    row.appendChild(locationCell);
    table.appendChild(row);
});
//# sourceMappingURL=main.js.map