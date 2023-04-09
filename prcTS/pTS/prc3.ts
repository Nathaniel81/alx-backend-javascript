interface DirectorInterface {
	workFromHome(): string,
	getCoffeeBreak(): string,
	workDirectorTasks(): string
};

interface TeacherInterface {
	workFromHome(): string,
	getCoffeeBreak(): string,
	workTeacherTasks(): string
};

class Director implements DirectorInterface {
	workFromHome(): string {
		return 'Working from home';
	}
	// getToWork(): string {
	getCoffeeBreak(): string {
		return 'Getting a coffee break';
	}
	// }
	workDirectorTasks(): string {
		return 'Getting to director tasks';
	}
}

class Teacher implements TeacherInterface {
	workFromHome(): string {
		return 'Cannot work from home';
	}
	getCoffeeBreak(): string {			
		return 'Cannot have a break';
	}
	workTeacherTasks(): string {
		return 'Getting to work';
	}
}

function createEmployee(salary: number | string): Director | Teacher {
	if (typeof salary === 'number' && salary < 500)	{
		return new Teacher();
	}
	return new Director();
}

function isDirector(employee: Teacher | Director): boolean {
	return employee instanceof Director;
}

function executeWork(employee: Teacher | Director) {// Only access properties or methods that are common to both types
	// This is because the function can accept objects of either type, and TypeScript only allows you to access properties or methods that are guaranteed to be present on all possible types in the union

	//Telling TypeScript to treat the employee object as if it is an instance of Director or Teacher, respectively, regardless of the declared union type (Teacher | Director).
	if (isDirector(employee)) {
		return (employee as Director).workDirectorTasks();
	} else {
		return (employee as Teacher).workTeacherTasks();
	}
}

type Subjects = 'Math' | 'History';

function teachClass(todayClass: Subjects): string {
	if (todayClass === 'Math') {
		return 'Teaching Math';
	}
	return 'Teaching History';
}
