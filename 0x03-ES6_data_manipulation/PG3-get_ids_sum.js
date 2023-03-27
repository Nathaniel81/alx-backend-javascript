const getListStudents = require('./PG_0-get_list_students')

function getStudentIdsSum(o) {
	const ids = o.map(i => i.id)
	return redval = ids.reduce((accumulator, currVal) => accumulator + currVal, 0);
	// return o.reduce((accumulator, currentValue) => accumulator + currentValue.id, 0);
}

const students = getListStudents();
const value = getStudentIdsSum(students);

console.log(value);