interface Teacher {
	readonly firstName: string,
	readonly lastName: string,
	readonly fullTimeEmployee: boolean,
	readonly yearsOfExperience?: number,
	readonly location: string,
	[key: string]: any
}

interface Directors extends Teacher {
	numberOfReports: number;
}

const teacher3: Teacher = {
	firstName: 'John',
	fullTimeEmployee: false,
	lastName: 'Doe',
	location: 'London',
	contract: false,
  };

const director1: Directors = {
	firstName: 'Bekele',
	lastName: 'Chala',
	fullTimeEmployee: true,
	location: 'Lemi Kura',
	numberOfReports: 456
};

interface printTeacherFunction {
	(firstName: string, lastName: string): string;
}

function printTeacher(firstName: string, lastName: string): string {
	return `${firstName[0]}.${lastName}`;
}