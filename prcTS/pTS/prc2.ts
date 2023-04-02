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

interface IStudent {
	firstName: string,
	lastName: string
}

interface IStudentClass {
	workOnHomework(): string,
	displayName(): string
}

interface IStudentClassConstructor {
	new (firstName: string, lastName: string): IStudentClass;
}

class StudentClass implements IStudentClass {
	private readonly firstName: string;
	private readonly lastName: string;
	constructor(student: IStudent) {
		this.firstName = student.firstName;	
		this.lastName = student.lastName;
	}
	public workOnHomework() {
		return 'Currently working';
	}
	public displayName() {
		return `${this.firstName}`;
	}
}

function createStudent(con: IStudentClassConstructor, firstName: string, lastName: string) {
	return new con(firstName, lastName);
}
