const getListStudents = require('./0-get_list_students')


function updateStudentGradeByCity(students, city, newGrades) {
	return students.filter(student => student.location === city)
		   .map(student => {
				const newGradeObj = newGrades.find(grade => grade.studentId === student.id);
				const newGrade = newGradeObj ? newGradeObj.grade : 'N/A';
				 return { ...student, grade: newGrade };
			});
	  }

console.log(updateStudentGradeByCity(getListStudents(), "San Francisco", [{ studentId: 5, grade: 97 }, { studentId: 1, grade: 86 }]));

console.log(updateStudentGradeByCity(getListStudents(), "San Francisco", [{ studentId: 5, grade: 97 }]));
