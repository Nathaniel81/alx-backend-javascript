"use strict";
var student1 = {
    firstName: "Bekele",
    lastName: "Chala",
    age: 12,
    location: "Dukem"
};
var student2 = {
    firstName: "Bekelech",
    lastName: "Chane",
    age: 12,
    location: "Sululta"
};
var studentList = [student1, student2];
var table = document.createElement('table');
document.body.appendChild(table);
studentList.forEach(function (student) {
    var row = table.insertRow();
    var cell1 = row.insertCell();
    var cell2 = row.insertCell();
    cell1.innerHTML = student.firstName;
    cell2.innerHTML = student.location;
});
