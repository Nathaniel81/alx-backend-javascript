const getListStudents = require('./0-get_list_students.js');

function getListStudentIds(arr) {
	if (Array.isArray(arr)){
		const newArr = arr.map((val) => {
			return val.id;
		})
		return newArr;
	}
	return [];
}

console.log(getListStudentIds("hello"));
console.log(getListStudentIds(getListStudents()));