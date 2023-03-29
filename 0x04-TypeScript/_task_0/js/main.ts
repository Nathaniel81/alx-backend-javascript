interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
  }
  
  const student1: Student = {
	firstName: "John",
	lastName: "Doe",
	age: 21,
	location: "New York",
  };
  
  const student2: Student = {
	firstName: "Jane",
	lastName: "Smith",
	age: 19,
	location: "Los Angeles",
  };
  
  const studentsList: Student[] = [student1, student2];
  
  const table = document.createElement("table");
  document.body.appendChild(table);
  
  studentsList.forEach((student) => {
	const row = document.createElement("tr");
  
	const firstNameCell = document.createElement("td");
	firstNameCell.textContent = student.firstName;
	row.appendChild(firstNameCell);
  
	const locationCell = document.createElement("td");
	locationCell.textContent = student.location;
	row.appendChild(locationCell);
  
	table.appendChild(row);
  });
  