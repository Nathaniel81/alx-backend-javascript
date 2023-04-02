interface Student {
	firstName: string,
	lastName: string,
	age: number,
	location: string
}

const student1: Student = {
	firstName: "Bekele",
	lastName: "Chala",
	age: 12,
	location: "Dukem"
}
const student2: Student = {
	firstName: "Bekelech",
	lastName: "Chane",
	age: 12,
	location: "Sululta"
}

const studentList: Student[] = [student1, student2];

const table = document.createElement('table');

document.body.appendChild(table);

studentList.forEach((student) => {
	const row = table.insertRow();
	const cell1 = row.insertCell();
	const cell2 = row.insertCell();

	cell1.innerHTML = student.firstName;
	cell2.innerHTML = student.location;
});
