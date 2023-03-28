const getListStudents = require('./0-get_list_students')

function getStudentsByLocation(listOfStd, city) {
	// const filteredArray = listOfStd.filter((o) => {
	// 	return o.location === city;
	// })
	// return filteredArray;
	return listOfStd.filter(o => o.location === city)
}

const students = getListStudents();

console.log(getStudentsByLocation(students, 'San Francisco'));